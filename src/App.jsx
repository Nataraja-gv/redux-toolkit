import React, { useState } from "react";
import { login, logout } from "./features/auth/authslice";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./features/count/countslice";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

export const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userinput = useSelector((state) => state.auth.user);
  const count = useSelector((state) => state.counter.count);

  const [username, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLogin = () => {
    dispatch(login({ username }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">
          {/* Welcome, {userinput ? userinput.username : "Login me"} for Redux Tutorial */}
        </h1>

        <h2 className="text-lg mb-4">Count Amount: {count}</h2>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment by 5
          </button>
          <button
            onClick={() => dispatch(decrementByAmount(5))}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Decrement by 5
          </button>
        </div>

        <div style={{marginTop:"20px"}}>
          {isAuthenticated ? (
            <div>
              <h1>Welcom  to {username}</h1>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
              />
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )};