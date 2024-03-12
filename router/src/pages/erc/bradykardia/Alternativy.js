const Alternativy = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-white p-1 rounded-md text-blue-700 ring ring-blue-700">
        <ul className="text-left">
          <li className="font-bold">Alternatívy zahŕňajú:</li>
          <li>Aminofylín</li>
          <li>Dopamín</li>
          <li>
            Glukagón (ak je bradykardia spôsobená beta-blokátorom alebo
            blokátorom kalciových kanálov)
          </li>
          <li>Glykopyrolát (môže byť použitý namiesto atropínu)</li>
        </ul>
      </button>

      <button
        onClick={goBack}
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
      >
        Spet
      </button>
    </div>
  );
};

export default Alternativy;
