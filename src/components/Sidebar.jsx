
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
                        <Icon><i className="fa-brands fa-github" /></Icon>
                        <a href="https://github.com/Zuygui/irish-project" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>Source code</a>
                    </Item>
                    <Item bgColor='black'>
                        <Icon><i className="fa-regular fa-copyright" /></Icon>
                        <a href="https://github.com/Zuygui/irish-project/blob/master/LICENCE" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>Licence</a>
                    </Item>
                </div>
            </Sidebar>
        </div >
    );
}

export default Navbar;
