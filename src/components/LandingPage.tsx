import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-caramel via-mauvelous to-royal-orange opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Premium meets
                <br />
                <span className="text-secondary">extraordinary</span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-lg">
                Handcrafted cocktails with premium ingredients. Experience the
                art of mixology delivered to your doorstep.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-secondary hover:bg-bittersweet-shimmer text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-4 bg-surface rounded-lg border border-border-light hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl mb-2">🍸</div>
                <div className="text-sm font-medium text-foreground">
                  Premium Ingredients
                </div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg border border-border-light hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-sm font-medium text-foreground">
                  Fast Delivery
                </div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg border border-border-light hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl mb-2">👨‍🍳</div>
                <div className="text-sm font-medium text-foreground">
                  Expert Mixologists
                </div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg border border-border-light hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl mb-2">⭐</div>
                <div className="text-sm font-medium text-foreground">
                  5-Star Quality
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative z-10">
              {/* Mock Product Image Container */}
              <div className="relative bg-gradient-to-br from-chocolate-kisses via-mauvelous to-royal-orange p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 shadow-inner">
                  {/* Mock Cocktail Bottle/Can */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-b from-caramel to-royal-orange rounded-xl h-64 w-32 mx-auto relative shadow-lg">
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-chocolate-kisses rounded-lg"></div>
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="text-white font-bold text-sm">
                          COCKTAIL
                        </div>
                        <div className="text-white text-xs">PREMIUM</div>
                        <div className="text-white text-xs mt-2">Signature</div>
                        <div className="text-white text-xs">Blend</div>
                      </div>
                    </div>

                    {/* Mock Glass */}
                    <div className="relative mx-auto w-24">
                      <div className="bg-gradient-to-b from-transparent via-caramel to-bittersweet-shimmer rounded-b-full h-32 w-24 border-4 border-gray-300 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bittersweet-shimmer to-royal-orange opacity-80"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-caramel rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-mauvelous rounded-full opacity-40 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-royal-orange rounded-full opacity-50 animate-bounce"></div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-20 left-20 w-32 h-32 bg-caramel rounded-full opacity-10 blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-mauvelous rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Meet the Founders Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="bg-gradient-to-r from-mauvelous via-caramel to-royal-orange opacity-10 rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Meet the Visionaries Behind the Magic
                </h2>
                <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                  Discover the story of Alex and Marcus, two passionate
                  innovators who turned their shared vision of premium cocktails
                  into an extraordinary experience.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <a
                  href="/founders"
                  className="group bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center space-x-2">
                    <span>Meet Our Founders</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Preview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-surface border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-orange to-bittersweet-shimmer rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">
                    Alex&apos;s Vision
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    &quot;Creating cocktails that celebrate life&apos;s moments
                    while nurturing your body.&quot;
                  </p>
                </div>
                <div className="bg-surface border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-caramel to-mauvelous rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">M</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2">
                    Marcus&apos;s Mission
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    &quot;Bringing premium ingredients and artisanal
                    craftsmanship to everyone.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-sm text-foreground-muted">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">200+</div>
            <div className="text-sm text-foreground-muted">
              Cocktail Recipes
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5⭐</div>
            <div className="text-sm text-foreground-muted">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-foreground-muted">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
