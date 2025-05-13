import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      text: "Challenge by",
      label: "Frontend Mentor",
      href: "https://www.frontendmentor.io?ref=challenge",
    },
    {
      id: 2,
      text: "Coded by",
      label: "Vasiliy Kirichenko",
      href: "https://www.frontendmentor.io/profile/VaskaDaGama26",
    },
  ];

  return (
    <footer className="flex flex-col items-center">
      {links.map((link) => (
        <div className="dm-sans-500-italic text-xl" key={link.id}>
          {link.text}&nbsp;
          <a
            className="dm-sans-500 text-(--purple500) duration-300 underline hover:outline-0 focus:outline-0 hover:border-0 focus:border-0 hover:text-(--black) focus:text-(--black)"
            target="_blank"
            href={link.href}
          >
            {link.label}
          </a>
          <br />
        </div>
      ))}
    </footer>
  );
};

export default Footer;
