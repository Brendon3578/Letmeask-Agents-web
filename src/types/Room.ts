type BasicRoomType = {
  id: string;
  name: string;
};

type GetRoomsAPIResponse = Array<BasicRoomType>;

export type { BasicRoomType, GetRoomsAPIResponse };
