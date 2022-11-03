import { navigateTo } from "../support/page_objects/navigationPage";

describe("test with page objects", () => {
  beforeEach("open application", () => {
    cy.visit("/");
  });

  it("verify navigation across the pages", () => {
    navigateTo.datepickerPage();
  });
});
