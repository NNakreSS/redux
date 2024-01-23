import { Button } from "@nextui-org/react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
const Buttons = () => {
  const colors = [
    "bg-green-700",
    "bg-yellow-700",
    "bg-orange-700",
    "bg-blue-700",
    "bg-pink-700",
    "bg-teal-700",
    "bg-gray-700",
  ];
  return (
    <div>
      <div className="flex gap-2 mt-5">
        {colors.map((color, index) => (
          <Button key={index} isIconOnly className={color}></Button>
        ))}
      </div>
      <Button
        className="mt-3 float-end"
        color="success"
        variant="ghost"
        startContent={<MdOutlinePlaylistAdd className="text-3xl" />}
      >
        Add Note
      </Button>
    </div>
  );
};

export default Buttons;
