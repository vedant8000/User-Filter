import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Star, Settings } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Amazon Marketplace</h1>
          <p className="text-xl text-gray-600 mb-8">Where quality sellers meet quality customers</p>
          <div className="flex gap-4 justify-center">
            <Link href="/seller">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Settings className="mr-2 h-5 w-5" />
                Seller Dashboard
              </Button>
            </Link>
            <Link href="/customer">
              <Button size="lg" variant="outline" className="border-gray-300">
                <Star className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <CardTitle>Quality Control</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Sellers can set rating thresholds to ensure they only serve customers who meet their quality standards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <Star className="h-12 w-12 text-yellow-500 mb-4" />
              <CardTitle>Rating System</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive rating system that tracks customer behavior and purchase history for better marketplace
                experience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <Settings className="h-12 w-12 text-green-500 mb-4" />
              <CardTitle>Seller Control</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Full control over who can purchase from your store based on customer ratings and purchase history.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Your Standards</h3>
              <p className="text-gray-600">Sellers define minimum customer rating requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
              <p className="text-gray-600">Products are automatically filtered based on customer eligibility</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Transactions</h3>
              <p className="text-gray-600">Both parties enjoy higher quality marketplace interactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
