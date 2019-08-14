describe("Tabs", () => {
  //behavior tests
  it("renders tab components", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab1").should("have.text", "Tab 1");
  });

  it("selects the tab that is clicked", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab1")
      .should("have.attr", "aria-selected", "false")
      .click()
      .should("have.attr", "aria-selected", "true");
  });

  it("moves focus to the tab that is clicked", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab1").click();

    cy.focused().should("have.text", "Tab 1");
  });

  it("opens tab content when the tab is clicked", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab1").click();

    cy.get(".TabContent[aria-hidden=false]").should(
      "have.text",
      "Tab 1 Content"
    );
  });

  //focus
  it("moves to the next tab when right arrow key is pressed", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab1")
      .click()
      .type("{rightarrow}");

    cy.focused().should("have.text", "Tab 2");
  });

  it("moves to the previous tab whenleft arrow key is pressed", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab2")
      .click()
      .type("{leftarrow}");

    cy.focused().should("have.text", "Tab 1");
  });

  it("moves to the first tab when right arrow key is pressed on last tab", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab4")
      .click()
      .type("{rightarrow}");

    cy.focused().should("have.text", "Tab 1");
  });

  it("moves to the last tab when left arrow key is pressed on first tab", () => {
    cy.renderFromStorybook("tabs--base");

    cy.get(".Tab1")
      .click()
      .type("{leftarrow}");

    cy.focused().should("have.text", "Tab 4");
  });
});
