
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  onClick: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  description, 
  icon, 
  category,
  onClick
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={() => onClick(category)}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="bg-robot-blue bg-opacity-10 rounded-full p-4 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="bg-robot-blue text-white py-3 px-4 text-center">
        <span className="text-sm font-medium">Explorar {title}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
