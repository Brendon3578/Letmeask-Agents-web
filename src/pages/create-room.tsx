import { CreateRoomForm } from "@/components/create-room-form";
import { RoomList } from "@/components/room-list";

export function CreateRoom() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <CreateRoomForm />
        <RoomList />
      </div>
    </div>
  );
}
