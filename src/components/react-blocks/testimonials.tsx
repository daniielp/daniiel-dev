import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack"
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill"
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john"
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane"
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny"
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james"
  }
]

function Testimonials() {
  return (
    <Marquee pauseOnHover className="[--duration:20s]">
      {testimonials.map(({ body, img, name, username }) => (
        <figure
          key={username}
          className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
            // dark styles
            "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
              <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
      ))}
    </Marquee>
  )
}

export { Testimonials }
