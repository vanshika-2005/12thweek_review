import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import RootLayout from "../layouts/RootLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import { noteLoader } from "../pages/NoteDetails";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const NoteDetails = lazy(() => import("../pages/NoteDetails"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Trash = lazy(() => import("../pages/Trash"));
const Labels = lazy(() => import("../pages/Labels"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "notes/:id",
            loader: noteLoader,
            element: <NoteDetails />,
          },
          {
            path: "trash",
            element: <Trash />,
          },
          {
            path: "label",
            element: <Labels />,
          }
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}