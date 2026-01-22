"use client";

import GameUseCasesHeader from "./GameUseCasesHeader";
import GameUseCasesCards from "./GameUseCasesCards";

interface UseCase {
  title: string;
  description: string;
}

interface GameUseCasesSectionProps {
  title: string;
  titleGradient: string;
  useCases: UseCase[];
}

export default function GameUseCasesSection({
  title,
  titleGradient,
  useCases,
}: GameUseCasesSectionProps) {
  return (
    <section className="py-12 md:py-24 bg-background-dark">
      <div className="container mx-auto px-4">
        <GameUseCasesHeader 
          title={title}
          titleGradient={titleGradient}
        />
        <GameUseCasesCards useCases={useCases} />
      </div>
    </section>
  );
}
