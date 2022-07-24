import { useEffect } from "react";
import "../styles/index.css";
import { getPosts } from "../api";

export default function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log("response", response);
    };
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <h1>Hello Sandbox</h1>
      <h2>Start editing to create your project!</h2>
    </div>
  );
}
