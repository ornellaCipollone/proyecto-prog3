import {Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
   <div>
    <Link to="/">Home</Link>

    <Switch>
      <Route path="/" component={Home} />
    </Switch>

   </div>
  );
}

export default App;
