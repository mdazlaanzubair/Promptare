"use client";

import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { searchByUsername } from "@utils/feedFilters";
import Image from "next/image";
import Link from "next/link";

const Users = ({ users }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([...users]);

  useEffect(() => {
    const searchUsers = searchByUsername(users, searchKeyword);
    setFilteredUsers(searchUsers);
  }, [searchKeyword]);

  return (
    <div id="user-section" className="bg-base-100 mx-auto p-5">
      <div className="grid grid-cols-1 gap-5 mb-10">
        <form className="group input-search w-full mx-auto flex flex-row flex-wrap rounded-box px-3 py-2 justify-between items-center gap-3 shadow-sm bg-base-200">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="flex-grow">
            <input
              type="search"
              placeholder="Search by username..."
              className="border-none outline-none w-full bg-transparent"
              onChange={(e) => setSearchKeyword(e.target.value)}
              value={searchKeyword}
            />
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        {filteredUsers &&
          filteredUsers.map((user, index) => (
            <Link href={`/profile/${user._id}`} key={index}>
              <div className="card bg-gradient-to-tr bg-neutral-focus via-neutral to-neutral-focus text-neutral-content shadow-xl px-5 py-10">
                <figure>
                  <div className="w-20 mask mask-squircle bg-base-200">
                    <Image
                      src={user.avatar}
                      width="100"
                      height="100"
                      alt="profile picture"
                      className="rounded-xl w-full"
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h1 className="card-title text-base">{user.full_name}</h1>
                  <a
                    href={`mailto:${user.email}`}
                    className="lowercase text-xs text-primary font-medium hover:underline underline-offset-2"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Users;
