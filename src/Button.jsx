function Button() {
  //const handleclick = () => console.log("You clicked me");
  const handleclick2 = (name) => console.log(`${name} Stop it!!`);

  return (
    <button className="Button" onClick={() => handleclick2("Mr.")}>
      Click me
    </button>
  );
}

export default Button;
