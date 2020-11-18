import React from 'react';
import './Post.css';

export default function Post(props) {
  return (
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

            <input
              type="radio"
              name="leaf-type"
              id="none"
              value=""
              class="leaf-type-radio"
              checked={props.state.postType === ''} />
            <label for="none">
              <span>None</span>
              <p class="leaf-type-explanation">To help other users find your post,
              please select one of the below categories.</p>
            </label>

            <input
              type="radio"
              name="leaf-type"
              id="family"
              value="Family"
              class="leaf-type-radio"
              checked={props.state.postType === 'Family'}
            />
            <label for="family">
              <span>Family</span>
              <p class="leaf-type-explanation">It could be something passed down from generation to generation,
              or unique to your household.</p>
            </label>

            <input
              type="radio"
              name="leaf-type"
              id="holiday"
              value="Holiday"
              class="leaf-type-radio"
              checked={props.state.postType === 'Holiday'}
            />
            <label for="holiday">
              <span>Holiday</span>
              <p class="leaf-type-explanation">National, public, non-traditional or something in between.
              Something that you do on a specific date(s) to recognize something larger than yourself.</p>
            </label>

            <input
              type="radio"
              name="leaf-type"
              id="daily-practice"
              value="Daily Practice"
              class="leaf-type-radio"
              checked={props.state.postType === 'Daily Practice'}
            />
            <label for="daily-practice">
              <span>Daily Practice</span>
              <p class="leaf-type-explanation">Are there any habits that help you get through the day?
              Daily practices are things that will enhance peace and or productivity in day to day events.</p>
            </label>

            <input
              type="radio"
              name="leaf-type"
              id="adaptation"
              value="Adaptation"
              class="leaf-type-radio"
              checked={props.state.postType === 'Adaptation'}
            />
            <label for="adaptation">
              <span>Adaptation</span>
              <p class="leaf-type-explanation">Did you come up with a clever change to an already great tradition?
              This is for adjustments to the norm that just work.</p>
            </label>
          </section>


          <section class="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </section>
    </div>
  )
}