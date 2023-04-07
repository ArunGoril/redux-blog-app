import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <div className="App">
      {/* Hii now i(Manish) am also this project's contributor */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
