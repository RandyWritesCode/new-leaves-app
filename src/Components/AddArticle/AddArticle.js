import React from 'react';
import './AddArticle.css';
import NewLeavesContext from '../../NewLeavesContext';
import PropTypes from 'prop-types';
import Error from '../AppError/AppError';



export default function AddArticle(props) {
  return (
    <NewLeavesContext.Consumer>
      {(context) => (
        <Error>
          <div className='pageContainer'>
            <section>
              <header>
                <h2>New Leaf</h2>
                <h3>Share your Traditions with others.</h3>
              </header>
            </section>
            <section>
              <form id="record-leaf" onSubmit={(e) => props.handleArticleSubmit(
                e,
                context.addArticle
              )}>
                <div className="form-section overview-section">
                  <label className='label' htmlFor="leaf-title">Leaf title</label>
                  <input
                    type="text"
                    name="leaf-title"
                    placeholder="Winnie the Pooh Day"
                    required
                    id='leaf_title'
                  />

                  <label className='label' htmlFor="leaf-summary">Leaf summary</label>
                  <textarea
                    name="leaf-summary"
                    rows="11"
                    required
                    id="leaf_summary"
                  ></textarea>
                </div>

                <div id='leaf_type' className="form-section leaf-type-section" >
                  <h4>Select Leaf Type</h4>
                  <input
                    type="radio"
                    name="leaf_type"
                    id="none"
                    value=""
                    className="leaf-type-radio"
                  />
                  <label htmlFor="none">
                    <h5>None</h5>
                    <p>To help other users find your post,
              please select one of the below categories.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf_type"
                    id="family"
                    value="Family"
                    className="leaf-type-radio"

                  />
                  <label htmlFor="family">
                    <h5>Family</h5>
                    <p>It could be something passed down from generation to generation,
              or unique to your household.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf_type"
                    id="holiday"
                    value="Holiday"
                    className="leaf-type-radio"
                  />
                  <label htmlFor="holiday">
                    <h5>Holiday</h5>
                    <p>National, public, non-traditional or something in between.
              Something that you do on a specific date(s) to recognize something larger than yourself.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf_type"
                    id="daily-practice"
                    value="Daily Practice"
                    className="leaf-type-radio"
                  />
                  <label htmlFor="daily-practice">
                    <h5>Daily Practice</h5>
                    <p>Are there any habits that help you get through the day?
              Daily practices are things that will enhance peace and or productivity in day to day events.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf_type"
                    id="adaptation"
                    value="Adaptation"
                    className="leaf-type-radio"
                  />
                  <label htmlFor="adaptation">
                    <h5>Adaptation</h5>
                    <p>Did you come up with a clever change to an already great tradition?
              This is for adjustments to the norm that just work.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf_type"
                    id="clothing"
                    value="Clothing"
                    className="leaf-type-radio"
                  />
                  <label htmlFor="clothing">
                    <h5>Clothing</h5>
                    <p>Different styles of dress.</p>
                  </label>

                  <input
                    type="radio"
                    name="leaf_type"
                    id="food"
                    value="Food"
                    className="leaf-type-radio"
                  />
                  <label htmlFor="food">
                    <h5>Food</h5>
                    <p>Recipes and traditions related to food.</p>
                  </label>
                </div>

                <div className="button-section">
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                </div>
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
