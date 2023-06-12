import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { User } from "../../db-tmnr-server/src/db.ts";
import TableHeader from "./TableHeader.tsx";
import TableBody from "./TableBody.tsx";

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("department", {
    header: () => "Department",
    cell: (info) => info.getValue(),
  }),
];

const TableContent = ({ data }: { data: User[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TableHeader table={table}></TableHeader>
      <TableBody table={table}></TableBody>
    </>
  );
};

export default TableContent;
