/* ========================================================
   SELAMATVN — VIETNAM LIVE QIBLAT COMPASS & PRAYER TIMES
   ======================================================== */

const KAABA_LAT = 21.422487;
const KAABA_LNG = 39.826206;
const VIETNAM_TZ = 'Asia/Ho_Chi_Minh';

const VIETNAM_CITIES = {
  hcmc: { name: 'Ho Chi Minh City (Saigon)', lat: 10.8231, lng: 106.6297 },
  hanoi: { name: 'Hanoi', lat: 21.0285, lng: 105.8542 },
  danang: { name: 'Da Nang', lat: 16.0544, lng: 108.2022 },
  phuquoc: { name: 'Phu Quoc Island', lat: 10.2899, lng: 103.9840 },
  nhatrang: { name: 'Nha Trang', lat: 12.2388, lng: 109.1967 },
  hue: { name: 'Hue', lat: 16.4637, lng: 107.5909 },
  hoian: { name: 'Hoi An', lat: 15.8801, lng: 108.3380 },
  dalat: { name: 'Da Lat', lat: 11.9404, lng: 108.4583 },
  muine: { name: 'Mui Ne', lat: 10.9333, lng: 108.2833 },
  sapa: { name: 'Sapa', lat: 22.3364, lng: 103.8438 }
};

const PRAYER_META = [
  { key: 'Fajr', label: 'Fajr (Subuh)', sub: 'Dawn prayer', icon: 'fa-cloud-moon' },
  { key: 'Sunrise', label: 'Sunrise (Syuruk)', sub: 'End of Fajr time', icon: 'fa-sun' },
  { key: 'Dhuhr', label: 'Dhuhr (Zohor)', sub: 'Midday prayer', icon: 'fa-sun' },
  { key: 'Asr', label: 'Asr (Asar)', sub: 'Afternoon prayer', icon: 'fa-cloud-sun' },
  { key: 'Maghrib', label: 'Maghrib', sub: 'Sunset prayer', icon: 'fa-moon' },
  { key: 'Isha', label: 'Isha (Isyak)', sub: 'Night prayer', icon: 'fa-star-and-crescent' }
];

const METHOD_ANGLES = {
  11: { fajr: 20, isha: 18, ishaMinutes: 0 },     // MUIS / Southeast Asia (default)
  3:  { fajr: 18, isha: 17, ishaMinutes: 0 },     // Muslim World League
  4:  { fajr: 18.5, isha: 0, ishaMinutes: 90 },   // Umm al-Qura
  2:  { fajr: 15, isha: 15, ishaMinutes: 0 }      // ISNA
};

let activeLocation = { ...VIETNAM_CITIES.hcmc };
let activeMethod = 11;
let activeTimeZone = VIETNAM_TZ;
let activeTzOffset = 7;
let currentQiblatBearing = 288.7;
let currentTimings = null;
let deviceHeading = null;
let sensorActive = false;
let isPrayerLiveSynced = false;

document.addEventListener('DOMContentLoaded', () => {
  initCompassTicks();
  initControls();
  initMobileNav();
  updateVietnamClock();
  setInterval(updateVietnamClock, 1000);
  refreshLocationData();
  autoDetectGps();
  autoStartLiveCompass();
});

function initMobileNav() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const backdrop = document.getElementById('navBackdrop');
  if (!mobileBtn || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove('mobile-open');
    mobileBtn.classList.remove('is-active');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('mobile-open');
    mobileBtn.classList.toggle('is-active', isOpen);
    backdrop?.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  backdrop?.addEventListener('click', closeMenu);
  navMenu.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
}

function initControls() {
  const sensorBtn = document.getElementById('toggleSensorBtn');
  sensorBtn?.addEventListener('click', toggleCompassSensor);
}

