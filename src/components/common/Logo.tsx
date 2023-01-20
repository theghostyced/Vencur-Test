import React from "react";
import {Link} from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img className="md:h-auto h-8" src="/images/Logo.svg" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
