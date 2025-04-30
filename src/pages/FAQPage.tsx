
import React from 'react';
import Header from '@/components/Header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What services does Galaxy ITT provide?",
      answer: "Galaxy ITT provides a comprehensive range of IT services including IT consulting, cloud solutions, software development, cybersecurity, network installations, and digital transformation services tailored to meet the specific needs of businesses and government organizations."
    },
    {
      question: "How can I request a quote for services?",
      answer: "You can request a quote by filling out the contact form on our website, sending an email to info@galaxyitt.com.ng, or calling us directly at 08039600006. Our team will get back to you within 24 hours to discuss your requirements."
    },
    {
      question: "Does Galaxy ITT work with government agencies?",
      answer: "Yes, Galaxy ITT has extensive experience working with MDAs (Ministries, Departments, and Agencies) to provide reliable internet services, telecommunications, and software solutions tailored to the specific requirements of government operations."
    },
    {
      question: "What areas does Galaxy ITT serve?",
      answer: "Galaxy ITT primarily serves organizations throughout sub-Saharan Africa, with a particular focus on Nigeria. Our headquarters is located in Dutse, Jigawa State, but we serve clients across the region."
    },
    {
      question: "How does Galaxy ITT ensure data security?",
      answer: "We implement industry-standard security protocols and best practices, including encryption, secure access controls, regular security audits, and compliance with relevant data protection regulations to ensure the highest level of data security for our clients."
    },
    {
      question: "What support options are available for existing clients?",
      answer: "Existing clients can access our support through multiple channels including our service desk, phone support, email, and escalation paths for urgent issues. We offer various service level agreements (SLAs) to meet different support needs."
    },
    {
      question: "Can Galaxy ITT provide custom software solutions?",
      answer: "Yes, we specialize in developing custom software solutions tailored to the specific needs of our clients. Our development team works closely with clients to understand their requirements and deliver solutions that address their unique challenges."
    },
    {
      question: "What network installation services does Galaxy ITT provide?",
      answer: "We provide comprehensive network installation services including LAN/WAN setup, wireless network configuration, network security implementation, hardware procurement, cabling, and ongoing network maintenance and monitoring."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342]">
      <Header />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white/10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-white hover:text-[#33C3F0] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white mb-6">Don't see the answer to your question?</p>
            <a 
              href="/contact" 
              className="bg-[#354AA0] hover:bg-[#5971D0] text-white px-6 py-3 rounded-md inline-block transition-colors"
            >
              Contact Our Support Team
            </a>
          </div>
        </div>
      </div>
      
      <footer className="bg-[#1A1F2C] text-white py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQPage;