function findNearestVietnamCity(lat, lng) {
  let nearest = null;
  let minDist = Infinity;

  for (const city of Object.values(VIETNAM_CITIES)) {
    const dLat = toRad(city.lat - lat);
    const dLng = toRad(city.lng - lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat)) * Math.cos(toRad(city.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const distKm = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    if (distKm < minDist) {
      minDist = distKm;
      nearest = city;
    }
  }

  return minDist <= 80 ? nearest.name : null;
}

function autoDetectGps() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      const inVietnam = latitude >= 8 && latitude <= 24 && longitude >= 102 && longitude <= 110;
      const nearestVn = inVietnam ? findNearestVietnamCity(latitude, longitude) : null;

      if (inVietnam) {
        activeTimeZone = VIETNAM_TZ;
        activeTzOffset = 7;
        activeLocation = {
          name: nearestVn ? `Live GPS • ${nearestVn}` : `Live GPS (${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E)`,
          lat: latitude,
          lng: longitude
        };
      } else {
        activeTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || VIETNAM_TZ;
        activeTzOffset = -new Date().getTimezoneOffset() / 60;
        activeLocation = {
          name: `Live GPS (${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°)`,
          lat: latitude,
          lng: longitude
        };

        const pill = document.getElementById('liveLocationPill');
        const clockTitle = document.getElementById('liveClockTitle');
        const clockTz = document.getElementById('liveClockTz');
        const sign = activeTzOffset >= 0 ? '+' : '';
        if (pill) pill.innerHTML = `<span class="live-dot"></span> Live GPS Detected (UTC${sign}${activeTzOffset})`;
        if (clockTitle) clockTitle.innerHTML = '<i class="fa-regular fa-clock"></i> Local GPS Time';
        if (clockTz) clockTz.textContent = `UTC${sign}${activeTzOffset}`;
      }

      refreshLocationData();
      resolveSpecificPlaceName(latitude, longitude);
    },
    () => {
      // Silently stay on Vietnam default (Ho Chi Minh City) if GPS is denied or unavailable
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 300000 }
  );
}

async function resolveSpecificPlaceName(lat, lng) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return;

    const data = await res.json();
    const parts = [];
    for (const raw of [data.locality, data.city, data.principalSubdivision, data.countryName]) {
      const clean = String(raw || '').trim();
      if (clean && !parts.some(p => p.toLowerCase() === clean.toLowerCase())) {
        parts.push(clean);
      }
    }

    if (parts.length > 0) {
      // Keep concise: up to 3 most specific parts (e.g. "District 1, Ho Chi Minh City, Vietnam")
      activeLocation.name = parts.slice(0, 3).join(', ');
      updateLocationLabels();
    }
  } catch {
    // Keep existing coordinate / nearest-city name if reverse geocoding fails
  }
}

// ========================================================
// 1. QIBLAT BEARING & COMPASS RENDERING
// ========================================================
function toRad(deg) {
  return (deg * Math.PI) / 180;
}

function toDeg(rad) {
  return (rad * 180) / Math.PI;
}

function calculateQiblatBearing(lat, lng) {
  const phi1 = toRad(lat);
  const phi2 = toRad(KAABA_LAT);
  const dLambda = toRad(KAABA_LNG - lng);

  const y = Math.sin(dLambda);
  const x = Math.cos(phi1) * Math.tan(phi2) - Math.sin(phi1) * Math.cos(dLambda);
  let bearing = toDeg(Math.atan2(y, x));
  return (bearing + 360) % 360;
}

