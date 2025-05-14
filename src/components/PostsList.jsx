import Post from './Post'
import NewPost from './NewPost';
import classes from './PostsList.module.css';
import Modal from './Modal'
import { useState } from 'react';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author="Manuel" body="Check out the full course!"/>
      </ul>
    </>
  );
}

export default PostsList;