import React from "react";
import Link from "next/link";

function CoachPage() {
  return (
    <div className="container mx-auto mt-3">
      <div className="text-center ">
        <Link href={`/coaches/addcoach`} passHref>
          <button className="inline-flex justify-center w-1/2 sm:w-1/3 px-4 py-2 text-white rounded shadow-md bg-sky-600 hover:bg-sky-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>{" "}
            <span> Add Coach</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CoachPage;