function calculateKaabaDistanceKm(lat, lng) {
  const R = 6371;
  const dLat = toRad(KAABA_LAT - lat);
  const dLng = toRad(KAABA_LNG - lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat)) * Math.cos(toRad(KAABA_LAT)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function bearingToCardinal(deg) {
  const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return dirs[Math.round(deg / 22.5) % 16];
}

function bearingToFullName(deg) {
  const dirs = [
    'North', 'North-Northeast', 'Northeast', 'East-Northeast',
    'East', 'East-Southeast', 'Southeast', 'South-Southeast',
    'South', 'South-Southwest', 'Southwest', 'West-Southwest',
    'West', 'West-Northwest', 'Northwest', 'North-Northwest'
  ];
  return dirs[Math.round(deg / 22.5) % 16];
}

function initCompassTicks() {
  const svg = document.getElementById('compassSvg');
  if (!svg) return;

  const labels = [
    { text: 'N', deg: 0 },
    { text: 'NE', deg: 45 },
    { text: 'E', deg: 90 },
    { text: 'SE', deg: 135 },
    { text: 'S', deg: 180 },
    { text: 'SW', deg: 225 },
    { text: 'W', deg: 270 },
    { text: 'NW', deg: 315 }
  ];

  let ticks = '';
  for (let deg = 0; deg < 360; deg += 15) {
    const isMajor = deg % 45 === 0;
    const len = isMajor ? 8 : 5;
    const stroke = isMajor ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.25)';
    ticks += `<line x1="150" y1="6" x2="150" y2="${6 + len}" stroke="${stroke}" stroke-width="1.5" transform="rotate(${deg} 150 150)" />`;
  }

  const labelEls = labels.map(item => `
    <text x="150" y="34" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800"
      font-family="Outfit, sans-serif" transform="rotate(${item.deg} 150 150)">${item.text}</text>
  `).join('');

  svg.innerHTML = `
    <circle cx="150" cy="150" r="144" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1" />
    ${ticks}
    ${labelEls}
  `;
}

function updateCompassVisuals() {
  const dialRotator = document.getElementById('compassDialRotator');
  const needleLayer = document.getElementById('qiblatNeedleLayer');
  const outer = document.getElementById('compassOuter');
  const statusPill = document.getElementById('qiblaStatusPill');
  const phoneDirEl = document.getElementById('statPhoneDirection');
  const phoneSubEl = document.getElementById('statPhoneSub');

  if (sensorActive && deviceHeading !== null) {
    // Dial rotates opposite to heading so North stays toward true North
    if (dialRotator) dialRotator.style.transform = `rotate(${-deviceHeading}deg)`;
    const relativeQiblat = (currentQiblatBearing - deviceHeading + 360) % 360;
    if (needleLayer) needleLayer.style.transform = `rotate(${relativeQiblat}deg)`;

    const diff = Math.min(relativeQiblat, 360 - relativeQiblat);
    const isAligned = diff <= 10;
    if (outer) outer.classList.toggle('qiblat-aligned', isAligned);

    if (phoneDirEl) phoneDirEl.textContent = `${Math.round(deviceHeading)}°`;
    if (phoneSubEl) phoneSubEl.textContent = bearingToCardinal(deviceHeading);

    if (statusPill) {
      statusPill.classList.remove('is-perfect', 'is-turning');
      if (isAligned) {
        statusPill.textContent = 'PERFECT';
        statusPill.classList.add('is-perfect');
      } else {
        statusPill.textContent = relativeQiblat <= 180 ? `TURN RIGHT ${Math.round(diff)}°` : `TURN LEFT ${Math.round(diff)}°`;
        statusPill.classList.add('is-turning');
      }
    }
  } else {
    if (dialRotator) dialRotator.style.transform = 'rotate(0deg)';
    if (needleLayer) needleLayer.style.transform = `rotate(${currentQiblatBearing}deg)`;
    if (outer) outer.classList.remove('qiblat-aligned');

    if (phoneDirEl) phoneDirEl.textContent = '--°';
    if (phoneSubEl) phoneSubEl.textContent = sensorActive ? 'Waiting sensor...' : 'Sensor off';

    if (statusPill) {
      statusPill.classList.remove('is-perfect', 'is-turning');
      statusPill.textContent = 'TRUE NORTH';
    }
  }
}

function startLiveCompass() {
  const btn = document.getElementById('toggleSensorBtn');
  sensorActive = true;
  window.addEventListener('deviceorientationabsolute', handleOrientation, true);
  window.addEventListener('deviceorientation', handleOrientation, true);
  btn?.classList.add('active');
  if (btn) btn.innerHTML = '<i class="fa-regular fa-compass"></i> Live Compass ON';
  updateCompassVisuals();
}

