import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const List = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export default function SearchForm(props) {
 
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    let list = [];
    props.data.forEach(character => {
      if (character.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return list.unshift(character);
      }
    });

    setResults(list);
  }, [search]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <section className="search-form">
     // Add a search form here
     <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />
      </form>

      <List>
        {results.map(character => {
          return <CharacterCard name={character.name} status={character.status} key={character.id}/> //Will add gender species status and image later
        })}
        
      </List>

    </section>
  );
}
