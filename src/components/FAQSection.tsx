
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Is it safe for toddlers?",
      answer: "Absolutely! Our storytelling dice are made with soft, baby-safe materials and have no small parts that could pose a choking hazard. They're designed specifically for children aged 2 and above."
    },
    {
      question: "How long does delivery take?",
      answer: "We offer free shipping across India with delivery typically taking 3-7 business days. You'll receive a tracking number once your order is dispatched."
    },
    {
      question: "Can I order in bulk for schools?",
      answer: "Yes! We offer special pricing for bulk orders for schools, daycare centers, and educational institutions. Please contact us via WhatsApp to discuss your requirements."
    },
    {
      question: "What age group is this suitable for?",
      answer: "Our storytelling dice are perfect for children aged 2-8 years. They grow with your child, from simple image recognition to complex storytelling as language skills develop."
    },
    {
      question: "How do I clean the dice?",
      answer: "The dice can be easily cleaned with a damp cloth and mild soap. They're made from durable materials that can withstand regular cleaning and play."
    },
    {
      question: "What if my child doesn't like it?",
      answer: "While we're confident your child will love our storytelling dice, if you're not completely satisfied, please contact us within 7 days of delivery and we'll work to make it right."
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Glassmorphic Accordion Container */}
          <div className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-6 shadow-xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-0">
                  <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white/60 transition-colors">
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
