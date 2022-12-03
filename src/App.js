import { Initial } from "./Pages/Initial/Initial";
import { Profile } from "./Pages/Home/Home";
import MyList from "./Pages/List/MyList";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "./components/Search/Search";

//export const Contexto = React.createContext({});

function App() {
  //const [info, setInfo] = useState({})

  return ( 
    //<Contexto.Provider value={[info, setInfo]}>
      <Routes>
        <Route exact path="/" element={<Initial />} />
        <Route exact path="/home" element={<Profile />} />
        <Route exact path="/mylist" element={<MyList />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    //</Contexto.Provider>
  );
}

export default App;
