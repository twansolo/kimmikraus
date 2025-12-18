"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (options: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

interface BookingButtonProps {
  duration: "60" | "90";
  label?: string;
  className?: string;
}

const BOOKING_URLS = {
  "60": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1NXNEUmrc26KaRhLI7xZm6aGWfC-6BORTrssm2tNYjArHurq2H_yq0z043lQF-MwXswILN3f7r?gv=true",
  "90": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ01sxy9A9oPjA_qgh94u86JMv7V7mEgiSojys0N4rX6j5mDJHzRFtMk3mgY8lo03Wt9w_B47iTj?gv=true",
};

export function BookingButton({ duration, label, className = "" }: BookingButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadButton = () => {
      if (window.calendar && buttonRef.current) {
        window.calendar.schedulingButton.load({
          url: BOOKING_URLS[duration],
          color: "#EABFA8",
          label: label || `Book ${duration} Min Session`,
          target: buttonRef.current,
        });
      }
    };

    // Check if script is already loaded
    if (window.calendar) {
      loadButton();
    } else {
      // Wait for script to load
      window.addEventListener("load", loadButton);
      // Also try after a short delay in case load already fired
      const timeout = setTimeout(loadButton, 1000);
      return () => {
        window.removeEventListener("load", loadButton);
        clearTimeout(timeout);
      };
    }
  }, [duration, label]);

  return <div ref={buttonRef} className={className} />;
}

export function BookingEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      src="https://calendar.google.com/calendar/appointments/AcZssZ2sLfRCOTX10hnrrS0M8Vlk4Fin_hjPFG5QeVM=?gv=true"
      className={`w-full border-0 rounded-lg ${className}`}
      height="600"
      title="Book an appointment with Kimmi Kraus Massage"
    />
  );
}

