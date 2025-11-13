import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Shield, Smartphone, TrendingUp, Users, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SmartResellLanding() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
        <div className="absolute inset-0 gradient-smart-subtle"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-smart-primary/20 via-transparent to-smart-secondary/10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="w-fit bg-smart-primary/20 text-smart-accent border-smart-primary/30"
                >
                  <Brain className="w-3 h-3 mr-2" />
                  AI-Powered Pricing Engine
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none">
                  Smart Phone Reselling Made{" "}
                  <span className="bg-gradient-to-r from-smart-accent to-smart-secondary bg-clip-text text-transparent">
                    Effortless
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  Buy and sell second-hand phones with confidence. Our advanced machine learning technology predicts
                  accurate prices instantly, ensuring fair deals for everyone in the marketplace.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-smart-primary hover:bg-smart-accent text-gray-800 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link href="/auth/signup">
                    Start Selling Now <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-smart-secondary text-smart-secondary hover:bg-smart-secondary hover:text-white text-lg px-8 py-6 rounded-xl"
                >
                  Browse Phones
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-smart-blue/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-smart-dark-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">15K+</div>
                    <div className="text-gray-600">Active Users</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-smart-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-smart-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">97%</div>
                    <div className="text-gray-600">Accuracy Rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">100%</div>
                    <div className="text-gray-600">Secure Deals</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-smart-primary via-smart-accent to-smart-secondary rounded-2xl blur-3xl opacity-30 scale-110"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-smart-primary/20">
                  <Image
                    alt="Smart Resell Platform Dashboard"
                    className="relative rounded-xl"
                    height="400"
                    src="/placeholder.svg?height=400&width=500"
                    width="500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge variant="secondary" className="bg-smart-secondary/10 text-smart-secondary border-smart-secondary/20">
              Why Choose Smart Resell
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Revolutionary Features</h2>
            <p className="max-w-[900px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Our platform combines cutting-edge AI technology with an intuitive marketplace experience to transform how
              you buy and sell phones.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-smart-primary to-smart-accent"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 bg-smart-primary/20 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-smart-accent" />
                  </div>
                  <CardTitle className="text-xl">AI Price Prediction</CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Our advanced machine learning algorithm analyzes market trends, phone conditions, and thousands of
                  data points to predict accurate prices in real-time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instant price suggestions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">97% accuracy guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Continuously learning AI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-smart-secondary to-smart-blue"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 bg-smart-secondary/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-smart-secondary" />
                  </div>
                  <CardTitle className="text-xl">Secure Marketplace</CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Trade with complete confidence in our verified, secure marketplace designed for safe and transparent
                  transactions between buyers and sellers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Verified seller profiles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Secure payment processing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Buyer protection guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-smart-blue to-smart-primary"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 bg-smart-blue/20 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-smart-dark-blue" />
                  </div>
                  <CardTitle className="text-xl">Effortless Listing</CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  List your phone in under 2 minutes with our streamlined process, automatic detail recognition, and
                  intelligent price optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">One-click photo upload</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Auto-fill phone details</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Optimized for quick sales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge variant="secondary" className="bg-smart-primary/10 text-smart-accent border-smart-primary/20">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Get started in three simple steps and experience the future of phone reselling with AI-powered precision.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-6 text-center group">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-smart-primary to-smart-accent text-gray-800 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-smart-primary to-smart-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Upload Your Phone</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                Simply take a few photos of your phone and enter basic details. Our AI will automatically detect the
                model and condition.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-6 text-center group">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-smart-secondary to-smart-blue text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-smart-secondary to-smart-blue rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Get AI Price Prediction</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                Our machine learning algorithm instantly analyzes your phone and market data to suggest the optimal
                selling price.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-6 text-center group">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-smart-accent to-smart-primary text-gray-800 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-smart-accent to-smart-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Sell or Buy Instantly</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                List your phone for sale or browse available devices with confidence in fair, AI-verified pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-smart-primary/10 via-white to-smart-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-smart-accent to-smart-secondary bg-clip-text text-transparent">
                15K+
              </div>
              <div className="text-gray-600 font-medium">Happy Users</div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-smart-secondary to-smart-blue bg-clip-text text-transparent">
                75K+
              </div>
              <div className="text-gray-600 font-medium">Phones Sold</div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-smart-primary to-smart-accent bg-clip-text text-transparent">
                97%
              </div>
              <div className="text-gray-600 font-medium">Price Accuracy</div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-smart-blue to-smart-primary bg-clip-text text-transparent">
                4.9★
              </div>
              <div className="text-gray-600 font-medium">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-smart-secondary via-smart-dark-blue to-smart-secondary"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Ready to Start Smart Reselling?</h2>
              <p className="max-w-[700px] text-white/90 text-lg md:text-xl leading-relaxed">
                Join thousands of users who trust Smart Resell for fair, AI-powered phone transactions. Start buying and
                selling with confidence today.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-smart-primary hover:bg-smart-accent text-gray-800 font-semibold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/auth/signup">
                  Start Selling Now <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-smart-secondary text-lg px-10 py-6 rounded-xl"
              >
                Browse Phones
              </Button>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star className="w-5 h-5 fill-smart-primary text-smart-primary" />
              <Star className="w-5 h-5 fill-smart-primary text-smart-primary" />
              <Star className="w-5 h-5 fill-smart-primary text-smart-primary" />
              <Star className="w-5 h-5 fill-smart-primary text-smart-primary" />
              <Star className="w-5 h-5 fill-smart-primary text-smart-primary" />
              <span className="ml-2">Trusted by 15,000+ users</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
