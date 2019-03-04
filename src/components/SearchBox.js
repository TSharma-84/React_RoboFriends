import React from 'react';

const SearchBox = ({searchField,searchChange}) =>{
	return (<div>
					<input type='search' 
		  		 		   placeholder='Find Robo Friends' 
		  		 		   onChange={searchChange}/>
			</div>
		);
}

export default SearchBox;
