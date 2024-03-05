const Events = () => {
  const handleClick = (e) => {
    alert("Hi");
    console.log(e);
    console.log(e.target);
  };

  return (
    <div>
      <h1>EVENTS</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => alert("Deneme")}>Save</button>

      <button>Change</button>
    </div>
  );
};

export default Events;
