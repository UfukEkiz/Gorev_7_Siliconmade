import React from "react";

function Soru4() {
  const [sayi, setSayi] = React.useState(0);
  const [result, setResult] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = sayi * sayi;

    sayi == "" ? alert("Bilgilerinizi kontol ediniz.") : setResult(result);
  };

  return (
    <>
      <h1>Soru 4</h1>
      <form onSubmit={handleSubmit}>
        <label for="sayi">Sayı:</label>
        <input
          type="number"
          id="sayi"
          onChange={(e) => setSayi(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="result">Karesi:</label>
        <input value={result} type="number" id="result" disabled />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru4;
