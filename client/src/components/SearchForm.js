import React from "react";

function SearchForm(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='form-group'>
            <div className='row'>
              <div className='col-sm-2'>
                <label htmlFor='search' className='control-label'>
                  Search:
                </label>
              </div>
              <div className='col-sm-10'>
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
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='form-group'>
            <div className='row'>
              <div className='col-sm-2'>
                <label htmlFor='filter' className='control-label'>
                  Filter:
                </label>
              </div>
              <div className='col-sm-10'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
