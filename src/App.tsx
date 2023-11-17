import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  async function greet() {
    console.log("here");
    setGreetMsg(await invoke("greeter", { name }));
  }

  async function getPath() {
    setResponse(await invoke("get_user_dir"));
  }

  return (
    <>
      <Sidebar />
      <div id="page-wrap">
        <h1>Self Manager</h1>
      </div>
    </>
  );
}

export default App;
