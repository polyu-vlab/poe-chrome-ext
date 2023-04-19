import { Modal, ModalProps } from "@mantine/core";

interface ExampleModalProps extends Omit<ModalProps, "children"> {
  onClose: () => void;
}

export const ExampleModal = ({ onClose, opened }: ExampleModalProps) => {
  return (
    <Modal title="Whatever" onClose={onClose} opened={opened}>
      Some content
    </Modal>
  );
};
