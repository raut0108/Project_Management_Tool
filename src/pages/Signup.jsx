import { Link } from 'react-router-dom';

function Signup() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Sign up</h2>
        <form>
          <label>
            Name
            <input type="text" placeholder="Full name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Choose a password" />
          </label>
          <button type="submit" className="primary-btn">Create account</button>
        </form>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
