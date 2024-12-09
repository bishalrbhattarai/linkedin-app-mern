export default function Navbar() {
  return (
    <div className="flex sticky justify-between items-center  h-[60px]  text-gray-400 px-2  ">
      <div>Logo</div>
      <div className="flex font-extrabold  border  border-gray-500 text-gray-300 ">
        <button className="px-[80px]  flex-1 h-[60px]  hover:bg-gray-700">
          For you
        </button>
        <button className="px-[80px] h-[60px] hover:bg-gray-700">
          Following
        </button>
      </div>
      <div className="relative focus:border-none">
        <input
          placeholder="Search"
          className=" bg-gray-700  focus:border-none focus:border-black px-11 rounded-2xl py-2"
          type="text"
        />
        <div className="absolute top-2 left-4">X</div>
      </div>
    </div>
  );
}
