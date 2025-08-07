import { motion } from "framer-motion";

const stats = [
  { label: "Happy Patients", value: 1500 },
  { label: "Doctors", value: 120 },
  { label: "Years of Service", value: 25 },
  { label: "Awards", value: 45 },
];

const Counter = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <motion.h2
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              +{stat.value}
            </motion.h2>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
