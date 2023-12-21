const Copywrite: React.FC = () => {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-lg-6 text-lg-left text-center">
            <div className="copyright-text">
              <p className="text-muted m-0">
                Copyright © {new Date().getFullYear()}, All Right Reserved{" "}
                <a
                  className="a-white"
                  href="https://www.smashcode.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Smash Code
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copywrite;
