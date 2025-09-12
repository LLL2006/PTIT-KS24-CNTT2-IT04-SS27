import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/Products";

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialSearch = searchParams.get("search") || "";
  const [keyword, setKeyword] = useState(initialSearch);
  
  useEffect(() => {
    setKeyword(initialSearch);
  }, [initialSearch]);
  
  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/products1?search=${encodeURIComponent(keyword.trim())}`);
    } else {
      navigate(`/products`);
    }
  };

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredProducts = products.filter(product => {
    if (!initialSearch) return true; 
    
    const searchTerm = initialSearch.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập từ khóa..."
        />
        <button
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
            >
              <h2>{product.name}</h2>
              <p>
                Giá: {product.price.toLocaleString()} VND
              </p>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <div>
            Không tìm thấy sản phẩm nào phù hợp với từ khóa "{initialSearch}"
          </div>
        )}
      </div>
    </div>
  );
}