function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      {children}
    </div>
  );
}

export default Card;