// defines response results component
import '../App.css'
import FoodItem from './FoodItem'
import styles from './recipes.module.css'

export default function Recipes({ data }){
    return (
	<div className="container" id={styles.results}>
	  { console.log(data) }
	  { data.map((item) =>
		     <FoodItem key={item.id} foodItem={ item }/>
	  )}
	</div>
    );
}
