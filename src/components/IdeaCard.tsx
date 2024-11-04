import React from 'react';
import { Brain, GitBranch, Star } from 'lucide-react';

interface IdeaCardProps {
  title: string;
  description: string;
  evolution: number;
  agents: number;
  branches: number;
}

export default function IdeaCard({ title, description, evolution, agents, branches }: IdeaCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button className="text-gray-400 hover:text-yellow-500">
            <Star className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Evolution Progress</span>
            <span className="font-medium">{evolution}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${evolution}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Brain className="w-4 h-4" />
            <span>{agents} Agents</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <GitBranch className="w-4 h-4" />
            <span>{branches} Branches</span>
          </div>
        </div>
      </div>
    </div>
  );
}