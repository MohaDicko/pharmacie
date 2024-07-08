import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Login from "./component/pages/Login";

const isTokenExpired = (token) => {
  if (!token) return true;

  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return Date.now() >= decodedToken.exp * 1000;
};

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  // console.log('User:', user);
  // Vérifie si l'utilisateur est authentifié et si le token est encore valide
  const isAuthenticated = user && user.token && !isTokenExpired(user.token);

  return isAuthenticated ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
