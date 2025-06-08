import { AreaChartComponent } from "@/components/area-chart";
import { BarChartComponent } from "@/components/bar-chart";
import CardList from "@/components/card-list";
import PaymentsList from "@/components/payments/payments-list";
import TodoList from "@/components/todo-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "My App is a Dashboard Template",
      },
      {
        title: "Dashboard Template",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    scripts: [
      {
        src: "https://www.google-analytics.com/analytics.js",
      },
    ],
  }),
});

function App() {
  return (
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
  );
}
