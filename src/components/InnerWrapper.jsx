// Defiles the details wrapper for the inner wrappers
// it wraps the content of of a grid column.
import '../App.css'
import styles from './innerwrapper.module.css'


export default function InnerWrapper({ children }){
    return (
	<div className={styles.innerWrapper}>
	  {children}
	</div>
    );
}
