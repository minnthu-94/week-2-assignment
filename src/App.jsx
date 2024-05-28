import { useEffect, useState } from "react";


function App() {
  const [id,setId] = useState('');
  const [error,setError] = useState(false);
  const [todo,setTodo] = useState('');

  const getData = async (e) => {
    e.preventDefault();
    // console.log('getting data');


    if(id < 1){
      setError(true);
      setId('');
      return;
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    console.log(data);
    setId('');
    setTodo(data);
    setError(false);
  }

  return (
    <section>
      <form onSubmit={getData}>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button type="submit">Get Data</button>
      </form>
      <div>
        {error && <h1>Please enter an valid Id. Example (1,2,3,...)</h1>}
        {todo && (
          <div>
            <h1>Id - {todo.id}</h1>
            <h1>Title - {todo.title}</h1>
            <h1>UserId - {todo.userId}</h1>
            <h1>Completed - {todo.completed ? (<span>True</span>) : (<span>False</span>)}</h1>
          </div>
        )}
      </div>
    </section>
  );

}

export default App;
