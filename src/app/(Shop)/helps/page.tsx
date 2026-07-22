"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  CreditCard,
  Headphones,
  ChevronDown,
} from "lucide-react";
import { useState, ReactNode, useEffect } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface Card {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default function Helps() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs: FAQ[] = [
    {
      question: "زمان ارسال سفارش چقدر است؟",
      answer: "تمام سفارش‌ها بین 1 تا 3 روز کاری پردازش و ارسال می‌شوند.",
    },
    {
      question: "آیا امکان بازگشت کالا وجود دارد؟",
      answer: "بله، تا 7 روز پس از دریافت سفارش امکان بازگشت کالا وجود دارد.",
    },
    {
      question: "روش‌های پرداخت چیست؟",
      answer: "پرداخت آنلاین، کارت به کارت و پرداخت در محل برای برخی مناطق.",
    },
    {
      question: "چگونه سفارش خود را پیگیری کنم؟",
      answer: "از بخش سفارشات حساب کاربری می‌توانید وضعیت سفارش را مشاهده کنید.",
    },
  ];

  const cards: Card[] = [
    {
      icon: <Truck size={35} />,
      title: "ارسال سریع",
      desc: "تحویل سفارش در کوتاه‌ترین زمان ممکن",
    },
    {
      icon: <ShieldCheck size={35} />,
      title: "ضمانت کیفیت",
      desc: "تمام محصولات دارای تضمین اصالت هستند",
    },
    {
      icon: <CreditCard size={35} />,
      title: "پرداخت امن",
      desc: "پرداخت کاملاً رمزنگاری شده و مطمئن",
    },
    {
      icon: <Headphones size={35} />,
      title: "پشتیبانی 24/7",
      desc: "همیشه پاسخگوی سوالات شما هستیم",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  // اگر هنوز mounted نشده، placeholder برگردانید تا از Hydration mismatch جلوگیری شود
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl m-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl m-8"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
      {/* Lights - نورهای پس‌زمینه با تطابق با دارک مود */}
      <div className="fixed top-0 left-0 w-[450px] h-[450px] bg-blue-200 dark:bg-blue-900/30 rounded-full blur-[180px] opacity-20 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[450px] h-[450px] bg-purple-200 dark:bg-purple-900/30 rounded-full blur-[180px] opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[90%] max-w-7xl mx-auto pt-28 pb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-black via-gray-600 to-gray-300 dark:from-white dark:via-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
          مرکز راهنمایی
        </h1>

        <p className="mt-8 text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-8">
          هر سوالی دارید اینجاست. از پیگیری سفارش گرفته تا بازگشت کالا و
          پشتیبانی فنی.
        </p>
      </motion.section>

      {/* Cards Section */}
      <section className="w-[90%] max-w-7xl mx-auto pb-24">
        <div className="grid md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800/80 rounded-[35px] p-8 border border-gray-100 dark:border-gray-700 shadow-xl dark:shadow-gray-900/30 hover:-translate-y-3 hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/70 dark:via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000" />

              <div className="mb-5 text-gray-700 dark:text-gray-300">{card.icon}</div>

              <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-white">
                {card.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-[90%] max-w-5xl mx-auto pb-28">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-black text-center mb-14 text-gray-800 dark:text-white"
        >
          سوالات متداول
        </motion.h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-[25px] overflow-hidden shadow-lg dark:shadow-gray-900/30 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
              >
                <span className="font-bold text-lg text-gray-800 dark:text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`text-gray-500 dark:text-gray-400 transition-all duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === index ? "max-h-40 pb-6 px-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-[90%] max-w-6xl mx-auto pb-24"
      >
        <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-br from-black via-gray-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black text-white p-16 text-center">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

          <h2 className="text-5xl font-black mb-6">هنوز سوالی دارید؟</h2>

          <p className="text-gray-400 dark:text-gray-300 mb-10">
            تیم پشتیبانی ما آماده پاسخگویی به شماست.
          </p>

          <button className="bg-white dark:bg-gray-100 text-black dark:text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-xl">
            تماس با پشتیبانی
          </button>
        </div>
      </motion.section>
    </div>
  );
}