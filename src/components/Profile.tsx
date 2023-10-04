import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { BiLogoDiscordAlt } from "react-icons/bi";

const Profile = () => {
  return (
    <>
      <div className="w-full h-full px-2">
        <img
          src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="profile background"
          className="h-[25vh] rounded-b-2xl object-bottom object-cover w-full"
        />
      </div>
      <div className="relative flex flex-col items-center pt-36">
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80"
          alt="profile"
          className="absolute rounded-full w-44 h-44 -top-16"
        />
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center max-w-xs gap-2">
            <h1 className="text-3xl ">Your Name</h1>
            <p className="text-[#7d7d7d] text-center">
              Your Career & What ever you want to write down here
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="https://yandramuslim.my.id" target={"_blank"}>
              <FiTwitter
                size={25}
                className="transition-all duration-300 cursor-pointer hover:scale-150"
              />
            </a>
            <CiLinkedin
              size={30}
              className="transition-all duration-300 cursor-pointer hover:scale-150"
            />
            <AiOutlineFacebook
              size={30}
              className="transition-all duration-300 cursor-pointer hover:scale-150"
            />
            <BsInstagram
              size={25}
              className="transition-all duration-300 cursor-pointer hover:scale-150"
            />
            <FaTiktok
              size={25}
              className="transition-all duration-300 cursor-pointer hover:scale-150"
            />
            <PiTelegramLogoBold
              size={30}
              className="transition-all duration-300 cursor-pointer hover:scale-150"
            />
            <BiLogoDiscordAlt
              size={30}
              className="transition-all duration-300 cursor-pointer hover:scale-150"
            />
          </div>
          <p className="text-[#7d7d7d] text-center max-w-md w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, eligendi quisquam exercitationem eveniet nostrum optio
            aperiam, cumque temporibus corporis placeat aliquam et at. Ab
            reiciendis fuga nisi porro dolor harum distinctio amet eos aperiam
            natus nulla impedit numquam est id magnam unde doloremque explicabo,
            delectus adipisci cum, in deleniti! Hic!
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
