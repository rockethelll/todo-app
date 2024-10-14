describe('Todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    window.localStorage.setItem('todos', JSON.stringify([]));
  });

  it('should toggle the theme', () => {
    cy.get('body').should('not.have.class', 'dark');
    cy.get('[data-testid="toggle-theme"]').click();

    cy.get('body').should('have.class', 'dark');
  });

  it('should dislplay the title', () => {
    cy.get('h1').contains('TODO').should('be.visible');
  });

  it('should dislplay the create input todo', () => {
    cy.get('[data-testid="new-todo-input"]').should('be.visible');
  });

  it('should add a new todo', () => {
    const todoTxt = 'Cypress testing';

    // Type a new todo and press enter
    cy.get('[data-testid="new-todo-input"]').type(`${todoTxt}{enter}`);

    // Check if the new todo is visible
    cy.get('#todo-5').should('be.visible');
    cy.get('#todo-5').should('have.prop', 'value', todoTxt);

    // Check if the new todo is not completed
    cy.get('[data-testid="add-new-todo"] > .h-12 > .peer').should('not.be.checked');

    // Check if no todo has been added
    cy.get('#todo-6').should('not.exist');
  });

  it('should mark a todo as completed', () => {
    const todoTxt = 'Cypress testing';

    // Type a new todo and press enter
    cy.get('[data-testid="new-todo-input"]').type(`${todoTxt}{enter}`);

    // Check if the new todo is visible
    cy.get('#todo-5').should('be.visible');
    cy.get('#todo-5').should('have.prop', 'value', todoTxt);

    // Check if the new todo is not completed
    cy.get(':nth-child(1) > [data-testid="toggle-todo"]').should('not.be.checked');

    // Mark the todo as completed
    cy.get(':nth-child(1) > [data-testid="toggle-todo"]').click();
    cy.get(':nth-child(1) > [data-testid="toggle-todo"]').should('be.checked');
  });

  it('should delete a todo', () => {
    const todoTxt = 'Cypress testing';

    // Type a new todo and press enter
    cy.get('[data-testid="new-todo-input"]').type(`${todoTxt}{enter}`);

    // Check if the new todo is visible
    cy.get('#todo-5').should('be.visible');
    cy.get('#todo-5').should('have.prop', 'value', todoTxt);

    // Delete the todo
    cy.get(':nth-child(1) > [data-testid="delete-todo"] > .mr-5').click();

    // Check if the todo has been deleted
    cy.get('#todo-5').should('not.exist');
  });
});

