

import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function ButtonNotif({ className, ...props }: CardProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="icon2" size="icon" className="h-9 w-9">
          <BellRing />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1.5 w-80 p-0">
        <Card className={cn("rounded-sm border-none p-2 m-0", className)} {...props}>
          <CardHeader className="bg-accent rounded-sm border-0 px-4 py-2.5">
            <CardTitle className="text-xl font-bold">Notifikasi</CardTitle>
            <CardDescription >Kamu punya 2 notifikasi baru.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 p-0">
            <div className=" flex items-center space-x-2 rounded-sm border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <p>
          fghjfgjhg
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}