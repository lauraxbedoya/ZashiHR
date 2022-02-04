import { useState } from "react";

type SearchType = {
  placeholder: string,
  type: string,
  onChange: () => any
}

const Search = ({placeholder, type, onChange}: SearchType) => {
  const [ values, setValues ] = useState();

  const handleInputChange = (e: any) => {
    setValues( e.target.value )
  };

  return(
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={values}
        value={values}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;