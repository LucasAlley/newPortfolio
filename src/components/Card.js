import React from "react";

export default function Card({ title, website, code, children }) {
  return (
    <div className="flex flex-col lg:w-1/3 w-11/12">
      <h3 className="font-semibold text-2xl">{title}</h3>
      {children}
      <div className="flex justify-between w-36 mt-4">
        <a
          className="text-lg font-semibold"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        {code && (
          <>
            <div className="border border-l-2 border-indigo-400"></div>
            <a
              className="text-lg font-semibold"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </>
        )}
      </div>
    </div>
  );
}
