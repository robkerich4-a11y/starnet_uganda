import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Package {
  duration: string;
  data: string;
  price: string;
}

interface PaymentModalProps {
  package: Package | null;
  onClose: () => void;
}

export const PaymentModal = ({ package: pkg, onClose }: PaymentModalProps) => {
  const [copied, setCopied] = useState(false);
  const agentNumber = "+256772676652";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(agentNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!pkg) return null;

  return (
    <Dialog open={!!pkg} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Starlink Payment Instruction
          </DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Selected Package Info */}
          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">You have selected:</p>
            <p className="text-xl font-bold text-foreground">
              {pkg.duration} – {pkg.data}
            </p>
            <p className="text-2xl font-extrabold text-primary mt-2">
              Ugx {pkg.price}
            </p>
          </div>

          {/* Payment Steps */}
          <div className="space-y-3">
            <p className="font-semibold text-foreground mb-3">Payment Steps:</p>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-bold text-primary">1.</span>
                <span>Dial *165#</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">2.</span>
                <span>Select Send Money</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">3.</span>
                <span>
                  Enter Agent’s Number:
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-foreground text-lg">{agentNumber}</span>
                    <button
                      onClick={copyToClipboard}
                      className="p-1 hover:bg-accent rounded transition-colors"
                      title="Copy Agent’s Number"
                    >
                      {copied ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">4.</span>
                <span>
                  Enter Amount:{" "}
                  <span className="font-semibold text-foreground">
                    Ugx {pkg.price}
                  </span>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">5.</span>
                <span>Enter PIN</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-primary">6.</span>
                <span>Confirm and Send Payment</span>
              </li>
            </ol>
          </div>

          {/* Confirmation Message */}
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 text-center">
            <p className="text-sm text-foreground">
              Your package will be activated automatically after payment confirmation.
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
