import "./App.css";

import { MultiSelect } from "./MultiSelect";

const dt = [
  { value: "1", label: "um" },
  { value: "2", label: "dois" },
];

function App() {
  return (
    <div style={{ width: "350px" }}>
      <MultiSelect data={dt} />
    </div>
  );
}

export default App;
