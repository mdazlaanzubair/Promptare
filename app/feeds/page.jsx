import SearchInput from "@components/SearchInput";

const page = () => {
  const feeds = [
    1, 2, 3, 4, 4, 5, 3, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 3, 4, 4, 4,
  ];
  return (
    <section id="feeds-page">
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center max-w-lg lg:max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Discover and Share Prompts!
            </h1>
            <h2 className="text-xl lg:text-2xl font-light mb-5">
              Scroll through the prompts below and get inspired to enhance your
              Chat GPT experience.
            </h2>
            <div className="flex flex-col py-5">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-200 mx-auto p-5 lg:p-10">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {feeds.map((feed, index) => (
            <div className="card shadow-lg" key={index}>
              <div className="card-body bg-base-100 text-base-content rounded-box">
                <div className="flex flex-row border-b pb-3">
                  <div className="flex flex-grow flex-row items-center justify-start gap-3">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                        <span className="text-xl">K</span>
                      </div>
                    </div>
                    <div className="name">
                      <h1 className="text-xl font-bold -mb-2">Azlaan Zubair</h1>
                      <a
                        href="#"
                        className="lowercase text-sm text-primary font-thin"
                      >
                        @azlaan_zubair
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
                <p className="py-3">
                  In this example, the group class is applied to the container
                  element. The child class represents the child element, and the
                  parent class represents the parent element. To change the
                  style of the parent element when the child element is hovered,
                  you can use the group-hover utility class. In the above code,
                  the group-hover:bg-blue-500 class is added to the parent
                  element. This class will apply a background color of blue
                  (bg-blue-500) to the parent element when any child element
                  within the group is hovered..
                </p>
                <div className="flex flex-row border-t pt-3">
                  <div className="flex flex-shrink-0 flex-row items-center justify-start gap-3">
                    <div className="badge badge-primary">neutral</div>
                  </div>
                  <div className="flex flex-shrink-0"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
