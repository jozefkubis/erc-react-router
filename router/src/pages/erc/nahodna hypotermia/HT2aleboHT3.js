const HT2aleboHT3 = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-blue-700 px-2 py-2 rounded-md text-white ring ring-red-500 text-left w-68">
        <span className="font-bold">HT II alebo III (3) </span> <br />
        • Minimálne a opatrné pohyby na zabránenie kolapsu zo záchrany <br />
        • Zabráňte ďalším stratám tepla
        <br />
        • Aktívne externé ohrievanie a minimálne invazívne <br />
        techniky ohrievania (5)
        <br />
        • Zabezpečenie priechodnosti dýchacích ciest podľa <br />
        potreby
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

export default HT2aleboHT3;
