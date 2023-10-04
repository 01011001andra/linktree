import { Footer, LinkButton, Profile } from "./components";

const App = () => {
  return (
    <div className="flex flex-col px-4 2xl:px-0 w-full min-h-screen gap-10 text-white bg-black">
      <div className="flex flex-col">
        <Profile />
      </div>
      <div className="flex flex-col w-full max-w-7xl gap-5 mx-auto">
        <LinkButton />
      </div>
      <div className="w-full h-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
