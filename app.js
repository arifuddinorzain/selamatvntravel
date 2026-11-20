/**
 * WANDERLUXE VOYAGES - JAVASCRIPT APPLICATION CORE
 * Curated Luxury Travel Agency Interactive Engine
 */

// ========================================================
// 1. DATA STORE: CURATED PACKAGES & ITINERARIES
// ========================================================
const PACKAGES = [
  {
    id: 'hanoi',
    title: 'Hanoi Heritage, Old Quarter & Ha Long Bay Cruise',
    country: 'Hanoi, Vietnam',
    category: 'cultural',
    tag: 'Best Seller',
    duration: '6 Days / 5 Nights',
    groupSize: 'Max 12 Guests',
    rating: 4.96,
    reviewsCount: 342,
    basePrice: 899,
    originalPrice: 1150,
    discountText: 'Save 20%',
    image: 'assets/images/dest-hanoi.jpg',
    summary: 'Stroll around Hoan Kiem Lake and Hanoi’s vibrant Old Quarter, visit Al-Noor Mosque, enjoy authentic Halal pho, and sail overnight aboard a luxury Ha Long Bay cruise.',
    features: [
      '5-Star Boutique Stay near Hoan Kiem Lake & Old Quarter',
      'Overnight Luxury Balcony Suite Cruise in Ha Long Bay',
      'Halal-Friendly Culinary Tour & Al-Noor Mosque Visit',
      'VIP Airport Escort & Private Chauffeur Transfers'
    ],
    inclusions: [
      '5 nights in handpicked 5-star Hanoi hotels & Ha Long cruise cabin',
      'Halal-certified breakfasts, lunches & candlelit bay dinners',
      'Guided cyclo tour through Hanoi Old Quarter & Water Puppet Show',
      'Kayaking & limestone cave exploration in Ha Long Bay',
      'Comprehensive travel insurance & 24/7 WhatsApp concierge'
    ],
    upgrades: [
      'Private Seaplane Scenic Flight over Ha Long Bay (+$240)',
      'Sapa & Fansipan Cable Car 2-Day Highland Extension (+$290)',
      'Ninh Binh Trang An Private Boat Excursion (+$110)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Hanoi & Old Quarter Welcome', desc: 'VIP airport pickup and private transfer to your boutique hotel near Hoan Kiem Lake. Evening Halal Vietnamese welcome dinner.' },
      { day: 'Day 2', title: 'Hoan Kiem Lake, Al-Noor Mosque & Cultural Walk', desc: 'Morning stroll across Huc Bridge, visit historic Al-Noor Mosque, explore Temple of Literature, and enjoy traditional Egg Coffee.' },
      { day: 'Day 3', title: 'Ha Long Bay Luxury Overnight Cruise', desc: 'Scenic drive to Ha Long Bay. Board a 5-star cruise ship, kayak among emerald karst islands, and dine under the stars.' },
      { day: 'Day 4', title: 'Sung Sot Cave Sunrise & Return to Hanoi', desc: 'Morning Tai Chi on the sun deck, explore Sung Sot Cave, cruise back to harbor, and return to Hanoi for evening shopping.' },
      { day: 'Day 5', title: 'Ninh Binh Limestone Valleys & Trang An', desc: 'Day trip through peaceful emerald waterways and limestone cliffs in Ninh Binh before a farewell dinner in Hanoi.' },
      { day: 'Day 6', title: 'Departure Transfer', desc: 'Relaxed breakfast and private chauffeur transfer to Noi Bai International Airport.' }
    ]
  },
  {
    id: 'phuquoc',
    title: 'Phu Quoc Island Luxury Beach & Sunset Villa Escape',
    country: 'Phu Quoc, Vietnam',
    category: 'beach',
    tag: 'Island Escape',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 10 Guests',
    rating: 4.97,
    reviewsCount: 289,
    basePrice: 1090,
    originalPrice: 1390,
    discountText: 'Save RM 1,300',
    image: 'assets/images/dest-phuquoc.jpg',
    summary: 'Unwind on crystal turquoise beaches in Phu Quoc, island-hop by private speedboat, ride the world’s longest sea cable car to Hon Thom, and savor sunset seafood dinners.',
    features: [
      '5★ Beachfront Resort & Private Pool Villa Access',
      'Private 4-Island Speedboat Snorkeling Excursion',
      'Hon Thom Sea Cable Car Panoramic Ocean Crossing',
      'Halal Seafood Sunset Feast & Night Market Tour'
    ],
    inclusions: [
      '4 nights in beachfront luxury resort villas in Phu Quoc',
      'Daily gourmet breakfast & 4 Halal-friendly island meals',
      'Private speedboat charter with snorkeling gear & guide',
      'Hon Thom Sun World Cable Car & Sunset Town admission',
      'Private airport transfers & 24/7 travel concierge'
    ],
    upgrades: [
      'Private Sunset Catamaran Charter with Mocktail Bar (+$220)',
      'Couples Beachfront Spa & Aromatherapy Ritual (+$140)',
      'VinWonders & Safari VIP Fast-Track Pass (+$95)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Phu Quoc & Beachfront Sunset', desc: 'Private transfer to your coastal resort. Unwind along powdery white sands and watch the golden sunset from the wooden pier.' },
      { day: 'Day 2', title: '4-Island Speedboat & Coral Reef Snorkeling', desc: 'Sail to May Rut, Gam Ghi, and Fingernail Islands. Swim in crystal waters and enjoy a fresh grilled seafood lunch.' },
      { day: 'Day 3', title: 'Hon Thom Cable Car & Sunset Town', desc: 'Glide high above turquoise bays on the world’s longest over-sea cable car, followed by an evening stroll in Sunset Town.' },
      { day: 'Day 4', title: 'Starfish Beach & Duong Dong Night Market', desc: 'Morning relaxation at Rach Vem Starfish Beach and afternoon spa session before exploring the vibrant night market.' },
      { day: 'Day 5', title: 'Island Farewell & Airport Transfer', desc: 'Morning swim and leisurely breakfast before private transfer to Phu Quoc International Airport.' }
    ]
  },
  {
    id: 'danang',
    title: 'Da Nang Golden Bridge, Ba Na Hills & Hoi An Lanterns',
    country: 'Da Nang, Vietnam',
    category: 'adventure',
    tag: 'Top Pick',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 12 Guests',
    rating: 4.98,
    reviewsCount: 256,
    basePrice: 980,
    originalPrice: 1240,
    discountText: 'Flash Deal',
    image: 'assets/images/dest-danang.jpg',
    summary: 'Walk the iconic Golden Bridge held by giant stone hands in Ba Na Hills, explore Marble Mountains, and drift down Hoi An’s lantern-lit Thu Bon River at dusk.',
    features: [
      '5★ My Khe Beachfront Hotel with Ocean Views',
      'Early Access to Iconic Golden Bridge & Ba Na Hills',
      'Hoi An Ancient Town Lantern Boat & Silk Tailoring',
      'Muslim-Friendly Dining & Dedicated Prayer Stops'
    ],
    inclusions: [
      '4 nights in beachfront 5-star resorts in Da Nang',
      'Ba Na Hills cable car tickets & Golden Bridge guided visit',
      'Marble Mountains & Son Tra Peninsula scenic tour',
      'Hoi An lantern river cruise & Coconut Forest basket boat ride',
      'All private air-conditioned transfers & bilingual guide'
    ],
    upgrades: [
      'Day Trip to Hue Imperial Citadel via Hai Van Pass (+$130)',
      'Private Beachfront Cabana BBQ Dinner (+$110)',
      'Hoi An Memories Show VIP Seats (+$65)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Da Nang & My Khe Beach', desc: 'Private airport transfer to your oceanfront hotel. Evening walk along Dragon Bridge and Halal coastal dinner.' },
      { day: 'Day 2', title: 'Ba Na Hills & Iconic Golden Bridge', desc: 'Ride the mountain cable car above the clouds to walk the Golden Bridge at sunrise and explore the French Village.' },
      { day: 'Day 3', title: 'Basket Boats & Hoi An Lantern Town', desc: 'Paddle bamboo basket boats in Cam Thanh Coconut Forest, then spend the evening releasing lanterns in UNESCO Hoi An.' },
      { day: 'Day 4', title: 'Marble Mountains & Son Tra Peninsula', desc: 'Explore limestone caves and panoramic viewpoints along Monkey Mountain before relaxing at My Khe Beach.' },
      { day: 'Day 5', title: 'Central Coast Departure', desc: 'Free morning for local coffee and souvenirs before private transfer to Da Nang International Airport.' }
    ]
  },
  {
    id: 'hochiminh',
    title: 'Ho Chi Minh City Saigon Skyline & Mekong Delta',
    country: 'Ho Chi Minh, Vietnam',
    category: 'luxury',
    tag: 'City & Culture',
    duration: '4 Days / 3 Nights',
    groupSize: 'Max 12 Guests',
    rating: 4.95,
    reviewsCount: 318,
    basePrice: 850,
    originalPrice: 1080,
    discountText: 'Early Bird',
    image: 'assets/images/dest-hochiminh.jpg',
    summary: 'Experience bustling District 1 near Saigon Central Mosque and Halal Street, cruise the Saigon River at twilight, explore Cu Chi Tunnels, and glide along the Mekong Delta.',
    features: [
      '5★ District 1 Luxury Hotel Steps from Halal Street & Ben Thanh',
      'Saigon River Twilight Dinner Cruise with Skyline Views',
      'Guided Cu Chi Tunnels & Mekong Delta Sampan Boat Tour',
      'Visit to Historic Saigon Central Mosque (Musulman)'
    ],
    inclusions: [
      '3 nights in central District 1 5-star luxury accommodation',
      'Daily breakfast & Halal-friendly Saigon & Mekong meals',
      'Saigon River evening dinner cruise along Bitexco skyline',
      'Private Mekong Delta boat trip & tropical fruit orchard tasting',
      'Private chauffeur transfers & 24/7 concierge support'
    ],
    upgrades: [
      'Private Vespa Saigon Street & Nightlife Tour (+$95)',
      'Bitexco Saigon Skydeck VIP Sunset Lounge (+$45)',
      'Mui Ne White Sand Dunes Day Extension (+$150)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Saigon & River Dinner Cruise', desc: 'VIP airport pickup to District 1. Visit Saigon Central Mosque, browse Ben Thanh Market, and board a Saigon River twilight cruise.' },
      { day: 'Day 2', title: 'Cu Chi Tunnels & Historic Landmarks', desc: 'Morning expedition to the historic Cu Chi Tunnels followed by Notre Dame Cathedral, Central Post Office, and Nguyen Hue Boulevard.' },
      { day: 'Day 3', title: 'Mekong Delta Coconut Islands & Sampan Ride', desc: 'Full-day cruise through peaceful Mekong waterways, traditional coconut candy workshops, and tropical orchard lunch.' },
      { day: 'Day 4', title: 'Halal Street Shopping & Departure', desc: 'Final souvenir shopping along Nguyen An Ninh Halal Street before private transfer to Tan Son Nhat Airport.' }
    ]
  },
  {
    id: 'dalat',
    title: 'Dalat Misty Pine Highlands, Lakes & Flower Valleys',
    country: 'Dalat, Vietnam',
    category: 'romantic',
    tag: 'Highland Gem',
    duration: '4 Days / 3 Nights',
    groupSize: 'Max 10 Guests',
    rating: 4.96,
    reviewsCount: 214,
    basePrice: 920,
    originalPrice: 1180,
    discountText: 'Save 20%',
    image: 'assets/images/dest-dalat.jpg',
    summary: 'Escape to Vietnam’s cool mountain sanctuary in Dalat—wake up to misty pine forests, stroll around Xuan Huong Lake’s flower gardens, visit Datanla Waterfalls, and sip highland Arabica coffee.',
    features: [
      'Boutique French-Heritage Resort Overlooking Misty Pine Hills',
      'Sunrise Walk Around Xuan Huong Lake & Hydrangea Gardens',
      'Datanla Alpine Coaster & Langbiang Mountain Jeep Summit',
      'Highland Tea & Arabica Coffee Plantation Tasting'
    ],
    inclusions: [
      '3 nights in boutique highland resort villas in Dalat',
      'Daily breakfast & cozy Muslim-friendly highland dinners',
      'Guided tour of Xuan Huong Lake, Valley of Love & Clay Tunnel',
      'Datanla Waterfall alpine coaster & Langbiang 4x4 summit ride',
      'Private transfers & dedicated local highland guide'
    ],
    upgrades: [
      'Sunrise Cloud-Hunting Ridge Jeep Experience (+$85)',
      'Private Lakeside Flower Garden Picnic (+$75)',
      'Combined Dalat + Nha Trang Coastal Transfer (+$140)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Dalat & Xuan Huong Lakeside Stroll', desc: 'Scenic ascent into cool pine-scented Dalat. Check in to your boutique resort and enjoy a sunset walk beside blooming lakeside flower gardens.' },
      { day: 'Day 2', title: 'Langbiang Summit, Hydrangea Fields & Coffee Estate', desc: '4x4 ride up Langbiang Peak for panoramic highland views, wander endless blue hydrangea fields, and taste fresh local Arabica coffee.' },
      { day: 'Day 3', title: 'Datanla Waterfalls, Crazy House & Night Market', desc: 'Ride the alpine forest coaster to Datanla Falls, explore iconic Dalat architecture, and browse cozy highland night market stalls.' },
      { day: 'Day 4', title: 'Misty Morning & Departure Transfer', desc: 'Final misty mountain breakfast overlooking the pines before private transfer to Lien Khuong Airport.' }
    ]
  }
];

