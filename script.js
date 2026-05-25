const dateOptions = {
    timeZone: "Asia/Singapore",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

function updateDate() {
    const singaporeDate = new Date().toLocaleDateString("en-SG", dateOptions);
    document.getElementById("date-line").textContent = "Today is " + singaporeDate + " in Singapore";
    scheduleMidnightUpdate();
}

function scheduleMidnightUpdate() {
    const now = new Date();
    const nextMidnight = new Date(now.toLocaleDateString("en-US", { timeZone: "Asia/Singapore" }));
    nextMidnight.setDate(nextMidnight.getDate() + 1);
    const msUntilMidnight = nextMidnight - now;
    setTimeout(updateDate, msUntilMidnight);
}

updateDate();

function updateTime() {
    const timeOptions = {
        timeZone: "Asia/Singapore",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };
    const singaporeTime = new Date().toLocaleTimeString("en-SG", timeOptions);
    document.getElementById("time-line").textContent = "The time is now " + singaporeTime;
}

// Re-aligns to the wall clock on every tick by calculating the exact ms remaining
// until the next real second boundary, rather than blindly repeating every 1000ms.
// This prevents the display from drifting out of phase with actual time over long sessions.
function scheduleNextTick() {
    const msUntilNextSecond = 1000 - (Date.now() % 1000);
    setTimeout(() => {
        updateTime();
        scheduleNextTick(); // recurse to re-align on each subsequent tick
    }, msUntilNextSecond);
}

updateTime();
scheduleNextTick();
