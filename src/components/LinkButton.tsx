import { AiOutlineShopping } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
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
          <TbBrandShopee size={50} />
          <span className="flex-1 text-orange-600 uppercase group-hover:text-white">
            SHOPEE
          </span>
        </div>
      </a>
      <a
        className="w-full h-full "
        target="_blank"
        href="https://yandramuslim.my.id"
      >
        <div className="px-4 hover:bg-green-600 group transition-all duration-300 items-center gap-6 py-5 w-full flex h-full rounded-lg bg-[#1e1e1e]">
          <AiOutlineShopping size={50} />
          <span className="text-green-600 uppercase group-hover:text-white">
            tokopedia
          </span>
        </div>
      </a>
      <a
        className="w-full h-full "
        target="_blank"
        href="https://yandramuslim.my.id"
      >
        <div className="px-4 hover:bg-blue-600 group transition-all duration-300 items-center gap-6 py-5 w-full flex h-full rounded-lg bg-[#1e1e1e]">
          <BsShopWindow size={50} />
          <span className="text-blue-600 uppercase group-hover:text-white">
            MARKETPLACE
          </span>
        </div>
      </a>
    </>
  );
};

export default LinkButton;
