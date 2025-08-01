"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const itemPath = usePathname();

  const item = [
    {
      id: 1,
      title: "Articles",
      link: "/article",
    },
    {
      id: 2,
      title: "Create Article",
      link: "/create-article",
    },
    {
      id: 3,
      title: "About Us",
      link: "/about-us",
    },
  ];

  return (
    <nav className="p-5 border-b">
      <ul className="flex">
        {item.map((item) => (
          <Link href={item.link} key={item.id}>
            <li
              className={`mr-10 ${
                itemPath == item.link ? "text-green-500 border-b" : "text-white"
              }`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
