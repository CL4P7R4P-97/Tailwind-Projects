import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import parse from "html-react-parser";
import {
  changeTab,
  changeTutorial,
  getCurrentParent,
  getCurrentTab,
  togglePanel,
} from "../../redux/slice/tutorialsSlice";
import SidePanel from "../tutorialPanel/SidePanel";
const Template = () => {
  const data = useSelector((state) => state.tutorials.data);
  const currentTab = useSelector(getCurrentTab);
  const parent = useSelector(getCurrentParent);
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const currentTutorial = useLocation()
    .pathname.split("tutorial/")[1]
    .toUpperCase();
  const currentData = data[currentTutorial];

  useEffect(() => {
    loadContent();

    dispatch(changeTutorial(currentTutorial));
  }, [currentTab, currentTutorial]);

  useEffect(() => {
    dispatch(togglePanel);
  }, []);
  useEffect(() => {
    dispatch(changeTab(data[currentTutorial]["INTRODUCTION"][0].title));
  }, [currentTutorial]);

  const loadContent = () => {
    let pageContent = data[currentTutorial][parent]?.map((tab, index) => {
      if (tab.title === currentTab) {
        return tab.content;
      }
    });
    setContent(pageContent);
  };

  return (
    <section className="    m-[-12px] my-auto flex pr-12     ">
      <SidePanel data={currentData} />
      <div className="  overflow-x-hidden text-black dark:text-white xxsm:pl-20 sm:pl-80  sm:pt-10">
        {parse(content.toString())}
      </div>
    </section>
  );
};

export default Template;
