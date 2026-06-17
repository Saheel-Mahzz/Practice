import React from "react";

export type FormStep = "personal-info" | "about";

interface MultiStepFormProps {
  params: Awaited<PageProps<"/multi-step/[...step]">["params"]>;
}

export default function MultiStep({ params }: MultiStepFormProps) {
  const step = params?.step;
  console.log("step", step);
  const [form, nmae] = step as [FormStep, any];
  // console.log("form" nmae);
  switch (form) {
    case "about":
      return "About page";
    case "personal-info":
      return "sdasd";
  }
  return <div>I am multi step form..</div>;
}
