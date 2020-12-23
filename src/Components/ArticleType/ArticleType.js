import React from 'react';


export default function ArticleType(props) {
  return (
    <>
      <input
        type="radio"
        name="leaf-type"
        id="none"
        value=""
        className="leaf-type-radio"
        checked={props.articleType === ''} />
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
        checked={props.articleType === 'Family'}
      />
      <label htmlFor="family">
        <span>Family</span>
        <p className="leaf-type-explanation">It could be something passed down from generation to generation,
              or unique to your household.</p>
      </label>

      <input
        type="radio"
        name="leaf-type"
        id="holiday"
        value="Holiday"
        className="leaf-type-radio"
        checked={props.articleType === 'Holiday'}
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
        checked={props.articleType === 'Daily Practice'}
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
        checked={props.articleType === 'Adaptation'}
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
        checked={props.articleType === 'Clothing'}
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
        checked={props.articleType === 'Food'}
      />
      <label htmlFor="food">
        <span>Food</span>
        <p className="leaf-type-explanation">Recipes and traditions related to food.</p>
      </label>
    </>
  );
};