import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import SearchInput from "../components/SearchInput";
import ProductsDrawer from "../components/ProductsDrawer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getData() {
      const baseUrl = filter || "https://dummyjson.com/products";
      const result = await axios.get(`${baseUrl}?sortBy=${sort}&order=${order}`);
      setProducts(result.data.products);
      const results = await axios.get(
        `https://dummyjson.com/products/categories`,
      );
      setCategories(results.data);
    }
    getData();
  }, [sort, filter,order]);
  const filterProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <Container maxWidth="xl" sx={{ mx: "auto" }}>
      <Typography variant="h4" sx={{ textAlign: "center", my: 5 }}>
        Products Page
      </Typography>
      <Box
        sx={{ display: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <SearchInput
          variant="outlined"
          label="Search for product..."
          sx={{ width: "80%", my: 3 }}
          value={search}
          onChange={setSearch}
        />
        <ProductsDrawer
          sx={{ flexGrow: 1 }}
          value={sort}
          onChange={setSort}
          filter={filter}
          changeFilter={setFilter}
          categories={categories}
          order={order}
          setOrder={setOrder}
        />
      </Box>
      <Grid container spacing={4} alignContent={"stretch"}>
        {filterProducts.map((p) => (
          <Grid key={p.id} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
            <ProductCard sx={{ height: "100%" }} product={p} />
          </Grid>
        ))}
      </Grid>
      {filterProducts.length == 0 && (
        <Typography variant="h4" textAlign="center">
          No Products to Show...
        </Typography>
      )}
    </Container>
  );
};

export default Products;
