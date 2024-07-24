import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function ActOnPress() {
  const [count, setCount] = useState(0);

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-center my-0">Count: {count}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            className="flex-1"
            onMouseDown={() => setCount((prevState) => ++prevState)}
          >
            On Mouse Down
          </Button>
          <Button
            className="flex-1"
            onClick={() => setCount((prevState) => ++prevState)}
          >
            On Click
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
