const fallbackSeasonResults = [
  {
    date: "2025-12-06",
    weather: "Fine",
    going: "Soft5",
    distance: 1400,
    raceName: "Graham's Painters 1400",
    className: "3YO SW+P",
    results: [
      { horse: "Our Sniper", trainer: "Lisa Latta", jockey: "Amber Riddell", position: 1 },
      { horse: "The Dirty Dee", trainer: "Robbie Patterson", jockey: "Craig Grylls", position: 2 },
      { horse: "Laura's Legacy", trainer: "Janelle Millar", jockey: "Chris Dell", position: 3 },
    ],
  },
  {
    date: "2025-12-06",
    weather: "Fine",
    going: "Soft5",
    distance: 1300,
    raceName: "JR & N Berkett 1300",
    className: "Maiden",
    results: [
      { horse: "Thorax", trainer: "Robbie Patterson", jockey: "Craig Grylls", position: 1 },
      { horse: "Classy Brahma", trainer: "Trudy & Vaughan Keegan", jockey: "Bruno Queiroz", position: 2 },
      { horse: "Wyworry", trainer: "John Wheeler", jockey: "Opie Bosson", position: 3 },
    ],
  },
  {
    date: "2025-12-06",
    weather: "Fine",
    going: "Soft5",
    distance: 1600,
    raceName: "Pullman Hotel Melbourne 1600",
    className: "Rating 65",
    results: [
      { horse: "Knickerless", trainer: "Lisa Latta", jockey: "Leah Hemi", position: 1 },
      { horse: "Bradley", trainer: "Cody Cole", jockey: "Opie Bosson", position: 2 },
      { horse: "Mustang Morgan", trainer: "Andrew Forsman", jockey: "Craig Grylls", position: 3 },
    ],
  },
  {
    date: "2025-12-06",
    weather: "Fine",
    going: "Soft5",
    distance: 1600,
    raceName: "Magic Maggie McQuillan Memorial 1600",
    className: "Maiden",
    results: [
      { horse: "Girl Talk", trainer: "Stephen Nickalls", jockey: "Kate Hercock", position: 1 },
      { horse: "Can Do", trainer: "Peter and Trent Didham", jockey: "Masa Hashizume", position: 2 },
      { horse: "Teresa Mac", trainer: "Ilone Kelly", jockey: "Madan Singh", position: 3 },
    ],
  },
  {
    date: "2025-12-06",
    weather: "Fine",
    going: "Soft5",
    distance: 1000,
    raceName: "Aztech Engineering Ltd Sprint",
    className: "Rating 65",
    results: [
      { horse: "The Perfect One", trainer: "Glenn Old", jockey: "Craig Grylls", position: 1 },
      { horse: "Poppy's Girl", trainer: "Shaun and Hazel Fannin", jockey: "Chris Dell", position: 2 },
      { horse: "Albarossa", trainer: "Kevin & Stephen Gray", jockey: "Bruno Queiroz", position: 3 },
    ],
  },
  {
    date: "2026-01-03",
    weather: "Fine",
    going: "Soft5",
    distance: 1200,
    raceName: "Listen Live on Sportnation.nz Maiden Sprint",
    className: "Maiden",
    results: [
      { horse: "Miss Jones", trainer: "Cody Cole", jockey: "Opie Bosson", position: 1 },
      { horse: "Thorax", trainer: "Robbie Patterson", jockey: "Craig Grylls", position: 2 },
      { horse: "Classy Brahma", trainer: "Trudy & Vaughan Keegan", jockey: "Bruno Queiroz", position: 3 },
    ],
  },
  {
    date: "2026-01-03",
    weather: "Fine",
    going: "Soft5",
    distance: 2200,
    raceName: "Ernesto's 2200",
    className: "Rating 65",
    results: [
      { horse: "Latest Model", trainer: "Gary Vile", jockey: "Samantha Collett", position: 1 },
      { horse: "Helluvah Return", trainer: "Gary Vile", jockey: "Leah Hemi", position: 2 },
      { horse: "Gate Crashers", trainer: "Shaune Ritchie & Colm Murray", jockey: "Joe Doyle", position: 3 },
    ],
  },
  {
    date: "2026-01-03",
    weather: "Fine",
    going: "Soft5",
    distance: 1100,
    raceName: "JR & N Berkett Wellesley Stakes",
    className: "Listed",
    results: [
      { horse: "Lassified", trainer: "Andrew Forsman", jockey: "Bruno Queiroz", position: 1 },
      { horse: "Sweetest Thing", trainer: "Roydon Bergerson", jockey: "Wiremu Pinn", position: 2 },
      { horse: "Out Of The Blue", trainer: "Mark Walker & Sam Bergerson", jockey: "Craig Grylls", position: 3 },
    ],
  },
  {
    date: "2026-01-03",
    weather: "Fine",
    going: "Soft5",
    distance: 1600,
    raceName: "Blue Star Group 1600",
    className: "Rating 65",
    results: [
      { horse: "Bradley", trainer: "Cody Cole", jockey: "Opie Bosson", position: 1 },
      { horse: "Unusual Invader", trainer: "Fraser Auret", jockey: "Masa Hashizume", position: 2 },
    ],
  },
  {
    date: "2026-01-17",
    weather: "Overcast",
    going: "Soft6",
    distance: 1400,
    raceName: "Rothley Maiden 1400",
    className: "Maiden",
    results: [
      { horse: "Hoorah Henry", trainer: "Lisa Latta", jockey: "Samantha Collett", position: 1 },
      { horse: "I'll Be Home Soon", trainer: "Peter Lock", jockey: "Matthew Cameron", position: 2 },
      { horse: "Wyworry", trainer: "John Wheeler", jockey: "Kelly Myers", position: 3 },
    ],
  },
  {
    date: "2026-01-17",
    weather: "Overcast",
    going: "Soft6",
    distance: 1100,
    raceName: "Gee & Hickton Funeral Directors Sprint",
    className: "Open Handicap",
    results: [
      { horse: "Oneira", trainer: "Cody Cole", jockey: "Samantha Collett", position: 1 },
      { horse: "Miss Fladgate", trainer: "Stephen Marsh", jockey: "Matt Cartwright", position: 2 },
      { horse: "Idyllic", trainer: "Kevin & Stephen Gray", jockey: "Kate Hercock", position: 3 },
    ],
  },
  {
    date: "2026-01-17",
    weather: "Overcast",
    going: "Soft6",
    distance: 1200,
    raceName: "Aztech Engineering Ltd Sprint",
    className: "Rating 65",
    results: [
      { horse: "Quello Dolce", trainer: "Cody Cole", jockey: "Samantha Collett", position: 1 },
      { horse: "Poppy's Girl", trainer: "Shaun and Hazel Fannin", jockey: "Chris Dell", position: 2 },
      { horse: "The Big Picture", trainer: "Bill Thurlow and Sam O'Malley", jockey: "Craig Grylls", position: 3 },
    ],
  },
  {
    date: "2026-01-17",
    weather: "Overcast",
    going: "Soft6",
    distance: 2100,
    raceName: "Happy Hire 2100",
    className: "Rating 65",
    results: [
      { horse: "Enterprise Gem", trainer: "Michael & Matthew Pitman", jockey: "Daniel Stackhouse", position: 1 },
      { horse: "Julianus", trainer: "Jo Rathbone", jockey: "Elen Nicholas", position: 2 },
      { horse: "Air Dancer", trainer: "Clinton Isdale", jockey: "Liam Kauri", position: 3 },
    ],
  },
  {
    date: "2026-01-31",
    weather: "Fine",
    going: "Soft5",
    distance: 1200,
    raceName: "Harcourts Sprint",
    className: "Maiden",
    results: [
      { horse: "Miss Jones", trainer: "Cody Cole", jockey: "Samantha Collett", position: 1 },
      { horse: "Moon Goddess", trainer: "Michael & Matthew Pitman", jockey: "Daniel Stackhouse", position: 2 },
      { horse: "Precipice", trainer: "Cody Cole", jockey: "Ryan Elliot", position: 3 },
    ],
  },
  {
    date: "2026-01-31",
    weather: "Fine",
    going: "Soft5",
    distance: 1200,
    raceName: "Stephanie Murray Mortgages Three-Year-Old Sprint",
    className: "3YO SW+P",
    results: [
      { horse: "Cheerio", trainer: "Cody Cole", jockey: "Samantha Collett", position: 1 },
      { horse: "Passiflora", trainer: "Steven Ramsay & Julia Ritchie", jockey: "Craig Grylls", position: 2 },
      { horse: "Laura's Legacy", trainer: "Janelle Millar", jockey: "Toni Davies", position: 3 },
    ],
  },
  {
    date: "2026-01-31",
    weather: "Fine",
    going: "Soft5",
    distance: 1400,
    raceName: "Pak'n'Save Upper Hutt 1400",
    className: "Rating 65",
    results: [
      { horse: "Hivari", trainer: "Meg Cunneen", jockey: "Corey Campbell", position: 1 },
      { horse: "Chester Boy", trainer: "John Wheeler", jockey: "Samantha Collett", position: 2 },
      { horse: "Shacktime", trainer: "Allan Sharrock", jockey: "Kelly Myers", position: 3 },
    ],
  },
  {
    date: "2026-01-31",
    weather: "Fine",
    going: "Soft5",
    distance: 1600,
    raceName: "Harrisons Flooring 1600",
    className: "Maiden",
    results: [
      { horse: "Hoorah Henry", trainer: "Lisa Latta", jockey: "Samantha Collett", position: 1 },
      { horse: "Andahar", trainer: "Shaune Ritchie & Colm Murray", jockey: "Joe Doyle", position: 2 },
      { horse: "Teresa Mac", trainer: "Ilone Kelly", jockey: "Madan Singh", position: 3 },
    ],
  },
  {
    date: "2026-01-31",
    weather: "Fine",
    going: "Soft5",
    distance: 2100,
    raceName: "Momentum Consulting 2100",
    className: "Rating 65",
    results: [
      { horse: "Walkinthepark", trainer: "Gary Vile", jockey: "Courtney Barnes", position: 1 },
      { horse: "Sir Bruce", trainer: "Robbie Patterson", jockey: "Craig Grylls", position: 2 },
      { horse: "Helluvah Return", trainer: "Gary Vile", jockey: "Leah Hemi", position: 3 },
    ],
  },
  {
    date: "2026-03-01",
    weather: "Fine",
    going: "Soft5",
    distance: 1200,
    raceName: "Highden Park Sprint",
    className: "Maiden",
    results: [
      { horse: "Furiosa", trainer: "Matthew Eales", jockey: "Samantha Collett", position: 1 },
      { horse: "Sir You Can Dance", trainer: "Cody Cole", jockey: "Joe Doyle", position: 2 },
      { horse: "Ivy Lee", trainer: "Allan Scarlett", jockey: "Jack Taplin", position: 3 },
    ],
  },
  {
    date: "2026-03-01",
    weather: "Fine",
    going: "Soft5",
    distance: 1100,
    raceName: "Marsh Racing Sprint",
    className: "Rating 75",
    results: [
      { horse: "Party Rocking", trainer: "John Bary", jockey: "Jim Chung", position: 1 },
      { horse: "Platinum Pantheon", trainer: "Lisa Latta", jockey: "Bruno Queiroz", position: 2 },
      { horse: "Finest Hour", trainer: "Ralph Manning", jockey: "Rihaan Goyaram", position: 3 },
    ],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1200,
    raceName: "Race 1 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1400,
    raceName: "Courtesy Ford Manawatu Sires' Produce Stakes",
    className: "Group 1 - Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1600,
    raceName: "Race 3 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1600,
    raceName: "Race 4 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 2100,
    raceName: "Race 5 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1200,
    raceName: "Race 6 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1400,
    raceName: "Race 7 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 2040,
    raceName: "Race 8 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1200,
    raceName: "Race 9 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
  {
    date: "2026-03-28",
    weather: "Pending",
    going: "Pending",
    distance: 1600,
    raceName: "Race 10 Placeholder",
    className: "Fields Pending",
    meetingName: "Manawatu RC @ Trentham - Courtesy Ford Manawatu Sires' Produce Raceday",
    status: "fields-pending",
    results: [],
  },
];

const fallbackSourceLinks = [
  { label: "6 Dec 2025", url: "https://loveracing.nz/RaceInfo/54837/Meeting-Overview.aspx" },
  { label: "3 Jan 2026", url: "https://loveracing.nz/RaceInfo/54866/Meeting-Overview.aspx" },
  { label: "17 Jan 2026", url: "https://loveracing.nz/RaceInfo/54877/Meeting-Overview.aspx" },
  { label: "31 Jan 2026", url: "https://loveracing.nz/RaceInfo/54889/Meeting-Overview.aspx" },
  { label: "1 Mar 2026", url: "https://loveracing.nz/RaceInfo/54912/Meeting-Overview.aspx" },
  { label: "28 Mar 2026", url: "https://jointheaction.co.nz/courtesy-ford-manawatu-sires-produce-stakes-raceday" },
];

const sprintExample = [
  { horse: "Miss Jones", trainer: "Cody Cole", jockey: "Samantha Collett", seasonRuns: 5, seasonWins: 2, seasonPlaces: 4, barrier: 4, form: "121", bestDistance: "1100-1300", wetFit: 4, courseFit: 5, daysSince: 56 },
  { horse: "Furiosa", trainer: "Matthew Eales", jockey: "Samantha Collett", seasonRuns: 6, seasonWins: 1, seasonPlaces: 3, barrier: 7, form: "431", bestDistance: "1100-1300", wetFit: 4, courseFit: 4, daysSince: 27 },
  { horse: "Thorax", trainer: "Robbie Patterson", jockey: "Craig Grylls", seasonRuns: 7, seasonWins: 1, seasonPlaces: 4, barrier: 2, form: "212", bestDistance: "1200-1400", wetFit: 4, courseFit: 5, daysSince: 77 },
  { horse: "Quello Dolce", trainer: "Cody Cole", jockey: "Samantha Collett", seasonRuns: 6, seasonWins: 1, seasonPlaces: 2, barrier: 6, form: "541", bestDistance: "1100-1300", wetFit: 5, courseFit: 4, daysSince: 63 },
  { horse: "Platinum Pantheon", trainer: "Lisa Latta", jockey: "Bruno Queiroz", seasonRuns: 8, seasonWins: 2, seasonPlaces: 5, barrier: 1, form: "132", bestDistance: "1000-1200", wetFit: 4, courseFit: 3, daysSince: 27 },
  { horse: "Party Rocking", trainer: "John Bary", jockey: "Jim Chung", seasonRuns: 9, seasonWins: 1, seasonPlaces: 3, barrier: 9, form: "561", bestDistance: "1000-1200", wetFit: 3, courseFit: 3, daysSince: 27 },
];

const mileExample = [
  { horse: "Hoorah Henry", trainer: "Lisa Latta", jockey: "Samantha Collett", seasonRuns: 4, seasonWins: 3, seasonPlaces: 3, barrier: 5, form: "111", bestDistance: "1400-1600", wetFit: 5, courseFit: 5, daysSince: 49 },
  { horse: "Bradley", trainer: "Cody Cole", jockey: "Opie Bosson", seasonRuns: 6, seasonWins: 2, seasonPlaces: 4, barrier: 4, form: "121", bestDistance: "1400-1700", wetFit: 4, courseFit: 5, daysSince: 77 },
  { horse: "Teresa Mac", trainer: "Ilone Kelly", jockey: "Madan Singh", seasonRuns: 7, seasonWins: 1, seasonPlaces: 5, barrier: 8, form: "333", bestDistance: "1400-1700", wetFit: 4, courseFit: 4, daysSince: 49 },
  { horse: "Wyworry", trainer: "John Wheeler", jockey: "Kelly Myers", seasonRuns: 8, seasonWins: 1, seasonPlaces: 4, barrier: 2, form: "323", bestDistance: "1300-1500", wetFit: 4, courseFit: 4, daysSince: 49 },
  { horse: "Unusual Invader", trainer: "Fraser Auret", jockey: "Masa Hashizume", seasonRuns: 6, seasonWins: 1, seasonPlaces: 3, barrier: 10, form: "232", bestDistance: "1500-1800", wetFit: 3, courseFit: 4, daysSince: 77 },
  { horse: "Andahar", trainer: "Shaune Ritchie & Colm Murray", jockey: "Joe Doyle", seasonRuns: 5, seasonWins: 0, seasonPlaces: 3, barrier: 1, form: "422", bestDistance: "1400-1700", wetFit: 3, courseFit: 3, daysSince: 49 },
];

let runners = structuredClone(sprintExample);
let seasonResults = structuredClone(fallbackSeasonResults);
let sourceLinks = structuredClone(fallbackSourceLinks);
let seasonStats = buildSeasonStats();
let currentMeetingRaces = [];
let selectedRace = null;

const runnerBody = document.querySelector("#runner-body");
const resultsRoot = document.querySelector("#results");
const recentReviewRoot = document.querySelector("#recent-review");
const upcomingMeetingsRoot = document.querySelector("#upcoming-meetings");
const insightsGrid = document.querySelector("#insights-grid");
const sourcesRoot = document.querySelector("#sources");
const seasonStrip = document.querySelector("#season-strip");
const dataStatus = document.querySelector("#data-status");
const meetingRaceSelect = document.querySelector("#meeting-race");
const meetingSummary = document.querySelector("#meeting-summary");

function normalizeName(value) {
  return value.trim().toLowerCase();
}

function goingBucket(going) {
  if (going.startsWith("Good")) return "good";
  if (going.startsWith("Soft")) return "soft";
  return "heavy";
}

function parseDistanceRange(rangeText) {
  const [minText, maxText] = rangeText.split("-").map((part) => Number(part.trim()));
  return {
    min: Number.isFinite(minText) ? minText : 1000,
    max: Number.isFinite(maxText) ? maxText : 1600,
  };
}

function parseFormFigures(form) {
  const figures = form
    .split("")
    .filter((char) => /\d/.test(char))
    .map((char) => Number(char))
    .filter((value) => value > 0);

  if (!figures.length) {
    return { score: 0.45, average: 6 };
  }

  const weighted = figures.map((finish, index) => {
    const recencyWeight = figures.length - index;
    const finishScore = Math.max(0, (10 - finish) / 9);
    return finishScore * recencyWeight;
  });

  const weightTotal = weighted.reduce((sum, _, index) => sum + (figures.length - index), 0);
  const score = weighted.reduce((sum, value) => sum + value, 0) / weightTotal;
  const average = figures.reduce((sum, value) => sum + value, 0) / figures.length;
  return { score, average };
}

function seasonHorseScore(runner) {
  const runs = Math.max(1, Number(runner.seasonRuns) || 1);
  const wins = Math.max(0, Number(runner.seasonWins) || 0);
  const places = Math.max(0, Number(runner.seasonPlaces) || 0);
  const winRate = Math.min(1, wins / runs);
  const placeRate = Math.min(1, places / runs);
  const experience = Math.min(1, runs / 10);
  return (winRate * 0.5) + (placeRate * 0.35) + (experience * 0.15);
}

function positionPoints(position) {
  if (position === 1) return 1;
  if (position === 2) return 0.72;
  if (position === 3) return 0.54;
  return 0.2;
}

function buildSeasonStats() {
  const stats = {
    meetings: new Set(),
    races: seasonResults.length,
    horses: new Map(),
    trainers: new Map(),
    jockeys: new Map(),
    goings: new Map(),
    weather: new Map(),
    distances: [],
  };

  const ensure = (map, key) => {
    if (!map.has(key)) {
      map.set(key, { starts: 0, wins: 0, places: 0, points: 0, softStarts: 0, softPoints: 0, distances: [] });
    }
    return map.get(key);
  };

  seasonResults.forEach((race) => {
    stats.meetings.add(race.date);
    stats.goings.set(race.going, (stats.goings.get(race.going) || 0) + 1);
    stats.weather.set(race.weather, (stats.weather.get(race.weather) || 0) + 1);
    stats.distances.push(race.distance);

    race.results.forEach((result) => {
      const horse = ensure(stats.horses, normalizeName(result.horse));
      const trainer = ensure(stats.trainers, normalizeName(result.trainer));
      const jockey = ensure(stats.jockeys, normalizeName(result.jockey));
      const points = positionPoints(result.position);
      const isSoftish = goingBucket(race.going) !== "good";

      [horse, trainer, jockey].forEach((entry) => {
        entry.starts += 1;
        entry.points += points;
        entry.distances.push(race.distance);
        if (result.position === 1) entry.wins += 1;
        if (result.position <= 3) entry.places += 1;
        if (isSoftish) {
          entry.softStarts += 1;
          entry.softPoints += points;
        }
      });
    });
  });

  return stats;
}

function averageDistance(distances) {
  if (!distances.length) return 1400;
  return distances.reduce((sum, value) => sum + value, 0) / distances.length;
}

function statScore(map, name, trackBucket, targetDistance) {
  const entry = map.get(normalizeName(name));
  if (!entry) {
    return { score: 0.42, descriptor: "no bundled Trentham sample" };
  }

  const strike = entry.points / entry.starts;
  const surfaceBoost = trackBucket !== "good" && entry.softStarts ? entry.softPoints / entry.softStarts : strike;
  const distanceBias = 1 - Math.min(1, Math.abs(averageDistance(entry.distances) - targetDistance) / 900);
  const score = (strike * 0.6) + (surfaceBoost * 0.25) + (distanceBias * 0.15);

  return {
    score,
    descriptor: `${entry.wins} win${entry.wins === 1 ? "" : "s"} from ${entry.starts} sampled Trentham placings`,
  };
}

function distanceFit(bestDistance, targetDistance) {
  const range = parseDistanceRange(bestDistance);
  if (targetDistance >= range.min && targetDistance <= range.max) return 1;
  const gap = targetDistance < range.min ? range.min - targetDistance : targetDistance - range.max;
  return Math.max(0, 1 - gap / 600);
}

function barrierFit(barrier, targetDistance) {
  if (!Number.isFinite(barrier)) return 0.5;

  if (targetDistance <= 1200) {
    if (barrier <= 4) return 0.92;
    if (barrier <= 8) return 0.72;
    return 0.48;
  }

  if (targetDistance <= 1600) {
    if (barrier <= 3) return 0.86;
    if (barrier <= 8) return 0.72;
    return 0.58;
  }

  if (barrier <= 6) return 0.75;
  return 0.64;
}

function freshnessFit(daysSince) {
  if (!Number.isFinite(daysSince)) return 0.55;
  if (daysSince >= 14 && daysSince <= 42) return 1;
  if (daysSince <= 70) return 0.82;
  if (daysSince <= 110) return 0.66;
  return 0.5;
}

function weatherFit(trackBucket, weather, wetFit) {
  const wetScore = (Number(wetFit) || 3) / 5;
  if (trackBucket === "soft") return wetScore;
  if (trackBucket === "heavy") return Math.max(0.2, wetScore - 0.1);
  if (weather === "Rain" || weather === "Showers") return Math.min(1, wetScore + 0.08);
  return 0.65 + ((5 - (Number(wetFit) || 3)) / 25);
}

function fieldScore(runner, raceConfig) {
  const targetDistance = Number(raceConfig.distance);
  const trackBucket = goingBucket(raceConfig.going);
  const form = parseFormFigures(runner.form);
  const seasonHorse = seasonHorseScore(runner);
  const horseStat = statScore(seasonStats.horses, runner.horse, trackBucket, targetDistance);
  const trainerStat = statScore(seasonStats.trainers, runner.trainer, trackBucket, targetDistance);
  const jockeyStat = statScore(seasonStats.jockeys, runner.jockey, trackBucket, targetDistance);
  const distance = distanceFit(runner.bestDistance, targetDistance);
  const barrier = barrierFit(Number(runner.barrier), targetDistance);
  const freshness = freshnessFit(Number(runner.daysSince));
  const trackAbility = Math.max(0.2, (Number(runner.courseFit) || 3) / 5);
  const weather = weatherFit(trackBucket, raceConfig.weather, runner.wetFit);

  const total =
    (form.score * 24) +
    (seasonHorse * 18) +
    (horseStat.score * 10) +
    (trainerStat.score * 12) +
    (jockeyStat.score * 10) +
    (distance * 12) +
    (weather * 10) +
    (trackAbility * 6) +
    (barrier * 2) +
    (freshness * 2);

  return {
    horse: runner.horse,
    trainer: runner.trainer,
    jockey: runner.jockey,
    score: Number(total.toFixed(1)),
    confidence: total >= 77 ? "High" : total >= 66 ? "Medium" : "Speculative",
    reasons: [
      `Form ${runner.form || "n/a"} (${Math.round(form.score * 100)}%)`,
      `Season record ${runner.seasonWins || 0}-${runner.seasonPlaces || 0}-${runner.seasonRuns || 0}`,
      `Horse sample: ${horseStat.descriptor}`,
      `Trainer sample: ${trainerStat.descriptor}`,
      `Jockey sample: ${jockeyStat.descriptor}`,
    ],
    breakdown: {
      form: Math.round(form.score * 24),
      season: Math.round(seasonHorse * 18),
      horse: Math.round(horseStat.score * 10),
      trainer: Math.round(trainerStat.score * 12),
      jockey: Math.round(jockeyStat.score * 10),
      distance: Math.round(distance * 12),
      weather: Math.round(weather * 10),
      course: Math.round(trackAbility * 6),
      barrier: Math.round(barrier * 2),
      freshness: Math.round(freshness * 2),
    },
  };
}

function renderRunners() {
  runnerBody.innerHTML = "";

  runners.forEach((runner, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input class="table-input" data-key="horse" data-index="${index}" value="${runner.horse}" /></td>
      <td><input class="table-input" data-key="trainer" data-index="${index}" value="${runner.trainer}" /></td>
      <td><input class="table-input" data-key="jockey" data-index="${index}" value="${runner.jockey}" /></td>
      <td><input class="table-input small" data-key="seasonRuns" data-index="${index}" type="number" min="1" value="${runner.seasonRuns}" /></td>
      <td><input class="table-input small" data-key="seasonWins" data-index="${index}" type="number" min="0" value="${runner.seasonWins}" /></td>
      <td><input class="table-input small" data-key="seasonPlaces" data-index="${index}" type="number" min="0" value="${runner.seasonPlaces}" /></td>
      <td><input class="table-input small" data-key="barrier" data-index="${index}" type="number" value="${runner.barrier}" /></td>
      <td><input class="table-input small" data-key="form" data-index="${index}" value="${runner.form}" /></td>
      <td><input class="table-input" data-key="bestDistance" data-index="${index}" value="${runner.bestDistance}" /></td>
      <td><input class="table-input small" data-key="wetFit" data-index="${index}" type="number" min="1" max="5" value="${runner.wetFit}" /></td>
      <td><input class="table-input small" data-key="courseFit" data-index="${index}" type="number" min="1" max="5" value="${runner.courseFit}" /></td>
      <td><input class="table-input small" data-key="daysSince" data-index="${index}" type="number" min="0" value="${runner.daysSince}" /></td>
      <td><button class="inline-button" data-remove="${index}" type="button">Remove</button></td>
    `;
    runnerBody.appendChild(row);
  });
}

function parseDateOnly(value) {
  return new Date(`${value}T00:00:00`);
}

function daysBetween(earlier, later) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.round((later - earlier) / millisecondsPerDay);
}

function renderResults() {
  const config = selectedRace || {
    raceName: "No race selected",
    date: document.querySelector("#race-date").value,
    distance: 1200,
    going: "Soft5",
    weather: "Fine",
  };
  if (!runners.length) {
    resultsRoot.innerHTML = `<div class="empty-state">Add at least one runner to score the field.</div>`;
    return;
  }

  const ranked = runners
    .map((runner) => fieldScore(runner, config))
    .sort((left, right) => right.score - left.score);

  resultsRoot.innerHTML = `
    <div class="results-list">
      ${ranked
        .map((result, index) => `
          <article class="result-card">
            <div class="result-top">
              <div>
                <p class="eyebrow">Rank ${index + 1}</p>
                <h3>${result.horse}</h3>
                <p>${result.trainer} • ${result.jockey} • ${result.confidence}</p>
              </div>
              <div class="result-score">${result.score}</div>
            </div>
            <p class="mini-note">${config.raceName} • ${config.distance}m • ${config.going} • ${config.weather}</p>
            <div class="breakdown">
              <span>Form ${result.breakdown.form}</span>
              <span>Season ${result.breakdown.season}</span>
              <span>Horse ${result.breakdown.horse}</span>
              <span>Trainer ${result.breakdown.trainer}</span>
              <span>Jockey ${result.breakdown.jockey}</span>
              <span>Distance ${result.breakdown.distance}</span>
              <span>Weather ${result.breakdown.weather}</span>
              <span>Course ${result.breakdown.course}</span>
            </div>
            <p>${result.reasons.join(" | ")}</p>
          </article>
        `)
        .join("")}
    </div>
  `;
}

function meetingRacesForDate(dateValue) {
  return seasonResults
    .filter((race) => race.date === dateValue)
    .sort((left, right) => left.distance - right.distance || left.raceName.localeCompare(right.raceName));
}

function groupedMeetings() {
  const byDate = new Map();

  seasonResults.forEach((race) => {
    if (!byDate.has(race.date)) {
      byDate.set(race.date, []);
    }
    byDate.get(race.date).push(race);
  });

  return [...byDate.entries()]
    .map(([date, races]) => ({
      date,
      races: races.sort((left, right) => left.distance - right.distance || left.raceName.localeCompare(right.raceName)),
    }))
    .sort((left, right) => left.date.localeCompare(right.date));
}

function nextUpcomingMeeting(baseDateValue = "") {
  const baseDate = baseDateValue || new Date().toISOString().slice(0, 10);
  return groupedMeetings().find((meeting) => meeting.date >= baseDate) || groupedMeetings().slice(-1)[0] || null;
}

function syncMeetingPicker(selectedRaceName = "") {
  const dateValue = document.querySelector("#race-date").value;
  currentMeetingRaces = meetingRacesForDate(dateValue);
  meetingRaceSelect.innerHTML = "";

  if (!currentMeetingRaces.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No bundled races for this date";
    meetingRaceSelect.appendChild(option);
    meetingRaceSelect.disabled = true;
    meetingSummary.textContent = `No bundled Trentham meeting is loaded for ${dateValue || "this date"}.`;
    return;
  }

  meetingRaceSelect.disabled = false;
  currentMeetingRaces.forEach((race) => {
    const option = document.createElement("option");
    option.value = race.raceName;
    const pendingLabel = race.status === "fields-pending" ? " • Fields pending" : "";
    option.textContent = `${race.raceName} • ${race.distance}m • ${race.className}${pendingLabel}`;
    if (race.raceName === selectedRaceName) {
      option.selected = true;
    }
    meetingRaceSelect.appendChild(option);
  });

  if (!meetingRaceSelect.value && currentMeetingRaces[0]) {
    meetingRaceSelect.value = currentMeetingRaces[0].raceName;
  }

  const pendingCount = currentMeetingRaces.filter((race) => race.status === "fields-pending").length;
  const summaryText = pendingCount
    ? `${currentMeetingRaces.length} bundled Trentham races loaded for ${dateValue}. ${pendingCount} race${pendingCount === 1 ? "" : "s"} still have fields pending.`
    : `${currentMeetingRaces.length} bundled Trentham race${currentMeetingRaces.length === 1 ? "" : "s"} loaded for ${dateValue}.`;
  meetingSummary.innerHTML = `
    <p>${summaryText}</p>
    <div class="review-meta">
      ${currentMeetingRaces
        .map((race) => `<span class="pill">${race.raceName} • ${race.distance}m${race.status === "fields-pending" ? " • Pending" : ""}</span>`)
        .join("")}
    </div>
  `;
}

function applyMeetingRace(raceName) {
  const race = currentMeetingRaces.find((entry) => entry.raceName === raceName);
  if (!race) {
    return;
  }
  selectedRace = race;
}

function loadMeetingForDate(dateValue, preferredRaceName = "") {
  currentMeetingRaces = meetingRacesForDate(dateValue);
  syncMeetingPicker(preferredRaceName);

  if (!currentMeetingRaces.length) {
    renderResults();
    renderRecentReview();
    return;
  }

  const raceNameToUse = preferredRaceName && currentMeetingRaces.some((race) => race.raceName === preferredRaceName)
    ? preferredRaceName
    : meetingRaceSelect.value;

  meetingRaceSelect.value = raceNameToUse;
  applyMeetingRace(raceNameToUse);
  renderResults();
  renderRecentReview();
}

function renderRecentReview() {
  const raceDate = document.querySelector("#race-date").value;
  if (!raceDate) {
    recentReviewRoot.innerHTML = `<div class="empty-state">Set a race date to review the previous 14 days.</div>`;
    return;
  }

  const targetDate = parseDateOnly(raceDate);
  const runnerNames = new Set(runners.map((runner) => normalizeName(runner.horse)));
  const trainerNames = new Set(runners.map((runner) => normalizeName(runner.trainer)));
  const jockeyNames = new Set(runners.map((runner) => normalizeName(runner.jockey)));

  const recentRaces = seasonResults
    .map((race) => {
      const raceDate = parseDateOnly(race.date);
      const gap = daysBetween(raceDate, targetDate);
      const matchingResults = race.results.filter((result) =>
        runnerNames.has(normalizeName(result.horse)) ||
        trainerNames.has(normalizeName(result.trainer)) ||
        jockeyNames.has(normalizeName(result.jockey))
      );

      return {
        ...race,
        gap,
        matchingResults,
      };
    })
    .filter((race) => race.gap >= 0 && race.gap <= 14)
    .sort((left, right) => right.date.localeCompare(left.date));

  if (!recentRaces.length) {
    recentReviewRoot.innerHTML = `
      <div class="empty-state">
        No bundled races fall within the 14 days before ${raceDate}. Adjust the race date or expand the dataset if you want more recent review coverage.
      </div>
    `;
    return;
  }

  recentReviewRoot.innerHTML = `
    <div class="review-stack">
      ${recentRaces
        .map((race) => `
          <article class="review-card">
            <p class="eyebrow">${race.date} • ${race.gap} day${race.gap === 1 ? "" : "s"} before target race</p>
            <h3>${race.raceName}</h3>
            <div class="review-meta">
              <span class="pill">${race.distance}m</span>
              <span class="pill">${race.className}</span>
              <span class="pill">${race.going}</span>
              <span class="pill">${race.weather}</span>
            </div>
            ${
              race.matchingResults.length
                ? `
                  <p>Field overlap found with the current Trentham target field:</p>
                  <ul class="review-list">
                    ${race.matchingResults
                      .map((result) => `<li>${result.horse} ran ${ordinal(result.position)} for ${result.trainer} with ${result.jockey}</li>`)
                      .join("")}
                  </ul>
                `
                : `<p>No direct horse, trainer, or jockey overlap with the current field, but this race is still inside the previous two-week review window.</p>`
            }
          </article>
        `)
        .join("")}
    </div>
  `;
}

function renderUpcomingMeetings() {
  const today = new Date().toISOString().slice(0, 10);
  const meetings = groupedMeetings().filter((meeting) => meeting.date >= today);
  const nextMeeting = meetings[0] || groupedMeetings().slice(-1)[0] || null;

  if (!nextMeeting) {
    upcomingMeetingsRoot.innerHTML = `<div class="empty-state">No bundled Trentham meetings are available.</div>`;
    return;
  }

  upcomingMeetingsRoot.innerHTML = `
    <div class="meeting-list">
      <article class="meeting-card">
        <p class="eyebrow">Next meeting</p>
        <h3>${nextMeeting.date}</h3>
        <p>${nextMeeting.races.length} race${nextMeeting.races.length === 1 ? "" : "s"} on the bundled card.</p>
        <p>${nextMeeting.races.some((race) => race.status === "fields-pending") ? "Fields are still pending for part or all of this card." : "Fields are available in the bundled dataset."}</p>
        <div class="review-meta">
          ${nextMeeting.races.map((race) => `<span class="pill">${race.raceName} • ${race.distance}m</span>`).join("")}
        </div>
      </article>
      ${
        meetings.length > 1
          ? meetings
              .slice(1, 4)
              .map(
                (meeting) => `
                  <article class="meeting-card">
                    <p class="eyebrow">Upcoming</p>
                    <h3>${meeting.date}</h3>
                    <p>${meeting.races.length} race${meeting.races.length === 1 ? "" : "s"} available in the dataset.</p>
                  </article>
                `
              )
              .join("")
          : ""
      }
    </div>
  `;
}

function focusNextUpcomingMeeting() {
  const nextMeeting = nextUpcomingMeeting();
  if (!nextMeeting) {
    return;
  }

  document.querySelector("#race-date").value = nextMeeting.date;
  loadMeetingForDate(nextMeeting.date);
}

function ordinal(value) {
  if (value === 1) return "1st";
  if (value === 2) return "2nd";
  if (value === 3) return "3rd";
  return `${value}th`;
}

function topEntries(map, count = 3) {
  return [...map.entries()]
    .map(([name, value]) => ({
      name,
      wins: value.wins,
      starts: value.starts,
      score: value.points / value.starts,
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, count);
}

function titleCase(name) {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function renderInsights() {
  const meetings = seasonStats.meetings.size;
  const averageDistanceValue = Math.round(
    seasonStats.distances.reduce((sum, value) => sum + value, 0) / seasonStats.distances.length
  );
  const dominantGoing = [...seasonStats.goings.entries()].sort((a, b) => b[1] - a[1])[0];
  const dominantWeather = [...seasonStats.weather.entries()].sort((a, b) => b[1] - a[1])[0];
  const topTrainer = topEntries(seasonStats.trainers, 1)[0];
  const topJockey = topEntries(seasonStats.jockeys, 1)[0];
  const topHorse = topEntries(seasonStats.horses, 1)[0];

  insightsGrid.innerHTML = `
    <article class="insight-card">
      <p class="eyebrow">Meetings Sampled</p>
      <div class="insight-value">${meetings}</div>
      <p>${seasonStats.races} curated Trentham races from this season sample.</p>
    </article>
    <article class="insight-card">
      <p class="eyebrow">Dominant Surface</p>
      <div class="insight-value">${dominantGoing[0]}</div>
      <p>${dominantGoing[1]} races in the bundled sample were run on this going.</p>
    </article>
    <article class="insight-card">
      <p class="eyebrow">Common Weather</p>
      <div class="insight-value">${dominantWeather[0]}</div>
      <p>${dominantWeather[1]} races in the sample were run under ${dominantWeather[0].toLowerCase()} skies.</p>
    </article>
    <article class="insight-card">
      <p class="eyebrow">Top Trainer Signal</p>
      <div class="insight-value">${titleCase(topTrainer.name)}</div>
      <p>${topTrainer.wins} wins from ${topTrainer.starts} sampled placings at Trentham.</p>
    </article>
    <article class="insight-card">
      <p class="eyebrow">Top Jockey Signal</p>
      <div class="insight-value">${titleCase(topJockey.name)}</div>
      <p>${topJockey.wins} wins from ${topJockey.starts} sampled placings.</p>
    </article>
    <article class="insight-card">
      <p class="eyebrow">Standout Horse Signal</p>
      <div class="insight-value">${titleCase(topHorse.name)}</div>
      <p>${topHorse.wins} win signal in the bundled sample, average race trip ${averageDistanceValue}m.</p>
    </article>
  `;

  sourcesRoot.innerHTML = sourceLinks
    .map((source) => `<span class="pill"><a href="${source.url}" target="_blank" rel="noreferrer">${source.label} official results</a></span>`)
    .join("");

  seasonStrip.innerHTML = `
    <article>${meetings} meetings sampled</article>
    <article>${seasonStats.races} curated races</article>
    <article>Dominant going: ${dominantGoing[0]}</article>
    <article>Typical weather: ${dominantWeather[0]}</article>
    <article>Avg trip: ${averageDistanceValue}m</article>
  `;
}

function setDataStatus(message, tone = "good") {
  dataStatus.textContent = message;
  dataStatus.className = tone === "warn" ? "status-warn" : "status-good";
}

async function refreshSeasonData() {
  try {
    setDataStatus("Data source: refreshing...", "good");
    const response = await fetch(`./trentham-season.json?ts=${Date.now()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    seasonResults = Array.isArray(payload.seasonResults)
      ? payload.seasonResults
      : structuredClone(fallbackSeasonResults);
    sourceLinks = Array.isArray(payload.sourceLinks)
      ? payload.sourceLinks
      : structuredClone(fallbackSourceLinks);
    seasonStats = buildSeasonStats();
    renderInsights();
    renderUpcomingMeetings();
    if (!meetingRacesForDate(document.querySelector("#race-date").value).length) {
      focusNextUpcomingMeeting();
    } else {
      loadMeetingForDate(document.querySelector("#race-date").value, meetingRaceSelect.value);
    }
    setDataStatus(`Data source: refreshed ${new Date().toLocaleTimeString()}`, "good");
  } catch (error) {
    seasonResults = structuredClone(fallbackSeasonResults);
    sourceLinks = structuredClone(fallbackSourceLinks);
    seasonStats = buildSeasonStats();
    renderInsights();
    renderUpcomingMeetings();
    if (!meetingRacesForDate(document.querySelector("#race-date").value).length) {
      focusNextUpcomingMeeting();
    } else {
      loadMeetingForDate(document.querySelector("#race-date").value, meetingRaceSelect.value);
    }
    setDataStatus("Data source: refresh failed, using bundled fallback", "warn");
  }
}

function loadExample(example, raceName, distance, going, weather) {
  runners = structuredClone(example);
  selectedRace = {
    raceName,
    date: document.querySelector("#race-date").value,
    distance,
    going,
    weather,
  };
  renderRunners();
  syncMeetingPicker(raceName);
  renderResults();
  renderRecentReview();
}

document.querySelector("#load-sprint").addEventListener("click", () => {
  document.querySelector("#race-date").value = "2026-03-01";
  loadExample(sprintExample, "Sample Trentham Sprint", 1200, "Soft5", "Fine");
});

document.querySelector("#load-mile").addEventListener("click", () => {
  document.querySelector("#race-date").value = "2026-01-31";
  loadExample(mileExample, "Sample Trentham Mile", 1600, "Soft6", "Overcast");
});

document.querySelector("#add-runner").addEventListener("click", () => {
  runners.push({
    horse: "New Runner",
    trainer: "Trainer",
    jockey: "Jockey",
    seasonRuns: 5,
    seasonWins: 1,
    seasonPlaces: 2,
    barrier: 6,
    form: "333",
    bestDistance: "1200-1400",
    wetFit: 3,
    courseFit: 3,
    daysSince: 28,
  });
  renderRunners();
});

document.querySelector("#score-race").addEventListener("click", renderResults);
document.querySelector("#refresh-race").addEventListener("click", () => {
  refreshSeasonData();
});
meetingRaceSelect.addEventListener("input", () => {
  applyMeetingRace(meetingRaceSelect.value);
  renderResults();
  renderRecentReview();
});

runnerBody.addEventListener("input", (event) => {
  const { index, key } = event.target.dataset;
  if (index === undefined || !key) return;
  runners[Number(index)][key] = event.target.value;
});

runnerBody.addEventListener("click", (event) => {
  const removeIndex = event.target.dataset.remove;
  if (removeIndex === undefined) return;
  runners.splice(Number(removeIndex), 1);
  renderRunners();
  renderResults();
  renderRecentReview();
});

["#race-date"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", () => {
    loadMeetingForDate(document.querySelector("#race-date").value);
  });
});

renderRunners();
renderInsights();
renderUpcomingMeetings();
loadMeetingForDate(document.querySelector("#race-date").value);
refreshSeasonData();
