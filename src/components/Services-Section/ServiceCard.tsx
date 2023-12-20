import { ServiceType } from "@/data/services";

const ServiceCard: React.FC<ServiceType> = ({ title, description }) => {
  return (
    <div className="box-item service-box-item with-icon">
      {/* <div className="box-item-icon">
        {icon} */}
      {/* <img src={archi} alt="" /> */}
      {/* </div> */}
      <h3 className="box-item-title">{title}</h3>
      <div className="box-item-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
