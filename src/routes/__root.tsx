import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { AuthContext } from "@/context/auth-context";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import Cookies from "js-cookie";

interface MyRouterContext {
  auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    const defaultOpen = Cookies.get("sidebar_state") === "true";

    return (
      <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <SidebarProvider defaultOpen={defaultOpen}>
            <Outlet />
          </SidebarProvider>
        </ThemeProvider>
      </>
    );
  },
});
