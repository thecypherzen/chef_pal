// Defines app header component
import '../App.css'
import styles from './navbar.module.css'

export default function NavBar(){
    return (
	<nav className={ styles["main-nav"] }>
	  <div className={ styles.branding }>
	    <div className={ styles.logo }></div>
	    <a className={ styles["branding-text"] }>
	      <span className={ styles["b-text-light"] }>Chef</span>Pal
	    </a>
	  </div>
	  <div className={ styles.menu }>MENU</div>
	</nav>
    );
}
