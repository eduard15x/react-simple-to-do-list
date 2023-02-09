import Homepage from "./Homepage";


function App() {

  const arr = {
    "tasks": {
      "9-2-2023": [
        {
          "task": 'task1'
        },
        {
          "task": 'task12'
        }
      ]
    }
  }

  console.log(arr.tasks[922023])
  console.log(arr.tasks['9-2-2023'].map((item) => item.task));

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
