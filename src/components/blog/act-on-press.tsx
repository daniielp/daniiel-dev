import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export function ActOnPress() {
  const [count, setCount] = useState(0)

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="my-0 text-center">Count: {count}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <Button className="flex-1" onMouseDown={() => setCount((prevState) => ++prevState)}>
            On Mouse Down
          </Button>
          <Button className="flex-1" onClick={() => setCount((prevState) => ++prevState)}>
            On Click
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
