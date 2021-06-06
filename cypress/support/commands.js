Cypress.Commands.add("mockApiRoutes", () => {
  cy.intercept(
    {
      method: "POST",
      url: `${Cypress.config().baseUrl}/api/generate`,
    },
    (req) => {
      const { body } = req;
      const { numStr, filter } = JSON.parse(body);
      if (Number.isNaN(Number(numStr))) req.reply({ message: "Invalid input" });
      else if (filter === "In Dictionary")
        req.reply({ fixture: "phonewords-dictionary.json" });
      else req.reply({ fixture: "phonewords.json" });
    }
  );
});
