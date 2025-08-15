
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
    <section className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium px-4 sm:px-0">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-card rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-border">
                  <AccordionTrigger className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left hover:no-underline hover:bg-primary/5 transition-colors">
                    <span className="font-bold text-foreground text-base sm:text-lg pr-2">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
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
