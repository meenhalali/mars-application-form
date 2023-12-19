import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Contact } from "./components/Stage1";
import { TravelPreferences } from "./components/Stage2";
import { Health } from "./components/Stage3";
import { ConfirmData } from "./components/Submit";
import { Success} from "./components/Success";
 
export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/travelpreferences" element={<TravelPreferences  />} />
            <Route path="/health" element={<Health />} />
            <Route path="/confirm" element={<ConfirmData />} />
            <Route path="/success" element={<Success/>}/>
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};