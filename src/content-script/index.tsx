import React from "react";
import ReactDOM from "react-dom/client";
import "~/styles/tailwind.css";
import { createEmotionCache, MantineProvider, Portal } from "@mantine/core";
import { createAndInsertElement } from "~/utils/elementHelper";
import { PoeStartButton } from "~/features/content";
import { poeInject } from "./inject";

const rootEl = document.querySelector('div[id="__next"]') as HTMLElement;

poeInject();

try {
  new MutationObserver(() => {
    poeInject();
  }).observe(rootEl, { childList: true });
} catch (e) {
  console.info("GPTuner: not able to update the ui");
}

const container = document.createElement("div");

const cache = createEmotionCache({
  key: "mantine",
});

const chatFooterItem = createAndInsertElement(
  document.querySelector(".ChatMessageInputView_inputWrapper__kKP4W")!,
  "afterbegin",
  "div"
);

// Render your Mantine components inside the Shadow DOM
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: "dark",
      }}
      emotionCache={cache}
    >
      <Portal target={chatFooterItem}>
        <PoeStartButton />
      </Portal>
    </MantineProvider>
  </React.StrictMode>
);

document.body.appendChild(container);
