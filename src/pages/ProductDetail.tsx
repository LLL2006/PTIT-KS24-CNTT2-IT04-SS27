import { Link, useParams } from "react-router-dom";
import { products } from "../data/Product";

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 style={{ padding: "20px", color: "red" }}>Sản phẩm không tồn tại.</h2>;
  }

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
        <h2>Chi tiết sản phẩm</h2>
      <h3>{product.name}</h3>
      <p><strong>Giá:</strong> {product.price.toLocaleString()} VND</p>
      <p><strong>Mô tả:</strong> {product.description}</p>
      <Link style={{textDecoration: "none"}} to={`/products`}>Quay lại danh sách sản phẩm</Link>
    </div>
  )
}
