"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Package, User, Calendar, CheckCircle } from "lucide-react"

// Use the same data generation functions
const generateCustomers = () => {
  const firstNames = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Ethan",
    "Sophia",
    "Mason",
    "Isabella",
    "William",
    "Mia",
    "James",
    "Charlotte",
    "Benjamin",
    "Amelia",
    "Lucas",
    "Harper",
    "Henry",
    "Evelyn",
    "Alexander",
    "Abigail",
    "Michael",
    "Emily",
    "Daniel",
    "Elizabeth",
    "Matthew",
    "Sofia",
    "Anthony",
    "Avery",
    "Jackson",
    "Ella",
    "David",
    "Madison",
    "Andrew",
    "Scarlett",
    "Joshua",
    "Victoria",
    "Christopher",
    "Aria",
    "Gabriel",
    "Grace",
    "Samuel",
    "Chloe",
    "Joseph",
    "Camila",
    "John",
    "Penelope",
    "Owen",
    "Riley",
    "Luke",
    "Layla",
    "Wyatt",
    "Lillian",
    "Carter",
    "Nora",
    "Julian",
    "Zoey",
    "Grayson",
    "Mila",
    "Leo",
  ]

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts",
  ]

  const customers = []

  for (let i = 0; i < 150; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

    let rating = null
    let totalOrders = 0
    let isUnrated = false

    // 30% of customers are unrated (new customers)
    if (i < 45) {
      rating = null
      totalOrders = 0
      isUnrated = true
    } else {
      // Create more realistic rating distribution for rated customers
      const rand = Math.random()
      if (rand < 0.05)
        rating = Math.random() * 1 // 0-1 stars (5%)
      else if (rand < 0.15)
        rating = 1 + Math.random() * 1 // 1-2 stars (10%)
      else if (rand < 0.35)
        rating = 2 + Math.random() * 1 // 2-3 stars (20%)
      else if (rand < 0.65)
        rating = 3 + Math.random() * 1 // 3-4 stars (30%)
      else rating = 4 + Math.random() * 1 // 4-5 stars (35%)

      rating = +rating.toFixed(1)
      totalOrders = Math.floor(Math.random() * 50) + 1
    }

    customers.push({
      id: `customer${i + 1}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      rating,
      totalOrders,
      isUnrated,
      joinDate: new Date(2020 + Math.random() * 4, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
    })
  }

  return customers.sort((a, b) => {
    if (a.isUnrated && !b.isUnrated) return -1
    if (!a.isUnrated && b.isUnrated) return 1
    if (a.isUnrated && b.isUnrated) return 0
    return (b.rating || 0) - (a.rating || 0)
  })
}

const generateProducts = () => {
  const productCategories = {
    fashion: [
      { name: "Designer Leather Jacket", image: "leather-jacket" },
      { name: "Silk Evening Dress", image: "evening-dress" },
      { name: "Cashmere Sweater", image: "cashmere-sweater" },
      { name: "Premium Jeans", image: "premium-jeans" },
      { name: "Luxury Watch", image: "luxury-watch" },
      { name: "Designer Handbag", image: "designer-handbag" },
      { name: "Silk Scarf", image: "silk-scarf" },
      { name: "Leather Boots", image: "leather-boots" },
      { name: "Wool Coat", image: "wool-coat" },
      { name: "Diamond Ring", image: "diamond-ring" },
    ],
    tech: [
      { name: "Wireless Headphones", image: "wireless-headphones" },
      { name: "Smart Phone", image: "smartphone" },
      { name: "Laptop Computer", image: "laptop" },
      { name: "Gaming Console", image: "gaming-console" },
      { name: "Tablet Device", image: "tablet" },
      { name: "Smart Watch", image: "smartwatch" },
      { name: "Bluetooth Speaker", image: "bluetooth-speaker" },
      { name: "Wireless Mouse", image: "wireless-mouse" },
      { name: "Mechanical Keyboard", image: "mechanical-keyboard" },
      { name: "4K Monitor", image: "4k-monitor" },
    ],
    home: [
      { name: "Coffee Maker", image: "coffee-maker" },
      { name: "Vacuum Cleaner", image: "vacuum-cleaner" },
      { name: "Air Purifier", image: "air-purifier" },
      { name: "Smart Thermostat", image: "smart-thermostat" },
      { name: "Kitchen Blender", image: "kitchen-blender" },
      { name: "Stand Mixer", image: "stand-mixer" },
      { name: "Rice Cooker", image: "rice-cooker" },
      { name: "Air Fryer", image: "air-fryer" },
      { name: "Dishwasher", image: "dishwasher" },
      { name: "Microwave Oven", image: "microwave" },
    ],
    sports: [
      { name: "Running Shoes", image: "running-shoes" },
      { name: "Yoga Mat", image: "yoga-mat" },
      { name: "Fitness Tracker", image: "fitness-tracker" },
      { name: "Tennis Racket", image: "tennis-racket" },
      { name: "Basketball", image: "basketball" },
      { name: "Dumbbells", image: "dumbbells" },
      { name: "Exercise Bike", image: "exercise-bike" },
      { name: "Golf Clubs", image: "golf-clubs" },
      { name: "Swimming Goggles", image: "swimming-goggles" },
      { name: "Hiking Backpack", image: "hiking-backpack" },
    ],
    beauty: [
      { name: "Skincare Set", image: "skincare-set" },
      { name: "Makeup Palette", image: "makeup-palette" },
      { name: "Hair Dryer", image: "hair-dryer" },
      { name: "Perfume Bottle", image: "perfume" },
      { name: "Face Mask", image: "face-mask" },
      { name: "Lipstick Set", image: "lipstick-set" },
      { name: "Foundation", image: "foundation" },
      { name: "Hair Straightener", image: "hair-straightener" },
      { name: "Nail Polish Set", image: "nail-polish" },
      { name: "Moisturizer", image: "moisturizer" },
    ],
  }

  const products = []
  let productId = 1

  Object.entries(productCategories).forEach(([category, items]) => {
    items.forEach((item) => {
      for (let i = 0; i < 3; i++) {
        products.push({
          id: productId++,
          name: `${item.name} ${i + 1}`,
          price: Math.floor(Math.random() * 500) + 50,
          stock: Math.floor(Math.random() * 100) + 1,
          category,
          sellerId: `seller${Math.floor(Math.random() * 50) + 1}`,
          minRating: +(Math.random() * 4 + 1).toFixed(1),
          image: `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(item.name)}`,
        })
      }
    })
  })

  return products
}

export default function CustomerShopping() {
  const [customers] = useState(generateCustomers())
  const [products] = useState(generateProducts())
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0])
  const [availableProducts, setAvailableProducts] = useState([])
  const [displayedProductsCount, setDisplayedProductsCount] = useState(12)

  useEffect(() => {
    if (selectedCustomer) {
      let eligible
      if (selectedCustomer.isUnrated) {
        // Unrated customers can see all products
        eligible = products
      } else {
        // Rated customers see products based on their rating
        eligible = products.filter((p) => selectedCustomer.rating >= p.minRating)
      }
      setAvailableProducts(eligible)
    }
  }, [selectedCustomer, products])

  useEffect(() => {
    setDisplayedProductsCount(12)
  }, [selectedCustomer])

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "text-green-600"
    if (rating >= 3.5) return "text-blue-600"
    if (rating >= 2.5) return "text-yellow-600"
    if (rating >= 1.5) return "text-orange-600"
    return "text-red-600"
  }

  const getRatingBadgeColor = (rating) => {
    if (rating >= 4.5) return "bg-green-100 text-green-800"
    if (rating >= 3.5) return "bg-blue-100 text-blue-800"
    if (rating >= 2.5) return "bg-yellow-100 text-yellow-800"
    if (rating >= 1.5) return "bg-orange-100 text-orange-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Shopping</h1>
          <p className="text-gray-600">Browse products and see your eligibility based on your rating</p>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Select Customer Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={selectedCustomer.id}
              onValueChange={(value) => {
                const customer = customers.find((c) => c.id === value)
                if (customer) setSelectedCustomer(customer)
              }}
            >
              <SelectTrigger className="w-full max-w-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {customers.map((customer) => (
                  <SelectItem key={customer.id} value={customer.id}>
                    <div className="flex items-center gap-2">
                      <span>{customer.name}</span>
                      {customer.isUnrated ? (
                        <Badge className="bg-gray-100 text-gray-800">New Customer</Badge>
                      ) : (
                        <Badge className={getRatingBadgeColor(customer.rating)}>{customer.rating} ⭐</Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                {selectedCustomer.isUnrated ? (
                  <>
                    <div className="text-3xl font-bold text-gray-600 mb-2">New</div>
                    <div className="text-sm text-gray-600 font-medium">Customer Status</div>
                    <div className="text-xs text-gray-500 mt-2">Complete purchases to earn your rating</div>
                  </>
                ) : (
                  <>
                    <div className={`text-3xl font-bold mb-2 ${getRatingColor(selectedCustomer.rating)}`}>
                      {selectedCustomer.rating}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Your Rating</div>
                    <div className="flex justify-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= selectedCustomer.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{selectedCustomer.totalOrders}</div>
                <div className="text-sm text-green-800 font-medium">Total Orders</div>
                <div className="text-xs text-green-600 mt-1">Completed purchases</div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-xl font-bold text-purple-600 mb-2">{selectedCustomer.name}</div>
                <div className="text-sm text-purple-800 font-medium">Customer Name</div>
                <div className="text-xs text-purple-600 mt-1 flex items-center justify-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Member since {selectedCustomer.joinDate.getFullYear()}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Available Products
            </CardTitle>
            <CardDescription>Products are filtered based on seller rating requirements</CardDescription>
          </CardHeader>
          <CardContent>
            {availableProducts.length > 0 ? (
              <>
                <div className="mb-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">{availableProducts.length} products available to you</span>
                  </div>
                  {selectedCustomer.isUnrated ? (
                    <p className="text-sm text-green-600 mt-1">
                      As a new customer, you have access to all products! Start shopping to build your rating.
                    </p>
                  ) : (
                    <p className="text-sm text-green-600 mt-1">Based on your {selectedCustomer.rating}⭐ rating</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableProducts.slice(0, displayedProductsCount).map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-green-600">${product.price}</span>
                          <Badge variant="secondary">Stock: {product.stock}</Badge>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-blue-100 text-blue-800">Min: {product.minRating}⭐</Badge>
                          <Badge variant="outline" className="capitalize">
                            {product.category}
                          </Badge>
                        </div>
                        <Button className="w-full bg-gray-800 hover:bg-gray-900">Add to Cart</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {availableProducts.length > displayedProductsCount && (
                  <div className="text-center mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setDisplayedProductsCount((prev) => Math.min(prev + 12, availableProducts.length))}
                      className="px-8 py-2"
                    >
                      Load More Products ({availableProducts.length - displayedProductsCount} remaining)
                    </Button>
                  </div>
                )}

                {displayedProductsCount >= availableProducts.length && availableProducts.length > 12 && (
                  <div className="text-center mt-6">
                    <div className="text-sm text-gray-500 mb-4">All products loaded!</div>
                    <Button variant="outline" onClick={() => setDisplayedProductsCount(12)} className="px-8 py-2">
                      Show Less Products
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No Products Available</h3>
                <p className="text-gray-500">
                  Your current rating of {selectedCustomer.rating}⭐ doesn't meet the minimum requirements for any
                  products.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Complete more orders to improve your rating and unlock more products!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
