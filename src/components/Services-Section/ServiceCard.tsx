import { ServiceType } from "@/data/services";

const ServiceCard: React.FC<ServiceType> = ({ title, description, icon }) => {
  return (
    <div className="box-item service-box-item with-icon">
      <div className="box-item-icon text-4xl">
        {icon}
      </div>
      <h3 className="text-3xl font-medium leading-snug">{title}</h3>
      <div className="text-lg text-[#a0a0a0] mb-2">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
