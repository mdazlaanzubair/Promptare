import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-100 text-base-content border-t">
      <div>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <Link
            href="/"
            className="link text-primary font-bold underline-offset-4 hover:text-secondary transition-colors duration-300"
            rel="noopener noreferrer"
          >
            Promptare
          </Link>
          <span className="mx-2">|</span>
          <a
            href="https://github.com/mdazlaanzubair/Promptare"
            className="link text-primary font-bold underline-offset-4 hover:text-secondary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
