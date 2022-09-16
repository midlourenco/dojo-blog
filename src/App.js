import {BrowserRouter as Router, Link, Route, Routes,Navigate} from "react-router-dom" 
//pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogCreate from "./pages/BlogCreate";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="body">
        <div className="content">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/blogs/create"} element={<BlogCreate />} />
          <Route path={"/blogs/:id"} element={<BlogDetails />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/redirect"} element={<Navigate to="/" />} />
          <Route path={"*"} element={(
            <div>
              <h2>Sorry</h2>
              <p>404: Page not found :( </p>
              <Link to={"/redirect"}> 🔙 Back to the homepage</Link>
            </div>
          )} />
        </Routes>
        </div>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
 