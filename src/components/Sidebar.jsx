
import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Icon, Item, Logo, LogoText } from 'react-sidebar-ui'

const Navbar = () => {
    return (
        <div>
            <Sidebar bgColor='black' isCollapsed={false}>
                <Logo
                    image='../../src-tauri/icons/128x128.png'
                    imageName='irish project logo' />
                <LogoText>The Irish Project</LogoText>

                <Item bgColor='black'>
                    <Icon><i className="fas fa-home" /></Icon>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                </Item>
                <Item bgColor='black'>
                    <Icon><i className="fa-sharp fa-solid fa-drum" /></Icon>
                    <Link to="/instruments" style={{ textDecoration: 'none', color: 'inherit' }}>Instruments</Link>
                </Item>

                <div style={{ position: 'absolute', bottom: 10, justifyContent: 'center', width: '100%' }}>
                    <Item bgColor='black'>
                        <Icon><i class="fa-brands fa-github"></i></Icon>
                        <a href="https://github.com/waterdrop-io/irish-project" style={{ textDecoration: 'none', color: 'inherit' }}>Github</a>
                    </Item>
                    <Item bgColor='black'>
                        <Icon><i class="fa-solid fa-book-open-reader"></i></Icon>
                        <a href="https://github.com/waterdrop-io/irish-project/blob/529cac62247d5d18c210b68544b665bf99edd177/LICENCE" style={{ textDecoration: 'none', color: 'inherit' }}>Licence</a>
                    </Item>
                </div>
            </Sidebar>
        </div >
    );
}

export default Navbar;
