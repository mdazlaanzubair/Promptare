import FeedCardSkeleton from "@components/FeedCardSkeleton";
import GradientText from "@components/GradientText";
import ProfileCard from "@components/ProfileCard";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = async ({ params }) => {
  const response = await fetch(
    "http://localhost:3000/api/profile/" + params.userId
  );
  const userData = await response.json();

  return (
    <section id="profile-page">
      <div className="min-h-screen bg-base-100 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col">
            <ProfileCard />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {[1, 2, 3,4].map((count, index) => (
                    <FeedCardSkeleton key={index} />
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
