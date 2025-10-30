import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Student from "./Pages/Student";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />}>
            <Route path="student" element={<Student />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
