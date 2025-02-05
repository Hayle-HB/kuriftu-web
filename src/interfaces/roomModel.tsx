export interface IRoom {
  room_location: string;
  room_id: number;
  room_occupancy: number;
  room_acc: string;
  room_image: string;
  room_number: number;
  room_status: string;
  room_price: number;
  room_desc: string;
  hold_start_time: Date;
  hold_expire_time: Date;
  count?: number; // Add count property
  // amenities: string[];
}

export interface ResortRoomModel {
  coverImage: string;
  resort: string;
  image?: string;

  // rooms: Room[];
}
