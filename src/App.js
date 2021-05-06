import { useState } from "react";
import { GlobalStyle, BgImg } from "./styles/styles";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/navigation/Navbar";
import AdminPage from "./components/auth/AdminPage";
import Password from "./components/auth/Password";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
 
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
      <ProtectedRoute path="/admin-page" component={AdminPage} auth={auth}/>
      <Route exact path="/admin-password" component={Password} />
      </BgImg>
      </Router>
    
  );
}

export default App;
