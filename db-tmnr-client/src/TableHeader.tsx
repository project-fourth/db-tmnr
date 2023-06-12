import { Table, flexRender } from "@tanstack/react-table";
import { User } from "../../db-tmnr-server/src/db";

const TableHeader = ({ table }: { table: Table<User> }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th className="border border-black py-2 px-4" key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
