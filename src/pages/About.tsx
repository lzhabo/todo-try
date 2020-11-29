import styled from "@emotion/styled";
import React from "react";
import {useHistory } from "react-router-dom"
interface IProps {
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const About: React.FC<IProps> = () => {
    const history = useHistory();
    return <Root>
        <h1>About page</h1>
        <button className='btn' onClick={()=>history.push('/')}>Back to ToDo list</button>
    </Root>;
}
export default About;