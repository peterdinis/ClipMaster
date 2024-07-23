import { Camera, Copy } from "lucide-react";
import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <>
      <footer className="w-full bg-gray-100 dark:bg-gray-900 py-16">
        <div className="md:px-12 lg:px-28">
          <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <Camera size={30} />
              <span>Clip Master</span>
            </div>
            <ul
              role="list"
              className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
            >
              <li role="listitem">
                <Link href="#" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li role="listitem">
                <Link href="#" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li role="listitem">
                <Link href="#" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li role="listitem">
                <Link href="#" className="hover:text-primary">
                  About Clip Master
                </Link>
              </li>
            </ul>
            <div className="text-center flex items-center justify-center space-x-2">
              <span className="text-xl tracking-wide">&copy; Clip Master 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;