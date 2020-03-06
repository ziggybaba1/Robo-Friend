import React from 'react'


const SearchCard = ({searchText,onSearchChange}) =>{
  return (
    <div className=' pd2'>
    <input
    className='pa3 ba b--green bg-lightest-blue'
    type='search'
    placeholder='Please type your robot'
    onChange={onSearchChange}
    />
    </div>
  )
}
export default SearchCard;
