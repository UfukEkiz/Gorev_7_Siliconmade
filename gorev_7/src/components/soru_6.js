import React from "react";

function Soru6() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [c, setC] = React.useState(0);
  const [result, setResult] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = 2 * b - 4 * a * c;

    a == "" || b == "" || c == ""
      ? alert("Bilgilerinizi kontol ediniz.")
      : setResult(result);
  };
  return (
    <>
      <h1>Soru 6</h1>
      <form onSubmit={handleSubmit}>
        <label for="a">a:</label>
        <input
          type="number"
          id="a"
          onChange={(e) => setA(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="b">b:</label>
        <input
          type="number"
          id="b"
          onChange={(e) => setB(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="c">c:</label>
        <input
          type="number"
          id="c"
          onChange={(e) => setC(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="result">2b - 4ac:</label>
        <input value={result} type="number" id="result" readonly />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru6;
