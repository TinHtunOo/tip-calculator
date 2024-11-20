export default function SatisfiedLevel({ children, satis, setSatis }) {
  const serviceLvl = [
    { percentage: 0, text: "Dissatisfied (0%)" },
    { percentage: 5, text: "It was Okay (5%)" },
    { percentage: 10, text: "It was Good(10%)" },
    { percentage: 20, text: "Absolutely Amazing (20%)" },
  ];
  return (
    <div className="input">
      <p>{children}</p>
      <select value={satis} onChange={(e) => setSatis(Number(e.target.value))}>
        {serviceLvl.map((lvl) => (
          <option value={lvl.percentage} key={lvl.percentage}>
            {lvl.text}
          </option>
        ))}
      </select>
    </div>
  );
}
