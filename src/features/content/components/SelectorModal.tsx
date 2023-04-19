import { Modal, ModalProps } from "@mantine/core";

interface SelectorModalProps extends Omit<ModalProps, "children"> {
  onClose: () => void;
}

export const SelectorModal = ({ onClose, opened }: SelectorModalProps) => {
  return (
    <Modal title="Whatever" onClose={onClose} opened={opened}>
      Some content
    </Modal>
  );
};
