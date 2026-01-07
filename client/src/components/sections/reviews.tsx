import { CONTENT } from "@/lib/constants";
import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            {CONTENT.reviews.title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-green-400 text-green-400" />
              ))}
            </div>
            <span className="font-medium">{CONTENT.reviews.trustpilot}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CONTENT.reviews.items.map((review, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star 
                    key={s} 
                    className={`w-4 h-4 ${s < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-400 text-gray-400"}`} 
                  />
                ))}
              </div>
              <p className="text-lg leading-relaxed italic mb-6 text-gray-200">
                "{review.text}"
              </p>
              <div className="font-bold text-white">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
