import { motion } from "framer-motion";
import { Wifi, Zap, Shield } from "lucide-react";
import { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<{
    duration: string;
    data: string;
    price: string;
  } | null>(null);

  // 🇺🇬 Uganda Packages
  const packages = [
    { duration: "1 Day", data: "4GB", price: "6,000" },
    { duration: "7 Days", data: "12GB", price: "12,000" },
    { duration: "2 Weeks", data: "34GB", price: "18,000" },
    { duration: "1 Month", data: "65GB", price: "30,000" },
    { duration: "3 Months", data: "Unlimited", price: "50,000", featured: true },
  ];

  const features = [
    { icon: Wifi, text: "Available on all networks" },
    { icon: Zap, text: "Instant activation" },
    { icon: Shield, text: "Secure & reliable" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-background via-background to-secondary/10 flex flex-col">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-40" />
        <div className="container relative mx-auto px-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Starnet{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Uganda
              </span>
            </h1>
            <p className="mx-auto mb-2 max-w-md text-base text-muted-foreground md:text-lg">
              Affordable Internet Packages — Fast, Secure, Reliable
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 flex flex-wrap justify-center gap-3"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-foreground text-sm"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Packages Section */}
      <main className="container mx-auto flex-1 px-3 py-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="group relative"
            >
              <div
                className={`relative h-32 overflow-hidden rounded-lg bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between ${
                  pkg.featured
                    ? "border-2 border-primary bg-gradient-to-br from-card to-primary/5"
                    : "border border-border"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-primary to-secondary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                    POPULAR
                  </div>
                )}

                <div>
                  <h3 className="text-base font-bold text-card-foreground">
                    {pkg.duration}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-extrabold text-primary">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-muted-foreground">Ugx</span>
                  </div>
                  <div className="mt-0.5 inline-block rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-2 py-0.5 text-xs font-semibold text-foreground">
                    {pkg.data}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`mt-1 w-full rounded-md py-1.5 text-xs font-semibold transition-all duration-300 ${
                    pkg.featured
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Payment Modal */}
      <PaymentModal
        package={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

      {/* Footer */}
      <footer className="border-t border-border bg-card/40 py-2">
        <div className="container mx-auto px-3 text-center space-y-1">
          <p className="text-xs text-muted-foreground">
            © 2025 Starnet Uganda. All rights reserved.
          </p>

          {/* UPDATED WHATSAPP BUTTON */}
          <a
            href="https://wa.me/256792081841?text=Hello%20Starnet%20Uganda%2C%20I%20need%20more%20information%20about%20your%20internet%20packages."
            target="_blank"
            className="inline-block bg-primary text-primary-foreground px-3 py-1.5 rounded-md shadow hover:bg-primary/90 transition text-[11px] font-medium"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
