import List from "@/modules/list";
import DocsList from "@/modules/list/component/docsList";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const search = await searchParams;
  return <DocsList search={search?.search} />;
}
