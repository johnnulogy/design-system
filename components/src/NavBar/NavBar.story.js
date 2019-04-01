import React from "react";
import { storiesOf } from "@storybook/react";
import { NavBar } from "ComponentsRoot";

const primaryMenu = [
  {
    name: "Dashboard",
    subMenuItems: [
      { name: "Customers", description: "description", href: "/" },
      { name: "Invoices", description: "description", href: "/" },
      { name: "Projects", description: "description", href: "/" },
      { name: "Items", description: "description", href: "/" },
      { name: "Vendors", description: "description", href: "/" },
      { name: "Carriers", description: "description", href: "/" },
    ],
  },
  {
    name: "Inspector",
    subMenuItems: [
      { name: "Integration", description: "description", href: "/" },
      { name: "Site configuration", description: "description", href: "/" },
      { name: "Company configuration", description: "description", href: "/" },
    ],
  },
  {
    name: "Reports",
    subMenuItems: [
      { name: "Production", description: "description", href: "/" },
      { name: "Item cart", description: "description", href: "/" },
      { name: "Inventory", description: "description", href: "/" },
    ],
  },
  {
    name: "Sheets",
    subMenuItems: [
      { name: "Item locator", description: "description", href: "/" },
      { name: "Ship orders", description: "description", href: "/" },
    ],
  },
  { name: "Link", href: "/" },
];

const secondaryMenu = [
  {
    name: "User",
    subMenuItems: [
      { name: "Profile", description: "description", href: "/" },
      { name: "Preferences", description: "description", href: "/" },
      { name: "Logout", description: "description", href: "/" },
    ],
  },
  {
    name: "Settings",
    subMenuItems: [
      { name: "Permissions", description: "description", href: "/" },
      { name: "Manage account", description: "description", href: "/" },
    ],
  },
];

const search = {
  onSubmit: () => {},
};

storiesOf("NavBar", module)
  .add("NavBar", () => (
    <NavBar menuData={ { primaryMenu, secondaryMenu, search } } />
  ))
  .add("Without search", () => (
    <NavBar menuData={ { primaryMenu, secondaryMenu } } />
  ))
  .add("Without secondary menu", () => (
    <NavBar menuData={ { primaryMenu, search } } />
  ))
  .add("Without search and secondary menu", () => (
    <NavBar menuData={ { primaryMenu } } />
  ))
  .add("Without search and primary menu", () => (
    <NavBar menuData={ { secondaryMenu } } />
  ))
  .add("With branding only", () => (
    <NavBar menuData={ {} } />
  ));
