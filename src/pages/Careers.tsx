import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Truck, 
  Headphones, 
  Building2, 
  Mail,
  MapPin,
  Clock,
  CheckCircle2
} from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Delivery Rider",
      department: "Operations",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Join our delivery team and help us deliver packages safely and on time across the city.",
      requirements: [
        "Valid UAE driving license",
        "Good knowledge of Dubai roads",
        "Excellent customer service skills",
        "Physical fitness for package handling"
      ]
    },
    {
      title: "Warehouse Staff",
      department: "Operations",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Help manage our warehouse operations, including sorting, packaging, and inventory management.",
      requirements: [
        "Previous warehouse experience preferred",
        "Attention to detail",
        "Ability to work in fast-paced environment",
        "Basic computer skills"
      ]
    },
    {
      title: "Customer Support Representative",
      department: "Customer Service",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Provide excellent customer service and support to our clients through various channels.",
      requirements: [
        "Excellent communication skills",
        "Customer service experience",
        "Multilingual abilities preferred",
        "Problem-solving skills"
      ]
    },
    {
      title: "Operations Manager",
      department: "Management",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Lead and manage our operations team to ensure efficient delivery services.",
      requirements: [
        "Bachelor's degree in relevant field",
        "3+ years management experience",
        "Logistics experience preferred",
        "Strong leadership skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Competitive Salary",
      description: "We offer competitive compensation packages with performance bonuses."
    },
    {
      icon: CheckCircle2,
      title: "Health Insurance",
      description: "Comprehensive health insurance coverage for you and your family."
    },
    {
      icon: CheckCircle2,
      title: "Career Growth",
      description: "Opportunities for professional development and career advancement."
    },
    {
      icon: CheckCircle2,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible working arrangements where possible."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent/20 text-foreground border-accent/30 font-semibold">
            Join Our Team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Be part of a growing logistics company that values its employees and provides opportunities for career growth. We're looking for dedicated individuals to join our team.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore current job opportunities and find the perfect role for your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="card-human p-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {position.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="btn-human w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive benefits package and a supportive work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-human p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How to Apply
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Follow these simple steps to join our team.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Send Your CV</h3>
                <p className="text-muted-foreground">
                  Email your resume and cover letter to careers@shatalarab.ae
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
                <p className="text-muted-foreground">
                  We'll review your application and schedule an initial interview
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
                <p className="text-muted-foreground">
                  Successful candidates will receive an offer and join our team
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Card className="card-human p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-muted-foreground mb-6">
                  Send your CV to careers@shatalarab.ae with the position title in the subject line.
                </p>
                <Button size="lg" className="btn-human">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Your CV
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
