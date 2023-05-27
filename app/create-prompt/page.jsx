import CreateForm from "@components/CreateForm";

const CreatePrompt = () => {
  return (
    <section id="create-prompt">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col">
          <div className="text-center max-w-lg lg:max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">
              Engineer your own{" "}
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Prompts!
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-5">
              You can unleash your creativity and share your own prompts with
              the Promptare community.
            </h2>
            <label
              htmlFor="create-prompt-modal"
              className="btn btn-primary btn-wide capitalize"
            >
              Generate Prompt
            </label>

            <CreateForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePrompt;
