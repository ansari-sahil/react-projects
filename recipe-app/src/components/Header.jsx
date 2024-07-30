import { useState } from 'react';

export default function Header({handleSearch, loader}) {

  const [query, setQuery] = useState("");
  const handleChange = (e) => setQuery(e.target.value);
  const onSearch = () => handleSearch(query);
  return ( 
    <header>
      <h1>TasteQuest</h1>
      <p>
        Discover a world of flavors and embark on a culinary adventure with
        TasteQuest, the ultimate recipe search application.
      </p>
      <input onChange={handleChange} type="text"  />
      <button disabled={loader} onClick={onSearch} type="button">
        {loader ? 'Loading...' : 'Search'}
      </button>
    </header>
  );
}
