import CreateForm from "@components/CreateForm";
import Feeds from "@components/Feeds";
import ProfileCard from "@components/ProfileCard";
import { getUserProfileData } from "@utils/dbFunctions";
import Link from "next/link";

const ProfilePage = async ({ params }) => {
  const userData = await getUserProfileData(params.userId);

  return (
    <section id="profile-page">
      <div className="min-h-screen bg-base-100 px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col">
            <ProfileCard
              user={userData.user}
              promptCount={userData.prompts.length}
            />
            <div className="divider mt-10 mb-5 font-bold">Create Prompts</div>
            <CreateForm />
          </div>
          <div className="col-span-3">
            <div className="flex flex-col items-center align-middle mt-20">
              {userData && userData.prompts.length === 0 ? (
                <p className="text-center">
                  <strong>This user haven&apos;t contributed yet.</strong>
                  <br />
                  <Link
                    href="/create-prompt"
                    className="link link-primary link-hover underline-offset-2"
                  >
                    Do you want to?
                  </Link>
                </p>
              ) : (
                <Feeds promptData={userData.prompts} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
