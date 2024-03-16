import Advertisement from '../components/Advertisement';
import BestSeller from './BestSeller';
import NewArrival from './NewArrival';

export const widgets = [
  {
    id: 0,
    value: 'advertisement',
    component: <Advertisement />,
    isShown: true,
    title: '',
  },
  {
    id: 1,
    value: 'newarrival',
    component: <NewArrival />,
    isShown: true,
    title: 'New Arrival',
  },
  {
    id: 2,
    value: 'bestsellers',
    component: <BestSeller />,
    isShown: true,
    title: 'Best Sellers',
  },
];
