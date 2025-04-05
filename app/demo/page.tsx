"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'staff_01',
    name: 'Sophie',
    role: 'manager',
    avatar: 'SM',
    color: '#1A2A40'
  },
  {
    id: 'staff_02',
    name: 'Thomas',
    role: 'serveur',
    avatar: 'TD',
    color: '#D47D5A'
  },
  {
    id: 'staff_03',
    name: 'Julie',
    role: 'serveur',
    avatar: 'JL',
    color: '#D47D5A'
  },
  {
    id: 'staff_04',
    name: 'Marc',
    role: 'cuisine',
    avatar: 'MC',
    color: '#87A28F'
  },
  {
    id: 'staff_05',
    name: 'Ahmed',
    role: 'cuisine',
    avatar: 'AB',
    color: '#87A28F'
  }
];

const TeamMemberRow = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-[#1A2A40]/10">
      <div className="w-1/3 min-h-[60px] flex justify-end">
      </div>

      <div className="flex-shrink-0">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium"
          style={{ backgroundColor: member.color }}
        >
          {member.avatar}
        </div>
      </div>

      <div className="w-1/3 min-h-[60px]">
      </div>
    </div>
  );
};

export default function Demo() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A2A40]">
      <Header />
      
      <main className="px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
            Essayez Sotto maintenant !
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-2">
              {TEAM_MEMBERS.map(member => (
                <TeamMemberRow key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
