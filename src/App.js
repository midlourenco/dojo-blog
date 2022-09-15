import {BrowserRouter as Router, Link, Route, Routes,Navigate} from "react-router-dom" 
//pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogCreate from "./pages/BlogCreate";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
   
      <div className="content">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/blogs/create"} element={<BlogCreate />} />
        <Route path={"/blogs/:id"} element={<BlogDetails />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/redirect"} element={<Navigate to="/" />} />
        
        <Route path={"/*"} element={(
          <div>
            <h2>404: Page not found :( </h2>
          </div>
        )} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
 