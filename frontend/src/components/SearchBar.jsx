import { useState } from "react";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Votre recherche : </label>
      <input
        type="text"
        placeholder="Votre recherche"
        onChange={handleChange}
        value={searchInput}
      />
    </>
  );
}
