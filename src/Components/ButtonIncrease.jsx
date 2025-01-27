export default function ButtonIncrease(props) {
  function handleAdd() {
    // increasing cookie when button is clicked
    props.setCookies(props.cookies + 1);
    console.log("button adding ...");
  }
  return (
    <>
      <button onClick={handleAdd}>Click to Add Cookie</button>
    </>
  );
}
