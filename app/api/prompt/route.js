import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async () => {
  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection successful
    if (dbConnectionStatus) {
      const prompts = await Prompt.find({}).populate("creator");

      return new Response(JSON.stringify(prompts), { status: 200 });
    } else {
      console.log("Something went wrong with the databases.");
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ msg: "Failed to fetch prompts." }), {
      status: 500,
    });
  }
};
