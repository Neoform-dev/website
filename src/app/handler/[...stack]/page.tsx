import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../../stack";

interface PageProps {
  params: Promise<{ stack: string[] }>;
}

export default function Handler(props: PageProps) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
