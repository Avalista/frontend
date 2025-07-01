import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import './MetricCard.css';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function MetricCard({ title, value, change, isPositive }: MetricCardProps) {
  const colorClass = change === '0%' ? 'neutral' : (isPositive ? 'positive' : 'negative');
  const Icon = change === '0%' ? Minus : (isPositive ? ArrowUpRight : ArrowDownRight);

  return (
    <div className="metric-card-layout">
      <p className="metric-title">{title}</p>
      <div className="metric-body">
        <p className="metric-value">{value}</p>
        <div className={`metric-change ${colorClass}`}>
          <Icon className="metric-icon" />
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
}