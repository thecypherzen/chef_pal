// defines a recipe summary
import { useEffect, useState } from 'react'
import '../App.css'
import styles from './recipedetails.module.css'
import RecipeSummary from './RecipeSummary'
import Ingredients from './Ingredients'

export default function RecipeDetails({ itemId, isLoading }){
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
	console.log("recipe details useffect called...");
	const url = 'https://api.spoonacular.com/recipes/' +
	      `${itemId}/information`;
	const hdrs = {"x-api-key": "5a22f1ee68c048f189a01b36a6440f22"}

	async function getDetails(){
	    console.log("getDetails called ...");
	    const req = await fetch(url, {headers: hdrs});
	    const res = await req.json();
	    setInfo(res);
	    setLoading(false);
	}
	getDetails();
    }, [itemId]);

    if (loading) {
	return (<div><p> Loading... </p> </div>);
    }
    return (
	<div>
	  <RecipeSummary info={ info } />
	  <Ingredients list={ info.extendedIngredients } />
	</div>
    );
}
