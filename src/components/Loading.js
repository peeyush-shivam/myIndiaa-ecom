import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <div className="product__card h-fit w-fit relative">
      <div className="product__card--image h-60 w-60 bg-secondary-100 rounded-md overflow-hidden">
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="product__card--details h-20 w-60 text-sm pt-2">
        <div className="product__card--details-title ">
          {/* {product?.title} */}
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={15}
            className="rounded-sm mb-1"
          />
        </div>
        <div className="product__card--details-price">
          {/* ${product?.price} */}
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={15}
            className="rounded-sm mb-1"
          />
        </div>
        <div className="product__card--details-rating flex items-center">
          {/* <Rating
            name="read-only"
            value={product?.rating}
            readOnly
            size="small"
          />
          ({product?.stock}) */}
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={15}
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
