import { CheckCircle } from 'lucide-react';

interface ProgressStepProps {
  step: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

export const ProgressStep = ({ step, title, isActive, isCompleted }: ProgressStepProps) => (
  <div className="flex items-center space-x-3">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
      isCompleted ? 'bg-green-500 text-white' : 
      isActive ? 'bg-blue-600 text-white ring-4 ring-blue-100' : 
      'bg-gray-200 text-gray-600'
    }`}>
      {isCompleted ? <CheckCircle size={16} /> : step}
    </div>
    <span className={`text-sm font-medium ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
      {title}
    </span>
  </div>
);

