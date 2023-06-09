"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoginProvider from "./LoginProvider";

import appLogoFull from "@public/app-logo-full.png";
import appLogoShort from "@public/app-logo-short.png";
import appLogoIcon from "@public/app-logo-icon.png";
import Image from "next/image";
import { populate_default_prompts } from "@utils/dbFunctions";

const Navbar = () => {
  const { data: session } = useSession();
  const { pushTo } = useRouter();

  const navLinks = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/feeds",
      title: "Feeds",
    },
    {
      url: "/profile",
      title: "Contributors",
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm mb-5">
      <div className="navbar-start">
        <div className="dropdown flex lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((nav, index) => (
              <li key={index}>
                <Link href={nav.url}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="lg:flex hidden menu menu-horizontal menu-compact">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link href={nav.url}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl font-black hover:bg-transparent"
        >
          <Image
            src={appLogoFull}
            className="w-20 lg:w-36 p-0"
            height="0"
            width="0"
            alt="app logo full"
            title="Promptare"
          />
        </Link>
      </div>
      <div className="navbar-end">
        {session?.user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={session.user.image} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <p className="px-4 py-3 text-xs border-b border-gray-400 font-bold">
                {session.user.name} <br />
                <a
                  href={`mailto:{session.user.email}`}
                  className="link text-primary font-normal underline-offset-4 hover:text-secondary transition-colors duration-300"
                >
                  {session.user.email}
                </a>
              </p>
              <li>
                <Link href="/profile">My Profile</Link>
              </li>
              <li>
                <Link href="/create-prompt">Create Prompt</Link>
              </li>
              {session?.user?.id == "64734dd3ad20c60ed2f1b968" ? (
                <li>
                  <a onClick={async () => await populate_default_prompts()}>
                    Spin-up Bulk Prompts
                  </a>
                </li>
              ) : (
                ""
              )}
              <li>
                <a
                  onClick={() => {
                    signOut();
                    pushTo("/feeds");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="menu menu-horizontal gap-2">
            <LoginProvider />
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
