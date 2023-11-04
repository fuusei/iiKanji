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
  Tooltip,
} from "@nextui-org/react";
import { Example } from "@/lib/interfaces";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import styled from "styled-components";
import { createKanji } from "@/lib/actions/kanji.actions";

const ModalInput = styled(Input).attrs({
  isRequired: true,
  isClearable: true,
  variant: "bordered",
  className: "mx-1",
  classNames: {
    label: "text-white/90",
    input: ["bg-plum", "text-white/90", "placeholder:text-white/60"],
    clearButton: "text-white",
  },
})``;

export function AddButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [kanji, setKanji] = useState("");
  const [onyomi, setOnyomi] = useState("");
  const [kunyomi, setKunyomi] = useState("");
  const [meaning, setMeaning] = useState("");
  const [examples, setExamples] = useState<Example[]>([
    { word: "", furigana: "", meaning: "" },
  ]);

  const clearFields = () => {
    setError("");
    setKanji("");
    setOnyomi("");
    setKunyomi("");
    setMeaning("");
    setExamples([{ word: "", furigana: "", meaning: "" }]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await createKanji({ kanji, onyomi, kunyomi, meaning, examples })
      .then(() => console.log("Kanji successfuly created."))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

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
        onClose={clearFields}
        isOpen={isOpen}
        isDismissable={false}
        size="2xl"
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
                  size="lg"
                  label="Kanji"
                  placeholder="Enter a new kanji"
                  color={error ? "danger" : "default"}
                  errorMessage={error ? error : ""}
                  value={kanji}
                  onValueChange={setKanji}
                />
                <ModalInput
                  size="lg"
                  label="Onyomi"
                  placeholder="Enter onyomi readings"
                  value={onyomi}
                  onValueChange={setOnyomi}
                />
                <ModalInput
                  size="lg"
                  label="Kunyomi"
                  placeholder="Enter kunyomi readings"
                  value={kunyomi}
                  onValueChange={setKunyomi}
                />
                <ModalInput
                  size="lg"
                  label="Meaning"
                  placeholder="Enter meaning"
                  value={meaning}
                  onValueChange={setMeaning}
                />
                <div className="flex flex-col">
                  {examples.map((ex, i) => (
                    <div className="flex flex-row my-2" key={i}>
                      <ModalInput
                        size="sm"
                        label="Word"
                        placeholder={
                          kanji !== ""
                            ? `Word using ${kanji}`
                            : `Example(${i + 1}) word`
                        }
                        value={examples[i].word}
                        onValueChange={(e) =>
                          setExamples([
                            ...examples.slice(0, i),
                            { ...examples[i], word: e },
                            ...examples.slice(i + 1),
                          ])
                        }
                      />
                      <ModalInput
                        size="sm"
                        label="Furigana"
                        placeholder={
                          examples[i].word !== ""
                            ? `Furigana for ${examples[i].word}`
                            : `Example(${i + 1}) furigana`
                        }
                        value={examples[i].furigana}
                        onValueChange={(e) =>
                          setExamples([
                            ...examples.slice(0, i),
                            { ...examples[i], furigana: e },
                            ...examples.slice(i + 1),
                          ])
                        }
                      />
                      <ModalInput
                        size="sm"
                        label="Meaning"
                        placeholder={
                          examples[i].word !== ""
                            ? `Meaning of ${examples[i].word}`
                            : `Example(${i + 1}) meaning`
                        }
                        value={examples[i].meaning}
                        onValueChange={(e) =>
                          setExamples([
                            ...examples.slice(0, i),
                            { ...examples[i], meaning: e },
                            ...examples.slice(i + 1),
                          ])
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-row">
                  <Tooltip
                    content="Delete last example"
                    placement="bottom"
                    showArrow={true}
                  >
                    <Button
                      radius="full"
                      isIconOnly
                      isDisabled={examples.length === 1}
                      onPress={() => setExamples(examples.slice(0, -1))}
                    >
                      <GrFormSubtract />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    content="Add example"
                    placement="bottom"
                    showArrow={true}
                  >
                    <Button
                      radius="full"
                      isIconOnly
                      className="mx-4"
                      onPress={() =>
                        setExamples([
                          ...examples,
                          { word: "", furigana: "", meaning: "" },
                        ])
                      }
                    >
                      <AiOutlinePlus />
                    </Button>
                  </Tooltip>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={handleSubmit}
                  isDisabled={loading}
                  isLoading={loading}
                >
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
