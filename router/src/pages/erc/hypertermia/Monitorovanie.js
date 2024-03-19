const Monitorovanie = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 px-3 py-2 rounded-md text-white ring ring-red-500 text-left w-76">
        Pokračujte v monitoringu aspoň <br />
        15 min po schladení
        <br />
        • Rehydratujte, ak je potrebné
        <br />
        • Skontrolujte, či sa zlepšil mentálny stav <br />• Zabráňte náhodnej
        hypotermii (menej ako 35 °C)
      </button>

      <button
        className="back-button w-20 bg-amber-700 p-1 rounded-md text-white"
        onClick={goBack}
      >
        Spet
      </button>
    </div>
  );
};

export default Monitorovanie;
