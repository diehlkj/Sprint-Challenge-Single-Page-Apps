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
  const [results, setResults] = useState(props.data);

  useEffect(() => {
    let list = [];
    props.data.forEach(character => {
      if (character.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return list.unshift(character);
      }
    });

    setResults(list);
  }, [search, props.data]);



    // useEffect(() => {
    //   if (props.data){
    //     console.log('In set the thing', props.data);
    //     setResults(props.data);
    //   }
    // }, [props.data]);



  console.log('In Search', props);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   let list = [];
  //   props.data.forEach(character => {
  //     if (character.name.toLowerCase().includes(search.toLocaleLowerCase())) {
  //       return list.unshift(character);
  //     }
  //   });

  //   setResults(list);
  //   event.preventDefault();
  // };

  return (
    <section className="search-form">
     <form>
        <label htmlFor="name">Search: </label>
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
          console.log('Mapping Cards');
          return <CharacterCard name={character.name} status={character.status} key={character.id}/>
        })}
        
      </List>

    </section>
  );
}
