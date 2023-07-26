import type { Member } from "@server/db";
import {
  TableBody as InnerTableBody,
  TableRow as InnerTableRow,
  TableCell as InnerTableCell,
} from "@/components/ui/table";
import { Table as TTable, flexRender } from "@tanstack/react-table";
import columns from "./columns.tsx";
import DeleteMemberButton from "./DeleteMemberButton.tsx";
import EditMemberDialog from "./EditMemberDialog.tsx";

function TableBody({
  table,
  isLoading,
  isError,
  refetch,
}: {
  table: TTable<Member>;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}) {
  return (
    <InnerTableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <InnerTableRow key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <InnerTableCell
                  key={cell.id}
                  className={`py-1
                    ${
                      cell.column.id === "edit-button" ||
                      cell.column.id === "delete-button"
                        ? "px-0 text-center"
                        : ""
                    }`}
                >
                  {cell.column.id === "edit-button" && (
                    <EditMemberDialog refetch={refetch} />
                  )}
                  {cell.column.id === "delete-button" && (
                    <DeleteMemberButton
                      _id={row.original._id}
                      refetch={refetch}
                    />
                  )}
                  {cell.column.id !== "edit-button" &&
                    cell.column.id !== "delete-button" &&
                    flexRender(cell.column.columnDef.cell, cell.getContext())}
                </InnerTableCell>
              );
            })}
          </InnerTableRow>
        ))
      ) : (
        <InnerTableRow>
          <InnerTableCell
            colSpan={columns.length}
            className="h-10 text-center p-0"
          >
            {isLoading && "Loading data..."}
            {isError && "Oops! Something went wrong..."}
            {!isLoading && !isError && "Noting to see here..."}
          </InnerTableCell>
        </InnerTableRow>
      )}
    </InnerTableBody>
  );
}

export default TableBody;
