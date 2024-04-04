import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuesPage = async () => {
  return (
    <div className="max-w-xl">
      <IssueForm />
    </div>
  );
};

export default NewIssuesPage;
