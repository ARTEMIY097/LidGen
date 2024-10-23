// import { lazy } from "react";
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
import { Provider } from "mobx-react";
import { authStore } from "./store/AuthStore";
import { userStore } from "./store/UserStore";
import { partnersStore } from "./store/PartnersStore";
import SignUpPage from "./pages/SignUpPage";
import AuthPage from "./pages/AuthPage";
import SignInPage from "./pages/SignInPage";
import { leadsStore } from "./store/LeadsStore";
import MockPage from "./pages/MockPage";

// const ReactQueryDevtoolsProduction = lazy(() =>
//   import("@tanstack/react-query-devtools/build/modern/production.js").then(
//     (d) => ({
//       default: d.ReactQueryDevtools,
//     })
//   )
// );

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <MockPage />,
      },
      {
        path: "partners",
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

const stores = {
  authStore,
  userStore,
  partnersStore,
  leadsStore,
};

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider {...stores}>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
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
        {/* <ReactQueryDevtoolsProduction /> */}
      </HelmetProvider>
    </QueryClientProvider>
  </Provider>
  // </StrictMode>
);
