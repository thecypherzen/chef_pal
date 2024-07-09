// defines the recipe details information section
// it is a structural compoment
import '../App.css'
import styles from './detailscontainer.module.css'


export default function DetailsContainer({ children }) {
    return (
	<div className={styles.detailsContainer}>
	  { children }
	</div>
    );
}
