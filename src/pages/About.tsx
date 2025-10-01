import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Shield, Zap, Users } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver on our promises, every time. Our commitment to reliability ensures your packages arrive when and where they're supposed to."
    },
    {
      icon: Zap,
      title: "Speed",
      description: "We understand that time is valuable. Our efficient processes and dedicated team ensure fast delivery without compromising on quality."
    },
    {
      icon: Users,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We provide exceptional customer service and support throughout your delivery experience."
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "We continuously improve our services through technology and innovation, staying ahead of industry standards and customer expectations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Shat Al Arab Express Delivery - Your Trusted Logistics Partner</title>
        <meta name="description" content="Learn about Shat Al Arab Express Delivery's mission, values, and commitment to reliable logistics services in UAE. Discover our story and meet our team." />
        <meta name="keywords" content="about Shat Al Arab, delivery company UAE, logistics team, company mission, delivery values, UAE logistics company" />
        <meta property="og:title" content="About Us | Shat Al Arab Express Delivery - Your Trusted Logistics Partner" />
        <meta property="og:description" content="Learn about Shat Al Arab Express Delivery's mission, values, and commitment to reliable logistics services in UAE." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.vercel.app/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://your-domain.vercel.app/about" />
      </Helmet>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-warm py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent/20 text-foreground border-accent/30 font-semibold">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Delivering Trust, Speed, and Reliability Since Day One
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shat Al Arab Express Delivery was founded with a simple mission: to simplify logistics and provide every customer with fast, secure, and cost-effective delivery services across the Middle East.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Shat Al Arab Express Delivery is a leading logistics company in the Middle East, dedicated to providing fast, reliable, and secure delivery services. We understand that every package matters, whether it's a business document, a personal gift, or an urgent shipment.
                </p>
                <p>
                  Our team of experienced professionals works around the clock to ensure your packages reach their destination safely and on time. We've built our reputation on trust, reliability, and exceptional customer service.
                </p>
                <p>
                  From small local deliveries to large-scale international shipments, we have the expertise and infrastructure to handle all your logistics needs. Our commitment to excellence has made us the preferred choice for businesses and individuals across the region.
                </p>
                <p>
                  We believe in building lasting relationships with our customers, understanding their unique needs, and providing solutions that exceed their expectations. <strong className="text-foreground">Your success is our success.</strong>
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={warehouseImage} 
                alt="Warehouse operations" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="card-human p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent mb-6 animate-gentle-bounce">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To simplify logistics and provide every customer with fast, secure, and cost-effective delivery services. We are committed to excellence in every aspect of our operations, ensuring that your packages are handled with care and delivered on time.
              </p>
            </Card>

            <Card className="card-human p-8 bg-gradient-to-br from-accent/10 to-primary/10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-primary mb-6 animate-gentle-bounce">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be the leading logistics partner in the Middle East, empowering businesses and individuals with seamless delivery solutions. We strive to set the industry standard for reliability, innovation, and customer satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from daily operations to long-term strategic decisions. They define who we are as a company and how we serve our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-human p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 animate-gentle-bounce">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Achievements */}
      <section className="py-20 bg-warm border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our Achievements
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-primary">10K+</div>
              <div className="text-lg text-muted-foreground font-medium">Monthly Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-primary">95%</div>
              <div className="text-lg text-muted-foreground font-medium">On-Time Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-primary">200+</div>
              <div className="text-lg text-muted-foreground font-medium">Business Partners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-primary">24/7</div>
              <div className="text-lg text-muted-foreground font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The People Behind Every Delivery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just a company – we're a family. Meet some of the amazing people who make Shat Al Arab more than just a delivery service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="card-human p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center animate-gentle-bounce">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ahmed Al-Rashid</h3>
              <p className="text-primary font-medium mb-2">Founder & CEO</p>
              <p className="text-muted-foreground text-sm">
                "I started this company because I believe every delivery should bring joy. When I see our customers' faces light up, I know we're doing something right."
              </p>
            </Card>

            <Card className="card-human p-6 text-center bg-gradient-to-br from-accent/10 to-primary/10">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-4 flex items-center justify-center animate-gentle-bounce">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fatima Hassan</h3>
              <p className="text-primary font-medium mb-2">Customer Experience Manager</p>
              <p className="text-muted-foreground text-sm">
                "Every customer call is a chance to make someone's day better. I love hearing their stories and finding ways to exceed their expectations."
              </p>
            </Card>

            <Card className="card-human p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center animate-gentle-bounce">
                <Zap className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mohammed Ali</h3>
              <p className="text-primary font-medium mb-2">Lead Delivery Driver</p>
              <p className="text-muted-foreground text-sm">
                "I've been delivering packages for 5 years, and I still get excited every time I see a customer's smile. That's what makes this job special."
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              And 200+ other amazing team members who work every day to make your deliveries perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4">Community Impact</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              More Than Deliveries – We're Building Community
            </h2>
            <p className="text-xl text-muted-foreground">
              We believe that a great company doesn't just serve customers – it serves the community. Here's how we're making a difference beyond just delivering packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-human p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 animate-gentle-bounce">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Supporting Local Families</h3>
              <p className="text-muted-foreground">
                We partner with local charities to deliver essential items to families in need, from school supplies to emergency food packages.
              </p>
            </Card>

            <Card className="card-human p-6 text-center bg-gradient-to-br from-accent/10 to-primary/10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-4 animate-gentle-bounce">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowering Small Businesses</h3>
              <p className="text-muted-foreground">
                We offer special rates and support for local entrepreneurs, helping them compete with larger companies and grow their dreams.
              </p>
            </Card>

            <Card className="card-human p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 animate-gentle-bounce">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
              <p className="text-muted-foreground">
                During emergencies, we provide free delivery services for medical supplies, food, and other essential items to those who need them most.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability & Future */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Commitment to Excellence</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Partner with Us Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to experience the difference of working with a reliable logistics partner? Join thousands of satisfied customers who trust Shat Al Arab Express Delivery with their most important shipments.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="card-human p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
                <p className="text-muted-foreground">
                  Consistent, on-time delivery with full tracking
                </p>
              </Card>
              <Card className="card-human p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Transparent rates with no hidden fees
                </p>
              </Card>
              <Card className="card-human p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock customer service and assistance
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
