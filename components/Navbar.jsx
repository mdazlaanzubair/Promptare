"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import LoginProvider from "./LoginProvider";

const Navbar = () => {
  const { data: session } = useSession();

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
  ];

  return (
    <div className="navbar bg-base-100">
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
        <Link href="/" className="btn btn-ghost normal-case text-xl font-black">
          Promptare
        </Link>
      </div>
      <div className="navbar-end">
        {session?.user ? (
          <>
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
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
                  <Link href="/profile" className="justify-between">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link href="/create-prompt" className="justify-between">
                    Create Prompt
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          </>
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
