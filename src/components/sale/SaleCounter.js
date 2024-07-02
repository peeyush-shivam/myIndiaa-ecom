import { useEffect, useState } from "react";

const SaleCounter = () => {
  const [counter, setCounter] = useState({
    seconds: 48,
    minutes: 36,
    hours: 17,
    days: 3,
  });

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setCounter((prev) => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (
          newDays === 0 &&
          newHours === 0 &&
          newMinutes === 0 &&
          newSeconds === 0
        ) {
          clearInterval(interval);
        }

        if (newSeconds < 0) {
          newMinutes--;
          newSeconds = 59;
        }
        if (newMinutes < 0) {
          newHours--;
          newMinutes = 59;
        }
        if (newHours < 0) {
          newDays--;
          newHours = 23;
        }
        if (newDays < 0) {
          newDays = 0;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-end gap-2">
      <div className="flex flex-col">
        <label className=" text-xs font-normal">Days</label>
        <span>{String(counter.days).padStart(2, "0")}</span>
      </div>
      <span>:</span>
      <div className="flex flex-col">
        <label className=" text-xs font-normal">Hours</label>
        <span>{String(counter.hours).padStart(2, "0")}</span>
      </div>
      <span>:</span>
      <div className="flex flex-col">
        <label className=" text-xs font-normal"> Minutes</label>
        <span>{String(counter.minutes).padStart(2, "0")}</span>
      </div>
      <span>:</span>
      <div className="flex flex-col ">
        <label className=" text-xs font-normal">Seconds</label>
        <span>{String(counter.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default SaleCounter;
