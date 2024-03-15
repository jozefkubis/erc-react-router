import materialArr from './data'
import { useState, useEffect } from 'react'

import React from 'react'

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
    <section className="section">
      <form className="form fixed top-16 w-full flex justify-center space-x-1 z-10">
        <input
          className="searching-input w-60 p-2 rounded-md text-center text-slate-500 outline-none relative"
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
          className="deleteAll-btn w-20 bg-amber-700 rounded-md text-white"
          type="submit"
          value="DeleteAll"
          onClick={() => setPrintedItems([])}
        />
      </form>

      <div className="filtered-items absolute flex flex-col items-center w-full top-[110px] space-y-1 overflow-x-hidden overflow-y-auto h-3/4">
        {filteredItems.map((oneItem, index) => {
          if (searchingItem) {
            return (
              <button
                className="filtered-items-btn p-1 bg-slate-400 border-none w-[250px] rounded-md text-center text-slate-900 z-10"
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

      <div className="printed-items">
        {printedItems.map((onePrintedItem, index) => {
          return (
            <div className="printed-items-div" key={index}>
              <p>{onePrintedItem}</p>
              <div className="number-and-btn ">
                <input type="text" className="number" />
                <input
                  className="printed-items-btn"
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
  )
}

export default Itemlist