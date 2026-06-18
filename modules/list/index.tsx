import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";
import SearchInput from "./component/searchInput";

export interface Columns {
  name: string;
  accessorKey?: string;
  cell?: (row?: any) => React.ReactNode;
}

export default function List({
  data,
  columns,
  searchable,
}: {
  columns: Columns[];
  data: any[];
  searchable?: boolean;
}) {
  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, curr) => {
      return acc && acc[curr] !== undefined ? acc[curr] : undefined;
    }, obj);
  };
  return (
    <div className="space-y-4">
      <SearchInput />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {columns?.map((column, index) => (
              <TableHead key={index}>{column?.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length === 0 ? (
            <TableRow>
              <TableCell
                className="h-24 text-center text-muted-foreground"
                colSpan={12}
              >
                No data found...
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns?.map((col, colIndex) => (
                  <TableCell key={colIndex}>
                    {col?.cell
                      ? col?.cell(row)
                      : getNestedValue(row, col?.accessorKey)}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
