import { CategoryBanner } from "@/components/blocks/CategoryBanner/CategoryBanner";
import { Heading } from "@/components/ui/Heading/Heading";
import type { Category } from "@/lib/types";

type Props = {
  categories: Category[];
};

export const CategoriesList = ({ categories }: Props) => {
  return (
    <section aria-labelledby="heading-of-section-with-categories">
      <Heading as="h2" id="heading-of-section-with-categories" hidden>
        Lista kategorii
      </Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
        {categories.length > 0 &&
          categories.map((category, idx) => {
            return (
              <CategoryBanner
                key={category.slug}
                link={`/category/${category.slug}`}
                title={category.name}
                thumbnail={category.thumbnail}
                priority={idx < 4}
              />
            );
          })}
      </div>
    </section>
  );
};
