import { createTheme } from "@mui/material";
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';


export const getTheme = (mode) => createTheme({
    mode,
    palette:palette(mode),
    typography,
    components : components(mode)
})