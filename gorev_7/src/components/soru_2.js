import React from "react";

function Soru2() {
  const [kisak, setKisak] = React.useState(0);
  const [uzunk, setUzunk] = React.useState(0);
  const [alan, setAlan] = React.useState("");
  const [cevre, setCevre] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const alan = kisak * uzunk;
    const cevre = 2 * (kisak + uzunk);

    kisak == "" || uzunk == ""
      ? alert("Bilgilerinizi kontol ediniz.")
      : setAlan(alan);
        setCevre(cevre);
  };
  return (
    <>
      <h1>Soru 2</h1>
      <form onSubmit={handleSubmit}>
        <p>Alanı ve çevresi hesaplanacak olan dikdörtgen için;</p>
        <label for="kisak">Kısa kenar:</label>
        <input
          type="number"
          id="kisak"
          onChange={(e) => setKisak(Number(e.target.value))}
        />
        <br />
        <br />
        <label for="uzunk">Uzun kenar:</label>
        <input
          type="number"
          id="uzunk"
          onChange={(e) => setUzunk(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="submit" id="calculated">
          Hesapla
        </button>
        <br />
        <br />
        <label for="alan">Alan:</label>
        <input value={alan} type="number" id="alan" disabled /> <br />
        <br />
        <label for="cevre">Çevre:</label>
        <input value={cevre} type="number" id="cevre" disabled />
      </form>
    </>
  );
}

export default Soru2;
