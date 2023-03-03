import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import useToken from "./components/useToken";
import "./index.css";
import Login from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import Player from "./components/Player";

function App() {
  const [token, setToken] = useToken();

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="">
        <header className="text-white px-4 py-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Spotify React</h1>
          {!token ? (
            <Login setToken={setToken} />
          ) : (
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </header>
        <main className="p-4">
          <Routes>
            {token ? (
              <Route path="/dashboard" element={<Dashboard />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
