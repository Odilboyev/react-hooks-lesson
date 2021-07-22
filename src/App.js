import './App.css';
import Loading from './Components/Loading';
import LoadingWithHook from './Components/loading2';
import Pomodoro from './Components/pomodoro';

function App() {
  return (
    <div className="App center">
      {/* <Timer /> */}
      {/* <Loading /> */}
      {/* <LoadingWithHook /> */}
      <Pomodoro />
    </div>
  );
}

export default App;
