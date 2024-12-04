import { useState } from "react";
import arrowFaq from "../../img/arrow-faq.svg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I make a reservation?",
      answer:
        "You can make a reservation through our online booking system or by calling our dedicated reservations team.",
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer:
        "Yes, we accommodate various dietary requirements. Please inform us of any restrictions when making your reservation.",
    },
    {
      question: "What is the dress code?",
      answer:
        "We maintain a smart casual dress code. Business casual attire is recommended for a comfortable dining experience.",
    },
    {
      question: "Can I purchase gift cards?",
      answer:
        "Yes, gift cards are available for purchase online or at our location.",
    },
    {
      question: "What are the accepted payment methods?",
      answer: "We accept all major credit cards, digital payments, and cash.",
    },
  ];

  return (
    <section className="h-full md:px-32 px-6 text-[#321D1D] md:py-24 py-6">
      <div className=" mx-auto  flex md:flex-row flex-col justify-between">
        <div className="flex flex-col items-start gap-4">
          <p className="mb-4 text-[#A46C32]">FAQ</p>
          <h1 className="md:text-7xl text-4xl">Answers for Questions</h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 flex justify-between items-center text-left hover:text-gray-600 transition-colors"
              >
                <span className="font-serif text-lg">{faq.question}</span>
                <img src={arrowFaq} alt="" />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
