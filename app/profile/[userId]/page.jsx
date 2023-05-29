import Feeds from "@components/Feeds";
import ProfileCard from "@components/ProfileCard";
import { getUserProfileData } from "@utils/dbFunctions";

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
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1">
              {userData && <Feeds promptData={userData.prompts} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
