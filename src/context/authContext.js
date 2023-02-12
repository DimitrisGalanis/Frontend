import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    await axios
      .post(process.env.REACT_APP_rubiks_api + "api/auth/login", inputs)
      .then((res) => {
        setCurrentUser(res.data);
      });
  };

  const logout = async (inputs) => {
    await axios.post(process.env.REACT_APP_rubiks_api + "api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
