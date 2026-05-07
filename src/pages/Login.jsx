import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <label>
            Email
            <input type="email" placeholder="admin@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          <button type="submit" className="primary-btn">Sign in</button>
        </form>
        <p>
          New here? <Link to="/signup">Create account</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