// Currency exchange rates relative to USD
const CURRENCY_RATES = {
  MYR: { symbol: 'RM ', rate: 4.45, label: 'MYR (RM)' },
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  AUD: { symbol: 'A$', rate: 1.52, label: 'AUD (A$)' }
};

let currentCurrency = 'MYR';
let activeSelectedPackage = PACKAGES[0];
let currentBookingStep = 1;
let currentBookingState = {
  package: PACKAGES[0],
  packageStyle: 'follow',
  customPackageNotes: '',
  guests: 2,
  roomUpgradePerPerson: 0,
  includeFlights: false,
  flightCostPerPerson: 0
};

// ========================================================
// 2. DOM INITIALIZATION
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPackagesGrid(PACKAGES);
  updateDestinationPrices();
  initBannerCountdown();
  initFaqAccordion();
  initCurrencyDropdown();
  initSocialProofToast();
  initFloatingConcierge();
  initNavigation();
});

// ========================================================
// 3. RENDER PACKAGES GRID & CARDS
// ========================================================
function renderPackagesGrid(packagesList) {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;

  if (packagesList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px;">
        <i class="fa-solid fa-plane-slash" style="font-size: 3rem; color: #94a3b8; margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem;">No matching travel packages found</h3>
        <p style="color: #64748b; margin-top: 8px;">Try clearing your search query or choosing "All Packages".</p>
        <button class="btn btn-outline" style="margin-top: 16px;" onclick="window.resetPackageFilters()">View All Packages</button>
      </div>
    `;
    return;
  }

  const { symbol, rate } = CURRENCY_RATES[currentCurrency];

  grid.innerHTML = packagesList.map(pkg => {
    const convertedBase = Math.round(pkg.basePrice * rate);
    const convertedOriginal = Math.round(pkg.originalPrice * rate);

    return `
      <article class="package-card" data-category="${pkg.category}" data-id="${pkg.id}">
        <div class="package-card-media">
          <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
          <span class="card-badge-tag">${pkg.tag}</span>
          <div class="card-duration-badge">
            <i class="fa-regular fa-clock"></i> ${pkg.duration}
          </div>
          <div class="card-rating-badge">
            <i class="fa-solid fa-star"></i> ${pkg.rating} <span style="opacity: 0.8">(${pkg.reviewsCount})</span>
          </div>
        </div>

        <div class="package-card-body">
          <div class="package-location">
            <i class="fa-solid fa-location-dot"></i> ${pkg.country}
          </div>
          <h3 class="package-title">${pkg.title}</h3>
          <p class="package-summary">${pkg.summary}</p>

          <div class="package-features">
            ${pkg.features.slice(0, 3).map(feat => `
              <div class="feature-pill">
                <i class="fa-solid fa-circle-check"></i>
                <span>${feat}</span>
              </div>
            `).join('')}
          </div>

          <div class="package-card-footer">
            <div class="package-price-info">
              <span class="original-price">${symbol}${convertedOriginal.toLocaleString()}</span>
              <div class="current-price">${symbol}${convertedBase.toLocaleString()}</div>
              <span class="current-price-sub">per person / all-inclusive</span>
            </div>

            <div class="card-action-btns">
              <button type="button" class="btn-itinerary" title="View Full Itinerary" onclick="window.openItineraryModal('${pkg.id}')">
                <i class="fa-solid fa-eye"></i>
              </button>
              <button type="button" class="btn-join" onclick="window.openBookingModal('${pkg.id}')">
                Join Package <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ========================================================
// 4. PACKAGE FILTER & SEARCH SYSTEM
// ========================================================
const filterTabs = document.getElementById('filterTabs');
const searchInput = document.getElementById('packageSearchInput');

if (filterTabs) {
  filterTabs.addEventListener('click', (e) => {
    const button = e.target.closest('.filter-tab');
    if (!button) return;

    filterTabs.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    applyFilters(category, searchInput ? searchInput.value : '');
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const activeTab = filterTabs ? filterTabs.querySelector('.filter-tab.active') : null;
    const category = activeTab ? activeTab.getAttribute('data-category') : 'all';
    applyFilters(category, e.target.value);
  });
}

function applyFilters(category, query) {
  const lowerQuery = query.toLowerCase().trim();

  const filtered = PACKAGES.filter(pkg => {
    const matchesCategory = category === 'all' || pkg.category === category;
    const matchesQuery = !lowerQuery || 
      pkg.title.toLowerCase().includes(lowerQuery) ||
      pkg.country.toLowerCase().includes(lowerQuery) ||
      pkg.summary.toLowerCase().includes(lowerQuery) ||
      pkg.tag.toLowerCase().includes(lowerQuery);

    return matchesCategory && matchesQuery;
  });

  renderPackagesGrid(filtered);
}

window.resetPackageFilters = function() {
  if (searchInput) searchInput.value = '';
  if (filterTabs) {
    filterTabs.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    const allTab = filterTabs.querySelector('[data-category="all"]');
    if (allTab) allTab.classList.add('active');
  }
  renderPackagesGrid(PACKAGES);
};

window.filterByDestination = function(destId) {
  const match = PACKAGES.find(p => p.id === destId);
  const targetSection = document.getElementById('packages');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  if (match) {
    if (searchInput) searchInput.value = match.country;
    applyFilters('all', match.country);
  }
};

window.handleHeroSearch = function() {
  const destVal = document.getElementById('searchDestination')?.value || 'all';
  const typeVal = document.getElementById('searchType')?.value || 'all';
  
  const targetSection = document.getElementById('packages');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Set filter tab
  if (filterTabs && typeVal !== 'all') {
    filterTabs.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    const matchingTab = filterTabs.querySelector(`[data-category="${typeVal}"]`);
    if (matchingTab) matchingTab.classList.add('active');
  }

  if (destVal !== 'all') {
    const pkg = PACKAGES.find(p => p.id === destVal);
    if (pkg) {
      if (searchInput) searchInput.value = pkg.country;
      applyFilters(typeVal === 'all' ? 'all' : typeVal, pkg.country);
      return;
    }
  }

  applyFilters(typeVal, '');
};

// ========================================================
// 5. MULTI-STEP BOOKING MODAL LOGIC
// ========================================================
window.openBookingModal = function(pkgId, customOptions = {}) {
  const pkg = PACKAGES.find(p => p.id === pkgId) || PACKAGES[0];
  activeSelectedPackage = pkg;

  currentBookingState = {
    package: pkg,
    packageStyle: 'follow',
    customPackageNotes: '',
    guests: customOptions.guests || 2,
    roomUpgradePerPerson: 0,
    includeFlights: false,
    flightCostPerPerson: 0
  };

  // Reset Step 2 (Package Style) UI
  const followRadio = document.querySelector('input[name="packageStyleOption"][value="follow"]');
  if (followRadio) followRadio.checked = true;
  const customNotesEl = document.getElementById('customPackageNotes');
  if (customNotesEl) customNotesEl.value = '';
  window.handlePackageStyleChange('follow');

  // Populate Step 1 UI
  const imgEl = document.getElementById('modalPackageImg');
  const tagEl = document.getElementById('modalPackageTag');
  const locEl = document.getElementById('modalPackageLocation');
  const titleEl = document.getElementById('modalPackageTitle');
  const discEl = document.getElementById('modalDiscountPill');
  const priceEl = document.getElementById('modalPriceDisplay');
  const highlightsEl = document.getElementById('modalHighlightsList');

  const { symbol, rate } = CURRENCY_RATES[currentCurrency];
  const converted = Math.round(pkg.basePrice * rate);

  if (imgEl) imgEl.src = pkg.image;
  if (tagEl) tagEl.textContent = pkg.tag;
  if (locEl) locEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${pkg.country}`;
  if (titleEl) titleEl.textContent = pkg.title;
  if (discEl) discEl.textContent = pkg.discountText;
  if (priceEl) priceEl.textContent = `${symbol}${converted.toLocaleString()}`;

  if (highlightsEl) {
    highlightsEl.innerHTML = pkg.features.map(f => `
      <div class="modal-highlight-item">
        <i class="fa-solid fa-circle-check"></i>
        <span>${f}</span>
      </div>
    `).join('');
  }

  // Set guest count in Step 2
  const modalGuestEl = document.getElementById('modalGuestCount');
  if (modalGuestEl) modalGuestEl.textContent = currentBookingState.guests;

  // Reset to Step 1
  setBookingStep(1);

  // Show modal
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  updateBookingSummary();
};

window.closeBookingModal = function() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

document.getElementById('closeBookingModalBtn')?.addEventListener('click', window.closeBookingModal);
document.getElementById('bookingModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'bookingModal') window.closeBookingModal();
});

window.handlePackageStyleChange = function(style) {
  currentBookingState.packageStyle = style === 'custom' ? 'custom' : 'follow';
  const customGroup = document.getElementById('customPackageDetailsGroup');
  if (customGroup) {
    customGroup.style.display = currentBookingState.packageStyle === 'custom' ? 'block' : 'none';
  }
};

window.nextBookingStep = function(stepNum) {
  setBookingStep(stepNum);
};

function setBookingStep(stepNum) {
  currentBookingStep = stepNum;

  // Indicators
  for (let i = 1; i <= 4; i++) {
    const indicator = document.getElementById(`stepIndicator${i}`);
    const content = document.getElementById(`bookingStep${i}`);

    if (indicator) {
      indicator.classList.remove('active', 'completed');
      if (i < stepNum) indicator.classList.add('completed');
      if (i === stepNum) indicator.classList.add('active');
    }

    if (content) {
      content.classList.remove('active');
      if (i === stepNum) content.classList.add('active');
    }
  }
}

window.adjustModalGuests = function(delta) {
  let count = currentBookingState.guests + delta;
  if (count < 1) count = 1;
  if (count > 12) count = 12;
  currentBookingState.guests = count;

  const countEl = document.getElementById('modalGuestCount');
  if (countEl) countEl.textContent = count;

  updateBookingSummary();
};

window.updateBookingSummary = function() {
  const roomSelect = document.getElementById('modalRoomTier');
  const roomUpgradePerPerson = parseInt(roomSelect ? roomSelect.value : '0', 10);
  currentBookingState.roomUpgradePerPerson = roomUpgradePerPerson;

  const flightsCheck = document.getElementById('modalIncludeFlights');
  const includeFlights = flightsCheck ? flightsCheck.checked : false;
  currentBookingState.includeFlights = includeFlights;
  currentBookingState.flightCostPerPerson = includeFlights ? 850 : 0;
};

window.submitBookingOrder = function() {
  const firstName = document.getElementById('travelerFirstName')?.value || 'Guest';
  const lastName = document.getElementById('travelerLastName')?.value || 'Traveler';
  const dates = document.getElementById('bookingDepartureSelect')?.value || 'Selected 2026 Dates';
  const customNotes = document.getElementById('customPackageNotes')?.value?.trim() || '';
  const pkg = currentBookingState.package;
  const styleLabel = currentBookingState.packageStyle === 'custom' ? 'Custom Package' : 'Follow Package';

  currentBookingState.customPackageNotes = customNotes;

  const refCode = 'WL-2026-' + Math.floor(10000 + Math.random() * 90000);

  alert(
    `🎉 Reservation submitted for ${firstName} ${lastName}!\n\n` +
    `Package: ${pkg.title}\n` +
    `Style: ${styleLabel}\n` +
    `Dates: ${dates}\n` +
    `Guests: ${currentBookingState.guests} Traveler(s)\n` +
    `Ref: ${refCode}\n\n` +
    `Our concierge will contact you via email and WhatsApp within 2 hours.`
  );

  document.getElementById('leadTravelerForm')?.reset();
  window.closeBookingModal();
};

// ========================================================
// 7. ITINERARY MODAL
// ========================================================
window.openItineraryModal = function(pkgId) {
  const pkg = PACKAGES.find(p => p.id === pkgId) || PACKAGES[0];

  const locEl = document.getElementById('itinLocation');
  const titleEl = document.getElementById('itineraryModalTitle');
  const statsRow = document.getElementById('itinStatsRow');
  const timelineEl = document.getElementById('itineraryTimeline');
  const incList = document.getElementById('itineraryIncludedList');
  const upgList = document.getElementById('itineraryUpgradesList');
  const stickyPrice = document.getElementById('itinStickyPrice');

  const { symbol, rate } = CURRENCY_RATES[currentCurrency];

  if (locEl) locEl.textContent = pkg.country;
  if (titleEl) titleEl.textContent = pkg.title;
  if (stickyPrice) stickyPrice.textContent = `${symbol}${Math.round(pkg.basePrice * rate).toLocaleString()}`;

  if (statsRow) {
    statsRow.innerHTML = `
      <span class="itin-stat-badge"><i class="fa-regular fa-clock"></i> ${pkg.duration}</span>
      <span class="itin-stat-badge"><i class="fa-solid fa-users"></i> ${pkg.groupSize}</span>
      <span class="itin-stat-badge"><i class="fa-solid fa-star text-gold"></i> ${pkg.rating} (5.0 Rating)</span>
      <span class="itin-stat-badge"><i class="fa-solid fa-shield-halved text-cyan"></i> 100% Guaranteed</span>
    `;
  }

  if (timelineEl) {
    timelineEl.innerHTML = pkg.itinerary.map(item => `
      <div class="timeline-step">
        <div class="timeline-day">${item.day}</div>
        <h4 class="timeline-title-text">${item.title}</h4>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  if (incList) {
    incList.innerHTML = pkg.inclusions.map(inc => `
      <li><i class="fa-solid fa-check text-green" style="margin-right: 8px;"></i> ${inc}</li>
    `).join('');
  }

  if (upgList) {
    upgList.innerHTML = pkg.upgrades.map(upg => `
      <li><i class="fa-solid fa-plus text-cyan" style="margin-right: 8px;"></i> ${upg}</li>
    `).join('');
  }

  const joinBtn = document.getElementById('itinJoinNowBtn');
  if (joinBtn) {
    joinBtn.onclick = () => {
      window.closeItineraryModal();
      window.openBookingModal(pkg.id);
    };
  }

  const modal = document.getElementById('itineraryModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeItineraryModal = function() {
  const modal = document.getElementById('itineraryModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

document.getElementById('closeItineraryModalBtn')?.addEventListener('click', window.closeItineraryModal);
document.getElementById('itineraryModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'itineraryModal') window.closeItineraryModal();
});

document.getElementById('viewFullItineraryBtn')?.addEventListener('click', () => {
  window.closeBookingModal();
  window.openItineraryModal(activeSelectedPackage.id);
});

// ========================================================
// 8. CURRENCY SELECTOR
// ========================================================
function initCurrencyDropdown() {
  const toggleBtn = document.getElementById('currencyToggleBtn');
  const menu = document.getElementById('currencyMenu');
  const currentLabel = document.getElementById('currentCurrencyLabel');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    const expanded = menu.classList.contains('active');
    toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  menu.querySelectorAll('.currency-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-currency');
      if (CURRENCY_RATES[selected]) {
        currentCurrency = selected;
        menu.querySelectorAll('.currency-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (currentLabel) currentLabel.textContent = CURRENCY_RATES[selected].label;
        menu.classList.remove('active');

        // Re-render price-dependent components
        renderPackagesGrid(PACKAGES);
        updateDestinationPrices();
        updateBookingSummary();
      }
    });
  });

  document.addEventListener('click', () => {
    menu.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
}

function updateDestinationPrices() {
  const { symbol, rate } = CURRENCY_RATES[currentCurrency];
  document.querySelectorAll('[data-usd-price]').forEach(el => {
    const usd = parseFloat(el.getAttribute('data-usd-price') || '0');
    el.textContent = `${symbol}${Math.round(usd * rate).toLocaleString()}`;
  });
}

// ========================================================
// 9. BANNER COUNTDOWN TIMER
// ========================================================
function initBannerCountdown() {
  const timerEl = document.getElementById('bannerTimer');
  if (!timerEl) return;

  // 2 days, 14 hours, 38 mins, 19s from start
  let totalSeconds = 2 * 86400 + 14 * 3600 + 38 * 60 + 19;

  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (n) => String(n).padStart(2, '0');
    timerEl.textContent = `${pad(days)}d : ${pad(hours)}h : ${pad(mins)}m : ${pad(secs)}s`;
  }, 1000);

  document.getElementById('closeBannerBtn')?.addEventListener('click', () => {
    const banner = document.getElementById('topPromoBanner');
    if (banner) banner.style.display = 'none';
  });
}

// ========================================================
// 10. FAQ ACCORDION
// ========================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ========================================================
// 11. SOCIAL PROOF LIVE TOAST TICKER
// ========================================================
const SOCIAL_NOTIFICATIONS = [
  { name: 'Elena & Marcus from California', pkg: 'Bali Tropical Villa Retreat', mins: '3 mins ago' },
  { name: 'Sarah Jenkins from London', pkg: 'Swiss Alps & Glacier Express', mins: '5 mins ago' },
  { name: 'Liam & Mia from Melbourne', pkg: 'Amalfi Coast & Capri Yacht Tour', mins: '8 mins ago' },
  { name: 'David & Karen from Toronto', pkg: 'Serengeti Migration & Balloon Safari', mins: '12 mins ago' },
  { name: 'Sophie & Antoine from Paris', pkg: 'Santorini Caldera Sunset Romance', mins: '14 mins ago' },
  { name: 'Kenji & Mei from Singapore', pkg: 'Kyoto Cherry Blossom Sanctuary', mins: '18 mins ago' }
];

function initSocialProofToast() {
  const toast = document.getElementById('socialProofToast');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDesc');
  if (!toast) return;

  let index = 0;

  function showNextNotification() {
    const item = SOCIAL_NOTIFICATIONS[index];
    if (toastTitle) toastTitle.textContent = item.name;
    if (toastDesc) toastDesc.innerHTML = `Just joined the <strong>${item.pkg}</strong> ${item.mins}!`;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 5500);

    index = (index + 1) % SOCIAL_NOTIFICATIONS.length;
  }

  // Initial show after 4 seconds, then repeat every 18 seconds
  setTimeout(showNextNotification, 4000);
  setInterval(showNextNotification, 18000);
}

