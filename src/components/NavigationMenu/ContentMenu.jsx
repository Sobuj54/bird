import { Link } from "react-router-dom";

const ContentMenu = ({ options }) => {
  return (
    <div
      className="
  w-80
  border
  border-gray-200
  rounded-[40px]
  shadow0md
  bg-white
  absolute
  left-0
  top-full
  flex
  justify-start
  ">
      <ul className="flex flex-col items-start pl-10 space-y-1 py-4">
        {options.map((option, index) => (
          <Link to={option.to} key={index}>
            <div className="cursor-pointer space-x-4 flex flex-col gap-4 hover:bg-gray-100 w-60 px-6 py-4 rounded-3xl">
              <div className="flex gap-4">
                <div>{option.emoji}</div>
                <div>{option.label}</div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ContentMenu;
