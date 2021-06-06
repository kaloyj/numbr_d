context("Phone Screens", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.mockApiRoutes();
    // wait for transition to end
    cy.wait(1000);
  });

  it("Phone keypad screen renders correctly", () => {
    cy.get("[data-cy=PhoneKeypadScreen]").should("exist");
    cy.get("[data-cy=PhoneKeypadContainer]")
      .should("exist")
      .children()
      .find("button")
      .should("have.length", 9);
    cy.get("body").type("2");
    cy.get("[data-cy=PhoneKeypadContainer] button").should("have.length", 10);
  });

  it("Phone keypad input display shows max length reached", () => {
    cy.get("body").type("234555679");
    cy.get("[data-cy=InputInfoMessage]").should("contain", "Max");

    cy.get("body").trigger("keydown", { key: "Backspace" });
    cy.get("[data-cy=InputInfoMessage]").should("not.exist");
  });

  it("Phone keypad generates phonewords", () => {
    cy.fixture("phonewords.json").then((result) => {
      const phonewords = result.phonewords;
      cy.get("body").type("235");
      cy.get("[data-cy=InputString]").should("contain", "235");
      cy.get("[data-cy=SubmitBtn]").click();
      cy.get("[data-cy=ErrorMessage]").should("not.exist");
      cy.get("[data-cy=PhonewordsList]")
        .children()
        .should("have.length", phonewords.length);
    });
  });

  it("Phone keypad generates phonewords by keypress enter", () => {
    cy.fixture("phonewords.json").then((result) => {
      const phonewords = result.phonewords;
      cy.get("body").type("235");
      cy.get("[data-cy=InputString]").should("contain", "235");
      cy.get("body").trigger("keydown", { key: "Enter" });
      cy.get("[data-cy=ErrorMessage]").should("not.exist");
      cy.get("[data-cy=PhonewordsList]")
        .children()
        .should("have.length", phonewords.length);
    });
  });

  it("Phone keypad backspace works", () => {
    cy.get("body").type("235");
    cy.get("[data-cy=InputString]").should("contain", "235");
    cy.get("[data-cy=BackspaceBtn]").click();
    cy.get("[data-cy=InputString]").should("not.contain", "5");
    cy.get("body").trigger("keydown", { key: "Backspace" });
    cy.get("[data-cy=InputString]").should("not.contain", "3");
  });

  it("Phone keypad keypress doesnt trigger if not in keypad screen", () => {
    cy.get("[data-cy=TabsContainer] button:first").click();
    cy.get("body").type("235");
    cy.get("[data-cy=InputString]").should("not.contain", "235");

    cy.get("[data-cy=TabsContainer] button:nth-child(3)").click();
    cy.get("body").type("235");
    cy.get("[data-cy=InputString]").should("not.contain", "235");
  });

  it("Results filter buttons work", () => {
    cy.fixture("phonewords-dictionary.json").then((result) => {
      const phonewords = result.phonewords;
      cy.get("body").type("235");
      cy.get("body").trigger("keydown", { key: "Enter" });
      cy.get("[data-cy=FiltersContainer] button:first")
        .should("exist")
        .and("be.disabled");

      cy.get("[data-cy=FiltersContainer] button:last")
        .should("exist")
        .and("not.be.disabled")
        .click();

      cy.get("[data-cy=FiltersContainer] button:first")
        .should("exist")
        .and("not.be.disabled");

      cy.get("[data-cy=FiltersContainer] button:last")
        .should("exist")
        .and("be.disabled");

      cy.get("[data-cy=PhonewordsList]")
        .children()
        .should("have.length", phonewords.length);
    });
  });
});
