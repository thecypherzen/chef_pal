// defines a recipe summary
import { useEffect, useState } from 'react'
import '../App.css'
import styles from './recipedetails.module.css'


export default function RecipeDetails({ itemId, isLoading }){
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);

    if (isLoading) {
	return (<div><p> select item to see details. </p> </div>);
    }

    useEffect(() => {

	const url = 'https://api.spoonacular.com/recipes/' +
	      `${itemId}/information`;
	const hdrs = {"x-api-key": "5a22f1ee68c048f189a01b36a6440f22"}

	async function getDetails(){
	    const req = await fetch(url, {headers: hdrs});
	    const res = await req.json();
	    setInfo(res);
	    setLoading(false);
	}
	getDetails();
    }, [itemId]);

    if (!loading) {
	console.log(info);
	console.log(itemId);
    }
}
