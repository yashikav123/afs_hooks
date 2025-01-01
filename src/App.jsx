import React from 'react';
import  { createContext, useState } from 'react';
import Stomach from './Stomach.jsx';

export let nameContext = createContext();
function App() {
    let [visible,setvisible]=useState(false);
    return (
        <nameContext.Provider value={"Water"}>
            <button onClick={()=>setvisible(!visible)}>{visible?"Hungry stomach":"stomach filled"}
                </button>
                {visible && <Stomach />}
        </nameContext.Provider>
    );
}

export default App;