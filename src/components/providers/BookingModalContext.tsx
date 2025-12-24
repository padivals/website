"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ReservationData {
  from: Date | undefined;
  to: Date | undefined;
  adults: number;
  children: number;
}

interface BookingModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  reservationData: ReservationData;
  setReservationData: (data: ReservationData) => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reservationData, setReservationData] = useState<ReservationData>({
    from: undefined,
    to: undefined,
    adults: 1,
    children: 0,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal, reservationData, setReservationData }}>
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
};
