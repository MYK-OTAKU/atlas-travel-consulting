"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { DEMO_REVIEWS } from "@/lib/constants";

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % DEMO_REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + DEMO_REVIEWS.length) % DEMO_REVIEWS.length
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            <span className="text-gradient">Témoignages</span> Clients
          </h2>
          <p className="text-secondary-medium text-lg leading-relaxed">
            Des clients satisfaits qui témoignent de la qualité de notre
            accompagnement.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

            {/* Review Content */}
            <div className="text-center relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < DEMO_REVIEWS[currentIndex].rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-secondary leading-relaxed mb-8 font-medium italic">
                &ldquo;{DEMO_REVIEWS[currentIndex].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {DEMO_REVIEWS[currentIndex].author.charAt(0)}
                </div>
                <p className="font-heading font-bold text-secondary text-lg">
                  {DEMO_REVIEWS[currentIndex].author}
                </p>
                <p className="text-primary text-sm font-medium">
                  {DEMO_REVIEWS[currentIndex].service}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-secondary hover:text-primary transition-all"
                aria-label="Avis précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {DEMO_REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-primary w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Aller à l'avis ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-secondary hover:text-primary transition-all"
                aria-label="Avis suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/avis"
            className="text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            Voir tous les avis →
          </Link>
        </div>
      </div>
    </section>
  );
}
