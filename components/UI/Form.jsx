import Link from "next/link";
import classes from "../../styles/form.module.css";
import { useRouter } from "next/router";
const Form = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    //e.preventDefault();
    setTimeout(() => {
      router.push("/");
    }, 500);
  };
  return (
    <form
      className={`${classes.form}`}
      action="https://formspree.io/f/mnqynrnp"
      method="POST"
    >
      <div className={`${classes.from__group}`}>
        <input type="text" placeholder="Your Name" name="name" required />
      </div>
      <div className={`${classes.from__group}`}>
        <input type="email" placeholder="Email Address" name="email" required />
      </div>
      <div className={`${classes.from__group}`}>
        <textarea
          type="text"
          row={10}
          placeholder="Message"
          name="message"
          required
        />
      </div>
      <button
        className="primary__btn"
        type="submit"
        onClick={() => handleSubmit}
      >
        Send
      </button>
    </form>
  );
};

export default Form;
