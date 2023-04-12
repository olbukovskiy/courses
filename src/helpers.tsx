import Highlighter from "react-highlight-words";

export function formatContent(str: string) {
  const trimmedString = str.trim();
  if (trimmedString.length > 100) {
    const newString = trimmedString.slice(0, 101).trim();
    return `${newString}...`;
  }

  if (trimmedString.length === 0) {
    return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptate ipsum consequuntur itaque omnis, maiores doloremque, totam minus deserunt quae maxime a excepturi modi alias sit nesciunt odio dolores facere earum fugit illum in temporibus. Recusandae amet facere delectus illum temporibus beatae assumenda provident minima hic facilis quam quae libero in, maxime eius accusamus debitis voluptas laborum sunt fuga voluptatum unde, dolorem enim quo. Assumenda consequuntur ducimus voluptas magni nisi necessitatibus! Expedita sint molestias reprehenderit voluptate laboriosam praesentium officiis quas, ad veniam enim voluptatibus alias iste. Aperiam cum excepturi dolore nobis voluptatem! Sint qui impedit quaerat vero nihil, eaque a!";
  }

  return trimmedString;
}

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
