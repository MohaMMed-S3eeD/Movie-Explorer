import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import GetData from "./component/GetData";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col items-center justify-center h-screen">
          <GetData />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
