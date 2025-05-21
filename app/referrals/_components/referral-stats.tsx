import { Users, DollarSign, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReferralStatsProps {
  totalReferrals: number;
  totalCommissions: number;
  pendingCommissions: number;
  paidCommissions: number;
}

export function ReferralStats({
  totalReferrals,
  totalCommissions,
  pendingCommissions,
  paidCommissions,
}: ReferralStatsProps) {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalReferrals}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Commissions
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ₹{totalCommissions.toLocaleString()}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending/Paid</CardTitle>
          <div className="flex space-x-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Pending</div>
              <div className="font-medium">
                ₹{pendingCommissions.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Paid</div>
              <div className="font-medium">
                ₹{paidCommissions.toLocaleString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
