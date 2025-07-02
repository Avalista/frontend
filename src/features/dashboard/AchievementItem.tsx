import React from 'react';
import { Star } from 'lucide-react';
import './AchievementItem.css';

interface AchievementItemProps {
  name: string;
  achieved: boolean;
}

export function AchievementItem({ name, achieved }: AchievementItemProps) {
  const statusClass = achieved ? 'achieved' : 'locked';

  return (
    <div className={`achievement-item ${statusClass}`}>
      <Star className="achievement-icon" />
      <p className="achievement-name">{name}</p>
    </div>
  );
}