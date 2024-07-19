// defines response results component
import '../App.css'
import FoodItem from './FoodItem'
import ErrorMessage from './ErrorMessage'
import styles from './fooditems.module.css'

export default function FoodItems({ foodItems, isLoading, setItemId,
				  error }){
    return (
	<div className={styles.foodItemsContainer}>
	  { isLoading ? <p>Loading ...</p> :
	      error ? <ErrorMessage error={ error }/> :
	      foodItems.map((item) =>
			    <FoodItem key={item.id} foodItem={ item }
					  setItemId={ setItemId }/>
	  )}
	</div>
    );
}
