"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { HeaderItem } from "@/type/menu";

// Interfaz actualizada para incluir los props faltantes
interface MobileHeaderLinkProps {
  item: HeaderItem;
  setNavbarOpen: (isOpen: boolean) => void;
  navbarOpen: boolean;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({
  item,
  setNavbarOpen,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    if (item.submenu) {
      setSubmenuOpen(!submenuOpen);
    }
  };

  return (
    <div className="relative w-full">
      {item.submenu ? (
        <div
          className="flex items-center justify-between w-full py-2 text-white cursor-pointer"
          onClick={handleToggle}
        >
          <span>{item.label}</span>
          <Icon
            icon="iconamoon:arrow-down-2-duotone"
            width="22"
            height="22"
            className="ml-1 transition-transform duration-300 group-hover:rotate-180"
          />
        </div>
      ) : (
        <Link
          href={item.href}
          className="flex items-center justify-between w-full py-2 text-white cursor-pointer"
          onClick={() => setNavbarOpen(false)}
        >
          <span>{item.label}</span>
        </Link>
      )}

      {item.submenu && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            submenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {item?.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-midnight_text hover:bg-prim hover:text-white bg-white ps-3"
              onClick={() => {
                handleToggle();
                setNavbarOpen(false);
              }}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
