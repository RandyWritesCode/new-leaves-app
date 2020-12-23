import React from 'react';
import './AddArticle.css';
import ArticleType from '../ArticleType/ArticleType';
import NewLeavesContext from '../../NewLeavesContext';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';



export default function AddArticle(props) {
  return (
    <NewLeavesContext.Consumer>
      {(context) => (
        <Error>
          <div>
            <header>
              <h1>New Leaf</h1>
            </header>
            <section>
              <form id="record-leaf" onSubmit={(e) => props.handleArticleSubmit(
                e,
                context.addArticle
              )}>
                <section className="form-section overview-section">
                  <label htmlFor="leaf-title">Leaf title</label>
                  <input type="text" name="leaf-title" placeholder="Winnie the Pooh Day" required onChange={props.handleArticleTitleChange} />
                </section>

                <section className="form-section overview-section">
                  <label htmlFor="leaf-summary">Leaf summary</label>
                  <textarea name="leaf-summary" rows="15" required onChange={props.handleArticleSummaryChange}></textarea>
                </section>

                <section className="form-section leaf-type-section" onChange={props.handleArticleTypeChange}>
                  <h2>Select Leaf Type</h2>
                  <Error>
                    <ArticleType articleType={props.state.articleType} />
                  </Error>
                </section>


                <section className="button-section">
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                </section>
              </form>
            </section>
          </div>
        </Error>
      )}
    </NewLeavesContext.Consumer >
  );
};

AddArticle.propTypes = {
  handleArticleSubmit: PropTypes.func,
  handleArticleTitleChange: PropTypes.func,
  handleArticleSummaryChange: PropTypes.func,
  handleArticleTypeChange: PropTypes.func,
  articleType: PropTypes.string
};
