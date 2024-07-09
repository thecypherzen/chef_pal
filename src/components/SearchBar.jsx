import '../App.css'
import styles from './searchbar.module.css'
import { useState, useEffect } from 'react'

export default function SearchBar({ setData, setLoading }) {
    const tag = "search...";
    const [query, setQuery] = useState("chicken");
    const uri = 'https://api.spoonacular.com/recipes/complexSearch/';

    // fetch data from api
    const hdrs = {
	"x-api-key": "5a22f1ee68c048f189a01b36a6440f22"
    }

    useEffect(() => {
	async function getRecipes(){
	    const req = await fetch(`${uri}?query=${ query }`, {
		headers: hdrs
	    });
	    const res = await req.json();
	    setData(res.results);
	    setLoading(false);
	}
	getRecipes();
    }, [query]);

    // module constructor
    return (
	<div id={ styles["search-bar"] }>
	  <label htmlFor="query" name="query"> { tag } </label>
	  <input id="query" type="text" value={query}
		 onChange={ (e) => setQuery(e.target.value) }
	    className={ styles.input } />
	</div>
    );
}
