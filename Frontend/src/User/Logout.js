import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <section>
      <div className="container">
        <h3>Thank You For Trusting Us</h3>
        <h2>Visit Again !!!</h2>
      </div>
      <div>
        <Link to="/signin">
          <button className="btn btn-success">Signin Here</button>
        </Link>
      </div>
    </section>
  );
};
export default Logout;
