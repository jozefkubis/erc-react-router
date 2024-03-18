const UkoncenieKPR = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="div flex flex-col space-y-4 justify-center items-center">
      <button className="button bg-white rounded-md text-blue-700 ring ring-blue-700 text-2xl p-8">
        Zvážte <br />
        ukončenie KPR
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

export default UkoncenieKPR;
