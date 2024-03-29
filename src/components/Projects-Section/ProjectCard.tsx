import Image from "next/image";
import logoImg from "../../../public/logo.png";
import Link from "next/link";
import { ProjectType } from "@/data/projects";

interface ProjectCardProps extends ProjectType {
  bgColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  bgColor,
  proj_title: title,
  proj_desc: description,
  Image_URL: imageUrl,
  url: projectUrl,
  video_url: videoUrl,
}) => {
  return (
    <div
      className="box-item project-box-item fade-in-bottom flex-col rounded-3xl"
      style={{ "--primary": bgColor } as any}
    >
      <div className="group flex w-full flex-col pb-8 text-[#e0e0e0]">
        <div className="mb-auto">
          <h3 className="mb-2 text-3xl font-medium group-hover:text-white">
            {title}
          </h3>
          <p className="mb-4 text-xl group-hover:text-white">{description}</p>
        </div>
        {videoUrl ? (
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
            src={videoUrl}
            className="w-full rounded-md object-contain"
          ></video>
        ) : (
          imageUrl && (
            <Image
              alt={`${title} project image`}
              src={
                imageUrl ||
                "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/others%2Fexpedo2.png?alt=media&token=847d3c3b-0376-4486-88f7-f40a6615cf60"
              }
              width={1280}
              height={800}
              className="rounded-full transition-transform duration-200 group-hover:scale-105 lg:pt-0"
            />
          )
        )}
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
