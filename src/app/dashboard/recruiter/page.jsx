'use client'
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { authClient } from "@/lib/auth-client";
import { Briefcase, CircleCheck, Persons, Thunderbolt } from "@gravity-ui/icons";

const RecruiterHomePage = () => {
    const {data : session,isPending} = authClient.useSession()
    const user = session?.user
    console.log(user) 

    const recruiterStats = [
      { title: "Total Job Posts", value: "48", icon: Briefcase },
      { title: "Total Applicants", value: "1,284", icon: Persons },
      { title: "Active Jobs", value: "18", icon: Thunderbolt },
      { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];
    return (
      <div>
        <h2 className="text-center"> Welcome back</h2>
        <div className="py-4">
          <DashboardStats statsData={recruiterStats}/>
        </div>
      </div>
    );
};

export default RecruiterHomePage;