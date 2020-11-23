import React from 'react';
import SearchDisplay from '../SearchDisplay/SearchDisplay';
import Error from '../AppError/AppError';

export default class Search extends React.Component {

  render() {

    return (
      <Error>

        <section>
          <section>
            <header>
              <h4>Search our collection of shared traditions</h4>
            </header>
            <form class='signup-form' onSubmit={this.props.handleSearchSubmit} >
              <div>
                <label for="search-term">Search Term</label>
                <input onChange={this.props.handleSearchTermChange} placeholder='Potato Chip Day' type="text" name='search-term' id='search-term' />
              </div>
              <div class="form-section leaf-type-section">
                <p>Search by title, summary content or category.</p>
                <select id="search-type" onChange={this.props.handleSearchTypeChange}>
                  <option value='title'>Title</option>
                  <option value='summary'>Summary</option>
                  <option value='type'>Leaf Type</option>
                </select>
              </div>

              <button type='submit'>Search</button>
            </form>
          </section>
          <section>
            <div>
              <SearchDisplay
                display={this.props.display} />
            </div>
          </section>
        </section>
      </Error>
    );
  }
};

