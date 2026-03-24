import { Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ProductsFilter = ({filter,changeFilter,categories}) => {
  return (
      <Box sx={{boxShadow:"2px 2px 5px rgba(0,0,0,0.3)",p:2}}>
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Filter</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="title"
        name="radio-buttons-group"
        value={filter} 
        onChange={(e) => changeFilter(e.target.value)}
        >
        {categories.map(cat =><FormControlLabel key={cat.slug} value={cat.url} control={<Radio />} label={cat.slug} />)}
      </RadioGroup>
    </FormControl>
    </Box>
  )
}

export default ProductsFilter
