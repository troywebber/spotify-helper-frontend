describe("should redirect user to spotify login and provide an auth code", () => {
  it("should redirect to spotify login", () => {
    cy.visit("http://localhost:3000/");

    cy.get("button").click();
    cy.url().should("include", "https://accounts.spotify.com");
    //select email field on spotify login page
    cy.get("input").eq(0);
    //enter email
    cy.get("input").eq(0).type("tdwflhyhrhupiyqlqy@nvhrw.com");
    //select password field on spotify login page
    cy.get("input").eq(1);
    //enter password
    cy.get("input").eq(1).type("Ilovecoding");
    // cy.get(".ButtonInner-sc-14ud5tc-0").click();
  });
});
