import React, { useState, useCallback } from "react";
import CypressLogin from "./login";
import "bootstrap/dist/css/bootstrap.css";
const typeOptions = { delay: 10 };

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}
it("valid email and password", () => {
  cy.mount(
    <CypressLogin
      id1="email"
      id2="password"
      id3="submit"
      url="https://reqres.in/api/users?page=2"
    />
  );
  cy.get("#email").type("tobias.funke@reqres.in", typeOptions);
  cy.get("#password").type("Tobias", typeOptions);
  cy.get("#submit").click();
  cy.get("#text").should("have.class", "text-success");
});
it("invalid email", () => {
  cy.mount(
    <CypressLogin
      id1="email"
      id2="password"
      id3="submit"
      url="https://reqres.in/api/users?page=2"
    />
  );
  cy.get("#email").type("sina@gmail.com", typeOptions);
  cy.get("#password").type("Tobias", typeOptions);
  cy.get("#submit").click();
  cy.get("#text").should("have.class", "text-primary");
});
it("wrong password", () => {
  cy.mount(
    <CypressLogin
      id1="email"
      id2="password"
      id3="submit"
      url="https://reqres.in/api/users?page=2"
    />
  );
  cy.get("#email").type("tobias.funke@reqres.in", typeOptions);
  cy.get("#password").type("WrongPassword", typeOptions);
  cy.get("#submit").click();
  cy.get("#text").should("have.class", "text-danger");
});
it("error while fetching", () => {
  cy.mount(
    <CypressLogin
      id1="email"
      id2="password"
      id3="submit"
      url="https://////////////"
    />
  );
  cy.get("#email").type("tobias.funke@reqres.in", typeOptions);
  cy.get("#password").type("WrongPassword", typeOptions);
  cy.get("#submit").click();
  cy.get("#text").should("have.class", "text-secondary");
});
