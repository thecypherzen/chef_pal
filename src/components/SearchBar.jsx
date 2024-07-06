import '../App.css'
import styles from './searchbar.module.css'
import { useState, useEffect } from 'react'

export default function SearchBar({ setData }) {
    const tag = "recipe for...";
    const [query, setQuery] = useState("chicken");
    const uri = 'https://api.spoonacular.com/recipes/complexSearch/';

    // define fetching function
    const myHdrs = {
	"x-api-key": "5a22f1ee68c048f189a01b36a6440f22"
    }
    async function getRecipes(url, data={ headers: myHdrs }){
	const req = await fetch(url, data);
	const res = await req.json();
	return res;
    }

    // get recipes from api
    useEffect(() => {
	const url = `${uri}?query=${ query }`;
	getRecipes(url)
	    .then(res => setData(res.results))
	    .catch(err => console.log(err));

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
