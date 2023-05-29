import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const DELETE = async (req) => {
  const { promptId } = await req.json();

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

      await existingPrompt.remove();

      return new Response(
        JSON.stringify({ msg: "Prompt has been successfully deleted" }),
        { status: 200 }
      );
    } else {
      console.log("Something went wrong with the databases.");
    }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ msg: "Failed to delete the prompt" }),
      { status: 500 }
    );
  }
};
