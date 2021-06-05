Cypress.Commands.add("mockApiRoutes", () => {
  cy.intercept(
    {
      method: "POST",
      url: `${Cypress.config().baseUrl}/api/generate`,
    },
    (req) => {
      const { body } = req;
      if (Number.isNaN(Number(body))) req.reply({ message: "Invalid input" });
      else req.reply({ fixture: "phonewords.json" });
    }
  );
});
