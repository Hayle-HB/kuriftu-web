import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useRoomContext } from "../../context/RoomContext";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { RESORTDETAILS } from "../../MockData/resortsDetails";

import RoomCard from "../../components/RoomCard";
import RoomCardPH from "../../UI/PlaceHolder/RoomCardPH";
import RoomModal from "../../components/RoomModal";
import CartEmpty from "../../components/CartEmpty";
import CartItem from "../../components/RoomCartItem";
import DateAndTimePicker from "../../components/DateAndTimePicker";
import { fetchData } from "../../services/resort";

import { fetchAvailableRooms } from "../../services/resort";
import Header from "../../components/Header/Header";

const imagesUrl: Record<string, any> = {
  bishoftu: {
    6:
      "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/3.webp",
    9:
      "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/3.webp",
    7:
      "https://kuriftu-public-media.s3.amazonaws.com/bishoftu/acc/3.webp",
  },
  entoto: {
    20:
      "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto27.jpg",
    21:
      "https://kuriftu-public-media.s3.amazonaws.com/Entoto/entoto27.jpg",
  },
  africanVillage: {
    23:
      "https://kuriftu-public-media.s3.amazonaws.com/africanvillage/africa30.jpeg",
    22:
      "https://kuriftu-public-media.s3.amazonaws.com/africanvillage/africa30.jpeg",
  },
};
const KAV_Description = "Kuriftu Resort & Spa Africa Village highlights 54 villas that showcase the individual beauty of each African country ranging from food, art, books, cultural artifacts, fabrics, flags, and so much more!";

// Interfaces
interface RoomListingProps {
  available_count: number;
  bed_type: string;
  complementary_services: string;
  id: number;
  location: string;
  max_occupancy: number;
  room_price: number;
  room_type: string;
  room_number: string;
  room_details_id:number;
}

interface GuestCounts {
  adults: number;
  teens: number;
  kids: number;
}

interface Dates {
  checkIn: Date | null;
  checkOut: Date | null;
}

// Room Data Structure
interface Room {
  room_id: number;
  room_occupancy: string;
  room_acc: string;
  room_price: string;
  room_image: string;
  room_number: string;
  room_status: "booked" | "Not_booked";
  room_location: string;
  room_desc: string;
  hold_start_time: string;
  hold_expire_time: string;
  room_details_id: number;
}

// Grouped Room Structure
interface GroupedRooms {
  [key: string]: {
    rooms: Room[];
    available: number;
  };
}


// Format Date
const formatDate = (date: Date | null): string => {
  return date ? moment(date).format("YYYY-MM-DD") : "";
};

