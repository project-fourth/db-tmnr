import { Table, flexRender } from "@tanstack/react-table";
import { User } from "../../db-tmnr-server/src/db";

const TableBody = ({ table }: { table: Table<User> }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td className="border border-black p-1" key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
