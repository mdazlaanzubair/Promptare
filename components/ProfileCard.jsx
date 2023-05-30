import Image from "next/image";

const ProfileCard = ({ user, promptCount }) => {
  return (
    <div className="card bg-base-100 shadow-lg">
      <figure className="-pb-2">
        <div className="w-1/2 mask mask-squircle bg-base-200">
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
        <h2 className="card-title">{user.full_name}</h2>
        <a
          href={`mailto:${user.email}`}
          className="lowercase text-xs text-primary font-medium hover:underline underline-offset-2"
        >
          {user.email}
        </a>

        <a
          href="#create-prompt"
          className="btn btn-primary btn-outline btn-xs px-10 border capitalize hover:bg-gradient-to-r hover:from-primary-focus hover:via-primary hover:to-primary-focus"
        >
          Create Prompt
        </a>

        {promptCount > 0 ? (
          <>
            <div className="divider mt-10 mb-5">
              <h2 className="card-title">Stats</h2>
            </div>

            <div className="flex flex-row items-center justify-between w-full">
              <div className="avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-primary-focus"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </div>
              <div className="flex flex-col text-right">
                <h1 className="text-xs font-normal -mb-1">Created</h1>
                <p className="text-lg font-black">{promptCount}</p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
