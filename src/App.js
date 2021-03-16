import logo from './logo.svg';
import './App.css';

function App() {
  let cars = [
    {brand:"BMW", price:"120€"},
    {brand:"Toyota", price:"80€"},
    {brand:"Mercedes", price:"180€"},
    {brand:"Honda", price:"100€"},
    {brand:"Tesla", price:"170€"},
    {brand:"BMW", price:"120€"},
    {brand:"Toyota", price:"80€"},
    {brand:"Mercedes", price:"180€"},
    {brand:"Honda", price:"100€"},
    {brand:"Tesla", price:"170€"},
    {brand:"BMW", price:"120€"},
    {brand:"Toyota", price:"80€"},
    {brand:"Mercedes", price:"180€"},
    {brand:"Honda", price:"100€"},
    {brand:"Tesla", price:"170€"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        Coşkun is here !
        {cars.map((car,i)=> <div className="list car" key={i}>{car.brand} - {car.price}</div>)        }
        <div className="button sticky">Click me</div>

        
      </header>
    </div>
  );
}

export default App;
