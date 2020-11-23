import React from 'react';
import './Article.css';
import ArticleType from '../ArticleType/ArticleType';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';



export default function Article(props) {
  return (
    <Error>
      <div>
        <header>
          <h1>New Leaf</h1>
          <p>(under construction)</p>
        </header>
        <section>
          <form id="record-leaf" onSubmit={props.handleArticleSubmit}>
            <section class="form-section overview-section">
              <label for="leaf-title">Leaf title</label>
              <input type="text" name="leaf-title" placeholder="Winnie the Pooh Day" required onChange={props.handleArticleTitleChange} />
            </section>

            <section class="form-section overview-section">
              <label for="leaf-summary">Leaf summary</label>
              <textarea name="leaf-summary" rows="15" required onChange={props.handleArticleSummaryChange}></textarea>
            </section>

            <section class="form-section leaf-type-section" onChange={props.handleArticleTypeChange}>
              <h2>Select Leaf Type</h2>
              <Error>
                <ArticleType articleType={props.state.articleType} />
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

Article.propTypes = {
  handleArticleSubmit: PropTypes.func,
  handleArticleTitleChange: PropTypes.func,
  handleArticleSummaryChange: PropTypes.func,
  handleArticleTypeChange: PropTypes.func,
  articleType: PropTypes.string
};
