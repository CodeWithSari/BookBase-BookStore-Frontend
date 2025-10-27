import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; 


import Home from "./users/pages/Home";
import Preloader from "./components/Preloader";
import Auth from "./pages/Auth";
import AllBooks from "./users/pages/AllBooks";
import ViewBooks from "./users/pages/ViewBooks";
import Careers from "./users/pages/Careers";
import Contact from "./users/pages/Contact";
import Profile from "./users/pages/Profile";

import AdminHome from "./admin/pages/AdminHome";
import AdminBooks from "./admin/pages/AdminBooks";
import AdminCareers from "./admin/pages/AdminCareers";
import AdminSettings from "./admin/pages/AdminSettings";


import PageNotFound from "./pages/PageNotFound";
import "flowbite/dist/flowbite.css";

function App() {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoading ? <Preloader /> : <Home />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/viewBook/:id" element={<ViewBooks />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="*" element={<PageNotFound />} />


        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/admin-career' element={<AdminCareers />} />
        <Route path='/admin-settings' element={<AdminSettings />} />

        {/*<Route path='/payment-success' element={<PaymentSuccess />} />
        <Route path='/payment-error' element={<PaymentError />} /> */}
      </Routes>
    </>
  );
}

export default App;
