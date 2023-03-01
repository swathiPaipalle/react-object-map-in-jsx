import logo from './logo.svg';
import './App.css';

function App() {
  const employee = {
    id: 1,
    name: 'Bobby Hadz',
    salary: 100,
    devices: {
      monitors: 'four',
      keyBoard: 'two'
    }
  };

  return (
    <div>
      <h2>Keys</h2>
      {/* 👇️ iterate object KEYS */}
      {Object.keys(employee).map((key, index) => {
        const devices = employee[key];
        console.log('key', devices, typeof devices)
        return (
          <ul key={index}>
            <li>{key}</li>
            {
              typeof devices === 'object' && Object.keys(devices).map((key1, index1) => <li>{key1}</li>)
            }
          </ul>
        )
      })}

      <hr />
      <h2>Values</h2>
      {/* 👇️ iterate object VALUES */}
      {Object.values(employee).map((value, index) => {
        return (
          <ul key={index}>
            {typeof value !== 'object' && <li>{value}</li>}
            {typeof value === 'object' && Object.keys(value).map((value1, index1) => <li>{value[value1]}</li>)}
          </ul>
        );
      })}
    </div>
  );
}

export default App;
