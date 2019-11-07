export function createDivWithContent(content) {
  const element = document.createElement("DIV");
  element.innerHTML = content;
  return element;
  // use https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  // use https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML for content
}

export function appendElementToElement(parent, child) {
  // see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  parent.appendChild(child);
}
