
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childAge: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      toast({
        title: "Thanks for RSVPing!",
        description: "We'll contact you soon with more information.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        childAge: '',
        message: ''
      });
      
      // Reset success message after some time
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  
  return (
    <section id="rsvp-form" className="py-16 bg-gradient-to-b from-white to-zans-lightpink/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RSVP for Early Access</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Be among the first to get your hands on our Soft Storytelling Dice and receive special launch offers.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Thanks for RSVPing!</h3>
              <p className="text-gray-600">We'll contact you soon with more information.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">Child's Age</label>
                <Input
                  id="childAge"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 3 years"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any questions or comments?"
                  className="w-full"
                  rows={3}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-zans-pink hover:bg-zans-pink/80 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
