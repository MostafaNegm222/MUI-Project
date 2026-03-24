import { Box, Button, Container, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Typography } from '@mui/material';
import axios from "axios";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "../validations/LoginSchema";

const Login = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm({resolver:yupResolver(LoginSchema)})
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const result = await axios.post('https://dummyjson.com/auth/login',data)
            console.log(result);
            reset()
            setError("")
        } catch (error) {
            setError(error.response.data.message);
        }
        setLoading(false)
    }
  return (
    <Container sx={{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"}}>
      <Box
        sx={{ display: "flex", boxShadow: 2 ,minHeight:"80vh",width:"100%" }}
      >
        <Box
          component="img"
          src="https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
          sx={{
            width: "50%",
            objectFit:"cover",
            display: { xs: "none", md: "block" },
          }}
        />
        <Box 
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{width:{xs:"100%" ,md:"50%"} , mx:"auto" ,display:"flex" , flexDirection:"column",justifyContent:"center",alignItems:"center" ,gap:3}}
        >
            <Typography variant="h4" color="primary">Login Form</Typography>
            <Typography variant="body" color="error" sx={{width:"80%",textAlign:"center"}}>{error}</Typography>
            <TextField 
                sx={{width:"80%"}}
                label="UserName" 
                name="username" 
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
            />
            <TextField 
                sx={{width:"80%"}}
                label="Password"
                name="password" 
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message || "password must be 6 char"}
            />
            <Button loading={loading} variant="contained" color="primary" type="submit" sx={{px:3,width:"80%"}}>Login</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
