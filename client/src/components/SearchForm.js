import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='search'>Search:</label>
        <input
          onChange={props.handleSearchChange}
          value={props.search}
          name='search'
          type='text'
          className='form-control'
          placeholder='Search by first name'
          id='search'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='filter'>Filter</label>
        <select
          onChange={props.handleSearchChange}
          value={props.filter}
          name='filter'
          className='form-control'
          id='filter'
        >
          <option value=''></option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div>
    </form>
  );
}

export default SearchForm;
