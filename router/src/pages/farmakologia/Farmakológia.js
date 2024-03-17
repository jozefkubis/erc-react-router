import { useState } from "react";
import ampularium from "./data";

const Farmakológia = () => {
  const [searchingMed, setSearchingMed] = useState("");
  const [filteredMed, setFilteredMed] = useState([]);

  const setFirstWordBold = (result) => {
    const words = result.split(" ");
    const firstWord = words[0];
    const restOfSentence = words.slice(1).join(" ");

    return (
      <span>
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>
          {firstWord}
        </span>
        <span> {restOfSentence}</span>
      </span>
    );
  };

  const medsOnPage = (e) => {
    e.preventDefault();

    const medsAfterFilter = ampularium.filter((meds) => {
      return meds.nazov.toLowerCase().includes(searchingMed.toLowerCase());
    });

    if (searchingMed) {
      setFilteredMed(medsAfterFilter);
    }
    setSearchingMed("");
  };

  return (
    <section className="section flex flex-col items-center justify-center w-full relative space-y-6 h-[65%] ">
      <form className="form w-full flex justify-center fixed top-16 space-x-4">
        <input
          className="input w-60 p-2 rounded-md text-center text-slate-500 outline-none"
          type="text"
          placeholder="Search Med"
          value={searchingMed}
          onChange={(e) => setSearchingMed(e.target.value)}
        />

        <button
          className="submit-btn w-20 bg-amber-700 rounded-md text-white"
          onClick={medsOnPage}
        >
          Submit
        </button>
      </form>

      <div className="filtered-med w-3/4 overflow-y-scroll bg-white p-4 text-xs rounded-md space-y-4 h-full ring-4 ring-amber-700">
        {filteredMed.map((oneMed) => {
          const {
            id,
            nazov,
            skupina,
            MU,
            indikacie,
            davkovanie,
            sposobPodania,
            nastupAodoznenieUcinku,
            NU,
            KI,
          } = oneMed;

          return (
            <div className="printed-med space-y-2 text-slate-700 " key={id}>
              <h1 className="text-center font-bold text-xl mb-3">{nazov}</h1>
              <p>{setFirstWordBold(skupina)}</p>
              <p>{setFirstWordBold(MU)}</p>
              <p>{setFirstWordBold(indikacie)}</p>
              <p>{setFirstWordBold(davkovanie)}</p>
              <p>{setFirstWordBold(sposobPodania)}</p>
              <p>{setFirstWordBold(nastupAodoznenieUcinku)}</p>
              <p>{setFirstWordBold(NU)}</p>
              <p>{setFirstWordBold(KI)}</p>
              <div className=""></div>
            </div>
          );
        })}
      </div>

      <div className="refresh-btn-div">
        <button
          className="refresh-btn w-20 bg-amber-700 p-1 rounded-md text-white mt-3"
          onClick={() => setFilteredMed([])}
        >
          Refresh
        </button>
      </div>
    </section>
  );
};

export default Farmakológia;
