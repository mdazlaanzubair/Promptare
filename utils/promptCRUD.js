import { toast } from "react-toastify";

// creating new prompt and saving to database
export const create_new_prompt = async ({ prompt, category, tags, userId }) => {
  try {
    const response = await fetch("/api/prompt/new", {
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

// prompt form validator
export const validate_prompt_form = ({ prompt, category, tags }) => {
  // validating prompt
  if (prompt.trim() === "") {
    toast.error("Please provide a prompt.");
    return true;
  }

  // validating category
  if (!category || Object.keys(category).length === 0) {
    toast.error("Please select a category.");
    return true;
  }

  // validating tags
  if (tags.length === 0) {
    toast.error("Please select at least one tag.");
    return true;
  }

  if (tags.length > 3) {
    toast.error("You cannot select more than 3 tags.");
    return true;
  }

  return false;
};

// populate database with random prompts
export const populate_default_prompts = async () => {
  try {
    const response = await fetch("/api/prompt/default-prompts", {
      method: "POST",
      body: JSON.stringify({
        isDefault: true,
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
