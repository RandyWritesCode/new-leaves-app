import React from 'react';

function Display(props) {
  let feed
  if (props.display !== '') {
    feed = props.display.map((post, idx) => {

      return (<section key={idx}>
        <header>
          <h2>{post.title}</h2>
          <p>{post.type}</p>
        </header>
        <blockquote>{post.summary}</blockquote>

        <button>Edit</button>
        <button>Delete</button>
      </section>
      )
    })
  }


  return (
    <div>

      {feed}
    </div>
  )
}

export default Display