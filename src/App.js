import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import "./App.css";
import Login from "./Login";

function App() {
  const [user] = useAuthState(auth);

  const signOut = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <>
      {user ? (
        <div className="app">
          <h1>Hello, {user.displayName}</h1>
          <h1>You are signed in as {user.email}</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
