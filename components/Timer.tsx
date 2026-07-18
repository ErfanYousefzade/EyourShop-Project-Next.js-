"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type BoxProps = {
  value: string;
  label: string;
};

export default function Timer() {
  const targetDate = new Date("2026-09-29T23:59:59").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };


  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft()
  );


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const Box = ({ value, label }: BoxProps) => (
    <div
      className="
        bg-gradient-to-b
        from-white
        to-indigo-50

        dark:bg-white/5
        dark:from-transparent
        dark:to-transparent

        border
        border-indigo-100
        dark:border-white/10

        backdrop-blur-md

        rounded-xl
        px-4
        py-3

        min-w-[75px]
        text-center

        transition-all
        duration-300

        hover:border-indigo-400
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-indigo-500/20
      "
    >

      <h2
        key={value}
        className="
          text-2xl
          md:text-3xl
          font-bold

          text-indigo-700
          dark:text-white

          transition-all
          duration-300

          animate-[pulse_1s_ease-in-out]
        "
      >
        {value}
      </h2>


      <p
        className="
          text-xs
          mt-1

          text-slate-500
          dark:text-slate-300
        "
      >
        {label}
      </p>

    </div>
  );


  return (
    <div
      className="
        rounded-2xl
        px-6
        py-5

        shadow-xl

        bg-gradient-to-br
        from-indigo-50
        via-white
        to-purple-50

        dark:from-slate-900
        dark:via-slate-800
        dark:to-slate-900

        border
        border-indigo-100
        dark:border-slate-700

        text-center
      "
    >

      <h2
        className="
          text-xl
          md:text-2xl

          font-bold
          mb-1

          text-slate-900
          dark:text-white
        "
      >
        🔥 Special Offer
      </h2>


      <p
        className="
          text-sm
          mb-4

          text-slate-500
          dark:text-slate-400
        "
      >
        Limited time discount ends soon
      </p>


      <div className="flex flex-wrap justify-center gap-3">

        <Box
          value={timeLeft.days}
          label="Days"
        />

        <Box
          value={timeLeft.hours}
          label="Hours"
        />

        <Box
          value={timeLeft.minutes}
          label="Min"
        />

        <Box
          value={timeLeft.seconds}
          label="Sec"
        />

      </div>

    </div>
  );
}