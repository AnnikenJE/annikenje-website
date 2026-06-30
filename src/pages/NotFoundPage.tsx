import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <main id="main-content" tabIndex={-1} className="notfound-main">
      <section className="notfound-section">
        <h1 className="display-heading">404</h1>
        <p>Oops — this page doesn't exist.</p>
        <Link to="/" className="notfound-link">
          Back home
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
