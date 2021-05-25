import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
            <h1>Akash Dev V</h1>
            <Typed
                className="typed-text"
                strings={["Designer","Web Developer","App Developer","Freelancer"]}
                typeSpeed={70}
                backSpeed={70}
                loop
            />
            </div>
        </div>
    )
}

export default Header;
