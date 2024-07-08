import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser({
          ...decodedToken,
          token,
        });
        // console.log('User after decoding token:', decodedToken);
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, []);

  const login = async (username, password) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      const decodedToken = jwtDecode(data.token);
      setUser({
        ...decodedToken,
        token: data.token,
      });
      localStorage.setItem("token", data.token);
      // console.log('User after login:', decodedToken);
      navigate("/dashboard"); // Navigate to the dashboard after login
    } else {
      throw new Error(data.message);
    }
  };

  const register = async (username, password, fullname) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          fullname,
        
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  };

//   const updateUser = async (id, updates) => {
//     const token = localStorage.getItem("token");
//     const response = await fetch(
//       `${import.meta.env.VITE_API_URL}/api/updateUser/${id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(updates),
//       }
//     );
//     const data = await response.json();
//     if (response.ok) {
//       // console.log('User after update:', data.user);
//     } else {
//       throw new Error(data.message);
//     }
//   };

//   const deleteUser = async (id) => {
//     const token = localStorage.getItem("token");
//     const response = await fetch(
//       `${import.meta.env.VITE_API_URL}/api/deleteUser/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const data = await response.json();
//     if (response.ok) {
//       console.log("User deleted successfully");
//     } else {
//       throw new Error(data.message);
//     }
//   };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/"); // Navigate to the login page after logout
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
