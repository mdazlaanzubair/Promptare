"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { deletePrompt } from "@utils/dbFunctions";

const FeedCard = ({ feed }) => {
  // getting logged in user session
  const { data: session } = useSession();

  return (
    <div className="card shadow-lg w-full">
      <div className="badge badge-primary cursor-pointer capitalize hover:bg-gradient-to-tr hover:from-primary-focus hover:via-primary hover:to-primary-focus">
        <CopyToClipboard
          text={feed.category}
          onCopy={() => toast("Category Copied!")}
        >
          <span>{feed.category}</span>
        </CopyToClipboard>
      </div>
      <div className="card-body bg-base-100 text-base-content rounded-box">
        <div className="flex flex-row border-b pb-3">
          <div className="flex flex-grow flex-row items-center justify-start gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Image
                  src={
                    feed?.creator?.avatar ||
                    `https://ui-avatars.com/api/?name=Un+Available`
                  }
                  width={100}
                  height={100}
                  alt={`Profile picture of ${feed?.creator?.full_name}`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold -mb-1">
                {feed?.creator?.full_name}
              </h1>
              <Link
                href={`/profile/${feed?.creator?._id}`}
                className="lowercase text-xs text-primary font-medium hover:underline underline-offset-2"
              >
                @{feed?.creator?.username}
              </Link>
            </div>
          </div>
          <div className="flex flex-shrink-0 justify-between gap-1">
            {session?.user?.id == feed?.creator?._id ? (
              <div className="dropdown dropdown-left">
                <label
                  tabIndex={0}
                  className="btn btn-sm border-none btn-outline btn-primary btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-neutral text-neutral-content rounded-box w-52 text-sm"
                >
                  <li>
                    <CopyToClipboard
                      text={feed?.prompt}
                      onCopy={() => toast("Prompt Copied!")}
                    >
                      <a>Copy</a>
                    </CopyToClipboard>
                  </li>
                  <li>
                    <Link href={`/feeds/${feed._id}`}>Edit</Link>
                  </li>
                  <li>
                    <a onClick={async () => await deletePrompt(feed._id)}>
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <CopyToClipboard
                text={feed?.prompt}
                onCopy={() => toast("Prompt Copied!")}
              >
                <button
                  type="button"
                  className="btn btn-sm border-none btn-outline btn-success btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                </button>
              </CopyToClipboard>
            )}
          </div>
        </div>
        <p className="py-3">{feed.prompt}</p>
        <div className="flex flex-row border-t pt-3 flex-wrap items-center justify-start gap-1">
          {feed?.tags?.map((tag, index) => (
            <div
              key={index}
              className="badge cursor-pointer capitalize hover:bg-gradient-to-tr hover:from-neutral-focus hover:via-gray-800 hover:to-neutral-focus"
            >
              <CopyToClipboard text={tag} onCopy={() => toast("Tag Copied!")}>
                <span>{tag}</span>
              </CopyToClipboard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
