const Ekv = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 p-1 rounded-md text-white ring ring-red-500 text-left">
        <ul>
          <li className="font-bold italic">Ak neúčinné:</li>
          <li>Synchronizovaný výboj do 3 pokusov</li>
          <li> Sedácia / anestézia, ak je pri vedomí</li>
        </ul>
      </button>

      <br />

      <button
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
        onClick={goBack}
      >
        Spet
      </button>
    </div>
  );
};

export default Ekv;
