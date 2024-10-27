import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import type { JSX } from "react";
import { Heading } from "@/components/ui/Heading/Heading";

const components = {
  h1: (props: JSX.IntrinsicElements["h2"]) => (
    <Heading as="h1" size="xl">
      {props.children}
    </Heading>
  ),
  h2: (props: JSX.IntrinsicElements["h2"]) => (
    <Heading as="h2" size="xl">
      {props.children}
    </Heading>
  ),
  h3: (props: JSX.IntrinsicElements["h3"]) => (
    <Heading as="h3" size="xl">
      {props.children}
    </Heading>
  ),
  h4: (props: JSX.IntrinsicElements["h4"]) => (
    <Heading as="h4" size="xl">
      {props.children}
    </Heading>
  ),
  h5: (props: JSX.IntrinsicElements["h5"]) => (
    <Heading as="h5" size="xl">
      {props.children}
    </Heading>
  ),
  h6: (props: JSX.IntrinsicElements["h6"]) => (
    <Heading as="h6" size="xl">
      {props.children}
    </Heading>
  ),
} satisfies MDXComponents;

export const MDXContent = (props: MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};
