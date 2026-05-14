'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToCItem {
  id: string;
  label: string;
}

export default function MobileToC({ items }: { items: ToCItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <div className="lg:hidden mb-10 bg-[#F0EBE1] border border-[#002117]/10 rounded-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-[#002117] font-serif font-semibold transition-colors hover:bg-[#EAE4D9]"
      >
        <div className="flex items-center gap-2.5">
          <List size={18} className="text-[#C5A028]" />
          <span className="text-[1.05rem]">Table of Contents</span>
        </div>
        <div className="bg-white/50 p-1 rounded-full">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ol className="px-5 pb-6 space-y-4 border-t border-[#002117]/5 pt-5 bg-[#F0EBE1]/50">
              {items.map((item, i) => (
                <li key={item.id} className="flex gap-3 items-start group">
                  <span className="font-sans text-[0.8rem] text-[#666] shrink-0 pt-0.5 font-medium">
                    {i + 1}.
                  </span>
                  <h2 className="-mt-1">
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="font-sans text-[0.875rem] text-[#222] hover:text-[#C5A028] transition-colors leading-snug cursor-pointer font-medium"
                    >
                      {item.label}
                    </a>
                  </h2>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
