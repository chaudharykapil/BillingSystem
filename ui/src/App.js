import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModuleSalePage from "./screens/Sales/moduleSalePage"
import NewClientPage from "./screens/Sales/Client/NewClientPage";
import Signup from "./screens/Signup";
import SignIn from "./screens/SignIn";
function App() {
  
  return (
    
      <Routes >
        
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard" element = {<HomePage />} />
          <Route path="/sales/invoice/new" element = {<ModuleSalePage page = "newinvoice" /> }/> 
          <Route path="/sales/invoice/show" element = {<ModuleSalePage page = "showinvoice" /> }/>
          <Route path="/sales/client/new" element = {<NewClientPage />} />
          
      </Routes>
  )
}

export default App;
