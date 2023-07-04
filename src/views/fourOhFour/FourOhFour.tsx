import { Link } from "react-router-dom";

export default function FourOhFour() {
  return (
    <div className="w-[30%] m-auto h-[20vh] bg-[gray] items-center rounded-lg text-lg font-bold text-[red] flex justify-center mt-[250px] space-x-3 ">
    <span>  fourohfour</span>
      <Link to="/" className="text-[green]">button home</Link>
    </div>
  );
}
