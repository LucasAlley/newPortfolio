import React from "react";

export default function Links({ isPublic, website, projectName }) {
  return (
    <div className="flex justify-between w-36 mt-4">
      <a
        className="text-lg font-semibold"
        href={website}
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </a>
      {isPublic ? (
        <>
          <span className="border border-l-2 border-indigo-400"></span>
          <a
            className="text-lg font-semibold"
            href={`https://github.com/LucasAlley/${projectName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </>
      ) : null}
    </div>
  );
}
