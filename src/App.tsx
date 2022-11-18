//REACT ROUTER DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//PAGES
import { Feed } from "./pages/feed";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { SignUp } from "./pages/signup";
//STYLED COMPONENTS
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <Router>
     <GlobalStyle />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  )
}

export default App