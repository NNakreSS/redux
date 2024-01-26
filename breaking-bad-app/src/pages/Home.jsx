import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// REDUX
import { fetchCharacters } from "../redux/slices/charactersSlice";
// UI KIT
import { User } from "@nextui-org/react";

const Home = () => {
  const dispatch = useDispatch();
  const { items: characters } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1 className=" text-3xl font-medium text-center">Characters</h1>
      {characters.map((char, key) => (
        <User
          key={key}
          name={char.name}
          description="Product Designer"
          avatarProps={{
            src: char.image,
          }}
        />
      ))}
    </div>
  );
};

export default Home;
