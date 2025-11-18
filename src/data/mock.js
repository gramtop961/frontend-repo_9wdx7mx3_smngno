export const categories = ['Pain Relief','Cough & Cold','Vitamins','Diabetes','Heart','Skin Care'];

export const medicines = [
  { id:'m1', name:'Paracetamol 500mg', category:'Pain Relief', price:49, prescription:false },
  { id:'m2', name:'Ibuprofen 200mg', category:'Pain Relief', price:89, prescription:false },
  { id:'m3', name:'Amoxicillin 250mg', category:'Antibiotic', price:129, prescription:true },
  { id:'m4', name:'Vitamin C 1000mg', category:'Vitamins', price:199, prescription:false },
  { id:'m5', name:'Metformin 500mg', category:'Diabetes', price:149, prescription:true },
  { id:'m6', name:'Cetirizine 10mg', category:'Cough & Cold', price:59, prescription:false },
];

export const doctors = [
  { id:'d1', name:'Dr. Asha Menon', specialization:'General Physician', experience:12, rating:4.8, fees:499 },
  { id:'d2', name:'Dr. Rohan Gupta', specialization:'Dermatologist', experience:9, rating:4.6, fees:599 },
  { id:'d3', name:'Dr. Kavita Iyer', specialization:'Cardiologist', experience:15, rating:4.9, fees:999 },
];

export const consultations = [
  { id:'c1', doctorId:'d1', type:'video', date:'2025-11-22', time:'10:30', patient:'You', status:'scheduled' },
];

export const orders = [
  { id:'o1', items:[{id:'m1', qty:1}], total:49, status:'packed', placedAt:'2025-11-17' },
];

export const prescriptions = [
  { id:'p1', doctorId:'d1', patient:'You', createdAt:'2025-11-18', medicines:[{ name:'Paracetamol 500mg', dosage:'1 tab • 3/day • 5 days' }] }
];
