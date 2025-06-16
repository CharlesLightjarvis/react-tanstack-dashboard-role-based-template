import { AreaChartComponent } from "@/components/area-chart";
import { BarChartComponent } from "@/components/bar-chart";
import CardList from "@/components/card-list";
import PaymentsList from "@/components/payments/payments-list";
import TodoList from "@/components/todo-list";
import { useAuth } from "@/context/auth-context";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard-layout/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const auth = useAuth();

  return (
    <section className="grid gap-2 p-2">
      <p>Hi {auth.user}!</p>
      <p>You are currently on the dashboard route.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
          <BarChartComponent />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4">
          <CardList title="Popular Visitors" />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4 2xl:col-span-4">
          <TodoList />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
          <AreaChartComponent />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-3 2xl:col-span-4">
          <PaymentsList />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4">Test</div>
        <div className="bg-primary-foreground rounded-lg p-4">Test</div>
        <div className="bg-primary-foreground rounded-lg p-4 ">
          <BarChartComponent />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4">Test</div>
        <div className="bg-primary-foreground rounded-lg p-4">Test</div>
        <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-3 2xl:col-span-4">
          Test
        </div>
        <div className="bg-primary-foreground rounded-lg p-4">Test</div>
        <div className="bg-primary-foreground rounded-lg p-4">Test</div>
        <div className="bg-primary-foreground rounded-lg p-4">Test</div>
      </div>
    </section>
  );
}
