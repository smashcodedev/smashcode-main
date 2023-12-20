import React from "react";
import { SectionHeading } from "..";

const Services = () => {
  return (
    <section>
      <div className="container-lg mt-4">
        <div className="section-heading mb-5">
          <SectionHeading
            heading="Offered"
            subHeading="Services we"
            description="Responsive Websites & Web Apps, and Full Stack Web Apps Development"
          />
          <ul className="list-disc px-3">
            <li>Custom Web Development ( HTML, CSS, JS, ReactJs, Firebase)</li>
            <li>
              Blockchain Web Apps (Minting, Wallet Connectivity, Smart Contract
              Integration)
            </li>
            <li>
              Graphic Designing (Professional Business Logo Design, Poster
              Design, CV Design, Photo Editing)
            </li>
            <li>
              Content and Copy Writing (Engaging Web Pages, Sales Copy, Product
              Description, Blogs & Articles)
            </li>
          </ul>
        </div>
        <div className="row service-row">
          {/* {dataForHomeServices.length > 0 ? (
            <>
              {dataForHomeServices.slice(0, 4).map((hisData, key) => {
                return (
                  <div
                    key={key}
                    className="col-12 col-md-6 service-col fade-in-bottom"
                  >
                    <ServicesCard key={key} data={hisData} />
                  </div>
                );
              })}
              <div className="my-3 text-center">
                <Link to="/services" className="btn primary-btn ">
                  View More!
                </Link>
              </div>
            </>
          ) : (
            <div className="col-12 text-center">
              <Loader type="spinner" />
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Services;
