import IssueForm, { IssueFormData } from "@/app/issues/_components/IssueForm";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewIssuesPage = async () => {
  const router = useRouter();
  const onFormSuccess = async (data: IssueFormData) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
  };

  return (
    <div className="max-w-xl">
      {/* <IssueForm onFormSuccess={onFormSuccess} /> */}
      <IssueForm />
    </div>
  );
};

export default NewIssuesPage;
