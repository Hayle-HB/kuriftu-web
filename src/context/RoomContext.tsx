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
  room_number: string;
  guests: GuestCounts;
  checkIn?: string | null;
  checkOut?: string | null;
  room_price: number;
  room_acc: string;
  room_location: string | "";
  resort?: string;
}

interface RoomContextType {
  roomsCart: Room[];
  globalCheckIn: string | null;
  globalCheckOut: string | null;
  setGlobalDates: (checkIn: string, checkOut: string) => void;
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
  const [globalCheckIn, setGlobalCheckIn] = useState<string | null>(null);
  const [globalCheckOut, setGlobalCheckOut] = useState<string | null>(null);

  useEffect(() => {
    const value = localStorage.getItem("roomsCart");
    if (value) {
      const items: Room[] = JSON.parse(value);
      setRoomsCart(items);
    }
  }, []);

  // Function to set global check-in/check-out dates
  const setGlobalDates = (checkIn: string, checkOut: string) => {
    setGlobalCheckIn(checkIn);
    setGlobalCheckOut(checkOut);
  };

  const handleAddRoom = (room: Room) => {
    if (!globalCheckIn || !globalCheckOut) {
      alert("Please select check-in and check-out dates first.");
      return;
    }

    const index = roomsCart.findIndex((item) => item.room_id === room.room_id);
    const updatedRooms = [...roomsCart];

    // Enforce the global check-in and check-out for every room
    const updatedRoom = {
      ...room,
      checkIn: globalCheckIn,
      checkOut: globalCheckOut,
    };

    if (index > -1) {
      updatedRooms[index] = updatedRoom;
    } else {
      updatedRooms.push(updatedRoom);
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
    globalCheckIn,
    globalCheckOut,
    setGlobalDates,
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
