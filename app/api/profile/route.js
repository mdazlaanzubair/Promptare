import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  // connecting to the database using try/catch block
  try {
    // checking if db connected
    const dbConnectionStatus = await connectToDB(); // true or false

    // if connection unsuccessful
    if (!dbConnectionStatus) {
      console.log("Something went wrong with the databases.");
      return new Response(
        JSON.stringify({ msg: "Failed to fetch user data." }),
        {
          status: 500,
        }
      );
    }

    // else - fetch data in reverse order (latest first)
    const users = await User.find({}).sort({ updatedAt: -1 });

    return new Response(JSON.stringify({ users }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ msg: "Failed to fetch user data." }), {
      status: 500,
    });
  }
};
