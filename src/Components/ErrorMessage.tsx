import { AlertTriangle } from 'lucide-react';


interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}


export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-md">
      <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Skips</h3>
      <p className="text-gray-600 mb-4">{message}</p>
      <button 
        onClick={onRetry}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);