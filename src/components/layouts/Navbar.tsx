"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { lofiemenu } from "@/data/lofiemenu";

import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash || "#");
    };

    updateHash();

    window.addEventListener("haschange", updateHash);
    return () => {
      window.removeEventListener("haschange", updateHash);
    };
  }, []);

  const isActive = (link: string) => {
    return currentHash === link;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between py-3 px-5 bg-white text-primary shadow-lg md:max-w-[1200px] md:mx-auto">
      <div className="logo">
        <Image
          src={"/images/lofie.png"}
          width={500}
          height={500}
          alt="Lofie Homemade"
          className="w-12"
        />
      </div>
      <div className="navigation">
        <button type="button" className="md:hidden" onClick={toggleMenu}>
          <HiBars3 size={25} />
        </button>

        {/* slide menu navbar for mobile - start */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={clsx(
                "fixed inset-0 bg-black/30 backdrop-blur-xs z-10"
              )}
              onClick={toggleMenu}>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={clsx(
                  "fixed top-0 bottom-0 right-0 w-3/5 bg-secondary text-black"
                )}
                onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="absolute right-5 top-2 p-3 rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-300">
                  <HiXMark size={25} />
                </button>
                <ul className="relative top-15 p-6 flex flex-col gap-2">
                  {lofiemenu.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className={clsx(
                          "py-3 px-2 flex gap-2 items-center rounded-md w-full transition-colors duration-300 ease-in-out cursor-pointer hover:bg-gray-300",
                          isActive(item.link) ? "bg-gray-300" : ""
                        )}>
                        <span className="text-primary">
                          {item.icon && <item.icon size={20} />}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* slide menu navbar for mobile - end */}

        {/* navbar for desktop - start */}
        <div className="hidden md:flex items-center gap-3">
          {lofiemenu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={clsx(
                "py-2 px-3 flex gap-2 items-center rounded-md w-full transition-colors duration-300 ease-in-out cursor-pointer hover:text-primary",
                isActive(item.link) ? "text-primary" : "text-stone-800"
              )}>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
