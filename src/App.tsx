import styled from "@emotion/styled";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from "react";
import NavBar from "./components/NavBar";
import ToDoPage from "./pages/TodosPage";
import About from "./pages/About";

interface IProps {
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC<IProps> = () => {
    return <Root>
        <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route component={ToDoPage} path='/' exact/>
            <Route component={About} path='/about' exact/>
        </Switch>
        </BrowserRouter>
    </Root>;
}
export default App;