"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Smartphone, Mail, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsEmailSent(true)
  }

  if (isEmailSent) {
    return (
      <div className="py-16 bg-gradient-to-br from-smart-primary/10 via-white to-smart-secondary/5 flex items-center justify-center p-4 min-h-[calc(100vh-8rem)]">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 bg-smart-primary rounded-xl flex items-center justify-center">
                <Smartphone className="h-7 w-7 text-gray-800" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-800">Smart Resell</span>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Check your email</CardTitle>
              <CardDescription>
                We've sent a password reset link to <strong>{email}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center text-sm text-gray-600 space-y-2">
                <p>Didn't receive the email? Check your spam folder or</p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-smart-secondary hover:text-smart-accent"
                  onClick={() => setIsEmailSent(false)}
                >
                  try again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gradient-to-br from-smart-primary/10 via-white to-smart-secondary/5 flex items-center justify-center p-4 min-h-[calc(100vh-8rem)]">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 bg-smart-primary rounded-xl flex items-center justify-center">
              <Smartphone className="h-7 w-7 text-gray-800" />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-800">Smart Resell</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Forgot your password?</h1>
          <p className="text-gray-600 mt-2">No worries, we'll send you reset instructions</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 h-16 w-16 bg-smart-blue/20 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-smart-dark-blue" />
            </div>
            <CardTitle className="text-xl">Reset Password</CardTitle>
            <CardDescription>Enter your email address and we'll send you a link to reset your password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="h-11"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-smart-primary hover:bg-smart-accent text-gray-800 font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>

            <div className="text-center text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/auth/signin"
                className="text-smart-secondary hover:text-smart-accent font-semibold transition-colors"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
