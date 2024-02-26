import Link from "next/link";

const Copywrite: React.FC = () => {
  return (
    <div className="m-0 flex items-center justify-center bg-primary-gray p-4 text-sm">
      <p>
        <span className="text-[#A3A3A3]">
          Copyright © {new Date().getFullYear()}, All Right Reserved{" "}
        </span>
        <span className="text-primary-green">
          <Link
            href="https://www.smashcode.dev"
            target="_blank"
            rel="noreferrer"
            aria-label="smash code website link"
          >
            Smash Code
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Copywrite;
