import React from "react";
import Link from "next/link";

function AppBar() {
  return (
    <>
      <div className="w-screen p-4 text-center bg-slate-300">
        <Link href={`/`} passHref>
          <span className="text-2xl">Unschedule</span>
        </Link>
      </div>
      <div className="flex justify-evenly">
        <Link href={`/coaches`} passHref>
          Coaches
        </Link>
        <div>Works</div>
        <div>Add Works</div>
      </div>
      <hr />
    </>
  );
}

export default AppBar;
