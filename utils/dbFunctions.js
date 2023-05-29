import axios from "axios";
import { toast } from "react-toastify";

// CREATE NEW PROMPT
export const create_new_prompt = async ({ prompt, category, tags, userId }) => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/prompt/new`, {
      method: "POST",
      body: JSON.stringify({
        prompt: {
          prompt,
          category,
          tags,
          userId,
        },
      }),
    });

    if (response.status === 201) {
      const data = await response.json();
      toast(data.msg);
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// GET ALL PROMPTS FROM DATABASE
export const getAllPrompts = async () => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/api/prompt/`);
    const promptData = await response.json();
    return promptData;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// GET USER DATA FROM DATABASE
// export const getUserProfileData = async (userId) => {
//   try {
//     const response = await fetch(
//       `${process.env.API_BASE_URL}/api/profile/${userId}`
//     );

//     const userData = await response.json();
//     return userData;
//   } catch (error) {
//     console.log(error);
//     console.log("Something went wrong!");
//   }
// };

export const getUserProfileData = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/api/profile/${userId}`
    );

    const userData = response.data;
    return userData;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// STORE PROMPT IN DATABASE BY DEFAULT
export const populate_default_prompts = async () => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/prompt/default-prompts`,
      {
        method: "POST",
        body: JSON.stringify({
          isDefault: true,
        }),
      }
    );

    if (response.status === 201) {
      const data = await response.json();
      toast(data.msg);
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};
