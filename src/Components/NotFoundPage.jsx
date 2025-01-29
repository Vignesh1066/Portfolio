import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../assets/error.jpg"

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center gap-3"
      style={{ textAlign: "center" }}
    >
        <img src={ErrorImage} alt="error 404"  className="w-[350px] h-[250px]"/>
      <p className="text-2xl">Oops! The page you're looking for doesn't exist.</p>
      <button
        className="bg-green-800 py-2 px-2 rounded-md text-white drop-shadow-xl"
        onClick={handleGoHome}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
