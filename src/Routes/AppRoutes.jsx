import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

//NAV-COMPONENTS
import AirConditioner from './../Components/Header/Nav-menu/AirConditioner'
import KitchenAppliances from './../Components/Header/Nav-menu/KitchenAppliances'
import PcsAndLaptops from './../Components/Header/Nav-menu/PcsAndLaptops'
import Gadgets from './../Components/Header/Nav-menu/Gadgets'
import SmartHome from './../Components/Header/Nav-menu/SmartHome'

//HEADER-COMPONENTS
import HomeAppliances from './../Components/Header/HomeAppliances'
import AudioAndVideo from './../Components/Header/AudioAndVideo'
import Refrigerator from './../Components/Header/Refrigerator'
import NewArrivals from './../Components/Header/NewArrivals'
import TodaysDeal from './../Components/Header/TodaysDeal'
import CartItems from "../Components/Header/Nav-menu/CartItems";
import GiftCards from './../Components/Header/GiftCards'
import Login from './../Components/Header/Login'

import { CartProvider } from "../Context/CartContext";


const AppRoutes = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />

                    <Route path="/airconditioner" element={<AirConditioner />} />
                    <Route path="/kitchenappliances" element={<KitchenAppliances />} />
                    <Route path="/pcs&laptops" element={<PcsAndLaptops />} />
                    <Route path="/gadgets" element={<Gadgets />} />
                    <Route path="/smarthome" element={<SmartHome />} />

                    <Route path="/homeappliances" element={<HomeAppliances />} />
                    <Route path="/audio&video" element={<AudioAndVideo />} />
                    <Route path="/refrigerator" element={<Refrigerator />} />
                    <Route path="/newarrivals" element={<NewArrivals />} />
                    <Route path="/todaysdeal" element={<TodaysDeal />} />
                    <Route path="/cart" element={<CartItems />} />
                    <Route path="/giftcards" element={<GiftCards />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default AppRoutes