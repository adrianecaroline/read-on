import { Initial } from "./Pages/Home/Initial";
import { Profile } from "./Pages/Profile/Profile";
import MyList from "./Pages/List/MyList";
import React from "react";
import { Routes, Route } from "react-router-dom";


//export const Contexto = React.createContext({});

function App() {
  //const [info, setInfo] = useState({})

  return ( 
    //<Contexto.Provider value={[info, setInfo]}>
      <Routes>
        <Route exact path="/" element={<Initial />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/mylist" element={<MyList />} />
      </Routes>
    //</Contexto.Provider>
  );
}

export default App;
