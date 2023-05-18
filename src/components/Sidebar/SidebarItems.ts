import { ReactComponent as homeIcon} from "assets/icons/home.svg";
import { ReactComponent as orderMgt } from "assets/icons/order_management.svg";
import { ReactComponent as productMgt } from "assets/icons/product_mgt.svg";
import { ReactComponent as outletMgt } from "assets/icons/outlet_mgt.svg";
import {ReactComponent as ratings} from "assets/icons/ratings_reviews.svg"
import { ReactComponent as  signOut} from "assets/icons/sign_out.svg";





const SidebarItems = [
  {
    title: "home",
    path: "/dashboard/home",
    icon: homeIcon,
  },
  {
    title: "Inventory Management",
    path: "/dashboard/inventory-management",
    icon: productMgt,
  },
  {
    title: "Order Management",
    path: "/dashboard/order-management",
    icon: orderMgt,
  },
  {
    title: "Logout",
    path: "",
    icon: signOut,
  },
];
export default SidebarItems;
