export class SalaryInsightsPage {
    roleSearchableDropdownField = () => cy.get('#mui-2');
    countrySearchableDropdownField = () => cy.get('#mui-4');
    searchButton  = () => cy.contains('Search');
    resultDropdown = (option) => cy.get('[role="presentation"]').contains(option);
    resultArea = () => cy.get('[data-qa="salary-table"]');
    dropDownArrowClose = (index) => cy.get('button[title="Close"]').eq(index); 
    dropDownArrowOpen = (index) => cy.get('button[title="Open"]').eq(index); 

    visitSite = () => {
        cy.visit('');
    }
    typeInRoleDropdown = (role) => {
        return this.roleSearchableDropdownField().type(role);
    }

    typeInCountryDropdown = (country) => {
        return this.countrySearchableDropdownField().type(country);
    }

    clickSearchButton = () => {
        return this.searchButton().click();
    }

    clickDropdownOption = (option) => {
        this.resultDropdown(option).click();
    }

    checkThatErrorMessageIsInDropdown = (option) => {
        this.resultDropdown(option).should('be.visible');
    }

    checkThatResultIsInHeaderOfTheChart = (role, country) => {
        this.resultArea().contains(role).should('be.visible');
        this.resultArea().contains(country).should('be.visible');
    }

    clickDropDownArrowClose = (index) => {
        return this.dropDownArrowClose(index).click();
    }


}