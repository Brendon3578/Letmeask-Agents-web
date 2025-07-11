import { useParams, Navigate } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return <Navigate to="/" replace />;
  }

  params.roomId;

  return <h1>Room Details</h1>;
}
