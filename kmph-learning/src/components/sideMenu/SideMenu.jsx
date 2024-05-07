import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  BookOpenIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  PhoneIcon,
  PlayCircleIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import { DarkThemeToggle } from "flowbite-react";
import { default as React, useState } from "react";
import { Link } from "react-router-dom";
import code from "../../assets/images/svgs/code.svg";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const mainTabs = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Courses",

    href: "/courses",
    icon: BookOpenIcon,
  },
  {
    name: "Tutorial",

    href: "/tutorials",
    icon: VideoCameraIcon,
  },
  {
    name: "Blog",

    href: "/blog",
    icon: DocumentTextIcon,
  },
  {
    name: "Notes",

    href: "/notes",
    icon: BookOpenIcon,
  },
];

const secondaryTabs = [
  {
    title: "HTML",
    href: "tutorial/html",
  },
  {
    title: "CSS",
    href: "tutorial/css",
  },
  {
    title: "JAVASCRIPT",
    href: "tutorial/js",
  },
  {
    title: "C",
    href: "tutorial/c",
  },
  {
    title: "C++",
    href: "tutorial/c++",
  },
  {
    title: "JAVA",
    href: "tutorial/java",
  },
  {
    title: "PYTHON",
    href: "tutorial/python",
  },
  {
    title: "PHP",
    href: "tutorial/php",
  },
  {
    title: "REACT JS",
    href: "tutorial/react",
  },
];
const SideMenu = () => {
  const [menuVisible, setMenuVisibility] = useState(false);

  const handleMenu = () => {
    setMenuVisibility(!menuVisible);
  };
  return (
    <div
      className="absolute right-0 top-6 mr-2 cursor-pointer rounded-lg  tablet:hidden "
      onClick={handleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className=" h-8 w-8 text-gray-400 hover:text-purple-800 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
      <Dialog
        as="div"
        className=" lg:hidden"
        open={menuVisible}
        onClose={() => handleMenu}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-2/4 overflow-y-auto bg-gray-200   px-6 py-6 dark:bg-secondary-bg sm:ring-1  sm:ring-gray-900/10 ">
          <div className=" flex items-center justify-between pb-4 ">
            <a
              href="#"
              className="-m-1.5 rounded-lg p-1.5  hover:shadow-md hover:ring-2 hover:ring-gray-300"
            >
              <img className="h-8 w-auto" src={code} alt="" />
            </a>
            <div>
              <DarkThemeToggle className="    bg-slate-500 text-white shadow-lg shadow-gray-500 hover:bg-purple-600 hover:shadow-purple-600" />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-500 hover:text-purple-700 dark:text-white"
              onClick={handleMenu}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 sm:hidden">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black hover:bg-purple-500/85 hover:text-white 
                        dark:text-white dark:hover:text-white sm:hidden  "
                      >
                        Menu
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...mainTabs, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as={Link}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-purple-700 hover:bg-white dark:text-white dark:hover:bg-gray-50 dark:hover:text-black "
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black hover:bg-purple-500/85 hover:text-white 
                        dark:text-white  dark:hover:text-white sm:hidden  "
                      >
                        Courses
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none",
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...secondaryTabs, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.title}
                            as={Link}
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-purple-700 hover:bg-white dark:text-white dark:hover:bg-gray-50 dark:hover:text-black "
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 my-1 block rounded-lg bg-gray-500  px-3 py-2.5 text-base font-semibold leading-7 text-white  hover:bg-purple-700/85 hover:text-white dark:hover:bg-gray-700"
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  className="-mx-3 my-1 block rounded-lg bg-gray-500  px-3 py-2.5 text-base font-semibold leading-7 text-white  hover:bg-purple-700/85 hover:text-white dark:hover:bg-gray-700"
                >
                  Sign Up
                </a>
                <div className=" md:hidden  ">
                  <label
                    htmlFor="searchBox"
                    className=" absolute z-50 ml-2 mt-3 rounded-lg border-purple-600"
                  >
                    <FontAwesomeIcon
                      style={{ color: "#9333EA", width: "17px" }}
                      icon={faMagnifyingGlass}
                    />{" "}
                  </label>

                  <input
                    id="searchBox"
                    placeholder="Search..."
                    className="search-box h-full w-full p-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default SideMenu;
