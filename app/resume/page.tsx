import { Header } from './components/Header';

const Home = async () => {

  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-1 col-span-1 w-full bg-blue-600 border-3 border-black p-5 ">
          <h1 className="text-3xl italic font-bold leading-tight uppercase">Skills</h1>
        </div>
        <div className="col-span-2 h-10 w-full bg-rose-600">

        </div>
      </div>
    </>
  );
};

export default Home;
