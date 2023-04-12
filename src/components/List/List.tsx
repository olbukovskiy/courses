import { StyledComponent } from "@emotion/styled";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  list: StyledComponent<any>;
}

function List<T>(props: ListProps<T>) {
  const { items, renderItem, list: ListOfItems } = props;
  return <ListOfItems>{items.map(renderItem)}</ListOfItems>;
}

export default List;
