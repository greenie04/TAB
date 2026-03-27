const DATA_URL = "./trentham-tomorrow.json";

const raceBody = document.querySelector("#race-body");
const meetingSummary = document.querySelector("#meeting-summary");
const sources = document.querySelector("#sources");
const dataStatus = document.querySelector("#data-status");
const refreshButton = document.querySelector("#refresh-data");
const embeddedMeetingData = document.querySelector("#embedded-meeting-data");

function renderMeeting(data) {
  meetingSummary.innerHTML = `
    <p class="eyebrow">Meeting</p>
    <h2>${data.meetingName}</h2>
    <p class="summary-meta">${data.date} • ${data.venue} • First race ${data.firstRaceTime}</p>
    <p class="summary-meta">Refreshed from official race fields on ${data.refreshedOn}.</p>
  `;

  raceBody.innerHTML = data.races
    .map(
      (race) => `
        <tr>
          <td>${data.date}</td>
          <td>Race ${race.number}: ${race.name}</td>
          <td>${race.time}</td>
          <td>
            <div class="prediction">
              <span><strong>1st:</strong> ${race.first}</span>
              <span><strong>2nd:</strong> ${race.second}</span>
            </div>
          </td>
        </tr>
      `
    )
    .join("");

  sources.innerHTML = data.sources
    .map((source) => `<a class="pill" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");
}

async function loadMeeting() {
  dataStatus.textContent = "Refreshing latest card...";
  try {
    const response = await fetch(`${DATA_URL}?ts=${Date.now()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    renderMeeting(data);
    dataStatus.textContent = `Loaded ${data.races.length} races at ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    try {
      const fallbackData = JSON.parse(embeddedMeetingData.textContent);
      renderMeeting(fallbackData);
      dataStatus.textContent = "Showing embedded predictions. Refresh may be blocked on local file pages.";
    } catch {
      dataStatus.textContent = "Could not refresh the card data.";
    }
  }
}

refreshButton.addEventListener("click", loadMeeting);

loadMeeting();
