export const createAndInsertElement = (
  target: Element,
  position: InsertPosition,
  tagName: keyof HTMLElementTagNameMap
): HTMLElement => {
  const newElement = document.createElement(tagName);
  target.insertAdjacentElement(position, newElement);
  return newElement;
};
