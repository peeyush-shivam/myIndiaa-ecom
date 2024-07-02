const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-w-36 min-h-36 border border-primary-200 border-opacity-30 rounded text-primary-200 cursor-pointer ">
      {category?.icon}
      <span className=" text-sm ">{category?.name}</span>
    </div>
  );
};

export default CategoryCard;
