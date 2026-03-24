import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "#fff",
        mt: 5,
        pt: 6,
        pb: 3,
        width:"100%"
      }}
    >
      <Container maxWidth={false} sx={{width:"100%"}}>
        <Grid container spacing={4}>
          
          {/* 🟢 Logo + Description */}
          <Grid size={{ xs: 12, md: 4 }} sx={{textAlign:{xs:"center" ,md:"left"},display:{xs:"none",md:"block"}}}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Negm
            </Typography>
            <Typography variant="body2" color="rgb(220,220,220)">
              Building modern web applications with React and Material UI.
            </Typography>
          </Grid>

          {/* 🔵 Links */}
          <Grid size={{ xs: 12, sm: 6 ,md:4}} sx={{textAlign:{xs:"center" ,md:"left"},display:{xs:"none",md:"block"}}}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>

            {["Home", "Products", "Blog"].map((item) => (
              <Typography
                key={item}
                component={NavLink}
                to={`/${item.toLowerCase()}`}
                sx={{
                  display: "block",
                  color: "rgb(220,220,220)",
                  textDecoration: "none",
                  mb: 1,
                  "&.active": {
                    color: "#fff",
                    fontWeight: "bold"
                  },
                  "&:hover": {
                    color: "#fff"
                  }
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* 🟣 Social */}
          <Grid size={{ xs: 12, sm: 6 ,md:4}} sx={{textAlign:{xs:"center" ,md:"left"},display:{xs:"none",md:"block"}}}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>

            <Box>
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

        </Grid>

        {/* 🔻 Bottom */}
        <Box
          sx={{
            mt: {xs:0,md:5},
            pt: 3,
            borderTop: "1px solid #dadada",
            textAlign: "center"
          }}
        >
          <Typography variant="body2" color="rgb(220, 220, 220)">
            © {new Date().getFullYear()} Negm. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;