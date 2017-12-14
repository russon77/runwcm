import { AppPage, AppBrand, AppFields } from './app.po';

describe('runwcm App', () => {
  it('should display the header', async () => {
    await AppPage.navigateTo();
    await expect(AppBrand.getBrandText()).toEqual('RUNWCM');
  });

  it('should disable the submit by default', async () => {
    await AppPage.navigateTo();
    await expect(AppFields.webreg.disabled()).toBeTruthy();

    // now add any input and confirm that submit enabled
    await AppFields.webreg.edit('valid text');
    await expect(AppFields.webreg.disabled()).toBeFalsy();
  });

  xit('should display an error when webreg parsing fails', async () => {
    // enter bad data

    // confirm error display

    // remove error and confirm its disappearance
  });

  xit('should parse webreg data successfully', async () => {
    // enter valid data

    // submit

    // confirm that data is displayed
  });

  xit('should display results for each day of the week', async () => {
    // enter valid data

    // submit

    // confirm that for each day of the week, the correct day is displayed and
    // the corresponding buildings are listed in order
  });
});
