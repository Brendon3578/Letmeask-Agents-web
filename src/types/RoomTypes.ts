export type RawRoom = {
  id: string;
  name: string;
  questionsCount: number;
  createdAt: string;
};
export type GetRoomsResponse = RawRoom[];

export type CreateRoomResponse = {
  roomId: string;
};

export type CreateRoomRequest = {
  name: string;
  description: string;
};
