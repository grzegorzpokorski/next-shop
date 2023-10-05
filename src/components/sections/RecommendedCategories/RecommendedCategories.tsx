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
                fullWidth={false}
                priority={idx < 4}
              />
            );
          })}
        <CategoryBanner
          link={`/categories`}
          title="wszystkie kategorie"
          thumbnail={{
            url: "/images/hero.png",
            width: 1080,
            height: 1080,
            alt: "kalawiatura i mysz komputerowa",
          }}
          fullWidth={categories.length % 2 === 0}
        />
      </div>
    </Container>
  );
};
