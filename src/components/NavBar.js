import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const displayEachLink = links.map( link => <a key={link} href={`#${link}`}>{link}</a>)
  
  return <nav>
             {displayEachLink}
         </nav>;
}

export default NavBar;
