import React from 'react';

function Post({steps}) {

    React.useEffect(() => {
          console.log(steps)
    },[])

  return <div>
      <h1>Thanks we will cacth up with you as soon!</h1>
  </div>;
}

export default Post;
