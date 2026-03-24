export const palette = (mode) => ({
    mode,
    primary : {
        main:"#00B207",
        light:"#84D187",
        dark : "#2C742F",
        contrastText : `${mode == "light" ? "#000" : "#fff"}`
    },
    background:{default : mode === "light" ? "#fff" : "#121212"}
})