import { redirect } from "next/navigation";
import { getSessionFromRequest } from "@/components/auth/session";
import prisma from "@/lib/prisma";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReferralStats } from "./_components/referral-stats";
import { ReferralLink } from "./_components/referral-link";
import { CommissionHistory } from "./_components/commission-history";
import { generateReferralCode } from "@/actions/referral-actions";

export default async function ReferralsPage() {
  const session = await getSessionFromRequest();

  if (!session?.user) {
    redirect("/login");
  }

  // Get user with referral information
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      id: true,
      referralCode: true,
      referrals: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
        },
      },
      commissionsEarned: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user) {
    redirect("/dashboard");
  }

  // Calculate total commissions
  const totalCommissions = user.commissionsEarned.reduce(
    (total, commission) => total + commission.amountInRupees,
    0
  );

  const pendingCommissions = user.commissionsEarned
    .filter((commission) => commission.status === "pending")
    .reduce((total, commission) => total + commission.amountInRupees, 0);

  const paidCommissions = user.commissionsEarned
    .filter((commission) => commission.status === "paid")
    .reduce((total, commission) => total + commission.amountInRupees, 0);

  return (
    <div className="container mx-auto py-10">
      <DashboardHeader
        heading="Referral Program"
        text="Invite friends and earn commissions."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <ReferralStats
          totalReferrals={user.referrals.length}
          totalCommissions={totalCommissions}
          pendingCommissions={pendingCommissions}
          paidCommissions={paidCommissions}
        />
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Your Referral Link</CardTitle>
            <CardDescription>
              Share this link with friends to earn commissions when they make a
              purchase
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReferralLink
              referralCode={user.referralCode}
              userId={user.id}
              generateCode={generateReferralCode}
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Commission History</CardTitle>
          </CardHeader>
          <CardContent>
            <CommissionHistory commissions={user.commissionsEarned} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
