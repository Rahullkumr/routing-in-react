import { Link, Outlet } from "react-router";

const Celebrity = () => {
  return (
    <div className="flex flex-col items-center h-[80vh]">
      <h1 className="text-5xl p-10">Celebrities Landing page</h1>
      <div className="flex justify-around bg-teal-900 text-lg w-1/4">
        <div>
          <Link to="/celebrity/actor">Actor</Link>
        </div>
        <div>
          <Link to="/celebrity/actress">Actress</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Celebrity;
