import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Smart Resell - AI-Powered Phone Marketplace",
  description:
    "Buy and sell second-hand phones with AI-powered price predictions. Smart Resell makes phone trading effortless and fair.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Header/Navbar */}
          <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <Link className="flex items-center justify-center" href="/">
              <div className="h-8 w-8 bg-smart-primary rounded-lg flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-gray-800" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">Smart Resell</span>
            </Link>
            <nav className="ml-auto flex gap-6 sm:gap-8">
              <Link className="text-sm font-medium hover:text-smart-accent transition-colors" href="/#features">
                Features
              </Link>
              <Link className="text-sm font-medium hover:text-smart-accent transition-colors" href="/#how-it-works">
                How It Works
              </Link>
              <Link className="text-sm font-medium hover:text-smart-accent transition-colors" href="/marketplace">
                Marketplace
              </Link>
              <Link className="text-sm font-medium hover:text-smart-accent transition-colors" href="/about">
                About
              </Link>
            </nav>
            <div className="ml-6 flex gap-3">
              <Button variant="ghost" size="sm" className="hover:bg-smart-primary/10" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button size="sm" className="bg-smart-primary hover:bg-smart-accent text-gray-800 font-semibold" asChild>
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white">
            <div className="container px-4 md:px-6 py-16">
              <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
                {/* Company Info */}
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-smart-primary rounded-lg flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-gray-800" />
                    </div>
                    <span className="ml-2 text-xl font-bold">Smart Resell</span>
                  </div>
                  <p className="text-gray-400 max-w-xs leading-relaxed">
                    The smartest way to buy and sell second-hand phones with AI-powered price predictions and secure
                    transactions.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-smart-primary/20">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-smart-primary/20">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-smart-primary/20">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.876-2.026 1.218-3.323 1.218zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.876-2.026 1.218-3.323 1.218z" />
                      </svg>
                    </Button>
                  </div>
                </div>

                {/* Marketplace */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-smart-primary">Marketplace</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/marketplace" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Browse Phones
                      </Link>
                    </li>
                    <li>
                      <Link href="/sell" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Sell Your Phone
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link href="/brands" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Popular Brands
                      </Link>
                    </li>
                    <li>
                      <Link href="/deals" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Best Deals
                      </Link>
                    </li>
                    <li>
                      <Link href="/new-arrivals" className="text-gray-400 hover:text-smart-primary transition-colors">
                        New Arrivals
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-smart-blue">Support</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/help" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-gray-400 hover:text-smart-primary transition-colors">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/shipping" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Shipping Info
                      </Link>
                    </li>
                    <li>
                      <Link href="/returns" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Returns & Refunds
                      </Link>
                    </li>
                    <li>
                      <Link href="/warranty" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Warranty
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-smart-accent">Company</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/about" className="text-gray-400 hover:text-smart-primary transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/press" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Press
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/investors" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Investors
                      </Link>
                    </li>
                    <li>
                      <Link href="/partnerships" className="text-gray-400 hover:text-smart-primary transition-colors">
                        Partnerships
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-6 text-xs text-gray-400">
                    <Link href="/privacy" className="hover:text-smart-primary transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-smart-primary transition-colors">
                      Terms of Service
                    </Link>
                    <Link href="/cookies" className="hover:text-smart-primary transition-colors">
                      Cookie Policy
                    </Link>
                    <Link href="/security" className="hover:text-smart-primary transition-colors">
                      Security
                    </Link>
                    <Link href="/accessibility" className="hover:text-smart-primary transition-colors">
                      Accessibility
                    </Link>
                  </div>
                  <p className="text-xs text-gray-400">© 2024 Smart Resell. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
