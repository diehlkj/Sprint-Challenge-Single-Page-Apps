import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [ramapi, setRamapi] = useState([]);
  // const [apiInfo, setApiInfo] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setRamapi(response.data.results); // Array of objects
        // setApiInfo(response.data.info);  Object: -count -pages -next (Gives url for next page... could just take pages as a var and for loop that number of times incrementing the ?page=X query )
        console.log(response); 
      })
      .catch(error => console.log(`Uh oh... ${error}`));
  }, []);

  
  return (

    // PUT THE SEARCH HERE
    //If character.name.includes(search results) map them to screen
    <SearchForm data={ramapi}/>
    
  );
}
