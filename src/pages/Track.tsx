import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Package, MapPin, Truck, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }
    setIsTracking(true);
    // Simulate API call
    setTimeout(() => {
      toast.info("Tracking system will be connected soon. Please contact support for real-time updates.");
      setIsTracking(false);
    }, 1000);
  };

  const trackingSteps = [
    {
      icon: Package,
      title: "Order Received",
      description: "Your shipment has been registered",
      status: "completed"
    },
    {
      icon: Truck,
      title: "In Transit",
      description: "Package is on the way",
      status: "current"
    },
    {
      icon: MapPin,
      title: "Out for Delivery",
      description: "Package will arrive soon",
      status: "pending"
    },
    {
      icon: CheckCircle2,
      title: "Delivered",
      description: "Package successfully delivered",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent/20 text-foreground border-accent/30 font-semibold">
            Track Your Shipment
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Track Your Shipment in Real-Time
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enter your tracking number below to get instant updates. Need help? Contact our support team anytime.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 shadow-lg">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label htmlFor="tracking" className="block text-sm font-medium mb-2">
                  Tracking Number
                </label>
                <div className="flex gap-2">
                  <Input
                    id="tracking"
                    type="text"
                    placeholder="Enter your tracking number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isTracking} className="px-8">
                    {isTracking ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Tracking...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        Track
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Tracking Number Format:</strong> Typically 10-15 alphanumeric characters
                  (e.g., SAE123456789UAE)
                </p>
              </div>
            </form>
          </Card>

          {/* Sample Tracking Timeline */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Real-Time Tracking Updates
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-6">
                {trackingSteps.map((step, index) => (
                  <Card
                    key={index}
                    className={`p-6 md:ml-20 relative ${
                      step.status === "completed"
                        ? "bg-primary/5 border-primary/20"
                        : step.status === "current"
                        ? "bg-accent/5 border-accent/30"
                        : "bg-muted/30"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[4.5rem] top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full ${
                        step.status === "completed"
                          ? "bg-primary text-primary-foreground"
                          : step.status === "current"
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <step.icon className="h-8 w-8" />
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground flex-shrink-0">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          {step.status === "completed" && (
                            <Badge className="bg-primary">Completed</Badge>
                          )}
                          {step.status === "current" && (
                            <Badge className="bg-accent">In Progress</Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any tracking or delivery questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              WhatsApp Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Track;
