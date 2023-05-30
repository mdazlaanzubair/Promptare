import UpdateForm from "@components/UpdateForm";
import { getPromptById } from "@utils/dbFunctions";

const EditPrompt = async ({ params }) => {
  const promptToEdit = await getPromptById(params.feedId);

  return (
    <section id="feeds-page">
      <div className="hero bg-base-100">
        <div className="hero-content px-10 lg:px-20">
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
