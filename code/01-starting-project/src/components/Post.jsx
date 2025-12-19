import classes from "./Post.module.css";

const names = ["Alice", "Bob", "Charlie"];

function Post(props) {
  return (
    <li className={classes.post}>
      <h2 className={classes.author}>{props.title}</h2>
      <h3>
        Say Hellooo to <br />
        {names[Math.floor(Math.random() * names.length)]}!
      </h3>
      <p className={classes.text}>
        What is this? <br />
        {props.content}
      </p>
    </li>
  );
}

export default Post;
