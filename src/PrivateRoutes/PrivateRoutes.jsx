import React, { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loding } = useContext(AuthContex);
  if (loding) {
    return <span className="loading loading-spinner text-error"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRoutes;
