/**
 * WANDERLUXE VOYAGES - JAVASCRIPT APPLICATION CORE
 * Curated Luxury Travel Agency Interactive Engine
 */

// ========================================================
// 1. DATA STORE: CURATED PACKAGES & ITINERARIES
// ========================================================
const PACKAGES = [
  {
    id: 'bali',
    title: 'Bali Tropical Paradise & Private Villa Retreat',
    country: 'Indonesia',
    category: 'beach',
    tag: 'Best Seller',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 12 Guests',
    rating: 4.95,
    reviewsCount: 342,
    basePrice: 1299,
    originalPrice: 1699,
    discountText: 'Save 20%',
    image: 'assets/images/hero-bali.jpg',
    summary: 'Immerse in cliffside luxury, secret Nusa Penida snorkeling with manta rays, private jungle infinity pools in Ubud, and sacred water temple blessing ceremonies.',
    features: [
      '5-Star Jungle & Oceanfront Villas with Private Pools',
      'Private Yacht Excursion to Nusa Penida & Snorkel Manta Bay',
      'Daily Floating Champagne Breakfast & Balinese Massages',
      'VIP Airport Escort & 24/7 Dedicated Chauffeur'
    ],
    inclusions: [
      '6 nights in handpicked 5-star luxury villas',
      'All gourmet meals (daily breakfast, 5 lunches, 5 dinners)',
      'Private speed boat charter to Nusa Penida & Lembongan',
      'Sacred Tirta Empul cleansing ceremony with village elder',
      'Comprehensive travel medical & cancellation insurance',
      '24/7 personal WhatsApp concierge & English guide'
    ],
    upgrades: [
      'Helicopter Volcano Tour over Mount Batur (+$280)',
      'Private Sunset Seafood Feast on Jimbaran Beach (+$120)',
      'Floating Candlelit 7-Course Dinner in Ubud (+$150)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Denpasar & Luxury Villa Check-in', desc: 'VIP meet-and-greet at airport tarmac, private luxury transfer to your jungle villa in Ubud. Welcome cocktail reception and traditional Balinese dinner.' },
      { day: 'Day 2', title: 'Sacred Temples & Tegallalang Rice Terraces', desc: 'Sunrise guided walk through Tegallalang, secret coffee tasting, water blessing ceremony at Tirta Empul, followed by an afternoon floating pool lunch.' },
      { day: 'Day 3', title: 'Nusa Penida Private Speedboat Adventure', desc: 'Board a private speed boat to Kelingking T-Rex cliff, snorkel with gentle manta rays in crystal turquoise water, and unwind at Diamond Beach.' },
      { day: 'Day 4', title: 'Uluwatu Sunset & Fire Dance Performance', desc: 'Transfer to South Bali clifftop resort. Afternoon surfing lesson or infinity pool relaxation, followed by sunset Kecak dance over the Indian Ocean.' },
      { day: 'Day 5', title: 'Gourmet Balinese Cooking Masterclass & Spa', desc: 'Morning visit to organic spice farm with award-winning local chef, prepare 6 traditional dishes, followed by a 2-hour Balinese flower spa ritual.' },
      { day: 'Day 6', title: 'Seminyak Yacht Day & Sunset Beach Club VIP', desc: 'Day cruise along the southern coastline, paddleboarding, and reserved VIP cabana at one of Bali\'s premier beachfront sunset lounges.' },
      { day: 'Day 7', title: 'Farewell Brunch & Chauffeur Airport Departure', desc: 'Artisan souvenir shopping in Canggu, final beachfront brunch, and chauffeur transfer to Ngurah Rai International Airport.' }
    ]
  },
  {
    id: 'amalfi',
    title: 'Amalfi Coast Cliffside & Capri Yacht Odyssey',
    country: 'Italy',
    category: 'luxury',
    tag: 'Ultra Luxury',
    duration: '8 Days / 7 Nights',
    groupSize: 'Max 10 Guests',
    rating: 4.98,
    reviewsCount: 289,
    basePrice: 2190,
    originalPrice: 2790,
    discountText: 'Save $600',
    image: 'assets/images/amalfi-coast.jpg',
    summary: 'Pastel cliffside panoramas in Positano, private Riva yacht charter around Capri’s Blue Grotto, lemon grove limoncello tastings, and Michelin-star Mediterranean dining.',
    features: [
      'Historical 5★ Cliffside Hotel in Positano with Sea Views',
      'Private Riva Yacht Charter around Capri Island & Faraglioni',
      'Hands-on Pasta & Limoncello Workshop in Ravello Cliffside Estate',
      'Private Mercedes transfers across the Amalfi Drive'
    ],
    inclusions: [
      '7 nights in sea-view suites in Positano & Sorrento',
      'All regional breakfasts & 6 multi-course dinners with sommelier pairings',
      'Full-day private motor yacht charter to Capri and Faraglioni Rocks',
      'Private access to Ravello Villa Rufolo gardens & concerts',
      'All ferry tickets, porterage, and Mercedes-Benz chauffeur transfers',
      '24/7 travel concierge & certified art historian guides'
    ],
    upgrades: [
      'Helicopter transfer from Rome or Naples Airport (+$450)',
      'Sunset vintage Alfa Romeo drive along coastal corniche (+$190)',
      'Private wine cellar dinner with master sommelier in Capri (+$240)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Benvenuti in Naples to Positano', desc: 'Private driver pickup from Naples. Scenic coastal drive to Positano. Settle into cliffside balconies with welcome Prosecco and fresh oysters.' },
      { day: 'Day 2', title: 'Positano Hidden Boutiques & Beachfront', desc: 'Guided stroll through winding stairways, private leather sandals artisan visit, and afternoon sunbed relaxation at Spiaggia Grande.' },
      { day: 'Day 3', title: 'Capri Private Yacht Excursion & Blue Grotto', desc: 'Cruise aboard a classic Italian mahogany yacht, swim in hidden sea caves, marvel at the Faraglioni arches, and explore Capri’s designer Piazzetta.' },
      { day: 'Day 4', title: 'Ravello Gardens & Classical Music Clifftop', desc: 'Ascend to quiet Ravello, wander through Villa Rufolo and Villa Cimbrone’s Terrace of Infinity suspended 1,200 feet over the sparkling Mediterranean.' },
      { day: 'Day 5', title: 'Path of the Gods Hike & Farmhouse Feast', desc: 'Scenic gentle ridge walk with panoramic sea vistas followed by a rustic family lunch of homemade mozzarella, prosciutto, and organic wines.' },
      { day: 'Day 6', title: 'Sorrento Historic Center & Limoncello Crafting', desc: 'Discover Sorrento’s historic artisan quarters, visit a 120-year-old family lemon grove, and distill your own authentic Limoncello.' },
      { day: 'Day 7', title: 'Pompeii VIP Access & Farewell Gala', desc: 'Exclusive archaeologist-guided tour of Pompeii with VIP access to freshly restored villas, followed by a Michelin-star farewell banquet.' },
      { day: 'Day 8', title: 'Arrivederci Departure Transfer', desc: 'Final espresso and fresh sfogliatella on your terrace before chauffeur transfer to Naples or Rome airport.' }
    ]
  },
  {
    id: 'swiss',
    title: 'Swiss Alps & Glacier Express Alpine Luxury',
    country: 'Switzerland',
    category: 'adventure',
    tag: 'Alpine Luxury',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 12 Guests',
    rating: 4.97,
    reviewsCount: 215,
    basePrice: 2450,
    originalPrice: 2990,
    discountText: 'Flash Deal',
    image: 'assets/images/swiss-alps.jpg',
    summary: 'Wake up to Matterhorn views from wooden luxury chalets, ride the panoramic Glacier Express Excellence Class, cruise alpine lakes, and taste Swiss chocolate & fondue.',
    features: [
      '5★ Luxury Spa Chalet in Zermatt facing the Matterhorn',
      'Glacier Express Excellence Class Panoramic Train Journey',
      'Private Alpine Wildflower Hike & High Glacial Lake Picnic',
      'Unlimited Swiss First-Class Travel Pass included'
    ],
    inclusions: [
      '6 nights in premium alpine chalets & grand lakefront hotels',
      'First-Class Swiss Rail Pass including all mountain cogwheel trains & cable cars',
      'Glacier Express Excellence Class with 5-course gourmet wine lunch',
      'Thermal bath & alpine herbal spa wellness day passes',
      'Traditional Swiss cheese fondue & raclette evening in mountain hut',
      'Certified mountain hiking leader & luggage concierge'
    ],
    upgrades: [
      'Scenic Paragliding tandem flight over Zermatt & Matterhorn (+$240)',
      'Private Swiss watchmaking masterclass in Geneva (+$320)',
      'Helicopter flight to Matterhorn peak summit (+$380)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Lucerne Lake Cruise & Mount Pilatus', desc: 'Meet in Lucerne, historic wooden bridge walking tour, panoramic electric catamaran lake cruise, and traditional Swiss welcoming dinner.' },
      { day: 'Day 2', title: 'Interlaken & Lauterbrunnen Valley of 72 Waterfalls', desc: 'Travel into the dramatic Lauterbrunnen canyon, take the funicular to Mürren cliff village, and enjoy alpine coffee overlooking the Eiger & Jungfrau.' },
      { day: 'Day 3', title: 'Glacier Express Excellence Class Journey', desc: 'Step aboard the world\'s most luxurious panoramic train. Sip champagne, feast on a 5-course meal as dramatic snowy gorges glide past your oversized glass window.' },
      { day: 'Day 4', title: 'Zermatt & Gornergrat Matterhorn Vista', desc: 'Cogwheel train up to 3,100m Gornergrat. Walk to Riffelsee to photograph the pristine lake reflection of the Matterhorn, followed by chalet spa time.' },
      { day: 'Day 5', title: 'Glacier Palace & High Altitude Alpine Fondue', desc: 'Ascend to Europe\'s highest cable car station (Matterhorn Glacier Paradise), walk inside blue ice caves, and enjoy hot Swiss fondue in a mountain hut.' },
      { day: 'Day 6', title: 'Lake Geneva & Montreux Chillon Castle', desc: 'Scenic descent to Montreux and the Lavaux UNESCO terraced vineyards. Wine tasting overlooking the lake and farewell dinner.' },
      { day: 'Day 7', title: 'Zurich / Geneva Chauffeur Departure', desc: 'Transfer to Zurich or Geneva Airport with first-class rail and luggage forwarding service.' }
    ]
  },
  {
    id: 'kyoto',
    title: 'Kyoto Cherry Blossom & Ancient Zen Sanctuary',
    country: 'Japan',
    category: 'cultural',
    tag: 'Culture Hit',
    duration: '9 Days / 8 Nights',
    groupSize: 'Max 10 Guests',
    rating: 4.96,
    reviewsCount: 310,
    basePrice: 2390,
    originalPrice: 2890,
    discountText: 'Early Bird',
    image: 'assets/images/kyoto-japan.jpg',
    summary: 'Wander lantern-lit bamboo groves, witness cherry blossoms, stay in luxurious traditional Ryokans with private onsen, and participate in private Zen tea ceremonies.',
    features: [
      'Traditional 5★ Luxury Ryokan Stay with Private Onsen Hot Springs',
      'Exclusive Private Tea Ceremony with 14th-Gen Tea Master',
      'First-Class Shinkansen Bullet Train Across Golden Route',
      'Multi-Course Kaiseki Dinners Prepared by Kyoto Culinary Masters'
    ],
    inclusions: [
      '8 nights in premium Kyoto ryokans & Tokyo 5-star skyline hotels',
      'Full Japanese breakfast daily & 6 exquisite Michelin-curated Kaiseki dinners',
      'Shinkansen bullet train Green Car (First Class) tickets',
      'VIP entrance to Fushimi Inari, Golden Pavilion & Arashiyama Bamboo Forest',
      'Private kimonos fitting & calligraphy workshop',
      'Fluent bilingual cultural concierge'
    ],
    upgrades: [
      'Private Geisha (Geiko) banquet performance in Gion (+$350)',
      'Artisan Japanese Damascus knife forging workshop (+$290)',
      'Sunrise helicopter tour over Mount Fuji (+$420)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Tokyo Arrival & Shinjuku Neon Sky Lounge', desc: 'Private airport arrival into Tokyo. Welcome dinner at a high-rise panoramic lounge overlooking Tokyo\'s glowing evening skyline.' },
      { day: 'Day 2', title: 'Old & New Tokyo: Asakusa & Ginza', desc: 'Morning visit to Senso-ji temple, street food stroll down Nakamise, afternoon wagyu beef lunch and Ginza art gallery tour.' },
      { day: 'Day 3', title: 'Shinkansen Bullet Train to Kyoto & Gion Evening', desc: 'High-speed bullet train past Mount Fuji to ancient Kyoto. Sunset lantern walk through preserved Gion streets spotting Maiko geishas.' },
      { day: 'Day 4', title: 'Arashiyama Bamboo Grove & Tenryu-ji Temple', desc: 'Early morning tranquility in Arashiyama bamboo path, UNESCO Zen rock garden, and traditional matcha tea whisking ceremony.' },
      { day: 'Day 5', title: 'Fushimi Inari 10,000 Torii Gates & Sake Tasting', desc: 'Hike the vibrant orange torii gates of Fushimi Inari shrine, followed by a tour of Fushimi\'s 400-year-old sake brewing district.' },
      { day: 'Day 6', title: 'Ryokan Immersion & Mineral Onsen Bathing', desc: 'Check in to a secluded mountainside ryokan in Hakone. Soak in natural mineral cedarwood hot spring baths and savor a 9-course Kaiseki feast.' },
      { day: 'Day 7', title: 'Lake Ashi Pirate Ship & Mount Fuji Vista', desc: 'Cable car over steaming Owakudani volcanic valley and boat cruise across Lake Ashi with iconic red torii gate in the water.' },
      { day: 'Day 8', title: 'Return to Tokyo & Farewell Omakase Banquet', desc: 'Return to Tokyo for last-minute boutique shopping and a celebration farewell Chef\'s Omakase sushi dinner.' },
      { day: 'Day 9', title: 'Sayonara Departure', desc: 'Private chauffeur transfer to Narita or Haneda Airport with gift bag of artisan Japanese green teas.' }
    ]
  },
  {
    id: 'serengeti',
    title: 'Serengeti Great Migration & Hot Air Balloon Safari',
    country: 'Tanzania',
    category: 'safari',
    tag: 'Bucket List',
    duration: '6 Days / 5 Nights',
    groupSize: 'Max 8 Guests',
    rating: 4.99,
    reviewsCount: 198,
    basePrice: 3150,
    originalPrice: 3850,
    discountText: 'VIP Exclusive',
    image: 'assets/images/serengeti-safari.jpg',
    summary: 'Witness over 1.5 million wildebeest and zebras, sleep under African stars in luxury canvas tent suites, drift over lions at dawn in a hot air balloon, and explore Ngorongoro crater.',
    features: [
      'Luxury Glamping Tented Lodges with Private Plunge Pools',
      'Sunrise Serengeti Hot Air Balloon Flight with Bush Champagne Breakfast',
      'Exclusive 4x4 Open-Roof Land Cruiser with Pro Wildlife Tracker',
      'Ngorongoro Crater Floor Full-Day Big Five Safari'
    ],
    inclusions: [
      '5 nights in luxury safari camp accommodations with butler service',
      'All meals, soft drinks, vintage wines, and campfire spirits',
      'Serengeti National Park & Ngorongoro conservation entry fees',
      'Hot air balloon flight with champagne toast in the savanna',
      'Professional certified Tanzanian safari guide and tracker',
      'Flying Doctors emergency medical rescue coverage'
    ],
    upgrades: [
      'Zanzibar Beach Villa Extension (3 Nights) (+$890)',
      'Private Maasai warrior cultural preservation walk (+$150)',
      'Night game drive to spot nocturnal leopards (+$210)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Kilimanjaro to Serengeti via Bush Flight', desc: 'Scenic bush flight into the Serengeti airstrip. First game drive en route to your luxury tented lodge. Sundowner drinks by the fire pit.' },
      { day: 'Day 2', title: 'Serengeti Great Migration Tracking', desc: 'Full-day game drive tracking lion prides, leopards in acacia trees, cheetahs hunting, and thousands of migrating herds crossing rivers.' },
      { day: 'Day 3', title: 'Dawn Hot Air Balloon & Champagne Breakfast', desc: 'Gently float above the golden savannah as the sunrise ignites the horizon. Land for a gourmet English breakfast served under an acacia canopy.' },
      { day: 'Day 4', title: 'Serengeti to Ngorongoro Crater Rim', desc: 'Morning game drive, then travel to the edge of the ancient Ngorongoro caldera. Watch sunset colors wash over the volcanic crater floor.' },
      { day: 'Day 5', title: 'Ngorongoro Crater Floor Big Five Safari', desc: 'Descend 2,000 feet into the crater, home to 25,000 large animals including endangered black rhinos, hippos, and flamingo-filled soda lakes.' },
      { day: 'Day 6', title: 'Arusha Transfer & Flight Home', desc: 'Farewell lunch at a Tanzanian coffee estate and private transfer to Kilimanjaro Airport for departure.' }
    ]
  },
  {
    id: 'santorini',
    title: 'Santorini Caldera & Cyclades Islands Sunset Romance',
    country: 'Greece',
    category: 'romantic',
    tag: 'Romance Pick',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 12 Guests',
    rating: 4.94,
    reviewsCount: 264,
    basePrice: 1890,
    originalPrice: 2290,
    discountText: 'Save 15%',
    image: 'assets/images/santorini-greece.jpg',
    summary: 'Whitewashed cliffside villas in Oia, private catamaran cruise through volcanic hot springs, Assyrtiko wine tasting in 300-year-old caves, and iconic pink sunset dinners.',
    features: [
      'Cliffside Oia Suite with Private Caldera Infinity Jacuzzi',
      'Private Sunset Catamaran Cruise with Greek BBQ & Wine',
      'Volcanic Vineyard Wine Tasting with Master Sommelier',
      'Private Helicopter or Hydrofoil Transfer between Islands'
    ],
    inclusions: [
      '6 nights in whitewashed caldera luxury suites in Santorini & Mykonos',
      'Champagne breakfast served daily on your private sea balcony',
      '5-hour luxury catamaran sunset sailing tour with seafood dinner',
      'Private guided tour of ancient prehistoric Akrotiri ruins',
      'All island ferry transfers and private air-conditioned Mercedes vans',
      '24/7 dedicated Greek holiday specialist'
    ],
    upgrades: [
      'Professional Sunset Couple Photoshoot in Oia (+$180)',
      'Scuba diving through submerged volcanic caldera crater (+$220)',
      'Private helicopter hop to Mykonos or Milos (+$490)'
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Santorini & Oia Cliffside Check-in', desc: 'Private port or airport transfer to your whitewashed villa. Sip chilled Santorini Assyrtiko wine while gazing at the sunken volcanic caldera.' },
      { day: 'Day 2', title: 'Oia Blue Domes Walk & Red Beach Discovery', desc: 'Morning walking tour through iconic blue-domed churches and bougainvillea alleyways before crowds arrive. Afternoon swim at Red Beach.' },
      { day: 'Day 3', title: 'Private Sunset Catamaran Sailing Tour', desc: 'Sail past the Indian Rock and Venetian lighthouse. Swim in volcanic sulfur hot springs and feast on grilled prawns as the sun dips below the Aegean.' },
      { day: 'Day 4', title: 'Ancient Akrotiri & Volcanic Wine Cellars', desc: 'Explore "Minoan Pompeii" at Akrotiri, followed by estate tastings of rare volcanic wines paired with Cycladic cheeses and olives.' },
      { day: 'Day 5', title: 'Fira to Oia Clifftop Scenic Hike', desc: 'Walk along the caldera rim with 360-degree views of the sapphire sea, followed by a sunset dinner at an intimate cliff restaurant.' },
      { day: 'Day 6', title: 'Beach Day at Perissa Black Sand & Evening Feast', desc: 'Relax in private cabanas on volcanic black sands. Farewell seafood feast under fairy lights in quiet Ammoudi Bay.' },
      { day: 'Day 7', title: 'Aegean Departure', desc: 'Final morning coffee overlooking the volcano before private transfer to Santorini Airport or port.' }
    ]
  }
];

