import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Users, MapPin } from "lucide-react";

const packages = [
  {
    name: "Day Trip Explorer",
    price: "KES 8,500",
    duration: "1 Day",
    groupSize: "2-6 people",
    features: [
      "Lake Nakuru National Park visit",
      "Professional guide",
      "Transport in 4x4 safari vehicle",
      "Packed lunch & water",
      "Park entrance fees",
    ],
    popular: false,
  },
  {
    name: "Weekend Safari",
    price: "KES 25,000",
    duration: "2 Days, 1 Night",
    groupSize: "2-8 people",
    features: [
      "Lake Nakuru & Menengai Crater",
      "Mid-range accommodation",
      "All meals included",
      "Professional safari guide",
      "Game drives",
      "Cultural village visit",
    ],
    popular: true,
  },
  {
    name: "Ultimate Kenya",
    price: "KES 95,000",
    duration: "5 Days, 4 Nights",
    groupSize: "2-6 people",
    features: [
      "Nakuru, Naivasha & Maasai Mara",
      "Luxury lodge accommodation",
      "All meals & premium drinks",
      "Multiple game drives",
      "Hot air balloon safari",
      "Cultural experiences",
      "Airport transfers",
    ],
    popular: false,
  },
];

const TourPackages = () => {
  return (
    <section id="packages" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            <Calendar className="w-4 h-4" />
            Tour Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground">
            Carefully crafted packages to suit every traveler’s needs and budget
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
                pkg.popular
                  ? "border-primary shadow-lg ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#FFD700] text-white px-4 py-1 text-xs font-semibold rounded-bl-lg shadow-md">
                  Most Popular
                </div>
              )}

              <CardHeader className="space-y-4 pb-4">
                <CardTitle className="text-2xl font-bold">
                  {pkg.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      per person
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full transition-all ${
                    pkg.popular
                      ? "bg-[#D4AF37] hover:opacity-90"
                      : "hover:border-primary hover:text-primary"
                  }`}
                >
                  Book This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Packages CTA */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-600 to-primary text-white border-0 rounded-2xl shadow-lg">
            <CardContent className="p-10 space-y-6">
              <MapPin className="w-12 h-12 mx-auto opacity-90" />
              <h3 className="text-2xl font-bold">
                Need a Custom Package?
              </h3>
              <p className="text-white/90 leading-relaxed">
                We can create a personalized itinerary tailored to your
                interests, budget, and schedule. Let us plan your dream Kenya
                adventure!
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Request Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
