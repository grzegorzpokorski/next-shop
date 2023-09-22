import { CategoryBanner } from "@/components/blocks/CategoryBanner/CategoryBanner";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import type { Category } from "@/lib/types";

type Props = {
  categories: Category[];
};

export const RecommendedCategories = ({ categories }: Props) => {
  return (
    <Container as="section">
      <Heading as="h2" hidden>
        Polecene kategorie
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
                fullWidth={
                  categories.length % 2 === 1 && categories.at(-1) == category
                }
                priority={idx < 4}
              />
            );
          })}
      </div>
    </Container>
  );
};
