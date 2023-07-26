import {
  TableHead as InnerTableHead,
  TableHeader as InnerTableHeader,
  TableRow as InnerTableRow,
} from "@/components/ui/table";
import { Table as TTable, flexRender } from "@tanstack/react-table";
import type { Member } from "@server/db.ts";

function TableHeader({ table }: { table: TTable<Member> }) {
  return (
    <InnerTableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <InnerTableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <InnerTableHead
              key={header.id}
              className={`text-xs h-8
                ${
                  header.column.id === "edit-button" ||
                  header.column.id === "delete-button"
                    ? "w-16"
                    : ""
                }`}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </InnerTableHead>
          ))}
        </InnerTableRow>
      ))}
    </InnerTableHeader>
  );
}

export default TableHeader;
