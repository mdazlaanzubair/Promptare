import Image from "next/image";
import homeImage from "../public/home_img.png";

const HomePage = () => {
  return (
    <section id="home-page">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-lg">
            <Image
              src={homeImage}
              className="rounded-lg shadow-2xl hidden lg:block"
              height="0"
              width="0"
              alt="home image"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Welcome to Promptare!
            </h1>
            <h1 className="text-2xl lg:text-3xl font-medium mb-5">
              An ultimate social media hub for Chat GPT users!
            </h1>
            <p className="pb-3">
              Discover powerful prompts and commands to improve your Chat GPT
              experience. Join our vibrant community of like-minded individuals
              and take your skills to the next level.
            </p>
            <button className="btn btn-primary">Goto Feeds</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
