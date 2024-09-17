import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Grip,} from "lucide-react";
export function ButtonApps() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="icon2" size="icon" className="h-9 w-9">
                <Grip />
              </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1.5 mr-6 w-60">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <p>
            fghjfgjhg
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
