import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <Box sx={{display:"flex",minHeight:"100vh",bgcolor: "background.default"}} justifyContent="space-between" flexDirection="column">
        <Box>
            <Navbar/>
            <Box sx={{pt:"65px"}}>
                <Outlet/>
            </Box>
        </Box>
        <Footer/>
    </Box>
  );
};

export default MainLayout;
