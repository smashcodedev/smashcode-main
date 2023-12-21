import Link from "next/link";

const Copywrite: React.FC = () => {
  return (
    <div className="m-0 flex items-center justify-center bg-primary-gray p-4 text-sm">
      <p className=" text-light-gray ">
        Copyright © {new Date().getFullYear()}, All Right Reserved{" "}
        <Link
          className="text-primary-green"
          href="https://www.smashcode.dev"
          target="_blank"
          rel="noreferrer"
        >
          Smash Code
        </Link>
      </p>
    </div>
  );
};

export default Copywrite;
