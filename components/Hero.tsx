"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
      <div className="grid lg:grid-cols-2 items-center gap-10">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="
            inline-block 
            px-4 py-2 
            rounded-full 
            bg-indigo-100 
            text-indigo-700 
            dark:bg-indigo-500/20 
            dark:text-indigo-300
            text-sm 
            font-medium 
            mb-4
          "
          >
            ✨ New Collection 2026
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
            Discover Your
            <span
              className="
              text-indigo-600
              dark:text-indigo-400
            "
            >
              {" "}
              Perfect Style
            </span>
          </h1>

          <p
            className="
            text-slate-600
            dark:text-slate-300
            text-base 
            mt-5 
            max-w-xl
          "
          >
            Explore premium fashion collections designed for comfort, confidence
            and everyday elegance.
          </p>

          <div className="flex gap-4 mt-7 flex-wrap">
            <Link href="/products">
              <button
                className="
                bg-indigo-600
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-indigo-700
                transition
                shadow-lg
                shadow-indigo-500/20
              "
              >
                Shop Now
              </button>
            </Link>

            <Link href="/products">
              <button
                className="
                border
                border-slate-300
                text-slate-800
                dark:border-slate-600
                dark:text-slate-200
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-slate-50
                dark:hover:bg-slate-800
                transition
              "
              >
                View Collection
              </button>
            </Link>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="/collection.jpg"
            alt="Fashion Collection"
            width={700}
            height={700}
            className="
              w-full
              rounded-3xl
              shadow-xl
              object-cover
              hover:scale-[1.02]
              transition
              duration-500
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