// Currency exchange rates relative to USD
const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  AUD: { symbol: 'A$', rate: 1.52, label: 'AUD (A$)' }
};

let currentCurrency = 'USD';
let activeSelectedPackage = PACKAGES[0];
let currentBookingStep = 1;
let currentBookingState = {
  package: PACKAGES[0],
  guests: 2,
  roomUpgradePerPerson: 0,
  includeFlights: false,
  flightCostPerPerson: 0,
  payOption: 'deposit'
};

// ========================================================
// 2. DOM INITIALIZATION
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPackagesGrid(PACKAGES);
  initBannerCountdown();
  initFaqAccordion();
  initCurrencyDropdown();
  initSocialProofToast();
  initFloatingConcierge();
  initNavigation();
  updateTripCalc();
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
// 5. TRIP ESTIMATOR / INTERACTIVE CALCULATOR
// ========================================================
window.updateTripCalc = function() {
  const destSelect = document.getElementById('calcDest');
  if (!destSelect) return;

  const selectedOpt = destSelect.options[destSelect.selectedIndex];
  const basePricePerPerson = parseInt(selectedOpt.getAttribute('data-price') || '1299', 10);

  // Accommodation tier
  const tierRadios = document.getElementsByName('hotelTier');
  let tierExtra = 0;
  for (const radio of tierRadios) {
    if (radio.checked) {
      tierExtra = parseInt(radio.value, 10);
      break;
    }
  }

  // Addons
  let addonsTotal = 0;
  if (document.getElementById('addonYacht')?.checked) addonsTotal += 320;
  if (document.getElementById('addonHeli')?.checked) addonsTotal += 380;
  if (document.getElementById('addonDining')?.checked) addonsTotal += 190;
  if (document.getElementById('addonPhoto')?.checked) addonsTotal += 150;

  // Guest count
  const guestCountEl = document.getElementById('calcGuestCount');
  const guests = parseInt(guestCountEl ? guestCountEl.textContent : '2', 10);

  // Calculation:
  // Base total = (basePricePerPerson + tierExtra) * guests + addonsTotal
  const subtotal = (basePricePerPerson + tierExtra) * guests + addonsTotal;
  const originalEstimate = Math.round(subtotal * 1.18); // Show original before discount
  const finalDiscounted = guests >= 2 ? Math.round(subtotal * 0.85) : subtotal;
  const perPerson = Math.round(finalDiscounted / guests);

  const { symbol, rate } = CURRENCY_RATES[currentCurrency];

  const originalEl = document.getElementById('calcOriginalPrice');
  const finalEl = document.getElementById('calcFinalPrice');
  const perPersonEl = document.getElementById('calcPerPersonPrice');

  if (originalEl) originalEl.textContent = `${symbol}${Math.round(originalEstimate * rate).toLocaleString()}`;
  if (finalEl) finalEl.textContent = `${symbol}${Math.round(finalDiscounted * rate).toLocaleString()}`;
  if (perPersonEl) perPersonEl.textContent = `(${symbol}${Math.round(perPerson * rate).toLocaleString()} / person)`;
};

