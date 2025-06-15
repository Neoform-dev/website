import type { Metadata } from "next";
import { TypeformDemo } from "@/components/form/typeform-demo";

export const metadata: Metadata = {
  title: "Form Demo | NeoForm",
  description: "Experience our beautiful Typeform-style survey interface.",
};

export default function DemoPage() {
  return <TypeformDemo />;
}
