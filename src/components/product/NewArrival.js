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
      <div className="new__products flex w-full gap-1">
        <div className=" w-1/2 flex justify-center items-center bg-secondary-100 gap-1">
          <img
            src="https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png"
            alt="iphone-13"
            className=" h-[30rem] object-contain"
          />
        </div>
        <div className=" w-1/2 flex flex-col gap-1">
          <div className=" h-1/2 w-full flex justify-end items-center  bg-secondary-100 gap-1">
            <img
              src="https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/2.png"
              alt="handbag-black"
              className=" h-[15rem] object-contain"
            />
          </div>
          <div className=" h-1/2 w-full flex gap-1">
            <div className=" w-1/2 h-full flex justify-end items-center bg-secondary-100 gap-1">
              <img
                src="https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png"
                alt="handbag-black"
                className=" h-[15rem] object-contain"
              />
            </div>
            <div className=" w-1/2 h-full flex justify-end items-center bg-secondary-100 gap-1">
              <img
                src="https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png"
                alt="handbag-black"
                className=" h-[15rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
