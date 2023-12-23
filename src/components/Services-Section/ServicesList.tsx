import { ServiceType } from "@/data/services";
import { ServiceCard } from "@/components";

const ServicesList: React.FC<{ services: ServiceType[] }> = ({ services }) => {
  return (
    <div className="-mx-2 grid w-full grid-cols-1 md:grid-cols-2">
      {services.map(({ title, description, icon }, key) => {
        return (
          <div key={key} className="fade-in-bottom m-3">
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
  );
};

export default ServicesList;
