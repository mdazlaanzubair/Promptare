import FeedCardSkeleton from "@components/FeedCardSkeleton";
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
              {userData && userData.prompts.length > 0 ? (
                <Feeds promptData={userData.prompts} />
              ) : (
                [1, 2, 3].map((count, index) => (
                  <FeedCardSkeleton key={index} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
