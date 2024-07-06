import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/products/${category?.name.toLowerCase()}`)} className="flex flex-col gap-2 justify-center items-center min-w-36 min-h-36 border border-primary-200 border-opacity-30 rounded text-primary-200 cursor-pointer hover:bg-secondary-300 hover:text-text-100 ">
      {category?.icon}
      <span className=" text-sm ">{category?.name}</span>
    </div>
  );
};

export default CategoryCard;
