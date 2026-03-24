import { Container } from "@mui/material"

const SectionContainer = ({children,sx}) => {
  return (
     <>
        <Container
      maxWidth={false}
      sx={{
        ...sx,
        maxWidth: {
          xs: "100%",
        //   sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
        mx: "auto",
        px: 2,
      }}
    >
        {children}
    </Container>
    </>
  )
}

export default SectionContainer
