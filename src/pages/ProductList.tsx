import { Link } from "react-router-dom";
import { products } from "../data/Product";

export default function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
        <header style={{ background: 'linear-gradient(135deg, #4A90E2, #007AFF)',
    padding: '60px 20px',
    textAlign: 'center' as const,
    color: 'white',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',}}>
            <h1 style={{marginBottom: "30px"}}>Trang Chi Tiết Sản Phẩm</h1>
            <p>Danh sách sản phẩm</p>
        </header>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              width: "220px",
              background: "#fff"
            }}>
            <h3>{p.name}</h3>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <Link style={{textDecoration: "none"}} to={`/products/${p.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
