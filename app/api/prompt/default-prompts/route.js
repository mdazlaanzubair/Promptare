import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { prompts, userId } = await req.json();

  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection successful
    if (dbConnectionStatus) {
      prompts.map(async (prompt) => {
        const newPrompt = await Prompt({
          creator: userId,
          category: prompt.category,
          prompt: prompt.prompt,
          tags: prompt.tags,
        });

        await newPrompt.save();
      });

      return new Response(
        JSON.stringify({ msg: "Default prompts are populated successfully!" }),
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
