import Cookies from "js-cookie";
import { AppSideBar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { AuthContext } from "@/context/auth-context";

interface MyRouterContext {
  auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    const defaultOpen = Cookies.get("sidebar_state") === "true";

    return (
      <>
        <HeadContent />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSideBar />
            <main className="w-full ">
              <Navbar />
              <div className="p-4">
                <Outlet />
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </>
    );
  },
});
