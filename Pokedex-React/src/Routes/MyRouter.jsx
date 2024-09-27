import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import App from "../App";
import User from "../components/user";
import Contact from "../components/contact";

const MyRouter = () => {
    return (
       <>
    <NavBar />
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </> 
    )
    
};

export default MyRouter