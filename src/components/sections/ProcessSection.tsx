import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Local AC/HVAC Step Images
import coolStep1 from "@/assets/Process — HVAC & Cooling/step-1 (1).jpeg";
import coolStep2 from "@/assets/Process — HVAC & Cooling/step-2 (1).jpeg";
import coolStep3 from "@/assets/Process — HVAC & Cooling/step-3 (1).jpeg";
import coolStep4 from "@/assets/Process — HVAC & Cooling/step-4 (1).jpeg";
import coolStep5 from "@/assets/Process — HVAC & Cooling/step-5 (1).jpeg";

// Local Aluminium & Glass Step Images
import aluStep1 from "@/assets/ProcessAluminium& Glass/step-1 (1).jpeg";
import aluStep2 from "@/assets/ProcessAluminium& Glass/step-2 (1).jpeg";
import aluStep3 from "@/assets/ProcessAluminium& Glass/step-3 (1).jpeg";

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

interface ProcessFlowProps {
  label: string;
  heading: string;
  steps: ProcessStep[];
}

function ProcessFlow({ label, heading, steps }: ProcessFlowProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const totalSteps = steps.length;

    const st = ScrollTrigger.create({
      trigger: trigger,
      start: "top top",
      end: () => `+=${window.innerHeight * (totalSteps - 1)}`,
      pin: section,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const idx = Math.min(
          Math.floor(progress * totalSteps),
          totalSteps - 1
        );
        setActiveStep(idx);
      },
    });

    return () => {
      st.kill();
    };
  }, [steps.length]);

  return (
    <div ref={triggerRef}>
      <div
        ref={sectionRef}
        className="h-screen w-full bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 w-full h-full flex flex-col justify-center py-16 md:py-20">
          {/* Compact Label + Heading */}
          <div className="mb-4 md:mb-8">
            <div className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-gray-400 font-bold mb-2">
              {label}
            </div>
            <h2 className="font-serif text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-2xl">
              {heading}
            </h2>
          </div>

          {/* Process Content: Image Left, Text Right (stacked on mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 items-center flex-1 min-h-0">
            {/* Left: Image */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 h-[30vh] sm:h-[35vh] lg:h-auto lg:aspect-[4/3] lg:max-h-[50vh]">
              {steps.map((step, idx) => (
                <img
                  key={idx}
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
                  style={{
                    opacity: activeStep === idx ? 1 : 0,
                    transform: activeStep === idx ? "scale(1)" : "scale(1.05)",
                  }}
                />
              ))}
            </div>

            {/* Right: Step Text */}
            <div className="flex flex-col">
              <div className="relative h-[140px] sm:h-[160px] md:h-[220px]">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 flex flex-col justify-start transition-all duration-500 ease-out"
                    style={{
                      opacity: activeStep === idx ? 1 : 0,
                      transform:
                        activeStep === idx
                          ? "translateY(0)"
                          : activeStep > idx
                            ? "translateY(-30px)"
                            : "translateY(30px)",
                      pointerEvents: activeStep === idx ? "auto" : "none",
                    }}
                  >
                    {/* Step Number */}
                    <div className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold text-gray-300/80 leading-none select-none">
                      {step.step}
                    </div>
                    <h3 className="font-serif text-base sm:text-lg md:text-2xl font-bold text-gray-900 mt-1 md:mt-2 mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Step Progress Indicator - below text */}
              <div className="flex items-center gap-1.5 md:gap-2 mt-10 md:mt-12">
                {steps.map((_, idx) => (
                  <div
                    key={idx}
                    className="h-1 md:h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: activeStep === idx ? "1.5rem" : "0.4rem",
                      backgroundColor:
                        activeStep === idx ? "#000" : "#d1d5db",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Process Data ─────────────────────────────────────────────

const coolingSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Inspection & Consultation",
    description:
      "Our certified technicians conduct a thorough inspection of your AC, refrigeration, or cooling system — identifying issues and recommending the most effective, cost-efficient solution.",
    image: coolStep1,
  },
  {
    step: "02",
    title: "Diagnosis & Planning",
    description:
      "We perform precision diagnostics using professional-grade tools. A transparent, detailed plan is prepared — covering timeline, parts, labour, and total cost before any work begins.",
    image: coolStep2,
  },
  {
    step: "03",
    title: "Repair & Installation",
    description:
      "Expert technicians execute the repair, servicing, or full system installation with industrial precision — using only OEM-grade parts and following manufacturer specifications.",
    image: coolStep3,
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description:
      "Every system undergoes rigorous performance testing — checking temperature output, airflow, refrigerant levels, and energy efficiency to ensure flawless operation.",
    image: coolStep4,
  },
  {
    step: "05",
    title: "Handover & Warranty",
    description:
      "We deliver the completed system with a full walkthrough, maintenance guide, and warranty documentation — ensuring long-term confidence and peak performance.",
    image: coolStep5,
  },
];

const aluminiumSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Site Survey & Consultation",
    description:
      "Our architectural team visits your site for precise measurements, structural assessment, and detailed consultation — understanding your vision, requirements, and space dynamics.",
    image: aluStep1,
  },
  {
    step: "02",
    title: "Design & Engineering",
    description:
      "Custom blueprints and 3D renderings are prepared using professional CAD software — ensuring every aluminium profile, glass panel, and partition is engineered for structural perfection.",
    image: aluStep2,
  },
  {
    step: "03",
    title: "Fabrication & Manufacturing",
    description:
      "Premium-grade aluminium profiles are precision-cut, powder-coated, and assembled at our fabrication facility — every component manufactured to exact specifications.",
    image: aluStep3,
  },
  {
    step: "04",
    title: "Installation & Fitting",
    description:
      "Our skilled installation crew executes the on-site fitting with architectural precision — mounting aluminium frames, setting glass panels, and sealing every joint to perfection.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=72",
  },
  {
    step: "05",
    title: "Final Inspection & Delivery",
    description:
      "A comprehensive quality inspection ensures flawless alignment, structural integrity, and pristine finish — before final handover with maintenance documentation and full warranty.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=72",
  },
];

// ─── Exported Component ───────────────────────────────────────

export function ProcessSection() {
  return (
    <>
      <ProcessFlow
        label="Process — HVAC & Cooling"
        heading="We follow a clear, reliable process — built for quality, efficiency, and lasting cooling systems."
        steps={coolingSteps}
      />
      <ProcessFlow
        label="Process — Aluminium & Glass"
        heading="Precision-engineered installations — from initial consultation to flawless architectural delivery."
        steps={aluminiumSteps}
      />
    </>
  );
}
