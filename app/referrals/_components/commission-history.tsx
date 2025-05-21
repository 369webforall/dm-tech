import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface CommissionHistoryProps {
  commissions: Array<{
    id: string;
    amountInRupees: number;
    status: "pending" | "paid";
    createdAt: Date;
  }>;
}

export function CommissionHistory({ commissions }: CommissionHistoryProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {commissions.map((commission) => (
          <TableRow key={commission.id}>
            <TableCell>
              {format(new Date(commission.createdAt), "MMM d, yyyy")}
            </TableCell>
            <TableCell>₹{commission.amountInRupees.toLocaleString()}</TableCell>
            <TableCell>
              {commission.status === "paid" ? (
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  Paid
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 border-yellow-200"
                >
                  Pending
                </Badge>
              )}
            </TableCell>
          </TableRow>
        ))}

        {commissions.length === 0 && (
          <TableRow>
            <TableCell
              colSpan={3}
              className="text-center py-6 text-muted-foreground"
            >
              No commissions yet
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
