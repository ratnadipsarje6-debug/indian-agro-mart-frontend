// Product data used to render the featured products grid.
// Each product has a name, price and an associated image imported from the assets folder.

import chaffS1 from '../assets/chaff_s1.jpg';
import chaffS2 from '../assets/chaff_s2.jpg';
import chaffS3 from '../assets/chaff_s3.jpg';
import chaffS4 from '../assets/chaff_s4.jpg';
import tokenMachine from '../assets/token_machine.jpg';
import sprayPump from '../assets/spray_pump.jpg';
import batteryUnit from '../assets/battery_unit.jpg';
import attaChakki from '../assets/atta_chakki.jpg';
import cowMat from '../assets/cow_mat.jpg';
import milking19000 from '../assets/milking_19000.jpg';
import milking21000 from '../assets/milking_21000.jpg';
import milking26000 from '../assets/milking_26000.jpg';

export const products = [
  {
    id: 'chaff-s1',
    name: 'Chaff Cutter S1',
    price: '₹22,000',
    image: chaffS1,
    usage: 'Animal fodder cutting',
    capacity: 'Small dairy farm use',
    warranty: 'As per supplier',
    description: 'Small size chaff cutter suitable for small dairy farms.',
  },
  {
    id: 'chaff-s2',
    name: 'Chaff Cutter S2',
    price: '₹18,000',
    image: chaffS2,
    usage: 'Regular cattle feed cutting',
    capacity: 'Medium capacity',
    warranty: 'As per supplier',
    description: 'Medium capacity chaff cutter for regular cattle feed cutting.',
  },
  {
    id: 'chaff-s3',
    name: 'Chaff Cutter S3',
    price: '₹15,000',
    image: chaffS3,
    usage: 'Basic fodder cutting',
    capacity: 'Affordable farm use',
    warranty: 'As per supplier',
    description: 'Affordable chaff cutter machine with efficient performance.',
  },
  {
    id: 'chaff-s4',
    name: 'Chaff Cutter S4',
    price: '₹19,000',
    image: chaffS4,
    usage: 'Commercial fodder cutting',
    capacity: 'Heavy-duty use',
    warranty: 'As per supplier',
    description: 'High speed heavy-duty chaff cutter for commercial dairy farms.',
  },
  {
    id: 'token-machine',
    name: 'Token Machine',
    price: '₹4,500',
    image: tokenMachine,
    usage: 'Seed/farming token work',
    capacity: 'Portable field use',
    warranty: 'As per supplier',
    description: 'Portable token machine for farming use.',
  },
  {
    id: 'spray-pump',
    name: 'Spray Pump',
    price: '₹1,800',
    image: sprayPump,
    usage: 'Pesticide and fertilizer spraying',
    capacity: 'Portable sprayer',
    warranty: 'As per supplier',
    description: 'Efficient spray pump for agricultural use.',
  },
  {
    id: 'battery-unit',
    name: 'Battery Unit',
    price: '₹599',
    image: batteryUnit,
    usage: 'Battery-operated agriculture tools',
    capacity: 'Standard portable battery unit',
    warranty: 'No warranty / As per supplier',
    description: 'Reliable battery unit for agricultural applications.',
  },
  {
    id: 'atta-chakki',
    name: 'Atta Chakki Machine',
    price: '₹8,499',
    image: attaChakki,
    usage: 'Flour processing',
    capacity: 'Home and small business use',
    warranty: 'As per supplier',
    description: 'High-quality atta chakki machine for flour processing.',
  },
  {
    id: 'cow-mat',
    name: 'Cow Mat',
    price: '₹1,600 - ₹2,000',
    image: cowMat,
    usage: 'Dairy cattle comfort',
    capacity: 'Single cow mat',
    warranty: 'As per supplier',
    description: 'Comfortable and durable mat for dairy cattle.',
  },
  {
    id: 'milking-19000',
    name: 'Milking Machine Basic',
    price: '₹19,000',
    image: milking19000,
    usage: 'Cow/buffalo milk collection',
    capacity: 'Small dairy farms',
    warranty: 'As per supplier',
    description: 'Single bucket milking machine suitable for small dairy farms.',
  },
  {
    id: 'milking-21000',
    name: 'Milking Machine Advanced',
    price: '₹21,000',
    image: milking21000,
    usage: 'Daily dairy milking',
    capacity: 'Medium dairy farms',
    warranty: 'As per supplier',
    description: 'Advanced milking machine with better suction performance and durability.',
  },
  {
    id: 'milking-26000',
    name: 'Milking Machine Commercial',
    price: '₹26,000',
    image: milking26000,
    usage: 'Commercial dairy milking',
    capacity: 'Large dairy operations',
    warranty: 'As per supplier',
    description: 'Heavy-duty commercial milking machine for large dairy operations.',
  },
];