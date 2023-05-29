"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";

import { prompt_segments, prompt_tags } from "@utils/constants";
import { create_new_prompt, validate_prompt_form } from "@utils/promptCRUD";

const CreateForm = () => {
  // getting logged in user session
  const { data: session } = useSession();

  // loading constants data
  const categories = prompt_segments;
  const tags = prompt_tags;

  // initializing form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  // create form handler
  const createPrompt = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const error_msg = validate_prompt_form({
      prompt,
      category: selectedCategory,
      tags: selectedTags.map((tag) => tag.value),
    });

    if (error_msg === true) {
      setIsSubmitting(false);
    }

    if (error_msg === false) {
      await create_new_prompt({
        prompt,
        category: selectedCategory.value,
        tags: selectedTags.map((tag) => tag.value),
        userId: session?.user?.id,
      });

      // emptying form data
      setPrompt("");
      setSelectedCategory({});
      setSelectedTags([]);
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full text-start" onSubmit={createPrompt}>
      <div className="form-control mb-3">
        <label className="label">
          <span className="label-text font-bold">Prompt</span>
        </label>
        <textarea
          type="text"
          className="textarea focus:textarea-primary textarea-bordered focus:outline-none"
          placeholder="Type your prompt here . . ."
          rows={3}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div className="form-control mb-3">
        <label className="label">
          <span className="label-text font-bold">Categories</span>
        </label>
        <Select
          options={categories}
          placeholder="Choose segment..."
          onChange={setSelectedCategory}
        />
      </div>
      <div className="form-control mb-3">
        <label className="label">
          <span className="label-text font-bold">Notable Tags</span>
        </label>
        <MultiSelect
          // closeOnChangedValue
          isCreatable
          options={tags}
          value={selectedTags}
          onChange={setSelectedTags}
          placeholder="Choose segment..."
        />
      </div>
      <div className="form-control">
        {isSubmitting ? (
          <button
            type="button"
            className="btn btn-primary btn-disabled capitalize loading"
            disabled
          >
            Creating
          </button>
        ) : (
          <>
            <button
              type="submit"
              className="btn mb-2 border-none text-neutral-content capitalize bg-gradient-to-r from-primary via-primary to-primary hover:bg-gradient-to-r hover:from-primary-focus hover:via-primary hover:to-primary-focus"
            >
              Create Prompt
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default CreateForm;
