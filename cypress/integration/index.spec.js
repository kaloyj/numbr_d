context("General app components", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Page title and description rendered correctly", () => {
    cy.get("main > h1").should("exist").and("contain", "numbr_d");
    cy.get("main > p").should("exist").and("contain", "generate phonewords");
  });
});
