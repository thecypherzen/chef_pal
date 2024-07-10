import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import FoodItems from './components/FoodItems'
import DetailsContainer from './components/DetailsContainer'
import InnerWrapper from './components/InnerWrapper'
import RecipeDetails from './components/RecipeDetails'
import Instructions from './components/Instructions'
import ErrorMessage from './components/ErrorMessage'


export default function App() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [itemId, setItemId] = useState(635675);
    const [isLoading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    return (
	<>
	  <NavBar />
	  <SearchBar setData={ setData } setLoading={ setLoading }
		     setError={ setError }/>
	  { error ?
	      <div>
		    <ErrorMessage error={ error } />
	      </div> :
	      <>
 		    <FoodItems foodItems={ data } isLoading={ isLoading }
				   setItemId={ setItemId }
				   error={ error }/>
  		    <DetailsContainer>
                        <InnerWrapper>
                              <RecipeDetails itemId={ itemId }
						 isLoading={ isLoading } />
   			</InnerWrapper>
			<InnerWrapper>
			      <Instructions />
                        </InnerWrapper>
                    </DetailsContainer>
	      </>}
	</>
    )
}
