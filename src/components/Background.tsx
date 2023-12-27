import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden pb-16 pt-20 lg:pt-32"
    >
      <Image
        className="absolute max-w-none -right-full sm:top-0 sm:right-0 sm:left-0 sm:mx-auto"
        src="/backgrounds/spray.jpg"
        alt="Image: background of spray paint with reddish pink and blue."
        width={1558}
        height={946}
        style={{ transform: `translateY(${offsetY * 0.65}px)` }}
        priority
      />
      {children}
    </motion.section>
  );
}
