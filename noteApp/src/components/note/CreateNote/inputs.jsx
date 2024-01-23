import { Textarea } from "@nextui-org/react";

const Inputs = () => {
  return (
    <>
      <Textarea        isRequired
        label="Note Title"
        labelPlacement="outside"
        placeholder="Enter your note title..."
        minRows={1}
        variant="underlined"
      />
      <Textarea
        isRequired
        labelPlacement="inside"
        placeholder="Enter your note here..."
        disableAnimation
        disableAutosize
        classNames={{
          base: "max-w-xs",
          input: "resize-y min-h-[40px]",
        }}
        variant="bordered"
      />
    </>
  );
};

export default Inputs;
