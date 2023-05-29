"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";

import { prompt_segments, prompt_tags } from "@utils/constants";
import { updatePromptToDb } from "@utils/dbFunctions";
import { validate_prompt_form } from "@utils/validators";
import { toast } from "react-toastify";
import FeedCard from "./FeedCard";

const UpdateForm = ({ creatorId, promptToEdit }) => {
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
  const [liveFeedUpdate, setLiveFeedUpdate] = useState({});

  // update form handler
  const updatePrompt = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (session?.user?.id == creatorId) {
      const error_msg = validate_prompt_form({
        prompt,
        category: selectedCategory,
        tags: selectedTags.map((tag) => tag.value),
      });

      if (error_msg === true) {
        setIsSubmitting(false);
      }

      if (error_msg === false) {
        await updatePromptToDb(promptToEdit._id, {
          prompt,
          category: selectedCategory.value,
          tags: selectedTags.map((tag) => tag.value),
        });

        // emptying form data
        setPrompt("");
        setSelectedCategory({});
        setSelectedTags([]);
        setIsSubmitting(false);
      }
    } else {
      toast.warning("You are unauthorized to perform this action.");
    }
  };

  useEffect(() => {
    const tagsToEdit = promptToEdit.tags.map((tag) => ({
      label: tag,
      value: tag,
    }));

    const categoryToEdit = {
      label: promptToEdit.category,
      value: promptToEdit.category,
    };

    setPrompt(promptToEdit.prompt);
    setSelectedTags(tagsToEdit);
    setSelectedCategory(categoryToEdit);
    setLiveFeedUpdate(promptToEdit);
  }, []);

  useEffect(() => {
    setLiveFeedUpdate((prevPerson) => ({
      ...prevPerson,
      prompt,
    }));
  }, [prompt]);

  useEffect(() => {
    const tagsForLiveFeed = selectedTags.map((tag) => tag.value);

    setLiveFeedUpdate((prevPerson) => ({
      ...prevPerson,
      tags: tagsForLiveFeed,
    }));
  }, [selectedTags]);

  useEffect(() => {
    const categoryForLiveFeed = selectedCategory.value;

    setLiveFeedUpdate((prevPerson) => ({
      ...prevPerson,
      category: categoryForLiveFeed,
    }));
  }, [selectedCategory]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between">
      <div className="col-span-1">
        <form className="w-full text-start" onSubmit={updatePrompt}>
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
              value={selectedCategory}
            />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-bold">Notable Tags</span>
            </label>
            <MultiSelect
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
      </div>
      <div className="col-span-2">
        {liveFeedUpdate && <FeedCard feed={liveFeedUpdate} />}
      </div>
    </div>
  );
};

export default UpdateForm;
