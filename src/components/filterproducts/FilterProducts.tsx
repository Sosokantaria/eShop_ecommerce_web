import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../buttons";


export function Filter() {
  const navigate = useNavigate()
  const [minValue, serMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  function FilterByPrice(min: number, max: number) {
   if(  min < max) {
    navigate(`/FilteredProducts/${min}/${max}`);
   }
  }
  return (
    <div className="p-3 m-auto  w-[60%] bg-[#1f2605] rounded-lg mt-10 flex justify-around items-center">
      <div className="flex gap-3 items-center max-xl:flex-col">
        <p className="text-white font-bold">filter by price : </p>
        <div className="flex gap-3 max-md:flex-col max-md:items-end">
          <span className="flex items-center">
            <p className="text-white font-bold mr-3">
              from 
            </p>
            <input
              className="pl-2 py-1"
              onChange={(e) => serMinValue(Number(e.target.value))}
              type="number"
              required
            />
          </span>
          <span className="flex items-center">
            <p className="text-white font-bold mr-3">to </p>
            <input
              className="pl-2 py-1"
              onChange={(e) => setMaxValue(Number(e.target.value))}
              
              type="number"
              required
            />
          </span>
        </div>
        <PrimaryBtn
          onClick={() => {
            FilterByPrice(minValue, maxValue);
          }}
        >
          filter
        </PrimaryBtn>
      </div>
    </div>
  );
}