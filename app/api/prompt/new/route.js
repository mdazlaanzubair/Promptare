import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { prompt } = await req.json();

  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection successful
    if (dbConnectionStatus) {
      let newPrompt = {};

      newPrompt = await Prompt({
        creator: prompt.userId,
        prompt: prompt.prompt,
        category: prompt.category,
        tags: prompt.tags,
      });

      await newPrompt.save();

      return new Response(
        JSON.stringify({ msg: "Prompts has been successfully created!" }),
        { status: 201 }
      );
    } else {
      console.log("Something went wrong with the databases.");
    }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ msg: "Failed to create a new prompt" }),
      { status: 500 }
    );
  }
};
