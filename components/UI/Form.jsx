import classes from "../../styles/form.module.css";
const Form = () => {
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.from__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.from__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.from__group}`}>
        <textarea type="text" row={5} placeholder="Message" required />
      </div>
      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
