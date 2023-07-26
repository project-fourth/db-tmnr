import { QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import Table from "@/pages/Table";
import { queryClient, trpcClient } from "./utils/clients";

function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col justify-center items-center mx-auto p-5">
          <Table />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
