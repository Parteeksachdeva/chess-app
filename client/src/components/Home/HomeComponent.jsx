import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeComponent() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => {
          const newDate = Date.now() + Math.floor(Math.random());
          navigate(`/${newDate}`);
        }}
        className="bg-blue-700 text-white p-4 rounded-md"
      >
        Play With Friends
      </button>
    </div>
  );
}
