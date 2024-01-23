import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { MdDeleteSweep } from "react-icons/md";
import { FaStickyNote } from "react-icons/fa";
import NoteModal from "./noteModal";
const Note = ({ values }) => {
  return (
    <div className="w-2/12 ">
      <Card className={`w-full ${values.color} `}>
        <CardHeader className="flex gap-3 max-h-12">
          <span className="text-ellipsis overflow-hidden text-nowrap">
            <FaStickyNote className=" inline-block text-2xl mr-2" />
            {values.title}
          </span>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-ellipsis overflow-hidden text-nowrap">
            {values.note}
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-end gap-2">
          <NoteModal detail={values} />
          <Button isIconOnly color="default" variant="shadow">
            <MdDeleteSweep className=" text-red-600 text-xl" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

Note.propTypes = {
  values: PropTypes.object,
};

export default Note;
