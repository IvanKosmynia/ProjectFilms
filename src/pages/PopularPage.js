import React, {Component} from "react";
import FilmList from "../components/FilmList";



export default class  PopularPage extends Component{
    state = {
        films: []
        };
    
        page = 1;
        myKey = '17f44e9a89f6e96dcfa8fe2e70db5351';
        urlApiPopular = 'https://api.themoviedb.org/3/movie/popular?api_key='+ `${this.myKey}`+ '&language=en-US&page='+`${this.page}`+ '&append_to_response=genre/movie/list';
        urlApiGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+`${this.myKey}`+'&language=en-US';
    
    
        componentDidMount() {
        fetch(this.urlApiPopular).then(res  => res.json()).then(data => {this.setState({films: data.results}); console.log(data)});
        }
    
      render(){
        const {films} = this.state;
        return(
           <>
            {films.length>0 && <FilmList history={this.props.history} films={films}/>}
            </>
          )
}
}




