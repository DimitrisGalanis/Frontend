import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    await axios
      .post(process.env.REACT_APP_rubiks_api + "api/auth/login", inputs)
      .then((res) => {
        setToken(res.data.token);
        delete res.data.token;
        setCurrentUser(res.data);
      });
  };

  const logout = async (inputs) => {
    await axios.post(process.env.REACT_APP_rubiks_api + "api/auth/logout");
    setCurrentUser(null);
    setToken(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("token", JSON.stringify(token));
  }, [currentUser, token]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
