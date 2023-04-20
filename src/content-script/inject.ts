import { PoeEl } from "~/utils/elementFinder";

export const poeInject = () => {
  // Get references to the HTML elements
  const sendButton = PoeEl.getSendButton();
  const inputTextArea = PoeEl.getChatInput();

  const handleInject = () => {
    console.log("handleInject");
    // Word inject
    inputTextArea.value += " Injected word";

    // Dispatch a change event to trigger the HTML event
    inputTextArea.dispatchEvent(new Event("change"));
  };

  // Add an event listener to the send button
  sendButton.addEventListener("click", handleInject);
  //Key down event
  inputTextArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleInject();
    }
  });
};
