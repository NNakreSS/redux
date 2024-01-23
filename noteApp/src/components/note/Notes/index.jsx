import Note from "./note";

function Notes() {
  const notes = [
    {
      id: 1,
      title: "Note 1 Note note note notes note note note note note note",
      note: "lorem ipsum dolor sit amet, consectetur, lorem lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur",
      color: "bg-green-700",
    },
    {
      id: 2,
      title: "Note 2",
      note: "deneme 2 notum bu",
      color: "bg-blue-700",
    },
    {
      id: 3,
      title: "Note 3",
      note: "deneme 3 notum bu",
      color: "bg-gray-700 ",
    },
  ];
  return (
    <div className="flex gap-5 mt-10  w-11/12 m-auto flex-wrap justify-center ">
      {notes.map((note, index) => (
        <Note key={index} values={note} />
      ))}
    </div>
  );
}

export default Notes;
