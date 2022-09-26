import React,{useState} from "react";

function Search({onSearch}) {
   const [search,setsearch] = useState(" ")
   function handleTheChange(event){
    setsearch(event.target.value)
     onSearch(search)
   }
  return (
    <div className="ui large fluid icon input">
      <input 
       onChange={handleTheChange} 
        type="text"
        placeholder="Search your Recent Transactions"
         
      />
      <i onClick={handleTheChange} className="circular search link icon"></i>
    </div>
  );
}

export default Search;
