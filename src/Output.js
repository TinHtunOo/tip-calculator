export default function Output({ bill, mySatis, myFriSatis }) {
  let tip = Math.round(((bill / 100) * (mySatis + myFriSatis)) / 2);
  let total = bill + tip;
  return bill !== 0 ? (
    <h2>
      You pay ${total} (${bill} + ${tip} tip).
    </h2>
  ) : (
    ""
  );
}
