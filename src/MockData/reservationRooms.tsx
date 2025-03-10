import { RESORTDETAILS } from "./resortsDetails";
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
    image: RESORTDETAILS['africanVillage'].cover_image,//"https://kuriftu-public-media.s3.amazonaws.com/africanvillage/3.JPG",
    title: "Kuriftu Resort & Spa African Village",
    subtitle: "Addis Ababa, Ethiopia",
    price: "$300",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: true,
    slug: "africanVillage",
  },
  {
    image: RESORTDETAILS['bishoftu'].cover_image, //"https://kuriftu-public-media.s3.amazonaws.com/bishoftu/1.jpg",
    title: "Kuriftu Resort & Spa Bishoftu",
    subtitle: "Bishoftu, Ethiopia",
    price: "$173",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: true,
    slug: "bishoftu",
  },
  {
    image: RESORTDETAILS['entoto'].cover_image,//"https://kuriftu-public-media.s3.amazonaws.com/entoto/entoto_cover.jpg",
    title: "Kuriftu Resort & Spa Entoto",
    subtitle: "Addis Ababa, Ethiopia",
    price: "$135",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: true,
    slug: "entoto",
  },
  {
    image: RESORTDETAILS['laketana'].cover_image,//"https://kuriftu-public-media.s3.amazonaws.com/tana/9.webp",
    title: "Kuriftu Resort & Spa Lake Tana",
    subtitle: "Bahirdar, Ethiopia",
    price: "$300",
    perNight: "Per Night",
    includeTax: "Including Taxes & Fees",
    isAvailable: false,
    slug: "lake-tana",
  },
];
