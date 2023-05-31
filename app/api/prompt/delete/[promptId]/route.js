import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const DELETE = async (req, { params }) => {
  if (req.method !== "DELETE") {
    return new Response(JSON.stringify({ msg: "Method Not Allowed" }), {
      status: 405,
    });
  }

  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection successful
    if (dbConnectionStatus) {
      // Find the prompt by ID and remove it
      await Prompt.findByIdAndRemove(params.promptId);

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
