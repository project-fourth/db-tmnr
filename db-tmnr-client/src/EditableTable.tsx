import {
  RowData,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import EditableCell from "./EditableCell";

export type Student = {
  id: number;
  name: string;
  dateOfBirth: string;
  major: string;
};

const defaultData: Student[] = [
  {
    id: 1111,
    name: "Bahar Constantia",
    dateOfBirth: "1984-01-04",
    major: "Computer Science",
  },
  {
    id: 2222,
    name: "Harold Nona",
    dateOfBirth: "1961-05-10",
    major: "Communications",
  },
  {
    id: 3333,
    name: "Raginolf Arnulf",
    dateOfBirth: "1991-10-12",
    major: "Business",
  },
  {
    id: 4444,
    name: "Marvyn Wendi",
    dateOfBirth: "1978-09-24",
    major: "Psychology",
  },
];

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor("id", {
    header: "Student ID",
    cell: (info) => (
      <EditableCell
        table={info.table}
        row={info.row}
        column={info.column}
        getValue={info.getValue}
      />
    ),
  }),
  columnHelper.accessor("name", {
    header: "Full Name",
    cell: (info) => info.column,
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Date of Birth",
    cell: (info) => (
      <EditableCell
        table={info.table}
        row={info.row}
        column={info.column}
        getValue={info.getValue}
      />
    ),
  }),
  columnHelper.accessor("major", {
    header: "Major",
    cell: (info) => (
      <EditableCell
        table={info.table}
        row={info.row}
        column={info.column}
        getValue={info.getValue}
      />
    ),
  }),
];

declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    updateData: (
      rowIndex: number,
      columnId: string,
      value: TData[keyof TData]
    ) => void;
  }
}

export const EditableTable = () => {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (
        rowIndex: number,
        columnId: string,
        value: Student[keyof Student]
      ) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });
  return (
    <table className="font-sans border-collapse border border-solid border-gray-300 m-4 bg-white">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b-2 border-gray-300">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="text-left px-2 py-2">
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
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b-2 border-gray-300">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="text-left px-2 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
