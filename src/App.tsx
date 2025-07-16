import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "./components/layout/main-layout";
import { CreateRoom } from "./pages/create-room";
import { RecordRoomAudio } from "./pages/record-room-audio";
import { Room } from "./pages/room";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route element={<CreateRoom />} index />
              <Route element={<Room />} path="/room/:roomId" />
              <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
