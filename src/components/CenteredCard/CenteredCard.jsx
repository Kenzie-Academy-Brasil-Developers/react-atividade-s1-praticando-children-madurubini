import "./style.css";

function Card({ children }) {
  return (
    <div className="Card">
      <span>{children}</span>
    </div>
  );
}

export default Card;
