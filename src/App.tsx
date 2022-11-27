import React from "react";
import "jsoneditor-react/es/editor.min.css";
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import ace from "brace";
import { JsonEditor as Editor } from "jsoneditor-react";

// import "@contentful/forma-36-react-components/dist/styles.css";
import "jsoneditor-react/es/editor.min.css";
import "brace/mode/json";
import "brace/theme/github";

function App() {
  const [count, setCount] = useState(0)

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
      name: "Poonam",
      "age": 39,
      "sex": "female"
    },
    {
      name: "Poonam",
      "age": 39,
      "sex": "female"
    },
    {
      name: "Poonam",
      "age": 39,
      "sex": "female"
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
  
  const [json, setJson] = React.useState(data);
  // const [mode, setMode] = React.useState('code');

  const modes = ['code', 'tree', 'form', ]
  return (
    <div className="App">
      <Editor
        mode="code"
        allowedModes={modes}
        history
        value={data}
        onChange={setJson}
        ace={ace}
        search={false}
      />
    </div>
  );
}

export default App
