import { BookOpenIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeParent,
  changeTab,
  getCurrentTab,
  togglePanel,
} from "../../redux/slice/tutorialsSlice";
const SidePanel = ({ data }) => {
  const [isOpen, setIsOpen] = useState(true);
  const currentTab = useSelector(getCurrentTab);
  const dispatch = useDispatch();
  const currentClasses =
    " scrollbar-custom  h-3/4 fixed w-32   min-w-64 md:flex-col overflow-x-hidden overflow-y-scroll bg-purple-100 p-6 px-7 dark:bg-card";
  const handleTabChange = (t, p) => {
    dispatch(changeTab(t.innerText));
    dispatch(changeParent(p));
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
    dispatch(togglePanel());
  };
  return (
    <>
      <div
        onClick={handleClose}
        className={
          isOpen
            ? " hidden  "
            : " right-arrow btn btn-dark fixed mt-7  cursor-pointer p-4 text-center text-white "
        }
      >
        <i>Topics</i>
      </div>
      <aside
        className={isOpen ? currentClasses : currentClasses + " xxsm:hidden"}
      >
        <XMarkIcon
          onClick={handleClose}
          className="opacity-1  fixed ml-48 w-5 text-purple-700/90  hover:text-black dark:text-white  dark:hover:text-purple-500 md:hidden "
        />

        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <h1 className="text-lg font-bold dark:text-white">{key}</h1>
            <ul className="pl-2">
              {value.map((subHeading, index) => (
                <li
                  className="flex space-x-2 text-purple-600 dark:text-subHeading"
                  key={index}
                >
                  <BookOpenIcon className="w-3 flex-shrink-0" />
                  <a
                    onClick={(e) =>
                      handleTabChange(e.target, subHeading.sideParent)
                    }
                    className={`flex-shrink cursor-pointer hover:underline ${currentTab === subHeading.title ? "font-bold underline" : ""}`}
                  >
                    {subHeading.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
};

export default SidePanel;
