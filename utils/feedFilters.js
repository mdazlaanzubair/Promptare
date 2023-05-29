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
    const matchesCategory = feed.category
      .toLowerCase()
      .includes(lowerCaseKeyword);

    // 5. tags
    const matchesTags = feed.tags.some((tag) =>
      tag.toLowerCase().includes(lowerCaseKeyword)
    );

    return (
      matchesPrompt ||
      matchesTags ||
      matchesUsername ||
      matchesFullname ||
      matchesCategory
    );
  });

  return filteredPrompts;
};
