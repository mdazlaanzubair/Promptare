import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection successful
    if (dbConnectionStatus) {
      const prompt = await Prompt.findById(params.promptId).populate("creator");

      if (!prompt) {
        return new Response(JSON.stringify({ msg: "Prompt not found" }), {
          status: 404,
        });
      }

      return new Response(JSON.stringify(prompt), { status: 200 });
    } else {
      console.log("Something went wrong with the databases.");
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ msg: "Failed to get the prompt" }), {
      status: 500,
    });
  }
};
