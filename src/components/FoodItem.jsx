import '../App.css'
import styles from './foodItem.module.css'

export default function FoodItem({ foodItem }){
    return (
	<div id={foodItem.id}
	     className={styles["food-item"]} >
	  <div className={ styles["food-item-img"] }>
	    <img src={ foodItem.image }
		 alt={ `image for ${ foodItem.title }` }
		 onError={ (e) => {
		     e.target.src = "../assets/img_default1.png";
	      } }/>
	  </div>
	  <div className={styles["food-item-info"]}>
	    <h3 className={ styles["item-name"] }>
	      { foodItem.title }
	    </h3>
	    <button className={ `${styles["item-btn"]} btn btn-rounded`}>
	    View Details</button>
	  </div>
	</div>
    );
}
