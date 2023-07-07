import TableContent from "./TableContent";
import { trpc } from "./utils/trpc";

const Table = () => {
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
};

export default Table;