function stopLiveCompass() {
  const btn = document.getElementById('toggleSensorBtn');
  sensorActive = false;
  deviceHeading = null;
  window.removeEventListener('deviceorientationabsolute', handleOrientation, true);
  window.removeEventListener('deviceorientation', handleOrientation, true);
  btn?.classList.remove('active');
  if (btn) btn.innerHTML = '<i class="fa-regular fa-compass"></i> Enable Live Compass';
  updateCompassVisuals();
}

function autoStartLiveCompass() {
  const needsGesture =
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function';

  if (!needsGesture) {
    startLiveCompass();
    return;
  }

  // iOS Safari requires a user gesture to grant compass permission
  const btn = document.getElementById('toggleSensorBtn');
  if (btn) btn.innerHTML = '<i class="fa-regular fa-compass"></i> Tap to Enable Live Compass';
}

async function toggleCompassSensor() {
  if (sensorActive) {
    stopLiveCompass();
    return;
  }

  try {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      const response = await DeviceOrientationEvent.requestPermission();
      if (response !== 'granted') {
        alert('Compass sensor permission was denied. Showing true-North Qibla direction.');
        return;
      }
    }

    startLiveCompass();
  } catch {
    alert('Compass sensor is unavailable on this device. Showing true-North Qibla direction.');
  }
}

function handleOrientation(event) {
  if (!sensorActive) return;

  let heading = null;
  if (typeof event.webkitCompassHeading === 'number') {
    heading = event.webkitCompassHeading;
  } else if (typeof event.alpha === 'number') {
    heading = (360 - event.alpha) % 360;
  }

  if (heading === null || Number.isNaN(heading)) return;

  deviceHeading = heading;
  updateCompassVisuals();
}

// ========================================================
// 2. VIETNAM LIVE CLOCK & HIJRI DATE
// ========================================================
function getVietnamTimeParts() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: activeTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const parts = {};
  fmt.formatToParts(now).forEach(p => { parts[p.type] = p.value; });
  return {
    now,
    year: parseInt(parts.year, 10),
    month: parseInt(parts.month, 10),
    day: parseInt(parts.day, 10),
    hour: parseInt(parts.hour, 10) % 24,
    minute: parseInt(parts.minute, 10),
    second: parseInt(parts.second, 10)
  };
}

