import React from "react";
import { motion } from "framer-motion";

export function DigitalMarketingBenefits() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-3">
          How <span className="font-bold">digital marketing</span> can act as a
          positive catalyst in growth
        </h2>
        <p className="text-muted-foreground text-xs leading-relaxed max-w-2xl mx-auto">
          Digital marketing has become more popular, in large part because it can
          reach such a large audience digitally. However, it also offers several
          extra advantages that can support your marketing strategies. These are
          just a handful of the benefits of digital marketing.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Large Audience */}
        <motion.div
          className="flex gap-3 p-4 bg-white shadow-lg rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }} // 👈 scroll par bar bar animate hoga
        >
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">1</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground mb-2">
              A large Audience
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Digital marketing makes it possible for your business to reach a
              much larger audience and establish more connections via various
              digital channels. The larger the audience, the more the business.
            </p>
          </div>
        </motion.div>

        {/* Cost-effectiveness */}
        <motion.div
          className="flex gap-3 p-4 bg-white shadow-lg rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }} // 👈 same here
        >
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">2</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground mb-2">
              Cost-effectiveness
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Digital marketing is less expensive than traditional marketing,
              and the best digital approaches let you reach a bigger audience.
              Traditional ads like print, TV commercials, and offline strategies
              are costly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DigitalMarketingBenefits;
