"use client";

const Feeds = () => {
  const prompts = [
    {
      name: "Azlaan Zubair",
      username: "m_azlaan",
      prompt:
        "Hey GPT, Generate a script for a 30-second commercial promoting our new product",
      tags: ["commercial", "script", "new product"],
    },
    {
      name: "John Doe",
      username: "johndoe123",
      prompt: "What are some effective marketing strategies for a startup?",
      tags: ["marketing", "startup", "strategies"],
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      prompt: "Share your favorite writing tips and tricks",
      tags: ["writing", "tips", "tricks"],
    },
    {
      name: "Alex Johnson",
      username: "alexj",
      prompt: "How can I improve my website's search engine ranking?",
      tags: ["SEO", "website", "search engine optimization"],
    },
    {
      name: "Sarah Thompson",
      username: "sthompson",
      prompt: "What are some healthy and easy-to-make breakfast recipes?",
      tags: ["recipes", "breakfast", "healthy eating"],
    },
    {
      name: "Mike Adams",
      username: "madams",
      prompt: "Provide tips for effective time management",
      tags: ["time management", "productivity", "tips"],
    },
    {
      name: "Emily Wilson",
      username: "emilyw",
      prompt: "What are some strategies for improving focus and concentration?",
      tags: ["focus", "concentration", "strategies"],
    },
    {
      name: "David Chen",
      username: "dchen",
      prompt: "Recommendations for the best budget-friendly smartphones",
      tags: ["smartphones", "budget-friendly", "recommendations"],
    },
    {
      name: "Olivia Adams",
      username: "oliviaa",
      prompt: "Share your favorite books for personal development",
      tags: ["books", "personal development", "recommendations"],
    },
    {
      name: "Max Turner",
      username: "maxt",
      prompt: "How to build a responsive and user-friendly website?",
      tags: ["web development", "responsive design", "user experience"],
    },
  ];

  return prompts.map((prompt, index) => (
    <div className="card shadow-lg" key={index}>
      <div className="card-body bg-base-100 text-base-content rounded-box">
        <div className="flex flex-row border-b pb-3">
          <div className="flex flex-grow flex-row items-center justify-start gap-3">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                <span className="text-xl">
                  {prompt?.name
                    .trim()
                    .split(" ")
                    .reduce(
                      (initials, word) => initials + word[0].toUpperCase(),
                      ""
                    )}
                </span>
              </div>
            </div>
            <div className="name">
              <h1 className="text-xl font-bold -mb-2">{prompt?.name}</h1>
              <a href="#" className="lowercase text-sm text-primary font-thin">
                @{prompt?.username}
              </a>
            </div>
          </div>
          <div className="flex flex-shrink-0 justify-between gap-1">
            <button
              type="button"
              className="btn btn-sm border-none btn-outline btn-success btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </button>

            <div className="dropdown dropdown-left">
              <label
                tabIndex={0}
                className="btn btn-sm border-none btn-outline btn-primary btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-neutral text-neutral-content rounded-box w-52 text-sm"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a>Delete</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="py-3">{prompt?.prompt}</p>
        <div className="flex flex-row border-t pt-3 flex-wrap items-center justify-start gap-1">
          {prompt?.tags?.map((tag, index) => (
            <div key={index} className="badge badge-primary">
              # {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default Feeds;
