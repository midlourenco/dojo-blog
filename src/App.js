import {BrowserRouter as Router, Link, Route, Routes,Navigate} from "react-router-dom" 



//pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogCreate from "./pages/BlogCreate";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import Planets from "./pages/Planets";
import Footer from "./components/Footer";
import People from "./pages/People";
import Superheroes from "./pages/Superheroes";
import RQSuperHeroes from "./pages/RQSuperHeroes";
import RQSuperHeroDetails from "./pages/RQSuperHeroDetails";
import ParallelQueriesPage from "./pages/tutorial_options/ParallelQueriesPage";
import DynamicParallel from "./pages/tutorial_options/DynamicParallel";
import DependentQueries from "./pages/tutorial_options/DependentQueries";
import PaginatedQueries from "./pages/tutorial_options/PaginatedQueries";
import InfiniteQueries from "./pages/tutorial_options/InfiniteQueries";



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

          <Route path={"/superheroes"} element={<Superheroes />} />
          <Route path={"/rqsuperheroes/:id"} element={<RQSuperHeroDetails />} />
          <Route path={"/rqsuperheroes"} element={<RQSuperHeroes />} />
          <Route path='/rqparallel' element={<ParallelQueriesPage />} />

          <Route path='/rqdynamicparallel' element={<DynamicParallel heroIds={[1,3]} />} />
          <Route path='/rqdependent' element={<DependentQueries  email={"vishwas@example.com"} />} />
          <Route path='/rqpaginated' element={<PaginatedQueries  />} />
          <Route path='/rqinfinite' element={<InfiniteQueries  />} />
        

          <Route path={"/planets"} element={<Planets />} />
          <Route path={"/people"} element={<People />} />
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
 