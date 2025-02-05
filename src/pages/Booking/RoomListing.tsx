import { useLocation, useParams } from "react-router";
import { ROOM } from "../../MockData/room";
import RoomCard from "../../components/RoomCard";
import { useEffect, useState } from "react";
import RoomModal from "../../components/RoomModal";
import { useRoomContext } from "../../context/RoomContext";
import { Col, Container, Row } from "react-bootstrap";
import CartEmpty from "../../components/CartEmpty";
import CartItem from "../../components/RoomCartItem";
import { Link } from "react-router-dom";
import DateAndTimePicker from "../../components/DateAndTimePicker";
import { fetchData } from "../../services/resort";
import { IRoom } from "../../interfaces/roomModel";
import moment from "moment";
import Header from "../../components/Header/Header";


const imagesUrl: Record<string, any> = {
  "bishoftu": {
    "Village deluxe standard King size Bed room": "https://kurifturesorts.com/_nuxt/img/bis_king.f903f0a.jpg",
    "Delux standard King size Bed room":"https://kurifturesorts.com/_nuxt/img/bis_king_vil.ab883eb.jpg",
    "Village deluxe standard Twin Bed room":"https://kurifturesorts.com/_nuxt/img/bis_twins.9c2d1c7.jpg",
  },
  "entoto": {
    "Forest View King Size Bed": "https://kurifturesorts.com/_nuxt/img/2.3cec2b4.webp",
    "Forest View Twin Bed":"https://kurifturesorts.com/_nuxt/img/Glamping.a03f5c8.webp",
  },
  "africanVillage" :{
    "Deluxe Suite Families":"https://kurifturesorts.com/_nuxt/img/bis_king_vil.ab883eb.jpg",
    "Deluxe Suite King":"https://kurifturesorts.com/_nuxt/img/Glamping.a03f5c8.webp"
  },



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

const formatDate = (date: Date | null): string => {
  return moment(date).format("YYYY-MM-DD");
};

const RoomListing = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomId, setRoomId] = useState<null | number>(null);
  const { onAddRoom, roomsCart } = useRoomContext();
  const [roomListing, setRoomListing] = useState<IRoom[]>([]);

  const location = useLocation(); // Get the location object

  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  // Initialize dates state
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

  const room = ROOM[slug || ""];

  useEffect(() => {
    getData(dates);
  }, []);

  const getData = async (data: Dates) => {
    // setLoading(true);
    try {
      const result = await fetchData({
        location: slug,
        checkin: checkin || formatDate(data.checkIn),
        checkout: checkout || formatDate(data.checkOut),
      });

      if (result.data) {
        const mergedRooms = result.data.reduce((acc: any[], room: any) => {
          const existingRoom = acc.find((r) => r.room_acc === room.room_acc);

          if (existingRoom) {
            if (room.room_status !== "booked") {
              existingRoom.count = (existingRoom.count || 0) + 1;
            }
          } else {
            acc.push({
              ...room,
              count: room.room_status !== "booked" ? 1 : 0,
            });
          }

          return acc;
        }, []);

        setRoomListing(mergedRooms);
      }

    } catch (error) {
      console.error(error);
    } finally {
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
    const selectedRoom = roomListing.find((item) => item.room_id === roomId);
    if (selectedRoom && roomId) {
      const checkIn = dates.checkIn?.toLocaleDateString();
      const checkOut = dates.checkOut?.toLocaleDateString();

      onAddRoom({
        guests,
        checkIn,
        checkOut,
        room_price: selectedRoom.room_price,
        room_acc: selectedRoom.room_acc,
        room_id: selectedRoom.room_id,
        room_number: selectedRoom.room_number,
        room_location: slug || "",
      });
    }
    handleClose();
  };


  const getRoomImage = (acc: string) => {
    const roomAllImages = slug && imagesUrl[slug];
    return roomAllImages[acc] as string
  }
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <img
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
          src={room?.coverImage}
          alt={slug + "Room"}
        />
      </div>


      <Container >
        <DateAndTimePicker isShow={true} onSelectAvailability={handleDates} />

        <Row className="g-4 p-4">
          {roomListing.length > 0 ? (
            <Col xs={12} sm={12} md={8}>
              {roomListing.map((item, index) => (
                <RoomCard
                  key={index}
                  description={item.room_desc}
                  image={getRoomImage(item.room_acc)}
                  price={item.room_price}
                  location={item.room_location}
                  availability={`${item.count || 0} left`}
                  title={item.room_acc}
                  onSelect={() => handleSelect(item.room_id)}
                />
              ))}
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
                  <Link className="btn btn-secondary book-now" to="/booking-form"
                    style={{ fontFamily: "Neue Helvetica Medium", }}

                  >
                    Book Now
                  </Link>
                  <div>
                    <p>
                      Total: $
                      {roomsCart.reduce(
                        (total, item) => total + item.room_price,
                        0
                      )}
                    </p>
                    <p>Rooms :{roomsCart.length}</p>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <RoomModal
        show={isModalOpen}
        onClose={handleClose}
        onAddRoom={handleAddRoom}
      />
    </>
  );
};

export default RoomListing;
