import { useEffect } from "react";
import useToken from "./useToken";
import Dashboard from "./Dashboard";

function Login() {
  const [token, setToken] = useToken();

  useEffect(() => {
    if (token) {
      // Redirect to dashboard or home page
      return <Dashboard></Dashboard>;
    }
  }, [token]);

  const handleLogin = () => {
    // Redirect to Spotify login page
    window.location.href = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`;
  };

  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        onClick={handleLogin}
      >
        Login to Spotify
      </button>
    </div>
  );
}

export default Login;
