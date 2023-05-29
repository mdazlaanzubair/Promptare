export const searchByText = (prompts, keyword) => {
  const filteredPrompts = prompts.filter((feed) => {
    const lowerCaseKeyword = keyword.toLowerCase();

    // Check if the following contains the keyword
    // 1. full_name
    const matchesFullname = feed.creator.full_name
      .toLowerCase()
      .includes(lowerCaseKeyword);

    // 2. username
    const matchesUsername = feed.creator.username
      .toLowerCase()
      .includes(lowerCaseKeyword);

    // 3. prompt
    const matchesPrompt = feed.prompt.toLowerCase().includes(lowerCaseKeyword);

    // 4. tags
    const matchesTags = feed.tags.some((tag) =>
      tag.toLowerCase().includes(lowerCaseKeyword)
    );

    return matchesPrompt || matchesTags || matchesUsername || matchesFullname;
  });

  return filteredPrompts;
};

export const searchByCategory = (prompts, category) => {
  if (category === "All") {
    return prompts;
  }

  const filteredPrompts = prompts.filter((feed) => {
    const lowerCaseCategory = category.toLowerCase();
    const matchesCategory = feed.category
      .toLowerCase()
      .includes(lowerCaseCategory);
    return matchesCategory;
  });

  return filteredPrompts;
};

export const searchByUsername = (users, keyword) => {
  const filteredUsers = users.filter((user) => {
    const lowerCaseKeyword = keyword.toLowerCase();

    // Check if the following contains the keyword
    // 1. full_name
    const matchesFullname = user.full_name
      .toLowerCase()
      .includes(lowerCaseKeyword);

    // 2. username
    const matchesUsername = user.username
      .toLowerCase()
      .includes(lowerCaseKeyword);

    // 3. email
    const matchesEmail = user.email.toLowerCase().includes(lowerCaseKeyword);

    return matchesEmail || matchesUsername || matchesFullname;
  });

  return filteredUsers;
};
