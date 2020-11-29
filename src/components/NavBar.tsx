import styled from "@emotion/styled";
import React from "react";
import {NavLink} from "react-router-dom";

interface IProps {
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBar: React.FC<IProps> = () => {
    return <Root>
        <nav>
            <div className="nav-wrapper purple darken-2 px1">
                <a href="#" className="brand-logo">ToDo List</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Список дел</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Информация</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </Root>;
}
export default NavBar;