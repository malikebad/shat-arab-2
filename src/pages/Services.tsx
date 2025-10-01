import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { 
  Clock, 
  Package, 
  Globe, 
  Building2, 
  DollarSign,
  Shield,
  FileText,
  Snowflake,
  Headphones,
  CheckCircle2
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Fast, local deliveries made within hours – perfect for urgent packages.",
      features: [
        "Delivery within 3-6 hours",
        "Available in all major UAE cities",
        "Real-time tracking",
        "Priority handling"
      ]
    },
    {
      icon: Package,
      title: "Domestic Delivery",
      description: "Nationwide coverage with affordable pricing and reliable service.",
      features: [
        "Next-day delivery options",
        "Competitive pricing",
        "Bulk shipment discounts",
        "Flexible pickup schedules"
      ]
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Connecting your parcels globally with trusted international partners.",
      features: [
        "Customs clearance assistance",
        "Express international options",
        "Package consolidation",
        "Duty and tax calculation"
      ]
    },
    {
      icon: Building2,
      title: "E-Commerce Fulfillment",
      description: "Warehousing, packaging, and last-mile delivery tailored for online stores.",
      features: [
        "Warehouse storage",
        "Pick and pack services",
        "Returns management",
        "Integration with major platforms"
      ]
    },
    {
      icon: DollarSign,
      title: "Cash on Delivery (COD) Solutions",
      description: "Ideal for e-commerce businesses – collect payments at the customer's doorstep.",
      features: [
        "Fast payment processing",
        "Secure cash handling",
        "Detailed transaction reports",
        "Low COD fees"
      ]
    },
    {
      icon: FileText,
      title: "Corporate Logistics",
      description: "Customized delivery solutions for businesses, documents, and bulk shipments.",
      features: [
        "Dedicated account manager",
        "Volume-based pricing",
        "Priority support",
        "Scheduled pickups"
      ]
    },
    {
      icon: Snowflake,
      title: "Special Handling",
      description: "Expert care for fragile, high-value, or temperature-sensitive items.",
      features: [
        "Climate-controlled transport",
        "Extra packaging protection",
        "Insurance coverage",
        "White-glove service"
      ]
    },
    {
      icon: Headphones,
      title: "Tracking & Support",
      description: "Real-time parcel tracking with 24/7 customer support.",
      features: [
        "Live tracking portal",
        "SMS/Email notifications",
        "WhatsApp support",
        "Multi-language assistance"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Delivery Services UAE | Same-Day, International & E-Commerce Fulfillment</title>
        <meta name="description" content="Comprehensive delivery services in UAE: same-day delivery, international shipping, e-commerce fulfillment, COD solutions, and corporate logistics. Get your free quote!" />
        <meta name="keywords" content="delivery services UAE, same day delivery Dubai, international shipping UAE, e-commerce fulfillment, COD delivery, corporate logistics, parcel delivery" />
        <meta property="og:title" content="Delivery Services UAE | Same-Day, International & E-Commerce Fulfillment" />
        <meta property="og:description" content="Comprehensive delivery services in UAE: same-day delivery, international shipping, e-commerce fulfillment, COD solutions, and corporate logistics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.vercel.app/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://your-domain.vercel.app/services" />
      </Helmet>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent/20 text-foreground border-accent/30 font-semibold">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Comprehensive Delivery Solutions for Every Need
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From same-day delivery to international shipping, we provide comprehensive logistics services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all border-2 hover:border-primary/20 bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary shadow-md">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose Our Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
                <p className="text-muted-foreground">
                  Every shipment is protected with comprehensive insurance coverage
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">On-Time Guarantee</h3>
                <p className="text-muted-foreground">
                  95% on-time delivery rate across all services
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  No hidden fees, clear pricing structure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background border-y">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get a free consultation and discover how our services can transform your logistics.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="accent" className="px-8 py-6">
              Get a Free Logistics Consultation
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;
