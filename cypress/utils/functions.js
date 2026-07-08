export const inputValue = (element, value) => {
  cy.get(element).should('be.visible').find('input').type(value);
};

export const selectValue = (element, value) => {
  // eslint-disable-next-line cypress/unsafe-to-chain-command
  cy.get(element).should('be.visible').find('div > div.MuiFormControl-root > div.MuiInputBase-root')
    .click()
    .get(`[data-value="${value}"]`)
    .click();
};

export const clearInput = (element) => {
  cy.get(element).should('be.visible').find('input').clear();
};

export const inputNewValue = (element, value) => {
  clearInput(element);
  inputValue(element, value);
};

export const selectDay = (calendar, day) => {
  cy.get(`@${calendar}`).contains('td', day).click({ force: true });
};

export const selectRangeCalendar = (calendarName, startDate, endDate) => {
  cy.dataCy(`${calendarName}Open`).should('be.enabled').click();
  cy.dataCy(`${calendarName}Calendar`)
    .find('[class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]')
    .as('Calendars');
  cy.get('@Calendars').eq(0).as('StartDateCalendar');
  cy.get('@Calendars').eq(1).as('EndDateCalendar');
  selectDay('StartDateCalendar', startDate.getDate());
  selectDay('EndDateCalendar', endDate.getDate());
};
