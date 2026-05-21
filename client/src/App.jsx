import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notes from "./pages/Notes";
import Header from "./components/layout/Header"
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
        <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
