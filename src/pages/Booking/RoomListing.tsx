import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useRoomContext } from "../../context/RoomContext";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { RESORTDETAILS } from "../../MockData/resortsDetails";

import RoomCard from "../../components/RoomCard";
import RoomModal from "../../components/RoomModal";
import CartEmpty from "../../components/CartEmpty";
import CartItem from "../../components/RoomCartItem";
import DateAndTimePicker from "../../components/DateAndTimePicker";
import { fetchData } from "../../services/resort";
import Header from "../../components/Header/Header";

const imagesUrl: Record<string, any> = {
  bishoftu: {
    6:
      "https://kurifturesorts.com/_nuxt/img/bis_king.f903f0a.jpg",
    9:
      "https://kurifturesorts.com/_nuxt/img/bis_king_vil.ab883eb.jpg",
    7:
      "https://kurifturesorts.com/_nuxt/img/bis_twins.9c2d1c7.jpg",
  },
  entoto: {
    20:
      "https://kurifturesorts.com/_nuxt/img/2.3cec2b4.webp",
    21:
      "https://kurifturesorts.com/_nuxt/img/Glamping.a03f5c8.webp",
  },
  africanVillage: {
    23:
      "https://kurifturesorts.com/_nuxt/img/bis_king_vil.ab883eb.jpg",
    22:
      "https://kurifturesorts.com/_nuxt/img/Glamping.a03f5c8.webp",
  },
};

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

// Format Date
const formatDate = (date: Date | null): string => {
  return date ? moment(date).format("YYYY-MM-DD") : "";
};

const RoomListing = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomId, setRoomId] = useState<null | number>(null);
  const { onAddRoom, roomsCart } = useRoomContext();
  const [roomListing, setRoomListing] = useState<RoomListingProps[]>([]);

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
    getData(dates);
  }, [dates]);

  const getData = async (data: Dates) => {
    console.log("📡 Fetching rooms with params:", {
      location: slug,
      checkin: formatDate(data.checkIn),
      checkout: formatDate(data.checkOut),
    });

    try {
      const result = await fetchData({
        location: slug,
        checkin: formatDate(data.checkIn),
        checkout: formatDate(data.checkOut),
      });

      console.log("✅ API Response:", result);

      if (result?.data) {
        setRoomListing(result.data);
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
    setIsModalOpen(true);
    setRoomId(roomId);
  };

  const handleDates = (data: Dates) => {
    setDates(data);
    getData(data);
  };

  const handleAddRoom = (guests: GuestCounts) => {
    const selectedRoom = roomListing.find((item) => item.id === roomId);
    console.log("🛏 Selected room:", selectedRoom);

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
        room_number: "N/A", // No room number needed in frontend
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
          {roomListing.length > 0 ? (
            <Col xs={12} sm={12} md={8}>
              {roomListing.map((item, index) => {
                console.log(imagesUrl[item.location][item.id]);
                return (
                  (
                <RoomCard
                  key={index}
                  description={item.complementary_services || "No details available"}
                  image={imagesUrl[item.location][item.id]}
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
          )}
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
                  <Link className="btn btn-secondary book-now" to="/booking-form">
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

      <RoomModal show={isModalOpen} onClose={handleClose} onAddRoom={handleAddRoom} />
    </div>
  );
};

export default RoomListing;
