import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface GuestCounts {
  adults: number;
  teens: number;
  kids: number;
}

interface Room {
  room_id: number;
  room_number: number;
  guests: GuestCounts;
  checkIn?: string | null;
  checkOut?: string | null;
  room_price: number;
  room_acc: string;
  room_location: string | "";
}

interface RoomContextType {
  roomsCart: Room[];
  onAddRoom: (room: Room) => void;
  onClear: () => void;
  onDelete: (roomId: number) => void;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

interface RoomProviderProps {
  children: ReactNode;
}

export const RoomProvider: React.FC<RoomProviderProps> = ({ children }) => {
  const [roomsCart, setRoomsCart] = useState<Room[]>([]);

  useEffect(() => {
    const value = localStorage.getItem("roomsCart");
    if (value) {
      const items: Room[] = JSON.parse(value);
      setRoomsCart(items);
    }
  }, []);

  const handleAddRoom = (room: Room) => {
    const index = roomsCart.findIndex((item) => item.room_id === room.room_id);
    const updatedRooms = [...roomsCart];

    if (index > -1) {
      updatedRooms[index] = { ...room };
    } else {
      updatedRooms.push(room);
    }

    setRoomsCart(updatedRooms);
    localStorage.setItem("roomsCart", JSON.stringify(updatedRooms));
  };

  const handleDelete = (roomId: number) => {
    const updatedCart = roomsCart.filter((item) => item.room_id !== roomId);
    setRoomsCart(updatedCart);
    localStorage.setItem("roomsCart", JSON.stringify(updatedCart));
  };

  const handleClear = () => {
    setRoomsCart([]);
    localStorage.removeItem("roomsCart");
  };

  const value: RoomContextType = {
    roomsCart,
    onAddRoom: handleAddRoom,
    onClear: handleClear,
    onDelete: handleDelete,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

export const useRoomContext = (): RoomContextType => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoomContext must be used within a RoomProvider");
  }
  return context;
};
