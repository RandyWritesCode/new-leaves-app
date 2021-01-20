import React from 'react';
import './AddArticle.css';
// import ArticleType from '../ArticleType/ArticleType';
import NewLeavesContext from '../../NewLeavesContext';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';



export default function AddArticle(props) {
  // console.log('AddArticle props: ', props.state)
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
                  <input
                    type="text"
                    name="leaf-title"
                    placeholder="Winnie the Pooh Day"
                    required
                    id='leaf_title'
                  // onChange={(e) => props.handleArticleTitleChange(e)}
                  />
                </section>

                <section className="form-section overview-section">
                  <label htmlFor="leaf-summary">Leaf summary</label>
                  <textarea
                    name="leaf-summary"
                    rows="15"
                    required
                    id="leaf_summary"
                  // onChange={(e) => props.handleArticleSummaryChange(e)}
                  ></textarea>
                </section>

                <section id='leaf_type' className="form-section leaf-type-section" >
                  <h2>Select Leaf Type</h2>
                  {/* <Error>
                    <ArticleType articleType={props.state.articleType} />
                  </Error> */}
                  <input
                    type="radio"
                    name="leaf-type"
                    id="none"
                    value=""
                    className="leaf-type-radio"
                    checked={props.state.articleType === ''}
                    onChange={(e) => props.onValueChange(e)}
                  />
                  <label htmlFor="none">
                    <span>None</span>
                    <p className="leaf-type-explanation">To help other users find your post,
              please select one of the below categories.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf-type"
                    id="family"
                    value="Family"
                    className="leaf-type-radio"
                    checked={props.state.articleType === 'Family'}
                    onChange={(e) => props.onValueChange(e)}

                  />
                  <label htmlFor="family">
                    <span>Family</span>
                    <p className="leaf-type-explanation">It could be something passed down from generation to generation,
              or unique to your household.</p>
                  </label>

                  {/* <input
                    type="radio"
                    name="leaf-type"
                    id="holiday"
                    value="Holiday"
                    className="leaf-type-radio"
                    checked={props.state.articleType === 'Holiday'}
                  />
                  <label htmlFor="holiday">
                    <span>Holiday</span>
                    <p className="leaf-type-explanation">National, public, non-traditional or something in between.
              Something that you do on a specific date(s) to recognize something larger than yourself.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf-type"
                    id="daily-practice"
                    value="Daily Practice"
                    className="leaf-type-radio"
                    checked={props.state.articleType === 'Daily Practice'}
                  />
                  <label htmlFor="daily-practice">
                    <span>Daily Practice</span>
                    <p className="leaf-type-explanation">Are there any habits that help you get through the day?
              Daily practices are things that will enhance peace and or productivity in day to day events.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf-type"
                    id="adaptation"
                    value="Adaptation"
                    className="leaf-type-radio"
                    checked={props.state.articleType === 'Adaptation'}
                  />
                  <label htmlFor="adaptation">
                    <span>Adaptation</span>
                    <p className="leaf-type-explanation">Did you come up with a clever change to an already great tradition?
              This is for adjustments to the norm that just work.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf-type"
                    id="clothing"
                    value="Clothing"
                    className="leaf-type-radio"
                    checked={props.state.articleType === 'Clothing'}
                  />
                  <label htmlFor="clothing">
                    <span>Clothing</span>
                    <p className="leaf-type-explanation">Different styles of dress.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf-type"
                    id="food"
                    value="Food"
                    className="leaf-type-radio"
                    checked={props.state.articleType === 'Food'}
                  />
                  <label htmlFor="food">
                    <span>Food</span>
                    <p className="leaf-type-explanation">Recipes and traditions related to food.</p>
                  </label> */}
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
