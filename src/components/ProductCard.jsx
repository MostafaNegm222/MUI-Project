import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Badge, Box, Rating } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { NavLink } from "react-router";

const ProductCard = ({ product, sx }) => {
  return (
    <Card
      sx={{
        ...sx,
        pb: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Typography
        color="#fff"
        variant="body2"
        sx={{ backgroundColor: "success.dark", px: 1, borderRadius: 1 , position:"absolute" ,top:"10px",right:"10px"}}
      >
        {product.price}
      </Typography>
      <CardMedia
        component="img"
        alt={product.title}
        height="250"
        image={product.images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Box
          sx={{ display: "flex", width: "100%", my: 2 }}
          gap={2}
          justifyContent={"flex-start"}
        >
          {product.tags.map((t, i) => (
            <Typography
              key={i}
              color="#fff"
              variant="body2"
              sx={{ backgroundColor: "primary.light", px: 1, borderRadius: 1 }}
            >
              {t}
            </Typography>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description.slice(0, 40) + `...`}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2 ,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Button
          variant="contained"
          component={NavLink}
          to={`${product.id}`}
          endIcon={<ArrowRight />}
        >
          Show more
        </Button>
        <Rating name="read-only" value={product.rating} precision={0.2} readOnly />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
