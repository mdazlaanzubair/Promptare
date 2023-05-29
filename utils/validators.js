import { toast } from "react-toastify";

// 1. CREATE-PROMPT FORM VALIDATOR
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
