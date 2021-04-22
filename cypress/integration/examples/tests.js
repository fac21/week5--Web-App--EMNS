
beforeEach(() => {
    cy.task("resetDb");
  });

  describe("show homepage", () => {
        it("displays a heading", () => {
            cy.visit("/");
            cy.contains("park finder");
        });
  });