import { ServiceType } from "@/data/services";
import { Button, ServiceCard } from "@/components";
import Link from "next/link";
import Loader from "../ui/Loader";

const ServicesList: React.FC<{ services: ServiceType[] }> = ({ services }) => {
  return (
    <>
      <div className="-mx-2 grid w-full grid-cols-1 md:grid-cols-2">
        {services.map(({ title, description, icon }, key) => {
          return (
            <div key={key} className="m-3 fade-in-bottom">
              <ServiceCard
                key={key}
                title={title}
                description={description}
                icon={icon}
              />
            </div>
          );
        })}
      </div>
      <div className="my-8 text-center">
        <Link href="/services">
          <Button className="primary-btn">View More!</Button>
        </Link>
      </div>
    </>
  );
};

export default ServicesList;
