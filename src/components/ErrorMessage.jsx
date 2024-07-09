// Defines an error message
import '../App.css'
import styles from './errormessage.module.css'

export default function ErrorMesage({ error }){
    return (
	<div className={styles.errorMessage}>
	  <h3 className={styles.heading}>
	    Some error occured
	  </h3>
	  <p>
	    <span className={styles.subject}>
	      Status:&nbsp;&nbsp;
	    </span>
	    {error.status} &nbsp; | &nbsp;
	    <span className={styles.subject}>
	      Code:&nbsp;&nbsp;
	    </span>
	    {error.code}
	  </p>
	  <p>
	    <span className={styles.subject}> Reason: </span>
	    {error.message}
	  </p>
	</div>
    );
}
