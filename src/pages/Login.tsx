import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f3f4f6",}}>
      <div style={{background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",}}>
      <h2 style={{textAlign: "center"}}>Login account</h2>
      <form style={{display: "flex",
    flexDirection: "column",
    gap: "15px",}}>
        <div>
            <label style={{fontSize: "14px",
    marginBottom: "5px",
    display: "block",}}>Your email</label>
            <input
              type="email"
              placeholder="name@company.com"
              style={{ width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",}}
            />
          </div>
          <div>
            <label style={{fontSize: "14px",
    marginBottom: "5px",
    display: "block",}}>Password</label>
            <input
              type="password"
              placeholder="********"
              style={{ width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",}}
            />
          </div>
          <button type="submit" style={{width: "100%",
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",}}>
            Login an account
          </button>
      </form>
      <p style={{textAlign: "center",
    fontSize: "14px",
    marginTop: "15px",}}>
          Already have an account?{" "}
          <Link to="/register" style={{color: "#2563eb",
    fontWeight: "600",
    textDecoration: "none"}}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}