window.adjustGuestCount = function(delta) {
  const guestCountEl = document.getElementById('calcGuestCount');
  if (!guestCountEl) return;
  let count = parseInt(guestCountEl.textContent, 10) + delta;
  if (count < 1) count = 1;
  if (count > 16) count = 16;
  guestCountEl.textContent = count;
  window.updateTripCalc();
};

window.bookCustomTrip = function() {
  const destSelect = document.getElementById('calcDest');
  const destVal = destSelect ? destSelect.value : 'bali';
  const foundPkg = PACKAGES.find(p => p.id === destVal) || PACKAGES[0];

  const guestCount = parseInt(document.getElementById('calcGuestCount')?.textContent || '2', 10);

  window.openBookingModal(foundPkg.id, {
    guests: guestCount
  });
};

// ========================================================
// 6. MULTI-STEP BOOKING MODAL LOGIC
// ========================================================
window.openBookingModal = function(pkgId, customOptions = {}) {
  const pkg = PACKAGES.find(p => p.id === pkgId) || PACKAGES[0];
  activeSelectedPackage = pkg;

  currentBookingState = {
    package: pkg,
    guests: customOptions.guests || 2,
    roomUpgradePerPerson: 0,
    includeFlights: false,
    flightCostPerPerson: 0,
    payOption: 'deposit'
  };

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

  const progressFill = document.getElementById('stepProgressFill');
  if (progressFill) {
    const percents = { 1: '0%', 2: '33%', 3: '66%', 4: '100%' };
    progressFill.style.width = percents[stepNum] || '0%';
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
  const pkg = currentBookingState.package;
  const guests = currentBookingState.guests;

  const roomSelect = document.getElementById('modalRoomTier');
  const roomUpgradePerPerson = parseInt(roomSelect ? roomSelect.value : '0', 10);
  currentBookingState.roomUpgradePerPerson = roomUpgradePerPerson;

  const flightsCheck = document.getElementById('modalIncludeFlights');
  const includeFlights = flightsCheck ? flightsCheck.checked : false;
  currentBookingState.includeFlights = includeFlights;
  const flightsPerPerson = includeFlights ? 850 : 0;
  currentBookingState.flightCostPerPerson = flightsPerPerson;

  const { symbol, rate } = CURRENCY_RATES[currentCurrency];

  const basePerPerson = pkg.basePrice;
  const totalBase = basePerPerson * guests;
  const totalRoomUpgrade = roomUpgradePerPerson * guests;
  const totalFlights = flightsPerPerson * guests;
  const summerDiscount = 300; // $300 early-bird flat package discount

  const grandTotal = Math.max(0, (totalBase + totalRoomUpgrade + totalFlights) - summerDiscount);
  const deposit20 = grandTotal * 0.20;

  // Update Summary elements
  const guestsSpan = document.getElementById('modalSummaryGuests');
  const baseEl = document.getElementById('modalSummaryBasePrice');
  const roomLine = document.getElementById('modalRoomUpgradeLine');
  const roomPriceEl = document.getElementById('modalSummaryRoomUpgrade');
  const flightLine = document.getElementById('modalFlightLine');
  const flightPriceEl = document.getElementById('modalSummaryFlights');
  const totalEl = document.getElementById('modalSummaryTotalPrice');
  const depositEl = document.getElementById('modalDepositAmount');
  const depositBadgeEl = document.getElementById('modalDepositBadgePrice');

  if (guestsSpan) guestsSpan.textContent = guests;
  if (baseEl) baseEl.textContent = `${symbol}${Math.round(totalBase * rate).toLocaleString()}`;

  if (roomLine) {
    roomLine.style.display = totalRoomUpgrade > 0 ? 'flex' : 'none';
    if (roomPriceEl) roomPriceEl.textContent = `+${symbol}${Math.round(totalRoomUpgrade * rate).toLocaleString()}`;
  }

  if (flightLine) {
    flightLine.style.display = includeFlights ? 'flex' : 'none';
    if (flightPriceEl) flightPriceEl.textContent = `+${symbol}${Math.round(totalFlights * rate).toLocaleString()}`;
  }

  if (totalEl) totalEl.textContent = `${symbol}${Math.round(grandTotal * rate).toLocaleString()}`;
  if (depositEl) depositEl.textContent = `${symbol}${Math.round(deposit20 * rate).toLocaleString()}`;
  if (depositBadgeEl) depositBadgeEl.textContent = `${symbol}${Math.round(deposit20 * rate).toLocaleString()}`;
};

window.submitBookingOrder = function() {
  const firstName = document.getElementById('travelerFirstName')?.value || 'Guest';
  const lastName = document.getElementById('travelerLastName')?.value || 'Traveler';
  const dates = document.getElementById('bookingDepartureSelect')?.value || 'Selected 2026 Dates';
  const pkg = currentBookingState.package;

  // Generate random reference code
  const refCode = 'WL-2026-' + Math.floor(10000 + Math.random() * 90000);

  // Fill Ticket Voucher
  const ticketPkg = document.getElementById('ticketPackageName');
  const ticketDates = document.getElementById('ticketDates');
  const ticketName = document.getElementById('ticketTravelerName');
  const ticketGuests = document.getElementById('ticketGuestCount');
  const ticketRef = document.getElementById('ticketBookingRef');

  if (ticketPkg) ticketPkg.textContent = pkg.title;
  if (ticketDates) ticketDates.textContent = dates;
  if (ticketName) ticketName.textContent = `${firstName} ${lastName}`;
  if (ticketGuests) ticketGuests.textContent = `${currentBookingState.guests} Traveler(s)`;
  if (ticketRef) ticketRef.textContent = refCode;

  // Move to Step 4
  setBookingStep(4);
};

window.printVoucher = function() {
  window.print();
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
        updateTripCalc();
        updateBookingSummary();
      }
    });
  });

  document.addEventListener('click', () => {
    menu.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
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
    reply = "🔥 Right now you can claim up to $500 off per person during our Summer Early-Bird event! Plus, if you pay in full today, you receive an extra 5% instant discount voucher. Check our top packages above!";
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
    alert(`🎉 Success! Your $150 promo voucher code [WANDER150] has been registered and emailed to ${email}. You can apply this code at checkout on any package!`);
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
