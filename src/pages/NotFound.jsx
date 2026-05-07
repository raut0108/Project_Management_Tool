import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="content-page">
      <div className="section-heading">
        <h2>Page not found</h2>
      </div>
      <p>We couldn’t find that route. Go back to the dashboard to continue.</p>
      <Link to="/dashboard" className="secondary-btn">
        Back to dashboard
      </Link>
    </div>
  );
}

export default NotFound;
