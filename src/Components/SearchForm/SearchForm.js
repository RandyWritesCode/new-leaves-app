import React from 'react';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';


export default function SearchForm(props) {

  return (
    <Error>

      <form className='signup-form' onSubmit={props.handleSubmit} >
        <div>
          <label htmlFor="search-term">Search Term</label>
          <input onChange={props.handleChange} placeholder='Potato Chip Day' type="text" name='search-term' id='search-term' />
        </div>
        <div className="form-section leaf-type-section">
          <p>Search by title, summary content or category.</p>
          <select id="search-type" onChange={props.handleSearchTypeChange}>
            <option value='title'>Title</option>
            <option value='summary'>Summary</option>
            <option value='type'>Leaf Type</option>
          </select>
        </div>

        <button type='submit'>Search</button>
      </form>
    </Error>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleSearchTypeChange: PropTypes.func
};

