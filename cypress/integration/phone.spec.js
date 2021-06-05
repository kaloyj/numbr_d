context("Phone Screens", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.mockApiRoutes();
    // wait for transition to end
    cy.wait(1000);
  });

  it("Phone tab navigation rendered correctly", () => {
    cy.get("[data-cy=TabsContainer]")
      .should("exist")
      .children()
      .should("have.length", 3);
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

  it("Contact Links are correct and are rendered correctly", () => {
    cy.get("[data-cy=TabsContainer] button:first").click();

    cy.get("[data-cy=ContactItemLink]")
      .should("have.length", 3)
      .then((links) => {
        expect(links[0].href).equal(
          "https://www.linkedin.com/in/carlo-janea-2880a2132/"
        );
        expect(links[1].href).equal("https://carlojanea.com/");
        expect(links[2].href).equal("https://twitter.com/carlojanea/");
      });
  });
});