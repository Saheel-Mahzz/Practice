import MultiStep from "@/modules/multi-step";
import React from "react";

export default async function page({
  params,
}: PageProps<"/multi-step/[...step]">) {
  const awaitedParams = await params;
  console.log("here params ", awaitedParams);
  return <MultiStep params={awaitedParams} />;
}
