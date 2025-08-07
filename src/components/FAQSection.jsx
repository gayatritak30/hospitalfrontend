import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We provide 24x7 emergency care, outpatient consultations, surgeries, diagnostics, and more.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book appointments online via our website or call the hospital reception directly.",
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes, we offer video consultations for select departments.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left flex justify-between items-center"
          >
            <span className="font-medium">{faq.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
