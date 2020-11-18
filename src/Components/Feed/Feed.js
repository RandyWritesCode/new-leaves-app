import React from 'react';

function Feed(props) {

  let feed = props.posts.map((post, idx) => {

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

  return (
    <div>
      <header role="banner">
        <h1>Leaf Pile</h1>
      </header>
      {feed}
    </div>
  )
}

export default Feed