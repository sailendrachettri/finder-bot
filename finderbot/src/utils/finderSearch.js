

export const findPages = (query, pages) => {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return [];
  }

  const queryWords = normalizedQuery.split(/\s+/);

  const results = pages.map((page) => {
    let score = 0;

    const title = page.title.toLowerCase();
    const description = page.description.toLowerCase();
    const keywords = page.keywords.map((keyword) =>
      keyword.toLowerCase()
    );

    // Exact keyword matches
    keywords.forEach((keyword) => {
      if (normalizedQuery.includes(keyword)) {
        score += 10;
      }
    });

    // Word matches
    queryWords.forEach((word) => {
      if (title.includes(word)) {
        score += 5;
      }

      if (description.includes(word)) {
        score += 3;
      }

      keywords.forEach((keyword) => {
        if (keyword.includes(word)) {
          score += 2;
        }
      });
    });

    return {
      ...page,
      score,
    };
  });

  return results
    .filter((page) => page.score > 0)
    .sort((a, b) => b.score - a.score);
};