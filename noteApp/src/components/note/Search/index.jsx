import { Input } from "@nextui-org/react";
function Search() {
  return (
    <div className="w-80 m-auto mt-12">
      <Input type="text" label="Search" labelPlacement={"outside"} />
    </div>
  );
}

export default Search;
