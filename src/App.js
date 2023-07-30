// import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'
// import {DataProvider} from './GlobalState'
// import Header from './components/headers/Header'
// import MainPages from './components/mainpages/Pages'

// function App() {
//   return (
//     <DataProvider>
//       <Router>
//       <div className="App">
//      <Header/>
//      <MainPages/>
//     </div>
//     </Router>
//      </DataProvider>
   
//   );
// }

// export default App;
import React, { useEffect ,useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Preloader from './components/mainpages/home/Preloader';



function App() {
 const [loading,setloading]=useState(false);
 useEffect(()=>
 {
  setloading(true)
  setTimeout(() => {
    setloading(false);
  }, 5000);
 },[])
  return (
    <DataProvider>
       <div className="App">
       {loading?<Preloader/>: 
       <Router>
      
        <Header/>
     <MainPages/>

     </Router> }
    
     </div>
     </DataProvider>
   
  );
}

export default App;