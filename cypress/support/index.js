/// <reference types="cypress" />
import './commands'

require('cypress-xpath')

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes'],
  })