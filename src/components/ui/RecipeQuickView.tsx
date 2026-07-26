"use client";

import Image from "next/image";
import { Clock3, Soup, X } from "lucide-react";
import { Recipe } from "@/types/recipe";

interface RecipeQuickViewProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export function RecipeQuickView({ recipe, onClose }: Readonly<RecipeQuickViewProps>) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-end justify-center bg-[rgba(18,53,36,0.42)] p-4 sm:items-center sm:p-6">
      <div className="card-surface relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-[var(--cream)]">
        <button
          type="button"
          onClick={onClose}
          className="focus-ring absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/90"
          aria-label="Close recipe details"
        >
          <X size={18} />
        </button>

        <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="bg-[linear-gradient(150deg,#234533,#173624)] p-6 text-[var(--cream)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">Recipe</p>
            <h3 className="mt-3 font-[var(--font-heading)] text-4xl leading-[0.95]">{recipe.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[rgba(255,250,240,0.76)]">{recipe.summary}</p>

            <div className="relative mt-6 overflow-hidden rounded-[24px] bg-[rgba(255,250,240,0.08)] p-4">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 70vw, 26vw"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-[22px] bg-white/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--accent-soft)]">
                  <Soup size={16} />
                  Main Ingredient
                </div>
                <p className="mt-2 text-sm text-[var(--cream)]">{recipe.heroIngredient}</p>
              </div>
              <div className="rounded-[22px] bg-white/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--accent-soft)]">
                  <Clock3 size={16} />
                  Time & Yield
                </div>
                <p className="mt-2 text-sm text-[var(--cream)]">{recipe.cookTime} • {recipe.serves}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">Ingredients</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>• {ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">Method</p>
                <ol className="mt-3 space-y-3 text-sm leading-6 text-[var(--foreground)]">
                  {recipe.steps.map((step, index) => (
                    <li key={step}>
                      <span className="font-semibold text-[var(--earth)]">{index + 1}. </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
