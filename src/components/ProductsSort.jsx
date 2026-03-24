import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
const ProductsSort = ({value,onChange,order,setOrder}) => {
  return (
    <Box sx={{boxShadow:"2px 2px 5px rgba(0,0,0,0.3)",p:2}}>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sort</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="title"
        name="radio-buttons-group"
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      >
        <FormControlLabel value="title" control={<Radio />} label="title" />
        <FormControlLabel value="price" control={<Radio />} label="price" />
        <FormControlLabel value="rating" control={<Radio />} label="rating" />
        <FormControlLabel value="discountPercentage" control={<Radio />} label="discountPercentage" />
        <FormControlLabel value="stock" control={<Radio />} label="stock"/>
      </RadioGroup>
    </FormControl>

     <FormControl sx={{ mt: 2 }}>
        <FormLabel>Order</FormLabel>
        <RadioGroup
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          defaultValue="asc"
        >
          <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
          <FormControlLabel value="desc" control={<Radio />} label="Descending" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default ProductsSort
