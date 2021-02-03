import React from "react";

export default function Title({ children, title }) {
  return (
    <div className="flex items-center space-x-2">
      <h3 className="font-semibold text-2xl"> {title}</h3>
      {children}
    </div>
  );
}
