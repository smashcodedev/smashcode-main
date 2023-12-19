import Image, { StaticImageData } from "next/image";
import logoImg from "../../../public/logo.png";
import placeHolderImg from "../../../public/images/expedo2.png";
import Link from "next/link";

type ProjectCardProps = {
  bgColor: string;
  title: string;
  description: string;
  imageUrl?: StaticImageData | string;
  projectUrl?: string;
  videoUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  bgColor,
  title,
  description,
  imageUrl,
  projectUrl,
  videoUrl,
}) => {
  return (
    <div
      className="box-item project-box-item fade-in-bottom flex-col rounded-3xl"
      style={{ "--project-bg": bgColor } as any}
    >
      <div className="w-full p-10 pb-8 text-[#e0e0e0]">
        <div className="mb-auto">
          <h3 className="mb-2 text-3xl font-medium">{title}</h3>
          <p className="text-xl">{description}</p>
        </div>
        {(videoUrl && (
          <video
            poster={
              typeof imageUrl === "string"
                ? imageUrl
                : typeof logoImg === "string"
                  ? logoImg
                  : undefined
            }
            muted
            playsInline
            controls
            loop
            src={videoUrl}
            className="w-full rounded-md object-contain"
          ></video>
        )) ??
          (imageUrl && (
            <Image
              alt={`${title} project image`}
              src={imageUrl || placeHolderImg}
              width={1280}
              height={800}
              className="pt-10 lg:pt-0"
            />
          ))}
      </div>
      <div className="mx-auto my-1">
        {projectUrl || videoUrl ? (
          <Link
            className="mx-auto flex items-center justify-center rounded-full px-4 py-1.5 text-center text-xl font-semibold text-primary-green"
            href={projectUrl || videoUrl || "#"}
            target="_blank"
          >
            View more
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;