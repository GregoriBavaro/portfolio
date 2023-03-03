import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();

  const websiteId = router.query.projectId;

  return <h1>hello project details</h1>;
};

export default ProjectDetail;
