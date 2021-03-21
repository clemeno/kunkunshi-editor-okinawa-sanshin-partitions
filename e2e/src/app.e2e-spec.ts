import { browser, logging } from 'protractor'
import { AppPage } from './app.po'

describe('workspace-project App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', async () => {
    await page.navigateTo()
    expect(await page.getTitleText()).toEqual('kkseosp app is running!')
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER)
    const loggingEntry: Partial<logging.Entry> = {
      level: logging.Level.SEVERE
    }
    expect(logs).not.toContain(jasmine.objectContaining(loggingEntry))
  })
})
