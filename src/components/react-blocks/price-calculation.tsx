import { BorderBeam } from "@/components/ui/border-beam"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react"
import { useState } from "react"

// Define types for the add-ons
type Addon = {
  id: string
  label: string
  price: number
}

export function PriceCalculation() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const basePrice = 100
  const baseHours = 1

  // Array of add-ons with their price and labels
  const addons: Addon[] = [
    { id: "wireframing", label: "Wireframing", price: 100 },
    { id: "highFidelity", label: "High Fidelity Design", price: 250 },
    { id: "coding", label: "Custom Coding", price: 1000 }
  ]

  // Base package features
  const baseFeatures: string[] = [
    "Analyse User Experience",
    "Steps to optimize user engangement",
    "Following design principles",
    "Recommendations for interactiveness"
  ]

  // Calculate total price including selected add-ons
  const totalPrice =
    basePrice +
    addons
      .filter((addon) => selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0)

  // Toggle the selected add-ons
  const toggleAddon = (addonId: string) => {
    setSelectedAddons((current) =>
      current.includes(addonId) ? current.filter((id) => id !== addonId) : [...current, addonId]
    )
  }

  return (
    <div className="relative mx-auto grid max-w-md grid-cols-1 overflow-hidden rounded-lg lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-2">
      <Card className="col-span-1 rounded-none border-none bg-slate-950 text-white">
        <CardHeader className="p-8">
          <CardTitle>Website site audit & action plan</CardTitle>
          <CardDescription className="text-slate-400">
            {baseHours} hour of export consulting
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 py-0 pb-8">
          <div className="flex gap-2">
            <h3 className="mb-4 text-4xl font-bold">${basePrice}</h3>
            <div className="text-sm leading-5">
              <p className="text-slate-50">USD</p>
              <p className="text-gray-400">One time</p>
            </div>
          </div>

          <div className="mb-6 space-y-2">
            {baseFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-1 rounded-none border-none bg-slate-700 text-white">
        <CardHeader>
          <CardTitle>Available Add-ons</CardTitle>
          <CardDescription>Customize your package with relevant add-ons.</CardDescription>
        </CardHeader>
        <CardContent>
          {addons.map((addon) => (
            <div key={addon.id} className="flex items-start space-x-2">
              <Checkbox
                id={addon.id}
                checked={selectedAddons.includes(addon.id)}
                onCheckedChange={() => toggleAddon(addon.id)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor={addon.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {addon.label}
                </label>
                <p className="text-sm text-gray-500">+${addon.price}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex gap-2">
            <h3 className="mb-4 text-4xl font-bold">${totalPrice}</h3>
            <div className="text-sm leading-5">
              <p className="text-slate-200">USD</p>
              <p className="text-slate-500">One time</p>
            </div>
          </div>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <BorderBeam size={200} borderWidth={2} className="rounded-lg" />
    </div>
  )
}
