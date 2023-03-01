import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import useToken from "./components/useToken";
import "./index.css";
import Login from "./components/Login";

export default function App() {
  const [token, setToken] = useToken();

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="bg-gray-900 h-screen">
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
        <Dashboard />
      </main>
    </div>
  );
}
