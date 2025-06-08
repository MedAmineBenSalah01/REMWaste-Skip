import { useState, useEffect } from 'react';
import {  MapPin } from 'lucide-react';
import {fetchSkipsByLocation}  from "../utils/getSkips"
import {scrollToElement} from "../utils/skips_utils"
import {ProgressStep} from "../Components/ProgressStep"
import { SkipCard } from '../Components/SkipCard';
import {FloatingCart} from "../Components/FloatingCart"
import { LoadingSpinner } from '../Components/LoadingSpinner';
import {ErrorMessage} from "../Components/ErrorMessage"

interface Skip {
  id:string;
  size: string;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}


export const SkipHirePage = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [skips, setSkips] = useState<Skip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [postcode] = useState('NR32');
  const [area] = useState('Lowestoft');
  const [currentStep] = useState(3);

  
  const fetchSkips = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchSkipsByLocation(postcode, area);
      setSkips(data);
    } catch (err) {
      setError('Failed to load skip options. Please try again.');
      console.error('Error fetching skips:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSkips();
  }, [postcode, area]);

  const handleContinue = () => {
    scrollToElement('.bottom-navigation');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchSkips} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center space-x-4 mb-6">
              <MapPin className="text-blue-600" size={24} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Skip Hire - {area}</h1>
                <p className="text-gray-600">Postcode: {postcode}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 lg:gap-12">
              <ProgressStep isActive={currentStep == 1} step={1} title="Postcode" isCompleted={currentStep > 1} />
              <ProgressStep isActive={currentStep == 2} step={2} title="Waste Type" isCompleted={currentStep > 2} />
              <ProgressStep step={3} title="Select Skip" isActive={currentStep == 3} isCompleted={currentStep > 3}  />
              <ProgressStep isActive={currentStep == 4} step={4} title="Permit Check"  isCompleted={currentStep > 4}/>
              <ProgressStep isActive={currentStep == 5} step={5} title="Choose Date" isCompleted={currentStep > 5 } />
              <ProgressStep isActive={currentStep == 6} step={6} title="Payment" isCompleted={currentStep > 6} />
            </div>
          </div>
        </div>
      </div>
      <FloatingCart 
        selectedSkip={selectedSkip}
        onClose={() => setSelectedSkip(null)}
        onContinue={handleContinue}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Skip Size</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           Select the skip size that best suits your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={setSelectedSkip}
            />
          ))}
        </div>
        <div className="bottom-navigation flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 bg-white rounded-2xl p-6 shadow-lg">
          <button className="w-full sm:w-auto px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Back to Waste Type
          </button>
          {selectedSkip ? (
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg">
              Continue to Permit Check →
            </button>
          ) : (
            <div className="text-gray-500 text-sm">
              Please select a skip size to continue
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkipHirePage;