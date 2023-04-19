import { SalaryInsightsPage } from "../../support/pages/index";

const salaryInsightsPage = new SalaryInsightsPage();
const role = "QA Engineer"
const country = "Canada"
const playValue = "ren"
const errorMessage = "No results found"


describe("Search insights test", () => {
    beforeEach(() => {
        salaryInsightsPage.visitSite();
    })

    it("Verify that text with selected role and country is displayed in the header of the chart", () => {
        salaryInsightsPage.typeInRoleDropdown(role);
        salaryInsightsPage.clickDropdownOption(role);
        salaryInsightsPage.typeInCountryDropdown(country);
        salaryInsightsPage.clickDropdownOption(country);
        salaryInsightsPage.clickSearchButton();

        salaryInsightsPage.checkThatResultIsInHeaderOfTheChart(role, country);
    })

    it("Verify that data inputs work only with defined in the drop down values.", () => {
        salaryInsightsPage.typeInRoleDropdown(playValue);
        salaryInsightsPage.checkThatErrorMessageIsInDropdown(errorMessage);
        salaryInsightsPage.clickDropDownArrowClose(0);
        salaryInsightsPage.typeInCountryDropdown(playValue);
        salaryInsightsPage.checkThatErrorMessageIsInDropdown(errorMessage);
    })
})