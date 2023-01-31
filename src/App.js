import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import TableComponent from './components/Table/TableComponent';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={TableComponent}></Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
