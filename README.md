# Next-Shop

This repository contains the source code of a website showcasing a simple e-commerce platform. The project utilizes the latest features of the Next.js framework, including the app router, intercepting and parallel routes, as well as server components. Data is fetched from the Hygraph CMS using GraphQL, with a focus on maximizing the advantages provided by server components.

## Live 🌐

[https://next-shop-gp.vercel.app/](https://next-shop-gp.vercel.app/)

## Some screenshots:

![](/screenshots/home.png?raw=true)

![](/screenshots/category-archive.png?raw=true)

![](/screenshots/search-results.png?raw=true)

![](/screenshots/product.png?raw=true)

![](/screenshots/cart.png?raw=true)

## To do:

- Restore intercepted & parallel cart when Next.js team fix [bugs](https://github.com/vercel/next.js/issues/52591) related to that kind of routes and server actions, etc. OR: Rebuild cart in intercepted & parallel route to only display content of the cart and omit management functionality.
- Integrate with Stripe payment provider.
- Remove expired / abandoned carts from Hygraph CMS (treated as database for carts).
- Refactor project architecture.
- Add units tests.
- Add stories to Storybook.
- Create E2E tests in Playwright.
