import { Route, Routes } from "react-router-dom";
import Home from "pages/Dashboard/Home/Home";
import InventoryMgt from "pages/Dashboard/InventoryManagement/InventoryMgt";
import OrderMgt from "pages/Dashboard/OrderManagement/OrderMgt";
import Notification from "pages/Dashboard/Home/Notification";
import Profile from "pages/Dashboard/Home/Profile/Profile";





const DashboardRoutes = () => {
  return (
    <div className="main-fit">
      <Routes>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/inventory-management" element={<InventoryMgt/>}/>
        <Route path="/dashboard/order-management" element={<OrderMgt/>}/>
        <Route path="/dashboard/home/notification" element={<Notification/>}/>
        <Route path="/dashboard/home/profile" element={<Profile/>}/>

      </Routes>
    </div>
  );
};

export default DashboardRoutes;
