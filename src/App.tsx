import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import RegisterForm from "./components/RegisterForm.tsx";
import LoginForm from "./components/LoginForm.tsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col flex-grow">
                <main className="flex-grow justify-center"></main>
                <Footer />
              </div>
            }
          />

          <Route
            path="/register"
            element={
              <div className="flex flex-col flex-grow">
                <main className="flex-grow justify-center">
                <RegisterForm />
                </main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="flex flex-col flex-grow">
                <main className="flex-grow justify-center">
                <LoginForm />
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
