import { getUserSession } from "@/lib/core/session";
import { getRecruiterCompany } from "@/lib/api/companies";
import CompanyProfile from "./CompanyProfile";

const CompanyPage = async () => {
  const user = await getUserSession();
  const company = await getRecruiterCompany(user?.id);
  console.log('User info', user)
  console.log('Company info', company)

  return (
    <div>
      <CompanyProfile
        recruiter={user}
        recruiterCompany={company}
      ></CompanyProfile>
    </div>
  );
};

export default CompanyPage;
