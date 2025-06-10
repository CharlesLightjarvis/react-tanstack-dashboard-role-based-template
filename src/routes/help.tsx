// about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  component: HelpPage,
});

function HelpPage() {
  return <div>Help</div>;
}
