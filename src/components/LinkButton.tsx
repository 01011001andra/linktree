import { AiOutlineShopping } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";

const LinkButton = () => {
  return (
    <>
      <a
        className="w-full h-full "
        target="_blank"
        href="https://yandramuslim.my.id"
      >
        <div className="px-4 hover:bg-orange-600  group   transition-all duration-300 items-center gap-6 py-5 w-full flex h-full rounded-lg bg-[#1e1e1e]">
          <TbBrandShopee size={40} />
          <span className="flex-1 text-orange-600 uppercase group-hover:text-white">
            SHOPEE
          </span>
          <FaRegShareSquare size={30} />
        </div>
      </a>
      <a
        className="w-full h-full "
        target="_blank"
        href="https://yandramuslim.my.id"
      >
        <div className="px-4 hover:bg-green-600 group transition-all duration-300 items-center gap-6 py-5 w-full flex h-full rounded-lg bg-[#1e1e1e]">
          <AiOutlineShopping size={40} />
          <span className="text-green-600 flex-1 uppercase group-hover:text-white">
            tokopedia
          </span>
          <FaRegShareSquare size={30} />
        </div>
      </a>
      <a
        className="w-full h-full "
        target="_blank"
        href="https://yandramuslim.my.id"
      >
        <div className="px-4 hover:bg-blue-600 group transition-all duration-300 items-center gap-6 py-5 w-full flex h-full rounded-lg bg-[#1e1e1e]">
          <BsShopWindow size={40} />
          <span className="text-blue-600 flex-1 uppercase group-hover:text-white">
            MARKETPLACE
          </span>
          <FaRegShareSquare size={30} />
        </div>
      </a>
    </>
  );
};

export default LinkButton;
