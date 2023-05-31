import axios from "axios";
import { toast } from "react-toastify";

// PROMPT FUNCTION - INDEX
export const getAllPrompts = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// PROMPT FUNCTION - CREATE
export const create_new_prompt = async ({ prompt, category, tags, userId }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/new`,
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
      return;
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// PROMPT FUNCTION - SINGLE
export const getPromptById = async (promptId) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/${promptId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// PROMPT FUNCTION - UPDATE
export const updatePromptToDb = async (promptId, updatedPrompt) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/update`,
      {
        promptId,
        updatedPrompt,
      }
    );

    if (response.status === 200) {
      toast(response.data.msg);
      return;
      // toast(response.data.msg);
    }
  } catch (error) {
    console.log(error);
    console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/update`);
    console.log("Something went wrong!");
  }
};

// PROMPT FUNCTION - DELETE
export const deletePrompt = async (promptId) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/delete/${promptId}`,
      {
        data: { promptId },
      }
    );

    if (response.status === 200) {
      console.log(response.data.msg);
      toast(response.data.msg);
      return;
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// PROMPT FUNCTION - LOAD PROMPTS BY DEFAULT
export const populate_default_prompts = async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/prompt/default-prompts`,
      {
        isDefault: true,
      }
    );

    if (response.status === 201) {
      toast(response.data.msg);
      return;
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// USER FUNCTION - GET USER DATA
export const getUserProfileData = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};

// USER FUNCTION - INDEX
export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile/`
    );
    return response.data.users;
  } catch (error) {
    console.log(error);
    console.log("Something went wrong!");
  }
};
