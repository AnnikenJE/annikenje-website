import { Link } from "react-router-dom";
import { revealOrder as order } from "../utils/reveal";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <main id="main-content" tabIndex={-1} className="notfound-main">
      <section className="notfound-section">
        <h1 className="display-heading reveal" style={order(0)}>
          404
        </h1>
        <p className="reveal" style={order(1)}>
          Oops. This page doesn’t exist.
        </p>
        <Link to="/" className="notfound-link reveal" style={order(2)}>
          Back home
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
