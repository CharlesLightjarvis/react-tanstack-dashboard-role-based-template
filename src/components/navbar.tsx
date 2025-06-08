import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

export const Navbar = () => {
  //   const { toggleSidebar } = useSidebar();
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between p-4
                 backdrop-blur-md bg-white/70 dark:bg-zinc-900/60 border-b"
    >
      {/* left side */}
      <SidebarTrigger />

      {/* custom sidebar trigger togglesidebar function come from ui/sidebar */}
      {/* <Button variant="outline" onClick={toggleSidebar}>
        Close sidebar
      </Button> */}

      {/* right side */}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-lg font-bold">
          Home
        </Link>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="hover:cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Billing
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
