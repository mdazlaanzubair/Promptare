import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection unsuccessful
    if (!dbConnectionStatus) {
      console.log("Something went wrong with the databases.");
      return new Response(JSON.stringify({ msg: "Failed to fetch prompts." }), {
        status: 500,
      });
    }

    // else - fetch data in reverse order (latest first)
    const prompts = await Prompt.find({})
      .populate("creator")
      .sort({ updatedAt: -1 });

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ msg: "Failed to fetch prompts." }), {
      status: 500,
    });
  }
};
