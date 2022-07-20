import { Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello I Am Expense Tracker</h1>

      <Button
        variant="primary"
        onClick={() => {
          alert("tada");
        }}
      >
        Clickme
      </Button>
    </div>
  );
}

export default App;
