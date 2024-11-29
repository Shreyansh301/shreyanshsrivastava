import Link from 'next/link';

interface ProjectCardProps {
  href: string;
  projectName: string;
  category: string;
}

const ProjectCard = ({ href, projectName, category }: ProjectCardProps) => {
  return (
    <div className="grid">
      <Link href={href} className="pt-4 font-bold">
        {projectName}
      </Link>
      <p>{category}</p>
    </div>
  );
};

export default ProjectCard;
