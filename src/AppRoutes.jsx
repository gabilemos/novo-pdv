import React, { useContext } from 'react';
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
//pages
import HomePage from './template/Paperbase';
import LoginPage from './Pages/loginPage';
//context
import { AuthProvider, AuthContext } from './Context/auth';


export default function App() {
const Private = ({children})=>{
  const{ authenticated, loading } = useContext(AuthContext);
  if(loading){
    return <div className="loading">Carregando...</div>
  }
  if(!authenticated){
    return <Navigate to="/Login"/>
  }
  return children;
}
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/" element={<Private><HomePage/></Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}


//<Route path="/" element={<Home />} />
