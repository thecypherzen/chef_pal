// defines response results component
import '../App.css'
import FoodItem from './FoodItem'
import styles from './fooditems.module.css'

export default function FoodItems({ foodItems, isLoading, setItemId }){
    return (
	<div className={styles.foodItemsContainer}>
	  { isLoading ? <p>Loading ...</p> :
	      foodItems.map((item) =>
			    <FoodItem key={item.id} foodItem={ item }
					  setItemId={ setItemId }/>
	  )}
	</div>
    );
}
