# Next-Shop

This repository contains the source code of the website showcasing a simple e-commerce platform. The project utilizes the latest features of the Next.js framework, including the app router, intercepting and parallel routes, server components as well as server actions. Data is fetched from the Hygraph CMS using GraphQL, with a focus on maximizing the advantages provided by server components.

## Live 🌐

[https://next-shop-gp.vercel.app/](https://next-shop-gp.vercel.app/)

## Storybook docs:

[https://next-shop-gp-storybook.vercel.app/](https://next-shop-gp-storybook.vercel.app/)

## Features

- Shopping cart stored in a database - this enhances the conversion rate and enables the shop owner to analyze users' shopping choices, especially in situations when they abandon their carts.
- Optimistic updates of cart item quantity enhance the user experience even further, making it feel more natural. Users don't have to wait for changes to be saved on the server to proceed with their actions.
- Automatically generated OG images for each product using API route from Next.js for better SEO.
- Search form which allows to quickly find an interesting product.
- A fully responsive and mobile-first layout with themes tailored to user preferences, including colors, animations.
- The use of HTTP streaming (Suspense) that enables users to interact with the page while other parts of the web page are being downloaded from the server in the background.
- To execute mutations on database used server actions which simplify whole process and does not require special endpoints to operate.
- Fully type-safe queries thanks to [GraphQL Code Generator](https://the-guild.dev/graphql/codegen).
- Automatically remove expired carts from database using Vercel cron.
- Integration with Stripe payment provider.

## Performance results 📈

![](/screenshots/lighthouse-mobile.png?raw=true "lighthouse mobile")

![](/screenshots/lighthouse-desktop.png?raw=true "lighthouse desktop")

## Some screenshots:

![](/screenshots/home.png?raw=true)

![](/screenshots/category-archive.png?raw=true)

![](/screenshots/search-results.png?raw=true)

![](/screenshots/product.png?raw=true)

![](/screenshots/cart.png?raw=true)

![](/screenshots/page.png?raw=true)

## To do:

- Restore intercepted & parallel cart when Next.js team fix [bugs](https://github.com/vercel/next.js/issues/52591) related to that kind of routes and server actions, etc. OR: Rebuild cart in intercepted & parallel route to only display content of the cart and omit management functionality.
- Refactor project architecture.
- Add units tests.
- Create E2E tests in Playwright.
- Internationalization.
- Contact form.
