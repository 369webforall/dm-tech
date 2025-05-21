"use client";

import { useState } from "react";
import { Check, Copy, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ReferralLinkProps {
  referralCode: string | null;
  userId: string;
  generateCode: (userId: string) => Promise<{ code: string }>;
}

export function ReferralLink({
  referralCode,
  userId,
  generateCode,
}: ReferralLinkProps) {
  const [code, setCode] = useState(referralCode);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const referralUrl = code
    ? `${process.env.NEXT_PUBLIC_APP_URL}/register?ref=${code}`
    : "";

  const handleGenerateCode = async () => {
    try {
      setIsGenerating(true);
      const result = await generateCode(userId);
      setCode(result.code);

      toast("Referral code generated", {
        description: "Your new referral code is ready to share.",
      });
    } catch (error) {
      toast(`Error ${error}`, {
        description: "Failed to generate referral code. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyLink = () => {
    if (referralUrl) {
      navigator.clipboard.writeText(referralUrl);
      setIsCopied(true);

      toast("Copied!", {
        description: "Referral link copied to clipboard.",
      });

      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {!code ? (
        <div className="text-center py-4">
          <p className="text-muted-foreground mb-4">
            You don&#39;t have a referral code yet. Generate one to start
            earning commissions.
          </p>
          <Button onClick={handleGenerateCode} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Referral Code"
            )}
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-2">
            <Input value={referralUrl} readOnly className="font-mono text-sm" />
            <Button
              size="icon"
              variant="outline"
              onClick={handleCopyLink}
              className="shrink-0"
            >
              {isCopied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Your referral code:</p>
              <p className="font-mono text-sm">{code}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleGenerateCode}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-3 w-3 animate-spin" />
                  Regenerating...
                </>
              ) : (
                "Generate New Code"
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
