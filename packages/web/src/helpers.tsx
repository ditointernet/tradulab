import { Fragment } from 'react';

export function escapeRegex(input: string) {
  return input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function repeat<T>(length: number, content: () => T): T[] {
  return Array.from({ length }).fill(undefined).map(content);
}

export const spaces = (length: number) =>
  repeat<React.ReactNode>(length, () => (
    <Fragment key={btoa(Math.random() + '')}>&nbsp;</Fragment>
  ));
