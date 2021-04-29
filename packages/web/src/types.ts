export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

type Node<T> = { node: T };

type PageInfo = {
  hasNextPage: boolean;
  startAfter: string | null;
};

export type Connnection<T> = { edges: Node<T>[]; pageInfo: PageInfo };