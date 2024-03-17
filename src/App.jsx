import { useState } from "react";
import { Routes } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  // if user exists take them to the routes, if not take them to AuthPage
  // AFTER create Auth Page, NEED TO comment back in code for if user is logged in go to routes, if not go to AuthPage.
  return (
    <>
      {/* {user ? <Routes></Routes> : <AuthPage />} */}
      <h1>Movie App</h1>
    </>
  );
};

export default App;
