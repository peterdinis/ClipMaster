import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import { FC } from "react";

const Navigation: FC = () => {
  return (
    <>
      <nav className="fixed z-10 w-full bg-white dark:bg-transparent md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <Input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="peer hidden"
            />
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
              <a
                href="#"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <Camera size={30} />
                <span className="text-2xl font-bold text-orange-500 dark:text-white">
                  Clip{" "}
                  <span className="text-gray-500 dark:text-yellow-300">
                    Master
                  </span>
                </span>
              </a>

              <div className="flex items-center lg:hidden max-h-10">
                <Label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative w-10 h-auto p-2"
                >
                  <div
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"
                  ></div>
                  <div
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 dark:bg-white transition duration-300"
                  ></div>
                </Label>
              </div>
            </div>

            <Label
              role="button"
              htmlFor="toggle_nav"
              className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10  dark:bg-black dark:bg-opacity-80 bg-opacity-30 backdrop-blur backdrop-filter"
            ></Label>
            <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white dark:bg-gray-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
              <div className="text-gray-600 lg:pr-4 w-full">
                <ul
                  className="tracking-wide font-medium  text-sm 
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full"
                >
                  <li>
                    <a
                      href="#"
                      className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                    >
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                    >
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block md:px-4 transition dark:text-gray-300 dark:hover:text-yellow-300 hover:text-yellow-700"
                    >
                      <span>About Clip Master</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="w-full min-w-max space-y-2 
                    border-gray-700 lg:space-y-0 sm:w-max lg:border-l"
              >
                <Button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 ml-4 text-center rounded-full transition active:bg-yellow-200 dark:active:bg-gray-700 dark:focus:bg-gray-800 focus:bg-yellow-100 sm:w-max"
                >
                  <span className="block  dark:text-white font-semibold text-sm">
                    Sign up
                  </span>
                </Button>
                <Button
                  type="button"
                  variant={"secondary"}
                  className="w-full ml-4 py-3 px-6 text-center rounded-full transition sm:w-max"
                >
                  <span className="block text-yellow-900 font-semibold text-sm">
                    Login
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
