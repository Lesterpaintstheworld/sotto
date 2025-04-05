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
  // Salle principale
  { id: 'table_01', number: '1', position: { x: 100, y: 100 }, size: 4, zone: 'salle', status: 'libre' },
  { id: 'table_02', number: '2', position: { x: 100, y: 200 }, size: 4, zone: 'salle', status: 'libre' },
  { id: 'table_03', number: '3', position: { x: 200, y: 100 }, size: 2, zone: 'salle', status: 'libre' },
  { id: 'table_04', number: '4', position: { x: 200, y: 200 }, size: 6, zone: 'salle', status: 'libre' },
  { id: 'table_05', number: '5', position: { x: 300, y: 100 }, size: 4, zone: 'salle', status: 'libre' },
  { id: 'table_06', number: '6', position: { x: 300, y: 200 }, size: 2, zone: 'salle', status: 'libre' },
  { id: 'table_07', number: '7', position: { x: 400, y: 100 }, size: 2, zone: 'salle', status: 'libre' },
  // Terrasse
  { id: 'table_t1', number: 'T1', position: { x: 500, y: 100 }, size: 4, zone: 'terrasse', status: 'libre' },
  { id: 'table_t2', number: 'T2', position: { x: 500, y: 200 }, size: 4, zone: 'terrasse', status: 'libre' },
  { id: 'table_t3', number: 'T3', position: { x: 600, y: 100 }, size: 4, zone: 'terrasse', status: 'libre' },
];

const INITIAL_STAFF: StaffMember[] = [
  { id: 'staff_01', name: 'Sophie', role: 'manager', position: { x: 300, y: 300 } },
  { id: 'staff_02', name: 'Thomas', role: 'serveur', position: { x: 100, y: 300 } },
  { id: 'staff_03', name: 'Julie', role: 'serveur', position: { x: 200, y: 300 } },
  { id: 'staff_04', name: 'Marc', role: 'cuisine', position: { x: 700, y: 100 } },
  { id: 'staff_05', name: 'Ahmed', role: 'cuisine', position: { x: 700, y: 200 } },
];

const Table: React.FC<Table> = ({ number, position, size, status }) => {
  const dimension = size * 10; // Taille de la table basée sur sa capacité
  
  return (
    <div 
      className={`absolute rounded-full border-2 border-[#1A2A40] ${
        status === 'occupee' ? 'bg-[#D47D5A]/20' : 
        status === 'sale' ? 'bg-[#1A2A40]/20' : 
        status === 'reservee' ? 'bg-[#87A28F]/20' : 
        'bg-white'
      }`}
      style={{
        left: position.x,
        top: position.y,
        width: dimension,
        height: dimension,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
        {number}
      </span>
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
        <div className="absolute left-0 top-0 w-[450px] h-[400px] border border-dashed border-[#1A2A40]/20 rounded-lg">
          <span className="absolute top-2 left-2 text-sm text-[#1A2A40]/60">
            Salle principale
          </span>
        </div>
        
        {/* Terrasse */}
        <div className="absolute left-[470px] top-0 w-[200px] h-[400px] border border-dashed border-[#1A2A40]/20 rounded-lg">
          <span className="absolute top-2 left-2 text-sm text-[#1A2A40]/60">
            Terrasse
          </span>
        </div>
        
        {/* Cuisine */}
        <div className="absolute right-0 top-0 w-[150px] h-[400px] bg-[#1A2A40]/5 rounded-lg">
          <span className="absolute top-2 left-2 text-sm text-[#1A2A40]/60">
            Cuisine
          </span>
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
