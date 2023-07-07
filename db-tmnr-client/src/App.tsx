import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { trpc } from "./utils/trpc";
import { httpBatchLink } from "@trpc/client";
import { EditableTable } from "./EditableTable";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <h1>Hello there</h1>
        <EditableTable />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
