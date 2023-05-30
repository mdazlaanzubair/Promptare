import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const PUT = async (req) => {
  const { promptId, updatedPrompt } = await req.json();

  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection successful
    if (dbConnectionStatus) {
      const existingPrompt = await Prompt.findById(promptId);

      if (!existingPrompt) {
        return new Response(JSON.stringify({ msg: "Prompt not found" }), {
          status: 404,
        });
      }

      existingPrompt.prompt = updatedPrompt.prompt;
      existingPrompt.category = updatedPrompt.category;
      existingPrompt.tags = updatedPrompt.tags;

      await existingPrompt.save();

      return new Response(
        JSON.stringify({
          msg: "Prompt has been successfully updated!",
        }),
        { status: 200 }
      );
    } else {
      console.log("Something went wrong with the databases.");
    }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ msg: "Failed to update the prompt" }),
      { status: 500 }
    );
  }
};
