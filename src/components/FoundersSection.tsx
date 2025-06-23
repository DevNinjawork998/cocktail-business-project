import React from "react";

const FoundersSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Founders
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Our Foundational
                <br />
                <span className="text-secondary">Ingredients</span>
              </h2>

              <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
                <p>
                  For over a decade, Alex and Marcus have shared a vision of a
                  healthier, more vibrant future. Their quest for a product that
                  combines the artistry of traditional cocktails with modern
                  wellness led them to create a new kind of experience.
                </p>

                <p>
                  Our craft cocktails are delicious, refreshing, and genuinely
                  good for you. We combine the classic cocktail flavors you love
                  with functional ingredients that support your well-being and
                  enhance your social experiences.
                </p>

                <p>
                  Every bottle represents our commitment to quality, innovation,
                  and the belief that exceptional taste and health consciousness
                  can coexist beautifully.
                </p>
              </div>
            </div>

            {/* Founder Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">
                  Alex&apos;s Vision
                </h3>
                <p className="text-sm text-foreground-muted">
                  &quot;Creating cocktails that celebrate life&apos;s moments
                  while nurturing your body.&quot;
                </p>
              </div>
              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-2">
                  Marcus&apos;s Mission
                </h3>
                <p className="text-sm text-foreground-muted">
                  &quot;Bringing premium ingredients and artisanal craftsmanship
                  to everyone.&quot;
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Our Core Values
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">
                    Premium, ethically-sourced ingredients
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">
                    Artisanal craftsmanship in every bottle
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">
                    Sustainable business practices
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">
                    Community-focused approach
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Founders Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Image Container with decorative background */}
              <div className="relative bg-gradient-to-br from-caramel via-mauvelous to-background p-6 rounded-3xl">
                {/* Mock Image Container */}
                <div className="bg-surface rounded-2xl p-8 shadow-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-chocolate-kisses via-mauvelous to-caramel rounded-xl relative overflow-hidden">
                    {/* Mock founders silhouettes */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8">
                      <div className="flex space-x-4">
                        {/* Founder 1 */}
                        <div className="relative">
                          <div className="w-20 h-24 bg-gradient-to-t from-chocolate-kisses to-transparent rounded-t-full opacity-60"></div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                            <div className="w-12 h-3 bg-royal-orange rounded-full mb-1"></div>
                            <div className="text-xs text-white font-medium">
                              ALEX
                            </div>
                          </div>
                        </div>

                        {/* Founder 2 */}
                        <div className="relative">
                          <div className="w-20 h-24 bg-gradient-to-t from-chocolate-kisses to-transparent rounded-t-full opacity-60"></div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                            <div className="w-12 h-3 bg-caramel rounded-full mb-1"></div>
                            <div className="text-xs text-white font-medium">
                              MARCUS
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-caramel rounded-full opacity-40"></div>
                    <div className="absolute top-8 right-6 w-6 h-6 bg-royal-orange rounded-full opacity-30"></div>
                    <div className="absolute bottom-12 left-8 w-4 h-4 bg-mauvelous rounded-full opacity-50"></div>
                  </div>

                  {/* Caption */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-foreground-muted italic">
                      &quot;Building something extraordinary, together.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-caramel rounded-full opacity-10 blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-mauvelous rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Company Stats */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Journey
            </h3>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              From a shared passion to a thriving business, we&apos;ve remained
              committed to our founding principles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2019</div>
              <div className="text-sm text-foreground-muted">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50K+</div>
              <div className="text-sm text-foreground-muted">
                Customers Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">15</div>
              <div className="text-sm text-foreground-muted">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-foreground-muted">
                Organic Ingredients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
