// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute"; // Import your ProtectedRoute component
// import "./App.css";
// import React from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Navbar1 from "./Components/Navbar1";
// import About from "./Common/AboutUs";
// import Contact from "./Common/ContactUs";
// import Signin from "./User/Signin";
// import Signup from "./User/Signup";
// import UpdateProfile from "./User/UpdateProfile";
// import AdminHome from "./Admin/Home/AdminHomePage";
// import CustomerHome from "./Customer/Home/CustomerHomePage";
// import Veg from "./Customer/Home/Veg";
// import Nonveg from "./Customer/Home/Nonveg";
// import SouthIndian from "./Customer/Home/Southindian";
// import Thali from "./Customer/Home/thali";
// import Rice from "./Customer/Home/Rice";
// import Roti from "./Customer/Home/Roti";
// import Sweets from "./Customer/Home/sweets";
// import Chinese from "./Customer/Home/Chinese";
// import UserList from "./Admin/UserRecord/UserList";
// import DeliveryBoyList from "./Admin/DeliveryBoyRecord/DeliveryBoyList";
// import HotelMenu from "./Admin/MenuRecord/HotelMenu";
// import MenuType from "./Admin/MenuRecord/MenuTypeList";
// import Menu from "./Admin/MenuRecord/MenuList";
// import ForgotPassword from "./User/ForgotPassword";
// import AddCart from "./Customer/Cart/AddCart";
// import AddAddress from "./Customer/Address/AddAddress";
// import OrderDetails from "./Customer/Cart/OrderDetails";
// import AddMenu from "./Admin/MenuRecord/AddMenuL";
// import AddMenuType from "./Admin/MenuRecord/AddMenuType";
// import AddDeliveryBoy from "./Admin/DeliveryBoyRecord/AddDeliveryBoy";
// import Logout from "./User/Logout";
// import ShowCart from "./Customer/Cart/ShowCart";
// import DeliveryHome from "./Delivery/Home/DeliveryBoyHomePage";
// import AllOrdersRecord from "./Delivery/Orders/AllOrdersRecord";
// import AssignOrder from "./Delivery/Orders/AssignOrder";
// import Payment from "./Customer/Payment/Payment";
// import EditMenu from "./Admin/MenuRecord/EditMenu";
// import { PrivateRoute } from "./routes/PrivateRoute";
// import Home from "./Common/Home";
// import HomePage from "./HomePage/HomePage";
// import EditDeliveryBoy from "./Admin/DeliveryBoyRecord/EditDeliveryBoy";
// import UserListPDF from "./Admin/UserRecord/UserListPDF";
// import OrderList from "../Admin/OrderRecord/OrderList";
// import { Chat } from "@mui/icons-material";

// const Router = () => {
//   // Replace this with the actual user role logic
//   const userRole = "admin";

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ... Other public routes ... */}
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/signin" element={<Signin />} />
//         <Route exact path="/signup" element={<Signup />} />
//         <Route exact path="/ForgotPassword" element={<ForgotPassword />} />

//         {/* Admin routes */}
//         <Route
//           path="/AdminHomePage"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <AdminHome />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/UserList"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <UserList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/HotelMenu"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <HotelMenu />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/MenuTypeList"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <MenuType />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/AddMenuL"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <AddMenu />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/MenuList"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <Menu />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/EditMenu"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <EditMenu />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/DeliveryBoyList"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <DeliveryBoyList />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/AddDeliveryBoy"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <AddDeliveryBoy />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/AllOrdersRecord"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["admin"]}
//               redirectTo="/"
//             >
//               <AllOrdersRecord />
//             </ProtectedRoute>
//           }
//         />
//         {/* Add more admin routes similarly */}

//         {/* Customer routes */}
//         <Route
//           path="/CustomerHomePage"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <CustomerHome />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <Contact />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <About />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/map"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <Map />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/OrderDetails"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <OrderDetails />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/chat"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <Chat />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/updateprofile"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <UpdateProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/AddCart"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <AddCart />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/AddAddress"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <AddAddress />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/Payment"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <Payment />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/OrderList"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["customer"]}
//               redirectTo="/"
//             >
//               <OrderList />
//             </ProtectedRoute>
//           }
//         />
//         {/* Add more customer routes similarly */}

//         {/* Delivery Boy routes */}
//         <Route
//           path="/DeliveryBoyHomePage"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["deliveryBoy"]}
//               redirectTo="/"
//             >
//               <DeliveryHome />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/AllOrdersRecord"
//           element={
//             <ProtectedRoute
//               userRole={userRole}
//               allowedRoles={["deliveryBoy"]}
//               redirectTo="/"
//             >
//               <AllOrdersRecord />
//             </ProtectedRoute>
//           }
//         />
//         {/* Add more deliveryBoy routes similarly */}

//         <Route path="*" element={<>Page Not found</>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
