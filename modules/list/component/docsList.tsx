import React from "react";
import getDocs from "../api/getDocs";
import List, { Columns } from "..";
import { Badge } from "@/components/ui/badge";
import { DeleteIcon, EditIcon, Trash2Icon } from "lucide-react";

export default async function DocsList({ search }: { search?: string }) {
  const res = await getDocs({ search: search });

  const test = {
    names: "saheel",
    address: {
      country: "Nepal",
    },
  };

  const columns: Columns[] = [
    {
      name: "Title",
      accessorKey: "title",
    },
    {
      name: "Description",
      accessorKey: "desc",
    },
    {
      name: "Full name",
      accessorKey: "owner.username",
    },
    {
      name: "Email",
      accessorKey: "owner.email",
    },
    {
      name: "Tags",
      cell: (row) => {
        return row?.tags?.map((tag, index) => <Badge key={index}>{tag}</Badge>);
      },
    },
    {
      name: "Actions",
      cell: () => (
        <div className="flex  gap-2">
          <Trash2Icon className="text-red-800 " />
          <EditIcon />
        </div>
      ),
    },
  ];

  const docsResponse = res?.data?.results || [];
  return <List columns={columns} data={docsResponse} />;
}
