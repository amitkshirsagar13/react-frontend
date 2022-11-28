import React, { useState } from "react";
import "jsoneditor-react/es/editor.min.css";
import "./App.css"
import Jeditor from "./components/editor/JEditor";

function App() {
  const data = [
    {
      name: "Amit",
      "age": 40,
      "sex": "male"
    },
    {
      name: "Poonam",
      "age": 39,
      "sex": "female"
    },
    {
      name: "Amogh",
      "age": 13,
      "sex": "male"
    },
    {
      name: "Pallavi",
      "age": 37,
      "sex": "female"
    }
  ];
  const [content, setContent] = useState(data);
  const responseData: any[] = [];

  const [response, setResponse] = useState(responseData);

  const changeData = (modifiedContent:any) => {
    setContent(() => modifiedContent);
  }
  const printJson = () => {
    const responseRenderer:any = $('#json-renderer');
    responseRenderer.jsonViewer(content);
    setResponse(()=> content);
  }
  return (
    <div className="App">
      <Jeditor mode={'code'} onJsonEdit={changeData} content={content} />
      <br/>
      <button onClick={printJson}>Print Json</button>
      <hr/>
      Response:
      <hr/>
      <Jeditor mode={'view'} content={response} />
      <hr/>
      <hr/>
    </div>
  );
}

export default App
