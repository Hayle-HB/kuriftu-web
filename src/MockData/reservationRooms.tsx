export type ReservationItemModal = {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  perNight: string;
  includeTax: string;
  isAvailable: boolean;
  slug: string;
};
export const reservationRooms: ReservationItemModal[] = [
  {
    image: "https://kuriftu-public-media.s3.amazonaws.com/africanvillage/3.JPG",
    title: "African Village",
    subtitle: "Addis Ababa, Ethiopia",
    price: "$300",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: true,
    slug: "africanVillage",
  },
  {
    image: "https://kurifturesorts.com/_nuxt/img/2.46e7606.webp",
    title: "Kuriftu Resort & Spa Bishoftu",
    subtitle: "Bishoftu, Ethiopia",
    price: "$173",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: true,
    slug: "bishoftu",
  },
  {
    image: "https://kurifturesorts.com/_nuxt/img/Glamping.75aadd4.webp",
    title: "Kuriftu Resort & Spa Entoto",
    subtitle: "Addis Ababa, Ethiopia",
    price: "$135",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: true,
    slug: "entoto",
  },
  {
    image: "https://kurifturesorts.com/_nuxt/img/Tana.303f00c.webp",
    title: "Kuriftu Resort & Spa Lake Tana",
    subtitle: "Bahirdar, Ethiopia",
    price: "$300",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: false,
    slug: "lake-tana",
  },
];
