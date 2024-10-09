import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from "react"

function Product() {
  const [pickedValues, setPickedValues] = useState(["marketing"])

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:mt-6">
          Website Starter Kit: Built to Grow with Your Business
        </h1>
        <p className="mt-3 text-base text-slate-600 sm:mt-5">
          Kickstart your online presence with our Website Starter Kit, designed to meet your current
          needs and scale as your business grows. Whether you’re just starting out or planning for
          expansion, this kit offers flexibility and future-proof solutions.
        </p>

        <div className="mt-3">
          <h3>From</h3>
          <h2>1000 DKK</h2>
        </div>
        <div>
          <h4>Addons</h4>
          <ToggleGroup
            className="flex-wrap justify-start"
            value={pickedValues}
            onValueChange={(value) => {
              setPickedValues(value)
            }}
            variant="outline"
            type="multiple"
          >
            <ToggleGroupItem className="flex flex-col items-start" value="shop">
              <strong className="text-sx text-slate-900">E-commerce integration</strong>
              <span className="text-sm text-slate-600">
                Add an online store with product listings and payment processing.
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="flex flex-col items-start" value="cms">
              <strong className="text-sx text-slate-900">Blog</strong>
              <span className="text-sm text-slate-600">Improve search engine visibility</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <aside className="h-full">
        <Card className="h-full">
          <CardHeader>
            <CardDescription>From </CardDescription>
            <CardTitle>$0</CardTitle>
          </CardHeader>
          <CardContent>
            <p>With me you are always garuanteed to get the following:</p>
            <ul>
              <li>Landingpage</li>
              <li>Fast Load Times</li>
              <li>Support</li>
            </ul>
          </CardContent>
        </Card>
      </aside>
    </div>
  )
}

export { Product }
