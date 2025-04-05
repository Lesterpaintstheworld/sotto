import { motion } from 'framer-motion';
import { useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Table {
  id: string;
  number: string;
  position: Position;
  size: number;
  zone: string;
  status: 'libre' | 'occupee' | 'reservee' | 'sale';
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  position: Position;
}

// Configuration statique du restaurant
const TABLES: Table[] = [
  // Salle principale - Tables rondes
  { id: 'table_01', number: '1', position: { x: 120, y: 120 }, size: 4, zone: 'salle', status: 'libre' },
  { id: 'table_02', number: '2', position: { x: 120, y: 250 }, size: 4, zone: 'salle', status: 'libre' },
  { id: 'table_03', number: '3', position: { x: 250, y: 120 }, size: 2, zone: 'salle', status: 'libre' },
  { id: 'table_04', number: '4', position: { x: 250, y: 250 }, size: 6, zone: 'salle', status: 'libre' },
  // Salle principale - Tables carrées contre le mur
  { id: 'table_05', number: '5', position: { x: 380, y: 100 }, size: 4, zone: 'salle', status: 'libre' },
  { id: 'table_06', number: '6', position: { x: 380, y: 180 }, size: 2, zone: 'salle', status: 'libre' },
  { id: 'table_07', number: '7', position: { x: 380, y: 260 }, size: 2, zone: 'salle', status: 'libre' },
  // Terrasse
  { id: 'table_t1', number: 'T1', position: { x: 580, y: 100 }, size: 4, zone: 'terrasse', status: 'libre' },
  { id: 'table_t2', number: 'T2', position: { x: 580, y: 200 }, size: 4, zone: 'terrasse', status: 'libre' },
  { id: 'table_t3', number: 'T3', position: { x: 580, y: 300 }, size: 4, zone: 'terrasse', status: 'libre' },
];

const INITIAL_STAFF: StaffMember[] = [
  { id: 'staff_01', name: 'Sophie', role: 'manager', position: { x: 300, y: 300 } },
  { id: 'staff_02', name: 'Thomas', role: 'serveur', position: { x: 100, y: 300 } },
  { id: 'staff_03', name: 'Julie', role: 'serveur', position: { x: 200, y: 300 } },
  { id: 'staff_04', name: 'Marc', role: 'cuisine', position: { x: 700, y: 100 } },
  { id: 'staff_05', name: 'Ahmed', role: 'cuisine', position: { x: 700, y: 200 } },
];

const Table: React.FC<Table> = ({ number, position, size, status }) => {
  const isSquare = number.startsWith('5') || number.startsWith('6') || number.startsWith('7');
  const dimension = size * 12; // Augmentation légère de la taille

  return (
    <div 
      className={`absolute ${isSquare ? 'rounded-md' : 'rounded-full'} border-2 border-[#1A2A40] 
        ${status === 'occupee' ? 'bg-[#D47D5A]/20 border-[#D47D5A]' : 
          status === 'sale' ? 'bg-[#1A2A40]/20 border-[#1A2A40]' : 
          status === 'reservee' ? 'bg-[#87A28F]/20 border-[#87A28F]' : 
          'bg-white'}`}
      style={{
        left: position.x,
        top: position.y,
        width: isSquare ? dimension * 1.2 : dimension,
        height: isSquare ? dimension * 0.8 : dimension,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
        {number}
      </span>
      {/* Ajout des chaises */}
      {!isSquare && Array.from({ length: size }).map((_, i) => {
        const angle = (i * 360) / size;
        const radius = dimension / 2 + 10;
        return (
          <div
            key={i}
            className="absolute w-3 h-3 bg-[#1A2A40]/40 rounded-sm"
            style={{
              left: `50%`,
              top: `50%`,
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${radius}px)`
            }}
          />
        );
      })}
      {/* Chaises pour tables carrées */}
      {isSquare && (
        <>
          <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#1A2A40]/40 rounded-sm" />
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#1A2A40]/40 rounded-sm" />
        </>
      )}
    </div>
  );
};

const StaffMember: React.FC<StaffMember> = ({ name, role, position }) => {
  return (
    <motion.div
      className={`absolute flex items-center justify-center w-8 h-8 rounded-full text-white text-xs ${
        role === 'manager' ? 'bg-[#1A2A40]' :
        role === 'serveur' ? 'bg-[#D47D5A]' :
        'bg-[#87A28F]'
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {name[0]}
    </motion.div>
  );
};

export const RestaurantVisualization: React.FC = () => {
  const [tables, setTables] = useState<Table[]>(TABLES);
  const [staff, setStaff] = useState<StaffMember[]>(INITIAL_STAFF);
  
  return (
    <div className="relative w-full h-[600px] bg-[#F5F5F0] rounded-lg border border-[#1A2A40]/10 overflow-hidden">
      {/* Zones */}
      <div className="absolute inset-0 p-4">
        {/* Salle principale */}
        <div className="absolute left-0 top-0 w-[450px] h-[400px] border border-dashed border-[#1A2A40]/20 rounded-lg bg-white/50">
          <span className="absolute top-2 left-2 text-sm text-[#1A2A40]/60">
            Salle principale
          </span>
        </div>
        
        {/* Terrasse */}
        <div className="absolute left-[500px] top-0 w-[200px] h-[400px] border border-dashed border-[#1A2A40]/20 rounded-lg bg-[#87A28F]/5">
          <span className="absolute top-2 left-2 text-sm text-[#1A2A40]/60">
            Terrasse
          </span>
        </div>
        
        {/* Cuisine */}
        <div className="absolute right-0 top-0 w-[150px] h-[400px] bg-[#1A2A40]/5 rounded-lg">
          <span className="absolute top-2 left-2 text-sm text-[#1A2A40]/60">
            Cuisine
          </span>
          {/* Éléments de cuisine */}
          <div className="absolute inset-4 top-8 grid grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#1A2A40]/10 rounded-sm h-8" />
            ))}
          </div>
        </div>
      </div>

      {/* Tables */}
      {tables.map(table => (
        <Table key={table.id} {...table} />
      ))}

      {/* Personnel */}
      {staff.map(member => (
        <StaffMember key={member.id} {...member} />
      ))}
    </div>
  );
};
