import React, { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/responsive.css";
import "./styles/main.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import LandingPage from "./Routes/landing";
import ErrorPage from "./Routes/error";

import ResortLayout from "./pages/Resort/ResortLayout";
//import ResortAccomodation from "./pages/Resort/ResortAccomdation/ResortAccomodation";
import ResortAdventure from "./pages/Resort/ResortAdventure";
import ResortCeleberationsAndEvents from "./pages/Resort/ResortCeleberationsAndEvents";
//import ResortHome from "./pages/Resort/ResortHome";
import Experiences from "./Routes/Resort/Experiences";
import ResortLanding from "./Routes/Resort/ResortLanding";
import Accomidation from "./Routes/Resort/Accomodation";
import Wellness from "./Routes/Resort/Wellness";
import Dinnign from "./Routes/Resort/Dinning";
import Corporate from "./Routes/Resort/Corporate";
import Celebrate from "./Routes/Resort/Celebrate";
import ResortEvents from "./pages/Resort/ResortEvents";
//import ResortExperiences from "./pages/Resort/ResortExperiences";
import ResortGallery from "./pages/Resort/ResortGallery";
import ResortGiftVoucher from "./pages/Resort/ResortGiftVoucher";
import ResortWellness from "./pages/Resort/ResortWellness";
import ResortDining from "./pages/Resort/ResortDining";
import ResortAccomodationDetail from "./pages/Resort/ResortAccomdation/ResortAccomodationDetail";
import RoomListing from "./pages/Booking/RoomListing";
import { RoomProvider } from "./context/RoomContext";
import BookingForm from "./components/BookingForm";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Reservation from "./pages/Reservation";
import BostonPackage from "./pages/BostonPackage";
import Event from "./pages/Event";
import Payment from "./pages/Booking/Payment";
import SuccessPage from "./pages/success";
import SuccessPageChapa from "./pages/successPageChapa";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <LandingPage />,
//       },
//       {
//         path: "/resorts",
//         element: <ResortsPage />,
//       },
//       {
//         path: "/resorts/:slug",
//         element: <ResortDetails />,
//       },
//       {
//         path: "/accomodation",
//         element: <LandingPage />,
//       },
//       {
//         path: "/accomodation/:slug",
//         element: <LandingPage />,
//       },
//       {
//         //contactus
//         path: "/contact",
//         element: <ContactUsPage />,
//       },
//       {
//         path: "/wellness",
//         element: <Wellness />,
//       },
//       {
//         path: "/experiences",
//         element: <ExperiencePage />,
//       },
//       {
//         path: "/reservation",
//         element: <Reservations />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/",
        element: (
          <RoomProvider>
            <Outlet />
          </RoomProvider>
        ),
        children: [
          {
            path: "/:slug/rooms",
            element: <RoomListing />,
          },
          {
            path: "/booking-form",
            element: <BookingForm />,
          },
          {
            path: "/success",
            element: <SuccessPage />,
          },
          {
            path: "/success-chapa",
            element: <SuccessPageChapa />,
          },
        ],
      },

      {
        path: "/resorts/:slug",
        element: <ResortLayout />,
        children: [
          {
            path: "",
            element: <ResortLanding />,
          },
          {
            path: "acc",
            element: <Accomidation />,
          },
          {
            path: "acc/:id",
            element: <ResortAccomodationDetail />,
          },
          {
            path: "adv",
            element: <ResortAdventure />,
          },
          {
            path: "corp",
            element: <Corporate />,
          },

          {
            path: "event",
            element: <Celebrate />,
          },
          {
            path: "exp",
            element: <Experiences />,
          },
          {
            path: "gallery",
            element: <ResortGallery />,
          },
          {
            path: "gift",
            element: <ResortGiftVoucher />,
          },
          {
            path: "well",
            element: <Wellness />,
          },
          {
            path: "dining",
            element: <Dinnign />,
          },
        ],
      },
      {
        path: "/payment/:session",
        element: <Payment />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/bostonPackage",
        element: <BostonPackage />,
      },
      {
        path: "/event",
        element: <Event />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

reportWebVitals();
