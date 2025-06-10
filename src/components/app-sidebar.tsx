import {
  AudioWaveform,
  Bell,
  Calendar,
  ChevronDown,
  Command,
  GalleryVerticalEnd,
  HelpCircleIcon,
  Home,
  Inbox,
  Plus,
  Search,
  SearchIcon,
  Section,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { NavUser } from "./nav-user";
import { NavHeader } from "./nav-header";
import { NavSecondary } from "./nav-secondary";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: Settings,
  },
];

const helpItems = [
  {
    title: "Get Help",
    url: "/help",
    icon: HelpCircleIcon,
  },
  {
    title: "Search",
    url: "/search",
    icon: SearchIcon,
  },
];

const anotherItems = [
  {
    title: "Get Projects",
    url: "/projects/projects-list",
    icon: Plus,
    subItems: [
      { title: "Add Category", url: "/projects/add-category" },
      { title: "View Categories", url: "/projects/view-categories" },
    ],
  },
  {
    title: "Management",
    url: "/projects/projects-management",
    icon: Section,
    subItems: [
      { title: "Add Category", url: "/projects/management/add" },
      { title: "Edit Settings", url: "/projects/management/edit" },
    ],
  },
];

const user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  avatar: "https://github.com/shadcn.png",
};

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

const navSecondary = [
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
];

export const AppSideBar = () => {
  // get current path location in the URL
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  console.log("currentPath", currentPath);

  // Helper function to check if item is active
  const isItemActive = (itemUrl: string) => {
    return itemUrl === "/"
      ? currentPath === "/"
      : currentPath.startsWith(itemUrl);
  };

  // Helper function to check if parent item has active child
  const hasActiveChild = (item: (typeof anotherItems)[0]) => {
    return (
      item.subItems?.some((subItem) => currentPath.startsWith(subItem.url)) ||
      false
    );
  };

  return (
    <Sidebar collapsible="icon">
      {/* header */}
      <SidebarHeader className="p-2.5">
        <NavHeader teams={teams} />
      </SidebarHeader>

      <SidebarSeparator />

      {/* content */}
      <SidebarContent
        className={cn(
          "scrollbar-thin",
          "scrollbar-track-transparent",
          "scrollbar-track-rounded-full",
          "scrollbar-thumb-rounded-full",
          "scrollbar-thumb-transparent",
          // N'apparaît qu'au hover
          "hover:scrollbar-thumb-gray-300/30",
          "dark:hover:scrollbar-thumb-gray-600/30",
          // Animation fluide
          "transition-all duration-300",
          // Smooth scrolling
          "scroll-smooth"
        )}
      >
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = isItemActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        isActive && "!bg-blue-100 !text-blue-700 !font-medium"
                      )}
                    >
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>25</SidebarMenuBadge>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* collapsible elements */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            {/* content */}
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {helpItems.map((item) => {
                    const isActive = isItemActive(item.url);
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className={cn(
                            isActive &&
                              "!bg-blue-100 !text-blue-700 !font-medium"
                          )}
                        >
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* nested collapsible elements */}
        <SidebarGroup>
          <SidebarGroupLabel>Nested Collapsible Elements</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {anotherItems.map((item) => {
                const isParentActive = isItemActive(item.url);
                const hasActiveSubItem = hasActiveChild(item);
                const shouldHighlightParent =
                  isParentActive || hasActiveSubItem;

                return (
                  <Collapsible
                    key={item.title}
                    className="group/collapsible"
                    defaultOpen={hasActiveSubItem}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          isActive={shouldHighlightParent}
                          className={cn(
                            shouldHighlightParent &&
                              "!bg-blue-100 !text-blue-700 !font-medium"
                          )}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems?.map((subItem) => {
                            const isSubItemActive = isItemActive(subItem.url);
                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isSubItemActive}
                                  className={cn(
                                    isSubItemActive &&
                                      "!bg-blue-100 !text-blue-700 !font-medium"
                                  )}
                                >
                                  <Link to={subItem.url}>
                                    <Plus />
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* footer */}
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
};
