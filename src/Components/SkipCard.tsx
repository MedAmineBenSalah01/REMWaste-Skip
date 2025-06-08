import { CheckCircle, Truck, Calendar,  Shield, AlertTriangle } from 'lucide-react';
import {  getSkipCapacity } from '../utils/skips_utils';


interface Skip {
  size: string;
  price_before_vat: number;
  vat: number;
  hire_period_days: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  transport_cost?: number;
}

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

export const SkipCard = ({ skip, isSelected, onSelect } : SkipCardProps) => {
  const totalPrice = skip.price_before_vat;
  const capacity = getSkipCapacity(skip.size);
  
  return (
    <div 
      className={`relative bg-white rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
        isSelected ? 'border-blue-500 shadow-xl ring-4 ring-blue-100' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect(skip)}
    >
      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-blue-500 text-white rounded-full p-2 shadow-lg">
          <CheckCircle size={20} />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{skip.size} Yard Skip</h3>
            <p className="text-gray-600 text-sm">{capacity} capacity</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">£{totalPrice}</div>
            <div className="text-sm text-gray-500">{skip.hire_period_days} days hire</div>
          </div>
        </div>

        <div className="space-y-3 mb-6 min-h-[120px]">
          <div className="flex items-center space-x-2">
            <Calendar size={16} className="text-gray-400" />
            <span className="text-sm text-gray-600">{skip.hire_period_days} day hire period</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {skip.allowed_on_road ? (
              <>
                <Truck size={16} className="text-green-500" />
                <span className="text-sm text-green-600">Road placement allowed</span>
              </>
            ) : (
              <>
                <AlertTriangle size={16} className="text-amber-500" />
                <span className="text-sm text-amber-600">Private land only</span>
              </>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {skip.allows_heavy_waste ? (
              <>
                <Shield size={16} className="text-green-500" />
                <span className="text-sm text-green-600">Heavy waste accepted</span>
              </>
            ) : (
              <>
                <AlertTriangle size={16} className="text-amber-500" />
                <span className="text-sm text-amber-600">Light waste only</span>
              </>
            )}
          </div>

          {skip.transport_cost && (
            <div className="flex items-center space-x-2">
              <Truck size={16} className="text-blue-500" />
              <span className="text-sm text-blue-600">Transport: £{skip.transport_cost}</span>
            </div>
          )}
        </div>

        <button
          className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
            isSelected 
              ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};