import Link from "next/link";
import UserStats from "./UserStats";
import Image from "next/image";
import User from "@models/user";

const ProfileCard = () => {
  const stats = [
    { title: "Created", value: 20 },
    { title: "Liked", value: 20 },
    { title: "Copied", value: 20 },
  ];
  return (
    <>
      <div className="card bg-base-100 shadow-lg">
        <div className="badge badge-primary cursor-pointer capitalize hover:bg-gradient-to-tr hover:from-primary-focus hover:via-primary hover:to-primary-focus">
          <Link href="/profile">@mdazlaan1996</Link>
        </div>
        <figure className="px-10 pt-10 -pb-2">
          <Image
            src="https://lh3.googleusercontent.com/a/AAcHTtd8vY1P-6a2eWDzaYW3BYFQz3nNyf9jqI0uom8gRw=s96-c"
            width="100"
            height="100"
            alt="profile picture"
            className="rounded-xl w-20"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Muhammad Azlaan Zubair</h2>
          <a
            href="mailto:someone@example.com"
            className="lowercase text-xs text-primary font-medium hover:underline underline-offset-2"
          >
            mdazlaan1996@gmail.com
          </a>
        </div>
      </div>

      <div className="divider mt-10 mb-5">
        <h2 className="card-title">Stats</h2>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <UserStats
            key={index}
            statId={index + 1}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileCard;
