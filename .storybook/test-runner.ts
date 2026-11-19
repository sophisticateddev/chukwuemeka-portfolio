import type { TestRunnerConfig } from "@storybook/test-runner";
import { checkA11y, injectAxe } from "axe-playwright";

/**
 * Runs axe on every story, in light and then in dark, and fails on any violation.
 * Contrast problems often show in only one theme, so both are checked.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    const options = {
      detailedReport: true,
      detailedReportOptions: { html: true },
      // Stories render a fragment, not a page, so page-level rules don't apply
      axeOptions: { rules: { region: { enabled: false }, "page-has-heading-one": { enabled: false } } },
    };
    for (const theme of ["light", "dark"]) {
      await page.evaluate((t) => {
        document.documentElement.dataset.theme = t;
      }, theme);
      await page.waitForTimeout(100);
      await checkA11y(page, "#storybook-root", options);
    }
  },
};
export default config;
