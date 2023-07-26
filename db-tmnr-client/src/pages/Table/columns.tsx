import { createColumnHelper } from "@tanstack/react-table";
import TableCell from "./TableCell";
import type { Member } from "@server/db";

const columnHelper = createColumnHelper<Member>();
const columns = [
  {
    id: "edit-button",
    header: "",
  },
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: ({ getValue }) => <TableCell getValue={getValue} />,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: ({ getValue }) => <TableCell getValue={getValue} />,
  }),
  columnHelper.accessor("department", {
    header: () => "Department",
    cell: ({ getValue }) => <TableCell getValue={getValue} />,
  }),
  {
    id: "delete-button",
    header: "",
  },
];

export default columns;
