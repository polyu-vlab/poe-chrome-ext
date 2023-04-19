import { ActionIcon } from "@mantine/core";
import { BlackboardIcon } from "./BlackboardIcon";
import { SelectorModal } from "~/features/content";
import { useState } from "react";

export const PoeStartButton = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <SelectorModal opened={opened} onClose={() => setOpened(false)} />
      <ActionIcon size="lg" onClick={() => setOpened(true)}>
        <BlackboardIcon />
      </ActionIcon>
    </>
  );
};
