import axios from "axios";
import { toast } from "react-toastify";

// CREATE NEW PROMPT
export const create_new_prompt = async ({ prompt, category, tags, userId }) => {
  try {
    const response = await axios.post(
      `${process.env.API_BASE_URL}/api/prompt/new`,
      {
        prompt: {
          prompt,
          category,
          tags,
          userId,
        },
      }
    );

    if (response.status === 201) {
      toast(response.data.msg);
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// GET ALL PROMPTS FROM DATABASE
export const getAllPrompts = async () => {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/api/prompt/`);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// STORE PROMPT IN DATABASE BY DEFAULT
export const populate_default_prompts = async () => {
  try {
    const response = await axios.post(
      `${process.env.API_BASE_URL}/api/prompt/default-prompts`,
      {
        isDefault: true,
      }
    );

    if (response.status === 201) {
      toast(response.data.msg);
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// GET USER DATA FROM DATABASE
export const getUserProfileData = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/api/profile/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/api/profile/`
    );
    return response.data.users;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};
