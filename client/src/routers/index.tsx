import { createBrowserRouter } from "react-router-dom";

// Pages
import HomePage from "../pages/Home/HomePage";
import JourneyPage from "../pages/Journey/JourneyPage";
import TeachersPage from "../pages/Teachers/TeachersPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import TributesPage from "../pages/Tributes/TributesPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import MainLayout from "../components/layout/MainLayout";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "hanh-trinh-80-nam", element: <JourneyPage /> },
      { path: "cau-chuyen-thay-co", element: <TeachersPage /> },
      { path: "thu-vien-anh", element: <GalleryPage /> },
      { path: "click-tri-an", element: <TributesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
