import { Routes as AppRoutes, Route } from "react-router";
import Home from "./pages/Home";
import QueryList from "./pages//QueryList";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import SignOut from "./pages/auth/SignOut";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/NotFound";
// import SharedAuthLayout from "./pages/auth/SharedLayout";
import Sidebar from "./pages/Sidebar";
import Settings from "./pages/Settings";
import paths from "@/features/router/paths";
import QueryDetail from "./pages/QueryDetail";

function Routes() {
  return (
    <AppRoutes>
      <Route element={<Sidebar />}>
        <Route index element={<Home />} />
        
        <Route path={paths.query}>
          <Route index element={<QueryList />} />
          <Route path=":pokemonName" element={<QueryDetail />} />
        </Route>

        <Route path={paths.settings} element={<Settings />} />
        <Route path={paths.auth.root}>
          {/* <Route element={<SharedAuthLayout />}> */}
            <Route index element={<SignIn />} />
            <Route path={paths.auth.signUp} element={<SignUp />} />
            <Route path={paths.auth.signOut} element={<SignOut />} />
            <Route
              path={paths.auth.forgotPassword}
              element={<ForgotPassword />}
            />
          </Route>
        {/* </Route> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </AppRoutes>
  );
}

export default Routes;
