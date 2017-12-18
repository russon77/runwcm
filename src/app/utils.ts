interface ICourse {
  name: string;
  location: string;
}

interface ISchedule {
  monday: ICourse[];
  tuesday: ICourse[];
  wednesday: ICourse[];
  thursday: ICourse[];
  friday: ICourse[];
}

function daysToScheduleKeys(query: string): [keyof ISchedule] {
  switch (query) {
    case 'M': return ['monday'];
    case 'MTH': return ['monday', 'thursday'];
    case 'MW': return ['monday', 'wednesday'];
    case 'T': return ['tuesday'];
    case 'TTH': return ['tuesday', 'thursday'];
    case 'W': return ['wednesday'];
    case 'TH': return ['thursday'];
    case 'F': return ['friday'];
  }

  return null;
}

export function parseWebregData(data: string): ISchedule {
  const schedule: ISchedule = {monday: [], tuesday: [], wednesday: [], thursday: [], friday: []};
  let valid = false;

  // this regexp matches a full course text, i.e.
  // ENGLISH COMPOSITION (21:355:102) Credits:3.0
  // 05 [06244]
  // MTH 1:00 PM - 2:20 PM CON-453 Nwk
  const regex = /((?:[A-Z]+\s?)+)\(\d+\:\d+\:\d+\)\sCredits\:\d\.\d\s+[\d\s\[\]]+((?:.+\s)+)/g;
  let result;

  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  // "Finding Successive Matches"
  while ((result = regex.exec(data)) !== null) {
    // result is an array, where index 0 is the full matched text and
    // index 1 is the first sub-match, the name and
    // index 2 is the second sub-match, the specific class schedule
    const [_, name, classScheduleText] = result;

    // this regexp extracts the days, start time, end time and location
    const classScheduleRegex = /([A-Z]+)\s(\d+\:\d+\s[AP]M)\s\-\s(\d+\:\d+\s[AP]M)\s([A-Z]+\-\d+)/g;
    let classScheduleResult;

    while ((classScheduleResult = classScheduleRegex.exec(classScheduleText)) !== null) {
      const [__, days, startTime, endTime, location] = classScheduleResult;

      // for each day, push a class onto the schedule
      for (const day of daysToScheduleKeys(days)) {
        schedule[day].push({name, location});

        valid = true;
      }
    }
  }

  return valid ? schedule : null;
}

