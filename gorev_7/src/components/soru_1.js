import React from "react";

function Soru1() {
  const [price, setPrice] = React.useState(0);
  const [profit, setProfit] = React.useState(0);
  const [result, setResult] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = price + (price * profit) / 100;

    price == "" || profit == ""
      ? alert("Bilgilerinizi kontol ediniz.")
      : setResult(result);
  };

  return (
    <>
      <h1>Soru 1</h1>
      <form onSubmit={handleSubmit}>
        <label for="price">Fiyatını girin:</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="profit">Kar oranını girin:</label>
        <input
          type="number"
          id="profit"
          onChange={(e) => setProfit(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="result">Satış Fiyatı:</label>
        <input value={result} id="result" name="result" disabled />
      </form>
    </>
  );
}

export default Soru1;
