import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import Loading from './Components/Loading';
import LoadingWithHook from './Components/loading2';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <Loading /> */}
      <LoadingWithHook />
    </div>
  );
}

export default App;
