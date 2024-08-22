import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const AntonOsika = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Anton Osika</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <img 
          src="https://pbs.twimg.com/profile_images/1613545380702760960/cZZjWwbA_400x400.jpg" 
          alt="Anton Osika" 
          className="w-32 h-32 rounded-full mx-auto mb-4 mx-auto object-cover"
        />
        <p className="mb-4 text-lg">
          Anton Osika is a prominent researcher, entrepreneur, and thought leader in the field of artificial intelligence and machine learning. He is known for his innovative work and contributions to AI safety and ethics.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Key Information:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Co-founder and CEO of Anthropic, an AI research company focused on building beneficial AI systems</li>
          <li>Former researcher at OpenAI, where he worked on advanced language models and AI alignment</li>
          <li>Advocate for responsible AI development and deployment</li>
          <li>Holds a degree in Physics from Stanford University</li>
          <li>Frequent speaker at AI conferences and events</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Notable Achievements:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Led the development of Constitutional AI, a novel approach to aligning AI systems with human values</li>
          <li>Co-authored influential papers on AI safety and ethics</li>
          <li>Raised significant funding for Anthropic to advance AI research</li>
          <li>Contributed to the development of large language models like GPT-3 during his time at OpenAI</li>
        </ul>
        <Button variant="outline" className="mt-4">
          <ExternalLink className="mr-2 h-4 w-4" />
          <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer">
            Follow Anton on Twitter
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AntonOsika;