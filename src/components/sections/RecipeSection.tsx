"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CookingPot } from "lucide-react";
import { recipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RecipeQuickView } from "@/components/ui/RecipeQuickView";
import { Button } from "@/components/ui/Button";

export function RecipeSection() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollRecipes = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    const amount = Math.min(rail.clientWidth * 0.9, 420);
    rail.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth"
    });
  };

  return (
    <section id="recipes" className="full-bleed-section section-spacing section-cream">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Recipe Ideas"
            title="What you can cook with Pure Select"
            description="Browse quick home-style recipe ideas using the same products featured across the Pure Select range."
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollRecipes("left")}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[var(--cream)]"
              aria-label="Scroll recipes left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollRecipes("right")}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--cream)] shadow-[0_14px_28px_rgba(18,53,36,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-soft)]"
              aria-label="Scroll recipes right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-7 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {recipes.map((recipe) => (
            <article
              key={recipe.title}
              className="card-surface flex min-w-[300px] flex-col rounded-[28px] p-5 sm:min-w-[340px] lg:min-w-[360px]"
            >
              <div className="relative overflow-hidden rounded-[22px] bg-[rgba(255,250,240,0.82)] p-3">
                <div className="absolute left-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--foreground)]">
                  <CookingPot size={20} />
                </div>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={recipe.image}
                    alt={recipe.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 70vw, 24vw"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--earth)]">{recipe.heroIngredient}</p>
              <h3 className="mt-2 font-[var(--font-heading)] text-3xl leading-none text-[var(--foreground)]">{recipe.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{recipe.summary}</p>
              <div className="mt-5 flex items-center justify-between gap-3 text-sm text-[var(--muted)]">
                <span>{recipe.cookTime}</span>
                <span>{recipe.serves}</span>
              </div>
              <Button
                onClick={() => setSelectedRecipe(recipe)}
                variant="secondary"
                className="mt-5 w-full"
              >
                View Recipe
              </Button>
            </article>
          ))}
        </div>

        <RecipeQuickView recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      </Container>
    </section>
  );
}
