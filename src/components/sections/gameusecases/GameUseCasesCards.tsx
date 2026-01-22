"use client";

interface UseCase {
  title: string;
  description: string;
}

interface GameUseCasesCardsProps {
  useCases: UseCase[];
}

export default function GameUseCasesCards({ useCases }: GameUseCasesCardsProps) {
  return (
    <div data-gsap="cards-grid" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {useCases.map((useCase) => (
        <div 
          key={useCase.title} 
          data-gsap="card" 
          className="p-4 md:p-6 rounded-2xl bg-background-card border border-primary-500/20 text-center"
        >
          <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{useCase.title}</h3>
          <p className="text-foreground-muted text-xs md:text-sm">{useCase.description}</p>
        </div>
      ))}
    </div>
  );
}
