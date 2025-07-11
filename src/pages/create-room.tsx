import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import type { GetRoomsAPIResponse } from "../types/Room";

export function CreateRoom() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");

      const result: GetRoomsAPIResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      <h1>CreateRoom</h1>

      {isLoading && <p>Carregando...</p>}

      <div className="flex flex-col gap-1">
        {data?.map((room) => (
          <Link key={room.id} to={`/room/${room.id}`}>
            {room.name}
          </Link>
        ))}
      </div>

      <Link to="/room">acessar sala</Link>
    </div>
  );
}
