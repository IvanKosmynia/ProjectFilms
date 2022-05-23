import InputSearh from "./InputSearch";
import styles from './App.module.css';
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import PopularPage from "../pages/PopularPage";
import routes from "../routes";
import FilmDetailsPage from '../pages/FilmDetailsPage';


 const App = ()=>(
  <BrowserRouter>
  <div className={styles.App}>
<Link to={routes.SHOWS} >ddd</Link>
    <InputSearh />
    <Switch>
      {/* <Route exact path="/home">
      <PopularPage />
      </Route>
      <Route exact path={routes.SHOWS}>
       <FilmDetailsPage/>
      </Route> */}
      <Route  path={routes.SHOWS} component={FilmDetailsPage} /> 
      <Route exact path={routes.POPULAR} component={PopularPage} />
      
      <Redirect to="/home" />
    </Switch>
  </div>
</BrowserRouter>
 )

 export default App;
  


