"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { MultiSelect } from "react-multi-select-component";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: session } = useSession();

  const tags = [
    { label: "Arts & Entertainment", value: "Arts & Entertainment" },
    { label: "Automotive", value: "Automotive" },
    { label: "Books & Literature", value: "Books & Literature" },
    { label: "Business & Finance", value: "Business & Finance" },
    { label: "Computers & Technology", value: "Computers & Technology" },
    { label: "Culture", value: "Culture" },
    { label: "Education", value: "Education" },
    { label: "Food & Drink", value: "Food & Drink" },
    { label: "Health & Fitness", value: "Health & Fitness" },
    { label: "Home & Garden", value: "Home & Garden" },
    { label: "Law & Government", value: "Law & Government" },
    { label: "News", value: "News" },
    { label: "Pets & Animals", value: "Pets & Animals" },
    { label: "Science", value: "Science" },
    { label: "Shopping", value: "Shopping" },
    { label: "Sports", value: "Sports" },
    { label: "Travel", value: "Travel" },
    { label: "World", value: "World" },
  ];

  const createPrompt = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const new_prompt = {
      title,
      prompt,
      user_id: session.id,
      tags: selectedTags,
    };

    try {
      const response = fetch("/api/prompts/new", {
        method: "POST",
        body: JSON.stringify({ prompt: new_prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        router.push("/feeds");
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setPrompt("");
      setSelectedTags([]);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="create-prompt-modal"
        className="modal-toggle"
      />
      <label htmlFor="create-prompt-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-3xl font-bold pb-3">Create Prompt</h3>
          <p className="pb-3">
            Prompts spark creativity. Let&apos;s help the community with your
            creativity.
          </p>
          <form className="w-full text-start" onSubmit={createPrompt}>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text font-bold text-lg">Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered focus:outline-none focus:input-primary"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give your prompt a title . . ."
                value={title}
              />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text font-bold text-lg">Tags</span>
              </label>
              <MultiSelect
                closeOnChangedValue
                options={tags}
                value={selectedTags}
                onChange={setSelectedTags}
                labelledBy="Select"
              />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text font-bold text-lg">Prompt</span>
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
                <button type="submit" className="btn btn-primary capitalize">
                  Create &amp; Share
                </button>
              )}
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default CreateForm;
