import "./App.css";
import Toggle from "./components/02-Toggle";
import IconButton from "./components/03-IconButton";
import Post from "./components/04-Post";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Toggle />
      <IconButton />
      <Post id={1} />
    </div>
  );
}

export default App;
