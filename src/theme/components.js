
export const components = (mode) => ({
    MuiButton : {
        styleOverrides : {
            root : {
                textTransform : "none"
            }
        }
    },
    MuiTypography: {
    styleOverrides: {
      root: {
        color: `${mode == "light" ? "#000" : "#fff"}`
      }
    }
  }
})