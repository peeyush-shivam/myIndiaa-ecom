import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = ({ title, message, action }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate("/"), [navigate]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-10">
      <div className="text-4xl">
        {/* 404 Not found */}
        {title}
      </div>
      <span className="text-sm">{message}</span>
      <button
        className="bg-secondary-300 text-sm rounded-sm text-text-100 p-2 hover:bg-hoverButton-100"
        onClick={handleClick}
      >
        {action}
      </button>
    </div>
  );
};

export default memo(NotFound);
