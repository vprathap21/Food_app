import React from "react";
import { Button } from "@material-tailwind/react";
import { MENU_IMAGE } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

function Menu({ resMenu }) {

  // Check if resMenu and its nested properties exist before destructuring
  const { name, defaultPrice, description,price ,imageId } =
    resMenu?.card?.info ?? {};

  const dispatch = useDispatch();

  const handleAddItem = (resMenu) => {
    //dispatch an action
    dispatch(addItem(resMenu));
  };

  return (
    <>
      <div className="w-[100%] bg-gray-300 h-[1.5px] block mx-auto"></div>
      <div className="flex justify-between align-middle">
        <div className="flex py-5 flex-col w-[65%]">
          {/* Use the extracted variables with nullish coalescing operator to handle undefined values */}
          <h1 className="font-bold text-lg">{name ? name: "Name Not Available"}</h1>
          <p className="text-base">
            Rs {(defaultPrice || price)/ 100 ?(defaultPrice || price)/ 100 :"Price Not Available"}
          </p>
          <p className="text-gray-700 text-sm pt-3 ">
            {description ?? "Description Not Available"}
          </p>
        </div>
        <div className="flex flex-col py-3 justify-center relative">
          <img
            src={MENU_IMAGE + imageId}
            className="h-20 w-20 rounded-md object-cover"
          />
          <Button
            className="h-10 w-[100%] bottom-1 bg-orange-700 hover:bg-green-600"
            onClick={() => handleAddItem(resMenu)}
          >
            ADD
          </Button>
        </div>
      </div>
    </>
  );
}

export default Menu;
