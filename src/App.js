import React from "react";
import { Link, Route, Switch } from "react-router-dom";

// SCREENS
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Detail from "./screens/Detail/Detail";
import Populars from "./screens/Populars/Populars"
import TopRated from "./screens/TopRated/TopRated"

//COMPONENTES
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resultados from "./components/Resultados/Resultados";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <body>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/resultados/:busqueda" component={Resultados} />
          <Route path="/favoritos" component={Favoritos} />
          <Route path="/detail/id/:id" component={Detail}/>
          <Route path="/populars" component={Populars}/>
          <Route path="/toprated" component={TopRated}/>
          <Route path="" component={Error404} />
        </Switch>
      </main>

      <Footer />
    </body>
  );
}

export default App;
