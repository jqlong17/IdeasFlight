import React from 'react';
import { Brain, Sparkles, Users, Zap } from 'lucide-react';
import IdeaCard from './components/IdeaCard';
import Header from './components/Header';

function App() {
  const sampleIdeas = [
    {
      id: 1,
      title: "AI-Powered Dream Interpreter",
      description: "An app that uses AI to analyze and visualize dreams, creating meaningful narratives and connections.",
      evolution: 75,
      agents: 3,
      branches: 8,
    },
    {
      id: 2,
      title: "Sustainable City Simulator",
      description: "A platform that simulates future sustainable cities with real environmental data.",
      evolution: 45,
      agents: 5,
      branches: 12,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Ideas Take Flight
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Plant your creative seeds and watch them grow with our AI-powered idea incubator
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto">
              <Sparkles className="w-5 h-5" />
              Submit New Idea
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Brain className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Agents</h3>
            <p className="text-gray-600">Multiple AI agents work 24/7 to evolve and refine your ideas in unexpected ways.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Zap className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapid Evolution</h3>
            <p className="text-gray-600">Watch your ideas transform and mature through continuous AI-driven iteration.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Users className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaborative Growth</h3>
            <p className="text-gray-600">Connect with other creators and merge ideas to spawn unique innovations.</p>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Active Incubations</h2>
            <div className="flex gap-4">
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                <option>Sort by Evolution</option>
                <option>Sort by Recent</option>
                <option>Sort by Popularity</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleIdeas.map(idea => (
              <IdeaCard key={idea.id} {...idea} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;