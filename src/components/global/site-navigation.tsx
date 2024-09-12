import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { socials } from "@/config/socials";
import { SocialMediaIcon } from "@/components/global/social-media-icon";

function SiteNavigation() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="gap-2">
          <Menu size="24" />
          <span className="text-base font-semibold">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetPortal>
        {/* <SheetOverlay className="backdrop-blur-sm" /> */}
        <SheetContent className="flex flex-col rounded-md md:inset-y-8 md:right-8 md:h-[calc(100%-4rem)]">
          <SheetHeader className="flex-row items-center justify-between space-y-0">
            <SheetTitle>
              <a href="/">
                <img
                  loading="eager"
                  height={32}
                  width={136}
                  alt="daniiel - Logo dark"
                  src="/logo-light.svg"
                  className="h-8 w-auto"
                />
              </a>
            </SheetTitle>
            <SheetClose asChild className="mt-0">
              <Button variant="outline" size="icon">
                <X size="24" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </SheetHeader>
          <div className="flex-1">
            <ul role="navigation" className="space-y-2 py-8">
              {mainNavigation.map((item) => (
                <li className="flex py-1">
                  <Button
                    className="flex-1 justify-start text-2xl"
                    variant="ghost"
                    asChild
                  >
                    <a className="flex-1 justify-between" href={item.href}>
                      <span>{item.title}</span>
                      <ArrowRight aria-hidden="true" size={24} />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <h3 className="sr-only">Socials</h3>
              <ul role="socials" className="flex items-center gap-4" id="connect-with">
                {socials.map((social) => (
                  <li>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        rel="nofollow"
                        target="_blank"
                        href={social.href}
                        aria-label={social.title}
                      >
                        <span className="sr-only">{social.title}</span>
                        <SocialMediaIcon aria-hidden="true" type={social.type} size={24} />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <SheetFooter className="sm:justify-start">
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} Daniel Pedersen. All rights
              reserved.
            </p>
          </SheetFooter>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
}

export { SiteNavigation };
