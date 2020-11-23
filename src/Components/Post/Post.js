import React from 'react';
import './Post.css';
import PostType from '../PostType/PostType';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';



export default function Post(props) {
  return (
    <Error>
      <div>
        <header>
          <h1>New Leaf</h1>
          <p>(under construction)</p>
        </header>
        <section>
          <form id="record-leaf" onSubmit={props.handlePostSubmit}>
            <section class="form-section overview-section">
              <label for="leaf-title">Leaf title</label>
              <input type="text" name="leaf-title" placeholder="Winnie the Pooh Day" required onChange={props.handlePostTitleChange} />
            </section>

            <section class="form-section overview-section">
              <label for="leaf-summary">Leaf summary</label>
              <textarea name="leaf-summary" rows="15" required onChange={props.handlePostSummaryChange}></textarea>
            </section>

            <section class="form-section leaf-type-section" onChange={props.handlePostTypeChange}>
              <h2>Select Leaf Type</h2>
              <Error>
                <PostType postType={props.state.postType} />
              </Error>
            </section>


            <section class="button-section">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </section>
          </form>
        </section>
      </div>
    </Error>
  );
};

Post.postTypes = {
  handlePostSubmit: PropTypes.func,
  handlePostTitleChange: PropTypes.func,
  handlePostSummaryChange: PropTypes.func,
  handlePostTypeChange: PropTypes.func,
  postType: PropTypes.string
};
