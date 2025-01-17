describe("DropdownMenu", () => {
  const getOpenButton = () => cy.get("[aria-label='Open menu']");
  const getCloseButton = () => cy.get("[aria-label='Close menu']");
  const getDropdownLink = () => cy.contains("Dropdown Link");
  const getCustomTrigger = () => cy.get("button.customtrigger");
  const assertDropdownIsOpen = () => getDropdownLink().should("exist");
  const assertDropdownIsClosed = () => getDropdownLink().should("not.exist");
  const enterKeyCode = 13;

  it("toggles the menu on click", () => {
    cy.renderFromStorybook("dropdownmenu--base");

    getOpenButton().click();
    assertDropdownIsOpen();

    getCloseButton().click();
    assertDropdownIsClosed();
  });

  it("closes the menu on escape", () => {
    cy.renderFromStorybook("dropdownmenu--base");

    getOpenButton().click();

    cy.pressEscapeKey();

    assertDropdownIsClosed();
  });

  it("closes the menu when clicking outside of it", () => {
    cy.renderFromStorybook("dropdownmenu--base");

    getOpenButton().click();

    cy.clickOutsideElement();

    assertDropdownIsClosed();
  });

  it("scrolls through the list on tabpress", () => {
    cy.renderFromStorybook("dropdownmenu--base");

    getOpenButton()
      .click()
      .tab();

    getDropdownLink().should("be.focused");
  });

  it("can be opened with a different element", () => {
    cy.renderFromStorybook("dropdownmenu--custom-trigger");

    getCustomTrigger().click();

    assertDropdownIsOpen();
  });
});
