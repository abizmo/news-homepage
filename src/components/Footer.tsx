import { type NextComponentType } from "next";

const Footer: NextComponentType = () => (
  <footer className="mt-12 mb-8 text-center text-xs">
    Challenge by{" "}
    <a
      className="primary-link font-bold"
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
      rel="noopener noreferrer"
    >
      Frontend Mentor
    </a>
    . Coded by{" "}
    <a className="primary-link font-bold" href="https://www.abizmo.dev">
      Abián Izquierdo
    </a>
    .
  </footer>
);

export default Footer;
