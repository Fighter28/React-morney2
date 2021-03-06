import React from 'react';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/Nomatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color: #333;
`;


function App() {
    return (
        <AppWrapper>
            <Router>
                <Routes>
                    <Route path="/tags" element={<Tags/>}/>
                    <Route path="/money" element={<Money/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/" element={<Navigate replace to="/money"/>} />
                    <Route path="*" element={<NoMatch/>}/>
                    <Route path="/tags/:id" element={<Tag/>}/>
                </Routes>
            </Router>
        </AppWrapper>
    );
}

export default App;
