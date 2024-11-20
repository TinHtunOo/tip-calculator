export default function ResetBtn({ bill, setBill, onReset }) {
  return bill !== 0 ? <button onClick={onReset}>Reset</button> : "";
}
