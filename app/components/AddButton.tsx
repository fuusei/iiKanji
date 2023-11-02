"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const ModalInput = styled(Input).attrs({
  variant: "bordered",
  classNames: {
    label: "text-white/90",
    input: ["bg-plum", "text-white/90", "placeholder:text-white/60"],
  },
})``;

export function AddButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex justify-center">
      <Button
        className="bg-granny-apple p-4 text-lg"
        onPress={onOpen}
        endContent={<AiOutlinePlus />}
      >
        Add a Kanji
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: "bg-plum" }}
        placement="center"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -40,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                Add a Kanji
              </ModalHeader>
              <ModalBody>
                <ModalInput
                  autoFocus
                  label="Kanji"
                  placeholder="Enter a new kanji"
                  isRequired
                />
                <ModalInput
                  label="Onyomi"
                  placeholder="Onyomi readings"
                  isRequired
                />
                <ModalInput
                  label="Kunyomi"
                  placeholder="Kunyomi readings"
                  isRequired
                />
                <ModalInput label="Meaning" placeholder="Meaning" isRequired />
                <ModalInput
                  label="Examples"
                  placeholder="Examples"
                  isRequired
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
