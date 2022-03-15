import React, { useState,createContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Usuario from "../../Database/systemBase/models/usuario"

export const AuthContext = createContext('authContext');

export const AuthProvider = ({children}) =>{
  const navigate = useNavigate();
  const [auth,setAuth] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const recoveredUser = localStorage.getItem('user');
    if(recoveredUser){
      setAuth(JSON.parse(recoveredUser))
    }
    setLoading(false);
  },[])
  const login = (user,password)=>{

    console.log(Usuario.getUsuario());
    //let names = Electron.app.getName;
    //console.log(names);

    const logedUser ={
      id: '123',
      user,
    }
    localStorage.setItem("user",JSON.stringify(logedUser));
    //função autenticação entra aqui
    if(password === '123'){
      setAuth({logedUser});//fixo
      navigate("/");
    }else{
      navigate("/Login");
    }
    console.log('login Auth',{user,password});

  }

  const logout = () =>{
    console.log('logout');
    setAuth(null);
    navigate("/Login");
  };
  return(
    <AuthContext.Provider value={{authenticated: !!auth,auth, loading,login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
