import { createRoot } from "react-dom/client";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Bounce, ToastContainer } from "react-toastify";
import RootPage from "./pages/RootPage";
import PartnersPage from "./pages/PartnersPage";
import LeadsPage from "./pages/LeadsPage";
import PaymentsPage from "./pages/PaymentsPage";
import ReferalPage from "./pages/ReferalPage";
import SignUpPage from "./pages/SignUpPage";
import AuthPage from "./pages/AuthPage";
import SignInPage from "./pages/SignInPage";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./providers/AuthProvider";
import ProfilePage from "./pages/ProfilePage";
import SubscriptionPage from "./pages/SubscriptionPage";

// eslint-disable-next-line react-refresh/only-export-components
const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <PartnersPage />,
      },
      {
        path: "leads",
        element: <LeadsPage />,
      },
      {
        path: "payments",
        element: <PaymentsPage />,
      },
      {
        path: "referal_program",
        element: <ReferalPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "subscription",
        element: <SubscriptionPage />,
      },
    ],
  },
  {
    element: <AuthPage />,
    children: [
      {
        path: "sign_in",
        element: <SignInPage />,
      },
      {
        path: "sign_up",
        element: <SignUpPage />,
      },
    ],
  },
]);

const helmetContext = {};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider context={helmetContext}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        stacked
      />
      <Suspense>
        <ReactQueryDevtoolsProduction />
      </Suspense>
    </HelmetProvider>
  </QueryClientProvider>
);
