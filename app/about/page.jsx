import Link from "next/link";
import Image from "next/image";
import aboutImage from "../../public/about_img.png";
import missionImage from "../../public/mission_img.png";
const About = () => {
  const services = [
    {
      title: "Discover and Share Prompts:",
      desc: `Explore a vast collection of prompts and commands contributed by the Promptare community. From creative writing prompts to productivity hacks, you'll find inspiration for various use cases.`,
    },
    {
      title: "Connect with Like-minded Individuals:",
      desc: "Engage with a vibrant community of Chat GPT users, including writers, developers, entrepreneurs, and more. Share your insights, learn from others, and collaborate on exciting projects.",
    },
    {
      title: "Stay Updated:",
      desc: "Get the latest updates on new features, enhancements, and advancements in the Chat GPT landscape. Stay ahead of the curve and leverage the power of Chat GPT to its fullest potential.",
    },
    {
      title: "Guides and Resources:",
      desc: "Access comprehensive guides, tutorials, and resources to improve your Chat GPT experience. Learn about advanced techniques, tips, and tricks from experts in the field.",
    },
  ];

  return (
    <section id="about-page">
      <div className="hero py-5 lg:py-20 bg-base-100">
        <div className="hero-content flex-col lg:flex-row justify-center items-start gap-10">
          <div className="max-w-lg">
            <Image
              src={aboutImage}
              className="rounded-lg shadow-2xl hidden lg:block"
              height="0"
              width="0"
              alt="about image"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              What is Promptare!
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium mb-5">
              An ultimate social media hub for Chat GPT users!
            </h2>
            <p className="pb-3">
              Welcome to Promptare, the social media hub for Chat GPT users.
              Discover and share powerful prompts and commands to enhance your
              Chat GPT experience. Join a vibrant community of like-minded
              individuals and take your Chat GPT usage to the next level!
            </p>
            <button className="btn btn-primary">Join Now</button>
          </div>
        </div>
      </div>

      <div className="hero pb-5 lg:pb-10 bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center gap-10">
          <div className="">
            <Image
              src={missionImage}
              className="rounded-lg shadow-2xl hidden lg:block"
              height="0"
              width="0"
              alt="mission image"
            />
          </div>
          <div className="max-w-lg lg:max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Our Mission
            </h1>
            <p className="pb-3">
              At Promptare, we are dedicated to providing a platform where Chat
              GPT users can connect, learn, and share their experiences. Our
              mission is to empower individuals to make the most out of their
              Chat GPT usage by providing a central hub for discovering and
              discussing prompts, commands, and best practices.
            </p>
            <p className="pb-3">
              <Link
                href="/signup"
                className="link text-primary font-bold underline-offset-4 hover:text-secondary transition-colors duration-300"
              >
                Sign up
              </Link>{" "}
              now and embark on an exciting journey with Promptare!
            </p>
          </div>
        </div>
      </div>

      <div className="hero pb-5 lg:pb-10 bg-base-100">
        <div className="hero-content flex-col lg:flex-row justify-center gap-10">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              What We Offer
            </h1>
            <p className="pb-3">
              Are you ready to take your Chat GPT usage to the next level? Join
              Promptare now and become a part of our growing community. Connect
              with fellow Chat GPT enthusiasts, discover new prompts, and share
              your knowledge with others. Together, let&apos;s unlock the true
              potential of Chat GPT!
            </p>
          </div>
          <div className="text-center lg:text-left">
            {services.map((item, index) => (
              <div
                tabIndex={0}
                className="collapse collapse-arrow rounded-box my-3 shadow-sm hover:shadow-lg"
                key={index}
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium peer-checked:bg-neutral peer-checked:text-primary-content">
                  {item.title}
                </div>
                <div className="collapse-content peer-checked:bg-neutral peer-checked:text-primary-content">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
