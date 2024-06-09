import Card from "./components/Card";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useState  } from 'react';





function App()
{
  const [users,setusers]=useState(
    [
        {
            username:"raj",
            password:"32"
        }
    ]
  )
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    

    
   
  </div>
  )
    
    
  
}


export default App;
