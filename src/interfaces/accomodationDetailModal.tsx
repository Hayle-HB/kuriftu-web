export type AccommodationDetail = {
  title: string;
  carouselImages: string[];
  amenities: string[];
  booking: Booking | null;
  otherAccomodation: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
};

interface Booking {
  images: string[];
  description: string;
}

export type AccommodationDetailModal = {
  [slug: string]: {
    [id: number]: AccommodationDetail;
  };
};
