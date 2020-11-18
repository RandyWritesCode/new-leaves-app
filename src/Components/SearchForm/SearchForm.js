import React from 'react';

export default function SearchForm(props) {

  return (
    <form class='signup-form' onSubmit={props.handleSubmit} >
      <div>
        <label for="search-term">Search Term</label>
        <input onChange={props.handleChange} placeholder='Potato Chip Day' type="text" name='search-term' id='search-term' />
      </div>
      <div class="form-section leaf-type-section">
        <p>Search by title, summary content or category.</p>
        <select id="search-type" onChange={props.handleSearchTypeChange}>
          <option value='title'>Title</option>
          <option value='summary'>Summary</option>
          <option value='type'>Leaf Type</option>
        </select>
      </div>

      <button type='submit'>Search</button>
    </form>
  )
}