import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import FooterSection from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <FooterSection />
    </>
  );
};

export default SharedLayout;
