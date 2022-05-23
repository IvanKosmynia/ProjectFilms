import React  from "react";
import styles from './filmList.module.css';
import { NavLink } from 'react-router-dom';
import routes from "../routes";



const filmList = ({films, history}) =>{
    console.log('history', history);
    return( 
        <ul className={styles.film_list}>
            {films.map(film =>{
                const click = ()=>{
                    history.push(`/film/${film.id}`)
                    console.log(`/film/${film.id}`)
                }
                return(
                   
                    <li onClick={click}> <img src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} /> </li>
                
                )
            })}
        </ul>
    )
}

export default filmList;