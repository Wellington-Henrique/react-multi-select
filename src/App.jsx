import "./App.css";

import { MultiSelect } from "./MultiSelect";

const dt = [
  { value: "1", label: "um" },
  { value: "2", label: "dois" },
  { value: "3", label: "três" },
  { value: "4", label: "quatro" },
  { value: "5", label: "cinco" },
  { value: "6", label: "seis" },
  { value: "7", label: "set" },
  { value: "8", label: "oito" },
];

function App() {
  return (
    <div style={{ width: "350px", height: "100px", overflow: "hidden" }}>
      <MultiSelect data={dt} setData={() => {}} />
    </div>
  );
}

export default App;
