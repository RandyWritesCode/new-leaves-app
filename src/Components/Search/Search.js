import React from 'react';
import SearchDisplay from '../SearchDisplay/SearchDisplay';
import './Search.css'
import Error from '../AppError/AppError';

export default class Search extends React.Component {

  render() {

    return (
      <Error>
        <div className='pageContainer search'>
          <header>
            <section >
              <h2>Search</h2>
              <h3>Leaf through a targeted search of traditions</h3>
            </section>
          </header>
          <section>
            <form className='signup-form' onSubmit={this.props.handleSearchSubmit} >
              <div>
                <label htmlFor="search-term">Search Term: </label>
                <input onChange={this.props.handleSearchTermChange} placeholder='Potato Chip Day' type="text" name='search-term' id='search-term' />
              </div>
              <div className="form-section leaf-type-section">
                <label htmlFor='search-type'>Search by title, summary content or category: </label>
                <select id="search-type" onChange={this.props.handleSearchTypeChange}>
                  <option value='title'>Title</option>
                  <option value='summary'>Summary</option>
                  <option value='type'>Leaf Type</option>
                </select>
              </div>

              <button type='submit'>Search</button>
            </form>
          </section>
          <div>
            <SearchDisplay
              display={this.props.display} />
          </div>
        </div>
      </Error>
    );
  }
};

