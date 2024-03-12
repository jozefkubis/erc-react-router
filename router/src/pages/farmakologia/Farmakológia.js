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
    <section className="section flex flex-col items-center justify-center h-screen w-full mt-14 relative overflow-hidden">
      <form className="form flex flex-col items-center justify-center w-full">
        <input
          className="input h-7 border-none outline-none mb-1 w-1/3 text-xl"
          type="text"
          placeholder="Search Med"
          value={searchingMed}
          onChange={(e) => setSearchingMed(e.target.value)}
        />
        <button className="submit-btn" onClick={medsOnPage}>
          Submit
        </button>
      </form>

      <div className="filtered-med h-1/3 overflow-y-scroll overflow-x-hidden w-full">
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
            <div className="printed-med text-3 " key={id}>
              <h1 className="mt-4 mb-1 font-bold text-[20px]">{nazov}</h1>
              <p>{setFirstWordBold(skupina)}</p>
              <p>{setFirstWordBold(MU)}</p>
              <p>{setFirstWordBold(indikacie)}</p>
              <p>{setFirstWordBold(davkovanie)}</p>
              <p>{setFirstWordBold(sposobPodania)}</p>
              <p>{setFirstWordBold(nastupAodoznenieUcinku)}</p>
              <p>{setFirstWordBold(NU)}</p>
              <p>{setFirstWordBold(KI)}</p>
              <div className="div-selector w-2/3 mt-[30px]"></div>
            </div>
          );
        })}
      </div>

      <div className="refresh-btn-div">
        <button className="refresh-btn" onClick={() => setFilteredMed([])}>
          Refresh
        </button>
      </div>
    </section>
  );
};

export default Farmakológia;
