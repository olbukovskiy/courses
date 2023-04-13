import Highlighter from "react-highlight-words";

export function highlightSearchResults<T extends string>(
  query: T,
  highlightedContent: T
): React.ReactNode {
  const searchQueryArray = query.split(" ");
  return (
    <Highlighter
      searchWords={searchQueryArray}
      autoEscape={true}
      textToHighlight={highlightedContent}
    />
  );
}

export function upperCaseFirstLetter(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
