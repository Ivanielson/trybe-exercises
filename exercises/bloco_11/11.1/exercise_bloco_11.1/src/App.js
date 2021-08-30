import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Aprender React', 'Praticar', 'Praticar', 'Foco Total'];

function App() {
  return (<ol>{compromissos.map((value) => Task(value))}</ol>);
}

export default App;
