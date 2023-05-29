import GradientText from "@components/GradientText";
import Users from "@components/Users";
import { getAllUsers } from "@utils/dbFunctions";

const ProfilesPage = async () => {
  const users = await getAllUsers();

  return (
    <section id="feeds-page">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center max-w-lg lg:max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">
              <GradientText text="Contributors" /> of Prompts!
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-5">
              Scroll to discover like-minded individuals and foster
              collaboration.
            </h2>
            <a
              href="#user-section"
              className="btn btn-primary btn-circle mt-10 animate-bounce hover:bg-gradient-to-tr hover:from-primary-focus hover:via-primary hover:to-primary-focus"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {users && <Users users={users} />}
    </section>
  );
};

export default ProfilesPage;
