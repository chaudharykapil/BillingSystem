import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModuleSalePage from "./screens/Sales/moduleSalePage"
function App() {
  
  return (
    
      <Routes >
        
          <Route path="/" element={<HomePage />} />
          <Route path="/sales/invoice/new" element = {<ModuleSalePage page = "newinvoice" /> }/> 
          <Route path="/sales/invoice/show" element = {<ModuleSalePage page = "showinvoice" /> }/> 
      </Routes>
  )
}

export default App;
