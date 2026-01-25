import { readFileSync } from "fs";
import { join } from "path";

interface FeatureFlagsConfig {
  features: {
    stripe?: {
      enabled: boolean;
    };
    [key: string]: { enabled: boolean } | undefined;
  };
}

let cachedConfig: FeatureFlagsConfig | null = null;

/**
 * Read feature flags from config file
 * Caches the result to avoid repeated file reads
 */
function getFeatureFlagsConfig(): FeatureFlagsConfig {
  if (cachedConfig) {
    return cachedConfig;
  }

  try {
    const configPath = join(process.cwd(), "src", "config", "featureFlags.json");
    const fileContent = readFileSync(configPath, "utf-8");
    cachedConfig = JSON.parse(fileContent) as FeatureFlagsConfig;
    return cachedConfig;
  } catch (error) {
    // If config file doesn't exist, return default config (all features enabled)
    console.warn(
      "Feature flags config file not found, using defaults (all features enabled)",
    );
    cachedConfig = {
      features: {
        stripe: { enabled: true },
      },
    };
    return cachedConfig;
  }
}

/**
 * Check if a feature is enabled
 * Priority: Environment variable > Config file > Default (enabled)
 * @param featureName - Name of the feature to check
 * @returns true if feature is enabled, false otherwise
 */
export function isFeatureEnabled(featureName: string): boolean {
  // Check environment variable override first (for client-side compatibility)
  const envKey = `NEXT_PUBLIC_ENABLE_${featureName.toUpperCase()}`;
  const envValue = process.env[envKey];
  if (envValue !== undefined) {
    return envValue === "true" || envValue === "1";
  }

  // Check config file (server-side only)
  if (typeof window === "undefined") {
    const config = getFeatureFlagsConfig();
    const feature = config.features[featureName.toLowerCase()];
    return feature?.enabled ?? true; // Default to enabled if not specified
  }

  // Client-side fallback: check for NEXT_PUBLIC_ prefixed env var
  // This will be available at build time
  return true; // Default to enabled for client-side if no env var
}

/**
 * Check if Stripe payment is enabled
 * @returns true if Stripe is enabled, false otherwise
 */
export function isStripeEnabled(): boolean {
  return isFeatureEnabled("stripe");
}

/**
 * Get all feature flags (server-side only)
 * @returns Object with all feature flags
 */
export function getAllFeatureFlags(): Record<string, boolean> {
  if (typeof window !== "undefined") {
    // Client-side: return empty object or fetch from API
    return {};
  }

  const config = getFeatureFlagsConfig();
  const flags: Record<string, boolean> = {};

  Object.keys(config.features).forEach((key) => {
    const envKey = `NEXT_PUBLIC_ENABLE_${key.toUpperCase()}`;
    const envValue = process.env[envKey];
    if (envValue !== undefined) {
      flags[key] = envValue === "true" || envValue === "1";
    } else {
      flags[key] = config.features[key]?.enabled ?? true;
    }
  });

  return flags;
}

/**
 * Clear the cached config (useful for testing or hot reloading)
 */
export function clearFeatureFlagsCache(): void {
  cachedConfig = null;
}
