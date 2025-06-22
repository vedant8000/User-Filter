"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp } from "lucide-react"

// Generate 50 sellers with realistic data
const generateSellers = () => {
  const sellerNames = [
    "Fashion Hub",
    "Tech Paradise",
    "Home Essentials",
    "Sports World",
    "Beauty Corner",
    "Book Haven",
    "Music Store",
    "Garden Center",
    "Pet Paradise",
    "Toy Kingdom",
    "Electronics Plus",
    "Vintage Finds",
    "Craft Corner",
    "Fitness Pro",
    "Kitchen Magic",
    "Auto Parts",
    "Travel Gear",
    "Office Supplies",
    "Art Studio",
    "Health Store",
    "Jewelry Box",
    "Shoe Palace",
    "Watch World",
    "Bag Boutique",
    "Perfume House",
    "Camera Shop",
    "Gaming Zone",
    "Phone Repair",
    "Laptop Store",
    "Tablet Hub",
    "Smart Home",
    "Outdoor Gear",
    "Camping World",
    "Fishing Pro",
    "Bike Shop",
    "Skateboard Co",
    "Surf Shop",
    "Yoga Studio",
    "Dance Wear",
    "Party Supplies",
    "Wedding Bells",
    "Baby Store",
    "Kids Fashion",
    "Teen Trends",
    "Senior Care",
    "Medical Supply",
    "Pharmacy Plus",
    "Dental Care",
    "Vision Center",
    "Hearing Aid",
  ]

  return sellerNames.map((name, index) => ({
    id: `seller${index + 1}`,
    name,
    email: `${name.toLowerCase().replace(/\s+/g, "")}@example.com`,
    products: Math.floor(Math.random() * 50) + 10,
    avgRating: +(Math.random() * 2 + 3).toFixed(2),
  }))
}

// Generate 150 products with specific images
const generateProducts = () => {
  const productCategories = {
    fashion: [
      { name: "Designer Leather Jacket", image: "leather-jacket" },
      { name: "Silk Evening Dress", image: "evening-dress" },
      { name: "Cashmere Sweater", image: "cashmere-sweater" },
      { name: "Amazon Jeans", image: "Amazon-jeans" },
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

// Generate 120 customers with varied ratings
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

  for (let i = 0; i < 120; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

    // Create more realistic rating distribution
    let rating
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

    customers.push({
      id: `customer${i + 1}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      rating: +rating.toFixed(2),
      totalOrders: Math.floor(Math.random() * 50) + 1,
      joinDate: new Date(2020 + Math.random() * 4, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
    })
  }

  return customers.sort((a, b) => b.rating - a.rating)
}

export default function SellerDashboard() {
  const [sellers] = useState(generateSellers())
  const [products] = useState(generateProducts())
  const [customers] = useState(generateCustomers())
  const [selectedSeller, setSelectedSeller] = useState(sellers[0])
  const [threshold, setThreshold] = useState([4.5])
  const [eligibleCustomers, setEligibleCustomers] = useState(0)
  const [filteredOut, setFilteredOut] = useState(0)
  const [avgCustomerRating, setAvgCustomerRating] = useState(0)

  const sellerProducts = products.filter((p) => p.sellerId === selectedSeller.id)

  useEffect(() => {
    const eligible = customers.filter((c) => c.rating >= threshold[0])
    const filtered = customers.length - eligible.length
    const avgRating = eligible.length > 0 ? eligible.reduce((sum, c) => sum + c.rating, 0) / eligible.length : 0

    setEligibleCustomers(eligible.length)
    setFilteredOut(filtered)
    setAvgCustomerRating(avgRating)
  }, [threshold, customers])

  const eligiblePercentage = Math.round((eligibleCustomers / customers.length) * 100)
  const filteredPercentage = Math.round((filteredOut / customers.length) * 100)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600">Manage your store settings and customer rating thresholds</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Select Seller Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={selectedSeller.id}
              onValueChange={(value) => {
                const seller = sellers.find((s) => s.id === value)
                if (seller) setSelectedSeller(seller)
              }}
            >
              <SelectTrigger className="w-full max-w-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sellers.map((seller) => (
                  <SelectItem key={seller.id} value={seller.id}>
                    {seller.name} ({seller.email})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              Customer Rating Threshold
            </CardTitle>
            <CardDescription>Set the minimum customer rating required to purchase.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Current Threshold: {threshold[0].toFixed(1)}</span>
                <Star className="h-4 w-4 text-yellow-500" />
              </div>
              <Slider value={threshold} onValueChange={setThreshold} max={5} min={0} step={0.1} className="w-full" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0.0</span>
                <span>1.0</span>
                <span>2.0</span>
                <span>3.0</span>
                <span>4.0</span>
                <span>5.0</span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                New Threshold: <strong>{threshold[0].toFixed(1)}</strong> ⭐
              </p>
              <p className="text-xs text-blue-600 mt-1">Only customers ≥ {threshold[0].toFixed(1)} can purchase</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Your Products
            </CardTitle>
            <CardDescription>Products available in your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sellerProducts.slice(0, 5).map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Stock: {product.stock}</Badge>
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>
              ))}
              {sellerProducts.length > 5 && (
                <p className="text-sm text-gray-500 text-center">... and {sellerProducts.length - 5} more products</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Impact Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{eligiblePercentage}%</div>
                <div className="text-sm text-green-800 font-medium">Customers Eligible</div>
                <div className="text-xs text-green-600 mt-1">
                  {eligibleCustomers} out of {customers.length} customers
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{avgCustomerRating.toFixed(2)}</div>
                <div className="text-sm text-blue-800 font-medium">Avg Customer Rating</div>
                <div className="text-xs text-blue-600 mt-1">Among eligible customers</div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{filteredPercentage}%</div>
                <div className="text-sm text-orange-800 font-medium">Filtered Out</div>
                <div className="text-xs text-orange-600 mt-1">{filteredOut} customers below threshold</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
