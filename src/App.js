import Bill from "./Bill";
import SatisfiedLevel from "./SatisfiedLevel";
import Output from "./Output";
import ResetBtn from "./ResetBtn";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [mySatis, setMySatis] = useState(0);
  const [myFriSatis, setMyFriSatis] = useState(0);
  function handleReset() {
    setBill((bill) => (bill = 0));
    setMySatis((satis) => (satis = 0));
    setMyFriSatis((satis) => (satis = 0));
  }

  return (
    <div className="container">
      <div>
        <Bill bill={bill} setBill={setBill} />
        <SatisfiedLevel satis={mySatis} setSatis={setMySatis}>
          How did you like the service?
        </SatisfiedLevel>
        <SatisfiedLevel satis={myFriSatis} setSatis={setMyFriSatis}>
          How did your friend like the service?
        </SatisfiedLevel>
        <Output bill={bill} mySatis={mySatis} myFriSatis={myFriSatis} />
        <ResetBtn bill={bill} setBill={setBill} onReset={handleReset} />
      </div>
    </div>
  );
}