// ========================================================
// 12. FLOATING CONCIERGE CHATBOT
// ========================================================
function initFloatingConcierge() {
  const triggerBtn = document.getElementById('conciergeTriggerBtn');
  const popup = document.getElementById('conciergePopup');
  const closeBtn = document.getElementById('closeConciergeBtn');

  if (!triggerBtn || !popup) return;

  triggerBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
  });

  closeBtn?.addEventListener('click', () => {
    popup.classList.remove('active');
  });
}

window.sendConciergeQuick = function(promptText) {
  appendChatMessage(promptText, 'user');
  generateConciergeResponse(promptText);
};

window.sendConciergeMessage = function() {
  const input = document.getElementById('conciergeInput');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  appendChatMessage(text, 'user');
  input.value = '';
  generateConciergeResponse(text);
};

function appendChatMessage(msg, sender) {
  const messagesBox = document.getElementById('conciergeMessages');
  if (!messagesBox) return;

  const div = document.createElement('div');
  div.className = `chat-msg ${sender}-msg`;
  div.innerHTML = `<p>${msg}</p>`;
  messagesBox.appendChild(div);
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

function generateConciergeResponse(query) {
  const lower = query.toLowerCase();
  let reply = "I would be thrilled to assist you with that! All our packages can be joined with just a 20% deposit today, and our team handles all 5-star lodging, transfers, and native guided excursions. Would you like to check available dates or customize a package?";

  if (lower.includes('discount') || lower.includes('sale') || lower.includes('deal')) {
    reply = "🔥 Right now you can claim up to RM 2,200 off per person during our Summer Early-Bird event! Check our top Vietnam packages above!";
  } else if (lower.includes('deposit') || lower.includes('payment') || lower.includes('pay')) {
    reply = "💳 You only need 20% down to secure guaranteed departures! The remaining balance is split into zero-interest installments or due 30 days prior to takeoff.";
  } else if (lower.includes('honeymoon') || lower.includes('romance') || lower.includes('romantic')) {
    reply = "💍 For honeymoons, our top recommendations are the Santorini Caldera Sunset Romance with private jacuzzi and the Bali Tropical Oceanfront Villa Retreat. Both include candlelight dining and champagne on arrival!";
  } else if (lower.includes('solo') || lower.includes('alone')) {
    reply = "🌟 Over 40% of our guests join solo! You can either choose a private solo luxury room or opt for our free matched roommate service to save on single fees.";
  } else if (lower.includes('flight') || lower.includes('airfare')) {
    reply = "✈️ All domestic transfers are included! For international flights, you can check the 'Include Flights' box during booking, and our flight desk will book prime business/economy seats tailored to your departure airport.";
  }

  setTimeout(() => {
    appendChatMessage(reply, 'agent');
  }, 700);
}

// ========================================================
// 13. NEWSLETTER VOUCHER HANDLER
// ========================================================
window.handleNewsletter = function() {
  const emailInput = document.getElementById('newsletterEmail');
  const email = emailInput?.value || '';

  if (email) {
    alert(`🎉 Success! Your RM 650 promo voucher code [WANDER150] has been registered and emailed to ${email}. You can apply this code at checkout on any package!`);
    if (emailInput) emailInput.value = '';
  }
};

// ========================================================
// 14. MOBILE NAVIGATION
// ========================================================
function initNavigation() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const backdrop = document.getElementById('navBackdrop');

  function closeMenu() {
    navMenu?.classList.remove('mobile-open');
    mobileBtn?.classList.remove('is-active');
    backdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = navMenu?.classList.toggle('mobile-open');
    mobileBtn?.classList.toggle('is-active', isOpen);
    backdrop?.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', toggleMenu);
    backdrop?.addEventListener('click', closeMenu);

    navMenu.querySelectorAll('.nav-link, .mobile-menu-cta').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}
