import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  Table,
  flexRender,
} from "@tanstack/react-table";
import { User } from "../../db-tmnr-server/src/db.ts";
import { trpc } from "./utils/trpc";
import { useState } from "react";

const columnHelper = createColumnHelper<User>();
const columns = [
  {
    id: "editButton",
    header: () => null,
  },
  columnHelper.accessor("name", {
    header: () => "Name",
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
  }),
  columnHelper.accessor("department", {
    header: () => "Department",
  }),
];

function TableHeader({ table }: { table: Table<User> }) {
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
}

function EditButton({
  initiateCellEditing,
  canEdit,
}: {
  initiateCellEditing: () => void;
  canEdit: boolean;
}) {
  return (
    <button onClick={initiateCellEditing}>{canEdit ? "Save" : "Edit"}</button>
  );
}

function EditableCell({
  text,
  canEdit,
}: {
  text: User[keyof User];
  canEdit: boolean;
}) {
  return canEdit ? (
    <input type="text" defaultValue={text} />
  ) : (
    <span>{text}</span>
  );
}

function TableBody({ table }: { table: Table<User> }) {
  const [rowBeingEdited, setRowBeingEdited] = useState<string | null>(null);

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => {
            const canEdit = row.id === rowBeingEdited;

            return (
              <td className="border border-black p-1" key={cell.id}>
                {cell.column.id === "editButton" ? (
                  <EditButton
                    initiateCellEditing={() => setRowBeingEdited(row.id)}
                    canEdit={canEdit}
                  />
                ) : (
                  <EditableCell
                    text={cell.getValue() as User[keyof User]}
                    canEdit={canEdit}
                  />
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

function TableContent({ data }: { data: User[] }) {
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
}

function Table() {
  const { isLoading, isError, data, error } = trpc.userList.useQuery();

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {isError && <span>{error.message}</span>}
      <table className="border-2 border-black border-separate border-spacing-1">
        {!(isLoading || isError) && <TableContent data={data}></TableContent>}
      </table>
    </>
  );
}

export default Table;
