import React from 'react';


const SearchBox = ({search}) => {
	return(
	  <div className='pa2'>
		<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placehoder='Search Robot'
			onChange={search}
		 />
		</div>
	)
  }

export default SearchBox;