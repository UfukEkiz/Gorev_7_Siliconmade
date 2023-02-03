import React from "react";

function Soru5() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [result, setResult] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = x * x - y * y;

    x == "" || y == ""
      ? alert("Bilgilerinizi kontol ediniz.")
      : setResult(result);
  };
  return (
    <>
      <h1>Soru 5</h1>
      <form onSubmit={handleSubmit}>
        <label for="x">X:</label>
        <input
          type="number"
          id="x"
          onChange={(e) => setX(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="y">Y:</label>
        <input
          type="number"
          id="y"
          onChange={(e) => setY(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="result">X ve Y değerlerinin kare farkı:</label>
        <input value={result} type="number" id="result" disabled />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru5;
