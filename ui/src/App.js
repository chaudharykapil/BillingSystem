import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModuleSalePage from "./screens/Sales/moduleSalePage"
import NewClientPage from "./screens/Sales/Client/NewClientPage";
function App() {
  
  return (
    
      <Routes >
        
          <Route path="/" element={<HomePage />} />
          <Route path="/sales/invoice/new" element = {<ModuleSalePage page = "newinvoice" /> }/> 
          <Route path="/sales/invoice/show" element = {<ModuleSalePage page = "showinvoice" /> }/>
          <Route path="/sales/client/new" element = {<NewClientPage />} />
          
      </Routes>
  )
}

export default App;
