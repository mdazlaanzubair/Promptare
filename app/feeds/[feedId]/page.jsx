import UpdateForm from "@components/UpdateForm";
import { getPromptById } from "@utils/dbFunctions";

const EditPrompt = async ({ params }) => {
  const promptToEdit = await getPromptById(params.feedId);

  return (
    <section id="feeds-page">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse px-10 lg:px-20">
          {promptToEdit && (
            <UpdateForm
              creatorId={promptToEdit.creator._id}
              promptToEdit={promptToEdit}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default EditPrompt;
