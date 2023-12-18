import Link from "next/link";
import React from "react";

const Custom404: React.FC = () => {
  return (
    <div className="mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
      <div className="mx-auto max-w-lg space-y-3 text-center">
        <h3 className="font-semibold text-special">404 Error</h3>
        <p className="text-4xl font-semibold text-heading-color sm:text-5xl">
          Page not found
        </p>
        <p className="text-heading-color">
          Sorry, the page you are looking for could not be found or has been
          removed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
