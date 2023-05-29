import Feeds from "@components/Feeds";
import GradientText from "@components/GradientText";

const FeedsPage = () => {
  return (
    <section id="feeds-page">
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center max-w-lg lg:max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">
              <GradientText text="Discover & Share" /> Prompts!
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-5">
              Scroll through the prompts below and get inspired to enhance your
              Chat GPT experience.
            </h2>
          </div>
        </div>
      </div>
      <Feeds />
    </section>
  );
};

export default FeedsPage;
