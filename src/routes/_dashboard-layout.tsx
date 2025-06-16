import { AppSideBar } from "@/components/app-sidebar";
import Loading from "@/components/loading";
import { Navbar } from "@/components/navbar";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard-layout")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  pendingComponent: Loading,
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <>
      <AppSideBar />
      <main className="flex flex-col flex-1 min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
