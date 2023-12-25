type HeadingProps = {
  subHeading: string;
  heading: string;
  description?: string;
};

type LinksType = {
  href: string;
  label: string;
};

type FeedbackTypes = {
  featured: boolean;
  id: number;
  client_Name: string;
  client_feedback: string;
  url: string;
  platform: string;
  Image_URL: string;
};

type TeamMemberTypes = {
  memberName: string;
  role: string;
  Image_URL: string;
};

export type { HeadingProps, LinksType, FeedbackTypes, TeamMemberTypes };
