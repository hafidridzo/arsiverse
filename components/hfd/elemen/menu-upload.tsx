import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronDownIcon, PlusSquare } from "lucide-react";

export function MenuUpload() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='ghost' className="h-9 p-2">
          <PlusSquare className="mr-2"/>
            Buat
          <ChevronDown 
      className="ml-1.5 w-4 h-4"
      aria-hidden="true"
      />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1.5 mr-5 w-60">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
