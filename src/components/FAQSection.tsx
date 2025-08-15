
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
    <section className="py-24 relative bg-gradient-to-b from-white via-shiny-blue-50/20 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-shiny-blue-700 to-shiny-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-shiny-blue-100">
                  <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-shiny-blue-50/50 transition-colors">
                    <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-slate-600 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
