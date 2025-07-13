import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { Main } from "./components/layout/main";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Main>
          <BrowserRouter>
            <Routes>
              <Route index element={<CreateRoom />} />
              <Route path="/room/:roomId" element={<Room />} />
            </Routes>
          </BrowserRouter>
        </Main>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
