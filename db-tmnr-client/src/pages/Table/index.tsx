import { Table as InnerTable } from "@/components/ui/table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import columns from "./columns";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import AddMemberDialog from "./AddMemberDialog";
import { trpc } from "@/utils/trpc";

function Table() {
  const { isLoading, isError, data, refetch } = trpc.getMembers.useQuery();
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="h-full flex flex-1 flex-col space-y-8 p-5 rounded-md border">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome to the Database!
            </h2>
            <p className="text-muted-foreground">
              Please be careful around here!!!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <AddMemberDialog refetch={refetch} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="border">
            <InnerTable className="table-fixed max-w-[1024px]">
              <TableHeader table={table}></TableHeader>
              <TableBody
                table={table}
                isLoading={isLoading}
                isError={isError}
                refetch={refetch}
              ></TableBody>
            </InnerTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
