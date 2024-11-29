import Link from 'next/link';

const ProjectCard = ({ href, projectName, category }: any) => {
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
