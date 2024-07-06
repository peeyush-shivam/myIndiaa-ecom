import { newArrival } from "../../utils/newArrival";

const NewArrival = () => {
  return (
    <div className="new__arrival flex flex-col w-full h-fit gap-8">
      <div className="tag__label flex flex-col gap-4">
        <div className="tag flex justify-start items-center gap-3">
          <div className="h-8 w-4 bg-secondary-300 rounded"></div>
          <span className=" font-semibold color text-secondary-300">
            Featured
          </span>
        </div>
        <div className="title flex justify-between text-3xl font-semibold">
          <div className="flex gap-16 items-end ">
            <span className="">New Arrival</span>
          </div>
        </div>
      </div>
      <div className="new__products flex w-full gap-1 max-lg:flex-wrap">
        <div className=" w-1/2 flex justify-center items-center bg-primary-200 gap-1 relative max-lg:w-full">
          <img
            src="https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png"
            alt="iphone-13"
            className=" h-[30rem] object-contain"
          />
          <div className=" flex flex-col absolute bottom-4 left-4 z-10 gap-2  text-text-100">
            <div className="new__arrival--name text-lg font-semibold">
              {newArrival[0].title}
            </div>
            <div className="new__arrival--desc w-full text-xs text-wrap">
              {newArrival[0].description.split(".")[0]}.
            </div>
            <div className="new__arrival--action text-xs font-semibold underline cursor-pointer">
              Shop now
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex flex-col gap-1 max-lg:w-full">
          <div className=" h-1/2 w-full flex justify-end items-center  bg-primary-200 gap-1 relative ">
            <img
              src="https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/2.png"
              alt="handbag-black"
              className=" h-[15rem] object-contain"
            />
            <div className=" flex flex-col absolute bottom-4 left-4 z-10 gap-2 text-text-100">
              <div className="new__arrival--name text-lg font-semibold">
                {newArrival[1].title}
              </div>
              <div className="new__arrival--desc w-1/2 text-xs text-wrap">
                {newArrival[1].description.split(".")[0]}.
              </div>
              <div className="new__arrival--action text-xs font-semibold underline cursor-pointer">
                Shop now
              </div>
            </div>
          </div>
          <div className=" h-1/2 w-full flex gap-1">
            <div className=" w-1/2 h-full flex justify-end items-center bg-primary-200 gap-1 relative">
              <img
                src="https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/1.png"
                alt="handbag-black"
                className=" h-[15rem] object-contain"
              />
              <div className=" flex flex-col absolute bottom-4 left-4 z-10 gap-2 text-text-100">
                <div className="new__arrival--name text-lg font-semibold">
                  {newArrival[2].title}
                </div>
                <div className="new__arrival--desc w-full text-xs text-wrap">
                  {newArrival[2].description.split(".")[0]}.
                </div>
                <div className="new__arrival--action text-xs font-semibold underline cursor-pointer">
                  Shop now
                </div>
              </div>
            </div>
            <div className=" w-1/2 h-full flex justify-end items-center bg-primary-200 gap-1 relative">
              <img
                src="https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/1.png"
                alt="handbag-black"
                className=" h-[12rem] object-contain sepia-0 "
              />
              <div className=" flex flex-col absolute bottom-4 left-4 z-10 gap-2 text-text-100">
                <div className="new__arrival--name text-lg font-semibold">
                  {newArrival[3].title}
                </div>
                <div className="new__arrival--desc w-full text-xs text-wrap">
                  {newArrival[3].description.split(".")[0]}.
                </div>
                <div className="new__arrival--action text-xs font-semibold underline cursor-pointer">
                  Shop now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
