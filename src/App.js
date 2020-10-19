import React from 'react';
import LeftSide from './components/leftSide'
import RightSide from './components/rightSide'
import './App.css';


const MyContext = React.createContext('Hello Context');

function App() {
  return (
    <div className="App">

      <MyContext.Provider value="Hi">
        <LeftSide/>
      </MyContext.Provider>

      <RightSide/>     

    </div>
  );
}

export const Context = MyContext;
export default App;

