import React , {useState} from 'react';

function App() {
  // Declare a new state variable, which we'll call "count", this is to update the count
  const [count, setCount] = useState(0);
  return (
    //container to hold the entire app
    <div className="container my-5">
  
    <div className="card text-center my-5">
      <div className="card-body">
        {/*Title */}
        <h1 className="card-title">Counter App</h1>
        <h2 className='my-5'>{count}</h2>
        {/*Buttons 
        Using fontAwesome icons as required */}
        <button className="btn btn-success mx-3"  onClick={()=> setCount(count+1)}><i class="fas fa-plus"></i></button> {/*onClick function calls the setCount function to update count */}
        <button className="btn btn-danger mx-3" onClick={()=> setCount(count-1)} disabled={count < 1}><i class="fas fa-minus"></i></button> {/*disabled={count < 1} prevents the button from being clicked if count is less than 1 */}
        <button className="btn btn-primary mx-3" onClick={()=> setCount(0) } disabled={count < 1}>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default App;
