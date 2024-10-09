import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { toast, Toaster } from "sonner"

export function ToastFlow() {
  toast("Hihi, I Made You Click Again! 🎩✨", {
    description:
      "See what I did there? With the right tone and a sprinkle of curiosity, you can guide users through your intended journey. It's like leaving a trail of digital breadcrumbs – each interaction should make them wonder 'What's next?' That's how you create memorable experiences!",
    duration: 13000
  })

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => {
          toast(
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-bold">Micro Interactions Is Important! ✨</p>
                <p className="text-xs leading-4">
                  User engagement like this makes websites come alive. It's not just about looking
                  good – it's about creating moments of delight and interaction. That makes the user
                  wants to keep exploring, who knows what other surprises you might find!
                </p>
              </div>
              <Button
                onClick={() =>
                  toast(
                    <div>
                      <p className="text-sm font-bold">Hihi, I Made You Click Again! 🎩✨</p>
                      <p className="text-xs leading-4">
                        See what I did there? With the right tone and a sprinkle of curiosity, you
                        can guide users through your intended journey. It's like leaving a trail of
                        digital breadcrumbs – each interaction should make them wonder 'What's
                        next?' That's how you create memorable experiences!
                      </p>
                    </div>,
                    {
                      duration: 13000
                    }
                  )
                }
              >
                What's This Button Do?
              </Button>
            </div>,
            {
              duration: 12500
            }
          )
        }}
      >
        I'm feeling lucky
      </Button>
      <Toaster closeButton position="bottom-right" />
    </>
  )
}
