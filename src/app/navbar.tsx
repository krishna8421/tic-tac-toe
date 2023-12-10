import {} from "@heroicons/react/24/solid";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-end gap-4 p-4 w-screen items-center">
      <ThemeSwitcher />
      <Link
        href="https://github.com/krishna8421/tic-tac-toe"
        className="hover:underline text-lg"
      >
        github
      </Link>
    </nav>
  );
};

export default NavBar;
