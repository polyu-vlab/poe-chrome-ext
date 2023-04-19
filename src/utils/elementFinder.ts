export const PoeEl = {
  getRootElement: () => {
    return document.querySelector('div[id="__next"]') as HTMLDivElement;
  },

  getSendButton: () => {
    return document.querySelector(
      ".ChatMessageInputView_sendButton__reEpT"
    ) as HTMLButtonElement;
  },

  getChatInput: () => {
    return document.querySelector(
      ".ChatMessageInputView_textInput__Aervw"
    ) as HTMLTextAreaElement;
  },
};

export const ChatGptEl = {};
