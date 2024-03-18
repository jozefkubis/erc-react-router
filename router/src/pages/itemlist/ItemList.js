import materialArr from "./data";
import { useState, useEffect } from "react";

import React from "react";

const Itemlist = () => {
  const [searchingItem, setSearchingItem] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [printedItems, setPrintedItems] = useState([]);

  // ..................................................................

  const itemsOnPage = (e) => {
    if (filteredItems) {
      setPrintedItems((printedItems) => {
        return [...printedItems, e.target.innerText];
      });
    } else {
      console.log("Nebolo nic napisane");
    }
  };

  // ..................................................................

  useEffect(() => {
    const itemsAfterFilter = materialArr.filter((items) => {
      return items.toLowerCase().includes(searchingItem.toLowerCase());
    });
    setFilteredItems(itemsAfterFilter);
  }, [searchingItem]);

  // ..................................................................

  return (
    <section className="section w-full overflow-hidden flex flex-col items-center justify-center relative space-y-2">
      <form className="form p-3 flex items-center flex-col w-full space-y-2 fixed top-14">
        <input
          className="searching-input w-60 p-2 rounded-md text-center text-slate-500 outline-none"
          onClick={() => {
            setFilteredItems([]);
            setSearchingItem("");
          }}
          type="text"
          placeholder="Search for item"
          value={searchingItem}
          onChange={(e) => setSearchingItem(e.target.value)}
        />
        <input
          className="deleteAll-btn w-60 p-2 bg-amber-700 rounded-md text-white"
          type="submit"
          value="DeleteAll"
          onClick={() => setPrintedItems([])}
        />
      </form>

      <div className="filtered-items flex flex-col overflow-x-hidden overflow-y-auto touch-pan-y w-1/2 h-screen cursor-pointer fixed top-[155px] space-y-[1px] z-10">
        {filteredItems.map((oneItem, index) => {
          if (searchingItem) {
            return (
              <button
                className="filtered-items-btn border-none p-2 bg-slate-400 rounded-md"
                onClick={itemsOnPage}
                key={index}
              >
                {oneItem.toLowerCase()}
              </button>
            );
          } else {
            return "";
          }
        })}
      </div>

      <div className="printed-items h-[58%] overflow-y-auto overflow-x-hidden w-3/4 fixed top-[155px] px-10 bg-white ring ring-amber-700 rounded-md">
        {printedItems.map((onePrintedItem, index) => {
          return (
            <div className="printed-items-div flex justify-between items-center p-2 font-bold w-full" key={index}>
              <p>{onePrintedItem}</p>
              <div className="number-and-btn ">
                <input type="text" className="number w-10 rounded-sm outline-none text-center" />
                <input
                  className="printed-items-btn ml-10 w-[20px] h-[20px] flex-shrink-0 bg-amber-700 rounded-full text-white cursor-pointer"
                  type="submit"
                  value="D"
                  onClick={() => {
                    setPrintedItems(
                      printedItems.filter((item) => item !== onePrintedItem) // alebo printedItems.filter((item, i) => i !== index))
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Itemlist;
