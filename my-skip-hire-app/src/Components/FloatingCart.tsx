import { CheckCircle, Truck,Shield, AlertTriangle,  X } from 'lucide-react';
import {  getSkipCapacity } from '../utils/skips_utils';

interface Skip {
  size: string;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface FloatingCartProps {
  selectedSkip: Skip | null;
  onClose: () => void;
  onContinue: () => void;
}

export const FloatingCart = ({ selectedSkip, onClose, onContinue } : FloatingCartProps) => {
  if (!selectedSkip) return null;

  return (
    <div className="fixed top-4 right-4 z-50 w-80 max-w-[calc(100vw-2rem)]">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span className="font-medium">Skip Selected</span>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{selectedSkip.size} Yard Skip</h4>
              <p className="text-sm text-gray-600">{getSkipCapacity(selectedSkip.size)} • {selectedSkip.hire_period_days} days</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">£{selectedSkip.price_before_vat}</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4 text-sm">
            {selectedSkip.allowed_on_road ? (
              <div className="flex items-center space-x-1 text-green-600">
                <Truck size={14} />
                <span>Road OK</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 text-amber-600">
                <AlertTriangle size={14} />
                <span>Private land</span>
              </div>
            )}
            
            {selectedSkip.allows_heavy_waste ? (
              <div className="flex items-center space-x-1 text-green-600">
                <Shield size={14} />
                <span>Heavy waste</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 text-amber-600">
                <AlertTriangle size={14} />
                <span>Light waste</span>
              </div>
            )}
          </div>
          <button 
            onClick={onContinue}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg"
          >
            Continue to Permit Check →
          </button>
        </div>
      </div>
    </div>
  );
};