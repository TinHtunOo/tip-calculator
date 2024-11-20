export default function Bill({ bill, setBill }) {
  return (
    <div className="input">
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
