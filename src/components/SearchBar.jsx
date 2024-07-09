import '../App.css'
import styles from './searchbar.module.css'
import { useState, useEffect } from 'react'

export default function SearchBar({ setData, setLoading, setError }) {
    const tag = "search...";
    const [query, setQuery] = useState("chicken");
    const uri = 'https://api.spoonacular.com/recipes/complexSearch/';

    // fetch data from api
    const hdrs = {
	"x-api-key": "5a22f1ee68c048f189a01b36a6440f22"
    }

    useEffect(() => {
	console.log("searchbar useffect called..");
	async function getRecipes(){
	    console.log("get recipes called... ");
	    const req = await fetch(`${uri}?query=${ query }`, {
		headers: hdrs
	    });
	    const res = await req.json();
	    if ((res?.code ?? 200) !== 200){
		setError(res);
	    }
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
