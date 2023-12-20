import { ServiceType } from "@/data/services";

interface ServiceCardProps extends ServiceType {}

const ServiceCard = ({ data }: { data: any }) => {
  const { heading, para, icon } = data;
  return (
    <div className="box-item service-box-item with-icon">
      <div className="box-item-icon">
        {icon}
        {/* <img src={archi} alt="" /> */}
      </div>
      <h3 className="box-item-title">{heading}</h3>
      <div className="box-item-text">
        <p>{para}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
