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



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/tags" element={<Tags/>}/>
                <Route path="/money" element={<Money/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="/" element={<Navigate replace to="/money"/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </Router>
    );
}
export default App;
