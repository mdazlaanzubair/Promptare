import Feeds from "@components/Feeds";
import SearchInput from "@components/SearchInput";

const page = () => {
  
  return (
    <section id="feeds-page">
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center max-w-lg lg:max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Discover and Share Prompts!
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-5">
              Scroll through the prompts below and get inspired to enhance your
              Chat GPT experience.
            </h2>
            <div className="flex flex-col py-5">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-tl from-base-100 via-gray-200 to-base-100 mx-auto p-5 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Feeds />
        </div>
      </div>
    </section>
  );
};

export default page;
