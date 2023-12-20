import { ServiceType } from "@/data/services";
import { Button, ServiceCard } from "@/components";
import Link from "next/link";

const ServicesList: React.FC<{ services: ServiceType[] }> = ({ services }) => {
  return (
    <div className="row service-row">
      {services.length > 0 ? (
        <>
          {services.slice(0, 4).map(({ title, description }, key) => {
            return (
              <div
                key={key}
                className="col-12 col-md-6 service-col fade-in-bottom"
              >
                <ServiceCard
                  key={key}
                  title={title}
                  description={description}
                />
              </div>
            );
          })}
          <div className="my-3 text-center">
            <Link href="/services">
              <Button variant="primary"> View More!</Button>
            </Link>
          </div>
        </>
      ) : (
        <div className="col-12 text-center">
          {/* <Loader type="spinner" /> */}
        </div>
      )}
    </div>
  );
};

export default ServicesList;
