import { Link } from "react-router-dom";
import { useCategory } from "../../Context";
import { categories } from "../../utils/categories";
import "./index.css";

export function Card() {
  const { setCategory } = useCategory();
  return (
    <div className="card_container">
      {categories.map(({ id, categoryName, description, code, imageUrl }) => (
        <div key={id} className="card">
          <div>
            <img
              className="card_img"
              src={imageUrl}
              alt={categoryName}
            />
          </div>
          <div className="card_content">
            <h2>{categoryName}</h2>
          </div>
          <div className="description">
            <p>{description}</p>
            <p>Total Questions: 10 </p>
          </div>
          <button className="btn_quiz_primary" onClick={() => setCategory({ id: code, name: categoryName})}>
            <Link to="/rules">Play now</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
