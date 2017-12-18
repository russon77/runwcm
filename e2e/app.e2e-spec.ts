import { AppPage, AppBrand, AppFields, AppData } from './app.po';

const invalidWebregData = `
bad data
`;

const validWebregData = `

Web Registration System

    Logged in as JOHN SMITH (123456789)
    Log Out

NEWARK COLLEGE OF ARTS & SCIENCES | Attempting 10.0 credits | Completed 10.0 credits
Choose Semester » Spring 2018

    Course Lookup
    Manage Registration
    View / Print Schedule

Add To Registration

Course Lookup

    Index 1
    Index 2
    Index 3
    Index 4
    Index 5
    Index 6
    Index 7
    Index 8
    Index 9
    Index 10

Registered Courses Online Bill Payment View / Print Schedule

ENGLISH COMPOSITION (21:355:102) Credits:3.0

    05 [06244]
        MTH 1:00 PM - 2:20 PM CON-453 Nwk 

HISTORY OF THE US II (21:512:202) Credits:3.0

    01 [15357]
        T 2:30 PM - 5:20 PM CON-319 Nwk 

LINEAR ALGEBRA (21:640:350) Credits:3.0

    02 [07291]
        TTH 11:30 AM - 12:50 PM HAH-421 Nwk 

PRIN OF PSYCHOLOGY (21:830:101) Credits:3.0

    01 [03666]
        TTH 10:00 AM - 11:20 AM CON-100 Nwk
        TH 4:00 PM - 5:20 PM SMT-246 Nwk 

INTRO TO SOCIOLOGY (21:920:201) Credits:3.0

    02 [10627]
        M 2:30 PM - 3:50 PM HIL-107 Nwk
        W 1:00 PM - 2:20 PM HIL-107 Nwk 

Course material information for review and purchase for all courses: Barnes & Noble, New Brunswick, Barnes & Noble, Camden, Barnes & Noble, Newark.

University Schedule of Classes

For questions, comments or suggestions contact Camden Help Desk, Newark Help Desk, or New Brunswick/Piscataway Help Desk.

Visit web sites for Camden campus, Newark campus, New Brunswick/Piscataway campus, or Rutgers University.
Rutgers logo

`;

describe('runwcm App', () => {
  it('should display the header', async () => {
    await AppPage.navigateTo();
    await expect(AppBrand.getBrandText()).toEqual('RUNWCM');
  });

  it('should disable the submit by default', async () => {
    await AppPage.navigateTo();
    await expect(AppFields.form.disabled()).toBeTruthy();

    // now add any input and confirm that submit enabled
    await AppFields.webreg.edit(validWebregData);
    await expect(AppFields.form.disabled()).toBeFalsy();
  });

  it('should display an error when webreg parsing fails', async () => {
    await AppPage.navigateTo();

    // confirm no error by default
    await expect(AppFields.form.hasError()).toBeFalsy();

    // enter bad data
    await AppFields.webreg.edit(invalidWebregData);

    await AppFields.form.submit();

    // confirm error display
    await expect(AppFields.form.hasError()).toBeTruthy();

    // remove error and confirm its disappearance
    await AppFields.form.clearError();

    await expect(AppFields.form.hasError()).toBeFalsy();
  });

  it('should parse webreg data successfully', async () => {
    await AppPage.navigateTo();

    // by default, no data should be available
    await expect(AppData.available()).toBeFalsy();

    // enter valid data
    await AppFields.webreg.edit(validWebregData);

    await AppFields.form.submit();

    // confirm that data is displayed
    await expect(AppData.available()).toBeTruthy();
  });

  xit('should display results for each day of the week', async () => {
    // enter valid data

    // submit

    // confirm that for each day of the week, the correct day is displayed and
    // the corresponding buildings are listed in order
  });
});
