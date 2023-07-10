import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { trpc } from "./utils/trpc";
import { httpBatchLink } from "@trpc/client";
import Table from "./Table";
import NewUserButton from "./NewUserButton";

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
        <div className="flex w-screen h-screen items-center justify-center">
          <Table />
          <NewUserButton />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
