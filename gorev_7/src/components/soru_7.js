import React from "react";

function Soru7() {
  const [dyili, setDyili] = React.useState(0);
  const [result, setResult] = React.useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = currentYear - dyili;
    dyili == ""
      ? alert("Bilgilerinizi kontol ediniz.")
      : result >= 18
      ? setResult("Ehliyet Alabilir")
      : setResult("Ehliyet Alamaz");
  };

  return (
    <>
      <h1>Soru 7</h1>
      <form onSubmit={handleSubmit}>
        <label for="dyili">Doğum Yılı:</label>
        <input
          type="number"
          id="dyili"
          onChange={(e) => setDyili(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <input value={result} type="text" id="result" disabled />
        <br />
        <br />
      </form>
    </>
  );
}

export default Soru7;
