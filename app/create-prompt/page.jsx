import CreateForm from "@components/CreateForm";
import GradientText from "@components/GradientText";

const CreatePrompt = () => {
  return (
    <section id="create-prompt">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-start max-w-lg lg:max-w-xl">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-3">
              Engineer your own <GradientText text="Prompts!" />
            </h1>
            <h2 className="text-xl lg:text-3xl font-light mb-5">
              You can unleash your creativity and share your own prompts with
              the Promptare community.
            </h2>
          </div>

          <div className="card shadow-xl w-full lg:w-1/3">
            <div className="card-body bg-base-100 text-base-content rounded-box">
              <p className="pb-2 text-lg text-thin">
                <strong>
                  <GradientText text="Prompts spark creativity." />
                </strong>{" "}
                Let&apos;s help the community with your creativity.
              </p>
              <CreateForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePrompt;
