/// <reference types="cypress" />

describe("cypress", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Cypress is working", () => {
    expect(true).to.equal(true);
  });

  it("Should Visit the app", () => {
    cy.visit("http://localhost:3000");
  });

  // Visibility Test
  it("Input field which having search placeholder should be visible", () => {
    cy.get(":nth-child(1) > .flex > .rounded-md").should("be.visible");
  });

  it("Pagination Table should be visible", () => {
    cy.get("table.min-w-full.divide-y.divide-gray-200").should("be.visible");
  });

  // Input Field Test
  it("Should Remove input field value when click on Close button", () => {
    cy.get(":nth-child(1) > .flex > .rounded-md").type("Hello");
    cy.get(":nth-child(1) > .flex > .rounded-md").should("have.value", "");
  });

  // // Table Test
  // it("Only Six th should be visible", () => {
  //   cy.get(".MuiTableHead-root > tr").find("th").should("have.length", 6);
  // });

  // // Input Field and Table Changes Test (Filter Test)
  // it("Search filter Test When value is present inside Table", () => {
  //   cy.get("input[placeholder='Search']").type("Sorry");
  //   cy.get(".MuiTableBody-root > tr:nth-child(1) > td:nth-child(6)")
  //     .contains("Sorry")
  //     .should("be.visible");
  // });

  // it("Search filter Test When value is not present inside Table", () => {
  //   cy.get("input[placeholder='Search']").type("BMW");
  //   cy.get(".MuiTableBody-root > tr:nth-child(1) > td:nth-child(1)")
  //     .contains("No records to display")
  //     .should("be.visible");
  // });

  // // Pagination Test
  // it("Should change the tr when pagination value is changed", () => {
  //   cy.get("input[placeholder='Search']").type("BMW");
  //   cy.get(".MuiTableBody-root > tr:nth-child(1) > td:nth-child(1)")
  //     .contains("No records to display")
  //     .should("be.visible");
  // });

  // it("Should Render 10 row per page at pagination Initially", () => {
  //   cy.get(".Component-paginationSelectRoot-4 > input")
  //     .invoke("val")
  //     .should((value) => {
  //       return value;
  //     });
  // });

  // it("Should change the tr when pagination value is changed", () => {
  //   cy.get(".Component-paginationSelectRoot-4").click();
  //   cy.get(".MuiMenu-paper > ul > li:nth-child(1)").contains("5");
  //   cy.get(".MuiMenu-paper > ul > li:nth-child(1)").click();
  //   cy.get(".MuiTableBody-root").find("tr").should("have.length", 5);
  // });
});
