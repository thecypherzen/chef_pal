import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Recipes from './components/Recipes'


export default function App() {
    const [data, setData] = useState([]);

    return (
	<>
	  <NavBar />
	  <SearchBar setData={ setData }/>
	  <Recipes data={ data }/>
	</>
    )
}
