import { useState } from "react";
import { GlobalStyle, BgImg } from "./styles/styles";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/navigation/Navbar";
import AdminPage from "./components/auth/AdminPage";
import Password from "./components/auth/Password";
import PasswordReset from "./components/auth/PasswordReset";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
 //i can navigate to the auth pages through the browser cause auth always = to true
  const [auth, setAuth] = useState(true)
 
  return (
   
      <Router>
      <GlobalStyle />
      <NavBar />
     <BgImg>
      <Route exact path="/">
        <div style={{position: "relative"}} >
        fdfdfdggggggggggggg
        </div>
      </Route>
      <ProtectedRoute exact path="/admin-page" component={AdminPage} auth={auth}/>
      <Route exact path="/admin-password" component={Password} />
      <ProtectedRoute exact path="/admin-page/password-reset" component={PasswordReset} auth={auth} />
      </BgImg>
      </Router>
    
  );
}

export default App;
