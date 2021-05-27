import React from 'react';

class Header extends React.Component {
    render() {
        const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png";

        return(
            <header className={"header"}>
                <img className={"logo"} alt="logo do anime Pokemon" src={image}></img>
            </header>
        )
    }
}

export default Header;