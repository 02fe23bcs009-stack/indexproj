import React from 'react';

// A functional component that accepts "props"
function Welcome(props) {
  const name = props.name || "Guest";

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <p>Welcome to your first React JSX file.</p>
      {/* This is a comment in JSX */}
    </div>
  );
}

export default Welcome;
