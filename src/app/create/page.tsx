import type { Metadata } from "next";
import { CreateFormFlow } from "@/components/form/create-form-flow";

export const metadata: Metadata = {
  title: "Create Form | NeoForm",
  description: "Create beautiful, custom forms with NeoForm's intuitive form builder.",
};

export default function CreateFormPage() {
  return <CreateFormFlow />;
}
