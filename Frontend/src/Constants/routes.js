import AddDeliveryBoy from "../Admin/DeliveryBoyRecord/AddDeliveryBoy";
import DeliveryBoyList from "../Admin/DeliveryBoyRecord/DeliveryBoyList";
import AdminHome from "../Admin/Home/AdminHomePage";
import AddMenu from "../Admin/MenuRecord/AddMenuL";
import AddMenuType from "../Admin/MenuRecord/AddMenuType";
import EditMenu from "../Admin/MenuRecord/EditMenu";
import HotelMenu from "../Admin/MenuRecord/HotelMenu";
import Menu from "../Admin/MenuRecord/MenuList";
import MenuType from "../Admin/MenuRecord/MenuTypeList";
import { OrderList } from "../Admin/OrderRecord/OrderList";
import UserList from "../Admin/UserRecord/UserList";
import About from "../Common/AboutUs";
import Contact from "../Common/ContactUs";
import Home from "../Common/Home";
import AddAddress from "../Customer/Address/AddAddress";
import AddCart from "../Customer/Cart/AddCart";
import OrderDetails from "../Customer/Cart/OrderDetails";
import CustomerHome from "../Customer/Home/CustomerHomePage";
import { Orders } from "../Customer/Order/Orders";
import Payment from "../Customer/Payment/Payment";
import DeliveryHome from "../Delivery/Home/DeliveryBoyHomePage";
import AllOrdersRecord from "../Delivery/Orders/AllOrdersRecord";
import AssignOrder from "../Delivery/Orders/AssignOrder";
import ForgotPassword from "../User/ForgotPassword";
import Logout from "../User/Logout";
import Signin from "../User/Signin";
import Signup from "../User/Signup";
import UpdateProfile from "../User/UpdateProfile";
import Chat from "../Customer/Chat/Chat";
import Map from "../Customer/Google Map/Map";

export const routes = [
  {
    path: "/",
    private: false,
    Component: Home,
  },
  {
    path: "/signin",
    private: false,
    Component: Signin,
  },
  {
    path: "/signup",
    private: false,
    Component: Signup,
  },
  {
    path: "/contact",
    private: false,
    Component: Contact,
  },
  {
    path: "/about",
    private: false,
    Component: About,
  },
  {
    path: "/ForgotPassword",
    private: false,
    Component: ForgotPassword,
  },
  // admin
  {
    path: "/AdminHomePage",
    private: true,
    Component: AdminHome,
  },
  {
    path: "/UserList",
    private: true,
    Component: UserList,
  },
  {
    path: "/MenuList",
    private: true,
    Component: Menu,
  },
  {
    path: "/DeliveryBoyList",
    private: true,
    Component: DeliveryBoyList,
  },
  {
    path: "/AddDeliveryBoy",
    private: true,
    Component: AddDeliveryBoy,
  },
  {
    path: "/allorders",
    private: true,
    Component: OrderList,
  },
  {
    path: "/AddMenuType",
    private: true,
    Component: AddMenuType,
  },
  {
    path: "/AddMenuL",
    private: true,
    Component: AddMenu,
  },
  {
    path: "/MenuTypeList",
    private: true,
    Component: MenuType,
  },
  {
    path: "/EditMenu",
    private: true,
    Component: EditMenu,
  },
  {
    path: "/HotelMenu",
    private: true,
    Component: HotelMenu,
  },
  // customer
  {
    path: "/CustomerHomePage",
    private: true,
    Component: CustomerHome,
  },
  {
    path: "/map",
    private: true,
    Component: Map,
  },
  {
    path: "/AddAddress",
    private: true,
    Component: AddAddress,
  },
  {
    path: "/OrderDetails",
    private: true,
    Component: OrderDetails,
  },
  {
    path: "/Payment",
    private: true,
    Component: Payment,
  },
  {
    path: "/addcart",
    private: true,
    Component: AddCart,
  },
  {
    path: "/orders",
    private: true,
    Component: Orders,
  },
  {
    path: "/chat",
    private: true,
    Component: Chat,
  },
  // delivery boy
  {
    path: "/DeliveryBoyHomePage",
    private: true,
    Component: DeliveryHome,
  },
  {
    path: "/AllOrdersRecord",
    private: true,
    Component: AllOrdersRecord,
  },
  {
    path: "/AssignOrder/:orderId",
    private: true,
    Component: AssignOrder,
  },

  // all
  {
    path: "/updateprofile",
    private: true,
    Component: UpdateProfile,
  },
  {
    path: "/logout",
    private: true,
    Component: Logout,
  },
];
