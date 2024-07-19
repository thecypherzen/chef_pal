// defines summary section recipe details
import '../App.css'
import styles from './recipesummary.module.css'

export default function RecipeSummary({ info }){
	{ console.log(info) }
    return (
	<div className={ styles.summary }>
	  <div className={ styles.imageWrapper }>
	    <img src={ info.image }
		 alt={ `${info.title} image` }
		 onError={ (e) => {
		     e.target.src="../assets/img_default_2.png"
	      }} />
	  </div>
	  <h3 className={ styles.title }> { info.title } </h3>
	  <div className={ styles.summaryWrapper }>
	    // ready in minutes
	    <div className={ styles.summaryItem }>
	      <i className="fa-solid fa-clock" />
	      <span className={ styles.subject }>
		Ready in:&nbsp;
	      </span>
	      <span className={ styles.value}>
		{ info.readyInMinutes }m
	      </span>
	    </div>

	    // Servings
	    <div className={ styles.summaryItem }>
	      <i className="fa-solid fa-bowl-food" />
	      <span className={ styles.subject }>
		Servings:&nbsp;
	      </span>
	      <span className={ styles.value}>
		{ info.servings }
	      </span>
	    </div>

	    // Price per serving
	    <div className={ styles.summaryItem }>
	      <i className="fa-solid fa-money-check-dollar" />
	      <span className={ styles.subject }>
		Price per serving:&nbsp;
	      </span>
	      <span className={ styles.value}>
		{ info.pricePerServing }
	      </span>
	    </div>

	    // Health score
	    <div className={ styles.summaryItem }>
	      <i className="fa-solid fa-notes-medical" />
	      <span className={ styles.subject }>
		Health score:&nbsp;
	      </span>
	      <span className={ styles.value}>
		{ info.healthScore }
	      </span>
	    </div>

	    // Good for..(dishTypes)
	    <div className={ styles.summaryItem }>
	      <i className="fa-solid fa-clock" />
	      <span className={ styles.subject }>
		Good for:&nbsp;
	      </span>
	      <span className={ styles.value}>
		{ info.dishTypes.join(', ') }
	      </span>
	    </div>

	    // 
	    <div className={ styles.summaryItem }>
	      <i className="fa-solid fa-clock" />
	      <span className={ styles.subject }>
		Health score:&nbsp;
	      </span>
	      <span className={ styles.value}>
		{ info.healthScore }
	      </span>
	    </div>

	    <div className={ styles.summaryItem }>
	      <i className="fa-solid fa-clock" />
	      <span className={ styles.subject }>
		Health score:&nbsp;
	      </span>
	      <span className={ styles.value}>
		{ info.healthScore }
	      </span>
	    </div>
	  </div>
	</div>
    );
}
