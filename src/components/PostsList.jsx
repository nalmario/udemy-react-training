import Post from './Post'
import NewPost from './NewPost';
import classes from './PostsList.module.css';
import Modal from './Modal'
import { useState } from 'react';

function PostsList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]) // store list of posts, update when new post

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
      )}
      {posts.length > 0 && ( // conditional rendering
      <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
      </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;