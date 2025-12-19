import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onNameChange={changeNameHandler}
      />
      <ul className={classes.posts}>
        <Post title={enteredName} content={enteredBody} />
        <Post title="Yellow World!" content="This the second post." />
        <Post title="Bello World!" content="This the third post." />
        <Post title="Jell-o World!" content="This the fourth post." />
      </ul>
    </>
  );
}
export default PostsList;
