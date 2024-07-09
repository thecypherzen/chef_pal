import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import FoodItems from './components/FoodItems'
import DetailsContainer from './components/DetailsContainer'
import InnerWrapper from './components/InnerWrapper'
import RecipeDetails from './components/RecipeDetails'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'


export default function App() {
    const [data, setData] = useState([]);
    const [itemId, setItemId] = useState(635675);
    const [isLoading, setLoading] = useState(true);

    return (
	<>
	  <NavBar />
	  <SearchBar setData={ setData } setLoading={ setLoading }/>
	  <FoodItems foodItems={ data } isLoading={ isLoading }
		     setItemId={ setItemId }/>
	  <DetailsContainer>
	    <InnerWrapper>
	      <RecipeDetails itemId={ itemId } isLoading={ isLoading }/>
	    </InnerWrapper>
	    <InnerWrapper>
	      <Instructions />
	    </InnerWrapper>
	  </DetailsContainer>
	</>
    )
}
