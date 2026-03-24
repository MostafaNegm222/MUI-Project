import { TextField } from "@mui/material";

const SearchInput = ({
  sx,
  label = "",
  variant = "standard",
  errorText = "",
  error = false,
  value,
  onChange
}) => {
  return (
    <>
      <TextField
        sx={{ ...sx }}
        variant={variant}
        label={label}
        error={error}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        helperText={errorText}
        fullWidth
      />
    </>
  );
};

export default SearchInput;
