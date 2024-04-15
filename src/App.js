import React from "react";
import {Link, Route, Switch} from 'react-router-dom';

// SCREENS
import Home from "./screens/Home/Home";
import Populars from "./screens/Populars/Populars";


//COMPONENTES
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Favoritos from "./components/Favoritos/Favoritos";
import Detail from "./components/Detail/Detail";
import Resultados from "./components/Resultados/Resultados";
import Loader from "./components/Loader/Loader";
import Error404 from "./components/Error404/Error404";
import 


function App() {
  return (
    <body>
    <Header/>
    <main>

    <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/favoritos" component={Favoritos} />
    <Route path="/popular" component={Popular} />
    <Route path="/upcoming" component={Upcoming} />
    <Route path= "" component={Error404} />
    </Switch>

    </main>
    <Footer/>
    </body>
  );
}

export default App;