function updateVietnamClock() {
  const vn = getVietnamTimeParts();
  const clockEl = document.getElementById('vnLiveClock');
  const dateEl = document.getElementById('vnLiveDate');
  const hijriEl = document.getElementById('vnHijriDate');

  const pad = n => String(n).padStart(2, '0');
  if (clockEl) {
    clockEl.textContent = `${pad(vn.hour)}:${pad(vn.minute)}:${pad(vn.second)}`;
  }

  if (dateEl) {
    dateEl.textContent = new Intl.DateTimeFormat('en-US', {
      timeZone: activeTimeZone,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(vn.now);
  }

  if (hijriEl && !hijriEl.dataset.apiSet) {
    try {
      hijriEl.textContent = new Intl.DateTimeFormat('en-TN-u-ca-islamic-umalqura', {
        timeZone: activeTimeZone,
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(vn.now);
    } catch {
      hijriEl.textContent = '';
    }
  }

  if (currentTimings) {
    updatePrayerCountdown(vn);
  }
}

// ========================================================
// 3. PRAYER TIMES (LIVE API + OFFLINE ASTRONOMICAL FALLBACK)
// ========================================================
function updateLocationLabels() {
  const cityLabel = document.getElementById('qiblatCityLabel');
  if (cityLabel) cityLabel.textContent = activeLocation.name;
  setSyncBadge(
    isPrayerLiveSynced ? `Live Synced • ${activeLocation.name}` : `Calculated • ${activeLocation.name}`,
    !isPrayerLiveSynced
  );
}

function refreshLocationData() {
  currentQiblatBearing = calculateQiblatBearing(activeLocation.lat, activeLocation.lng);
  const distKm = calculateKaabaDistanceKm(activeLocation.lat, activeLocation.lng);
  const cardinal = bearingToCardinal(currentQiblatBearing);
  const fullDir = bearingToFullName(currentQiblatBearing);

  const bearingStat = document.getElementById('statQiblatBearing');
  const qiblatSub = document.getElementById('statQiblatSub');
  const panelDeg = document.getElementById('panelQiblaDeg');
  const panelCard = document.getElementById('panelQiblaCard');

  if (bearingStat) bearingStat.textContent = `${Math.round(currentQiblatBearing)}°`;
  if (qiblatSub) qiblatSub.textContent = `${cardinal} • ${distKm.toLocaleString()} km`;
  if (panelDeg) panelDeg.textContent = `Qibla Direction: ${currentQiblatBearing.toFixed(1)}°`;
  if (panelCard) panelCard.textContent = fullDir;

  updateLocationLabels();
  updateCompassVisuals();
  refreshPrayerTimes();
}

async function refreshPrayerTimes() {
  const vn = getVietnamTimeParts();
  isPrayerLiveSynced = false;
  // Immediately render astronomical calculation so UI is instant
  currentTimings = computeVietnamSolarTimes(vn.year, vn.month, vn.day, activeLocation.lat, activeLocation.lng, activeMethod);
  updateLocationLabels();
  renderPrayerList();
  updatePrayerCountdown(vn);

  // Sync live with Aladhan API for exact official tables
  const pad = n => String(n).padStart(2, '0');
  const dateStr = `${pad(vn.day)}-${pad(vn.month)}-${vn.year}`;
  const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${activeLocation.lat}&longitude=${activeLocation.lng}&method=${activeMethod}&timezonestring=${encodeURIComponent(activeTimeZone)}`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);

    if (!res.ok) return;
    const json = await res.json();
    const t = json?.data?.timings;
    if (!t) return;

    currentTimings = {
      Fajr: cleanApiTime(t.Fajr),
      Sunrise: cleanApiTime(t.Sunrise),
      Dhuhr: cleanApiTime(t.Dhuhr),
      Asr: cleanApiTime(t.Asr),
      Maghrib: cleanApiTime(t.Maghrib),
      Isha: cleanApiTime(t.Isha)
    };

    const hijri = json?.data?.date?.hijri;
    const hijriEl = document.getElementById('vnHijriDate');
    if (hijri && hijriEl) {
      hijriEl.textContent = `${hijri.day} ${hijri.month?.en || ''} ${hijri.year} AH`;
      hijriEl.dataset.apiSet = '1';
    }

    isPrayerLiveSynced = true;
    updateLocationLabels();
    renderPrayerList();
    updatePrayerCountdown(getVietnamTimeParts());
  } catch {
    // Keep offline astronomical calculation seamlessly
  }
}

function cleanApiTime(raw) {
  return String(raw || '00:00').split(' ')[0].slice(0, 5);
}

function setSyncBadge(text, isOffline) {
  const badge = document.getElementById('prayerSyncBadge');
  if (!badge) return;
  badge.textContent = text;
  badge.classList.toggle('offline', isOffline);
}

// Pure-JS astronomical prayer time fallback
function computeVietnamSolarTimes(year, month, day, lat, lng, methodId) {
  const tzOffset = activeTzOffset;
  const angles = METHOD_ANGLES[methodId] || METHOD_ANGLES[11];

  // Julian Date at 12:00 UTC
  let y = year;
  let m = month;
  if (m <= 2) { y -= 1; m += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5;

  const d = jd - 2451545.0;
  const g = (357.529 + 0.98560028 * d) % 360;
  const q = (280.459 + 0.98564736 * d) % 360;
  const L = (q + 1.915 * Math.sin(toRad(g)) + 0.020 * Math.sin(toRad(2 * g))) % 360;
  const e = 23.439 - 0.00000036 * d;

  const ra = toDeg(Math.atan2(Math.cos(toRad(e)) * Math.sin(toRad(L)), Math.cos(toRad(L)))) / 15;
  const decl = toDeg(Math.asin(Math.sin(toRad(e)) * Math.sin(toRad(L))));
  let eqTime = (q / 15) - ((ra + 24) % 24);
  if (eqTime > 12) eqTime -= 24;
  if (eqTime < -12) eqTime += 24;

  const dhuhr = 12 + tzOffset - (lng / 15) - eqTime;

  function sunHourAngle(angleDeg) {
    const cosH =
      (-Math.sin(toRad(angleDeg)) - Math.sin(toRad(lat)) * Math.sin(toRad(decl))) /
      (Math.cos(toRad(lat)) * Math.cos(toRad(decl)));
    const clamped = Math.max(-1, Math.min(1, cosH));
    return toDeg(Math.acos(clamped)) / 15;
  }

  function asrTime() {
    const shadowFactor = 1; // Shafi'i standard
    const angle = -toDeg(Math.atan(1 / (shadowFactor + Math.tan(toRad(Math.abs(lat - decl))))));
    return dhuhr + sunHourAngle(angle);
  }

  const fajr = dhuhr - sunHourAngle(angles.fajr);
  const sunrise = dhuhr - sunHourAngle(0.833);
  const asr = asrTime();
  const maghrib = dhuhr + sunHourAngle(0.833);
  const isha = angles.ishaMinutes > 0 ? maghrib + angles.ishaMinutes / 60 : dhuhr + sunHourAngle(angles.isha);

  return {
    Fajr: formatHoursToHHMM(fajr),
    Sunrise: formatHoursToHHMM(sunrise),
    Dhuhr: formatHoursToHHMM(dhuhr),
    Asr: formatHoursToHHMM(asr),
    Maghrib: formatHoursToHHMM(maghrib),
    Isha: formatHoursToHHMM(isha)
  };
}

function formatHoursToHHMM(hours) {
  const normalized = ((hours % 24) + 24) % 24;
  let h = Math.floor(normalized);
  let m = Math.round((normalized - h) * 60);
  if (m === 60) { m = 0; h = (h + 1) % 24; }
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function timeToMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function renderPrayerList(nextKey = null, nowSeconds = null) {
  const listEl = document.getElementById('prayerList');
  if (!listEl || !currentTimings) return;

  listEl.innerHTML = PRAYER_META.map(item => {
    const timeStr = currentTimings[item.key];
    const targetSec = timeToMinutes(timeStr) * 60;
    const isNext = item.key === nextKey;
    const isPassed = nowSeconds !== null && targetSec <= nowSeconds && !isNext;

    return `
      <div class="prayer-row ${isNext ? 'is-next' : ''} ${isPassed ? 'is-passed' : ''}">
        <div class="prayer-name-wrap">
          <div class="prayer-icon"><i class="fa-solid ${item.icon}"></i></div>
          <div>
            <span class="prayer-title">${item.label}</span>
            <span class="prayer-subtitle">${item.sub}</span>
          </div>
        </div>
        <div class="prayer-time-wrap">
          ${isNext ? '<span class="next-tag">Next</span>' : ''}
          <span class="prayer-time-value">${timeStr}</span>
        </div>
      </div>
    `;
  }).join('');
}

function updatePrayerCountdown(vn) {
  if (!currentTimings) return;

  const nowSec = vn.hour * 3600 + vn.minute * 60 + vn.second;
  let nextPrayer = null;
  let diffSec = 0;

  for (const item of PRAYER_META) {
    const sec = timeToMinutes(currentTimings[item.key]) * 60;
    if (sec > nowSec) {
      nextPrayer = item;
      diffSec = sec - nowSec;
      break;
    }
  }

  // After Isha, next prayer is tomorrow's Fajr
  if (!nextPrayer) {
    nextPrayer = PRAYER_META[0];
    diffSec = 24 * 3600 - nowSec + timeToMinutes(currentTimings.Fajr) * 60;
  }

  const nextNameEl = document.getElementById('nextPrayerName');
  const nextTimeEl = document.getElementById('nextPrayerCountdown');
  if (nextNameEl) nextNameEl.textContent = `${nextPrayer.label} • ${currentTimings[nextPrayer.key]}`;

  const h = Math.floor(diffSec / 3600);
  const m = Math.floor((diffSec % 3600) / 60);
  const s = diffSec % 60;
  const pad = n => String(n).padStart(2, '0');
  if (nextTimeEl) nextTimeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;

  renderPrayerList(nextPrayer.key, nowSec);
}