const RoomListing = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug){ 
    console.log("no slug")
  };
  const location = useLocation();

  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomId, setRoomId] = useState<null | number>(null);
  const [roomListing, setRoomListing] = useState<RoomListingProps[]>([]);
  const [maxOccupancy, setMaxOccupancy] = useState<number | null>(null);
  const { onAddRoom, roomsCart, setGlobalDates } = useRoomContext(); // ✅ Get setGlobalDates

  const [rooms, setRooms] = useState<Room[]>([]);
  const [groupedRooms, setGroupedRooms] = useState<GroupedRooms>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);


  // Initialize dates
  const [dates, setDates] = useState<Dates>({
    checkIn: checkin ? new Date(checkin) : new Date(),
    checkOut: checkout
      ? new Date(checkout)
      : (() => {
          const nextDay = new Date();
          nextDay.setDate(nextDay.getDate() + 1);
          return nextDay;
        })(),
  });

  useEffect(() => {
    setIsLoading(true)
    setGlobalDates(formatDate(dates.checkIn), formatDate(dates.checkOut)); // ✅ Update global context
    
    getData(dates).finally(()=>{setIsLoading(false)});
  }, [dates]);


  const processRooms = (data: Room[][]) => {
    console.log(data)
    const allRooms = data.flat(); // Flatten the array of arrays
    const filteredRooms = allRooms;//.filter((room) => room.room_location.toLowerCase() === slug);
    //console.log("all r", allRooms);
    
    // Group by room type (`room_acc`)
    const roomMap = new Map<string, RoomListingProps>();
    //console.log(filteredRooms);

    filteredRooms.forEach((room) => {
      //console.log(room);
      const key = room.room_acc;
      
      if (!roomMap.has(key)) {
        //console.log("room: ", room)
        roomMap.set(key, {
          available_count: 0, // To be counted
          bed_type: key, // Using room_acc as bed_type
          complementary_services: slug === 'africanVillage'? KAV_Description: room.room_desc, // Using description
          id: room.room_id, // Unique room type identifier
          location: room.room_location,
          max_occupancy: parseInt(room.room_occupancy, 10),
          room_price: parseFloat(room.room_price),
          room_type: key, // Using room_acc as room_type
          room_number: room.room_number,
          room_details_id: room.room_details_id
        });
      }

      // Count available rooms
      const existingRoom = roomMap.get(key);
      if (existingRoom) {
        existingRoom.available_count += 1;
      }
      
    });

    setRoomListing(Array.from(roomMap.values()));
    //console.log(roomListing);
  };
  const getData = async (data: Dates) => {

    try {
      const result = await fetchAvailableRooms({
        location: slug,
        checkin: formatDate(data.checkIn),
        checkout: formatDate(data.checkOut),
      });
      //console.log("✅ API Response:", result);

      if (result) {
        processRooms(result);
        //console.log("rooms", result);
      }
    } catch (error) {
      console.error("❌ Fetch Error:", error);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setRoomId(null);
  };

  const handleSelect = (roomId: number) => {
    let selectedRoom = roomListing.find((item) => item.id === roomId);
    setIsModalOpen(true);
    setRoomId(roomId);
    setMaxOccupancy(selectedRoom?.max_occupancy || 2);
  };

  const handleDates = (data: Dates) => {
    setDates(data);
    setGlobalDates(formatDate(data.checkIn), formatDate(data.checkOut)); // ✅ Update global context
    getData(data);
  };

  const handleAddRoom = (guests: GuestCounts) => {
    const selectedRoom = roomListing.find((item) => item.id === roomId);
    //console.log("🛏 Selected room:", selectedRoom);

    if (selectedRoom && roomId) {
      const checkIn = dates.checkIn?.toLocaleDateString();
      const checkOut = dates.checkOut?.toLocaleDateString();

      onAddRoom({
        guests,
        checkIn,
        checkOut,
        room_price: selectedRoom.room_price,
        room_acc: selectedRoom.room_type,
        room_id: selectedRoom.id,
        room_number: selectedRoom.room_number || "N/A", 
        room_location: slug || "",
      });
    }
    handleClose();
  };

  const getRoomImage = (roomType: string) => {
    const roomAllImages = slug && imagesUrl[slug];
    return roomAllImages ? roomAllImages[roomType] : "";
  };

  return (
    <div className="rooms-listing">
      <div style={{ marginTop: "80px" }}>
        <img
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
          src={RESORTDETAILS[slug || ""]?.cover_image || ""}
          alt={slug + "Room"}
        />
      </div>

      <Container>
        <DateAndTimePicker isShow={true} onSelectAvailability={handleDates} />
        
        <Row className="g-4 p-4">
          {
            isLoading ? (
              <Col  xs={12} sm={12} md={8}>
               < RoomCardPH />
              </Col>
            ):(
              roomListing.length > 0 ? (
            <Col xs={12} sm={12} md={8}>
              {roomListing.map((item, index) => {
                console.log("Item: ",item);
                return (
                  (
                <RoomCard
                  key={index}
                  description={item.complementary_services || "No details available"}
                  image={imagesUrl[item.location][item.room_details_id]}
                  price={item.room_price || 0}
                  location={item.bed_type}
                  availability={`${item.available_count || 0} left`}
                  title={item.room_type}
                  onSelect={() => handleSelect(item.id)}
                />
              )
                )
              })}
            </Col>
          ) : (
            <Col xs={12} sm={12} md={4}>
              <p>No Room Available</p>
            </Col>
          )
            )
          }
          
          <Col xs={12} sm={12} md={4}>
            {roomsCart.length === 0 ? (
              <CartEmpty />
            ) : (
              <div style={{ background: "white", padding: "10px" }}>
                {roomsCart.map((item) => (
                  <CartItem
                    checkIn={item.checkIn}
                    checkOut={item.checkOut}
                    guests={item.guests}
                    title={item.room_acc}
                    total={+item.room_price}
                    roomId={item.room_id}
                    isShowDelete={true}
                  />
                ))}

                <div className="d-flex justify-content-between align-items-center">
                  <Link className="btn btn-secondary book-now" to={`/booking-form?${slug}`}>
                    Book Now
                  </Link>
                  <div>
                    <p>Total: ${roomsCart.reduce((total, item) => total + +item.room_price, 0)}</p>
                    <p>Rooms: {roomsCart.length}</p>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <RoomModal show={isModalOpen} onClose={handleClose} onAddRoom={handleAddRoom} maxOccupancy={maxOccupancy || 2} />
    </div>
  );
};

export default RoomListing;
