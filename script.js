// =========================================================================
// إعدادات ألوان وخطوط Tailwind CSS
// =========================================================================
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          plumPrimary: '#5E1D39',
          plumDark: '#3E1226',
          plumDeep: '#4B152D',
          plumSoft: '#F6E7EC',
          blushBg: '#FAF4F0',
          blushCard: '#FFFFFF',
          blushBorder: '#E8D8D5',
          goldChampagne: '#F2CFA9',
          goldWarm: '#DFB68C',
          goldMetallic: '#D4A359',
          inkMain: '#381223',
          inkMuted: '#6E5660',
          sageBg: '#E4F3EA',
          sageText: '#1E6F43'
        },
        fontFamily: {
          sans: ['Tajawal', 'Plus Jakarta Sans', 'sans-serif'],
          serif: ['Amiri', 'serif']
        }
      }
    }
  }
}

// =========================================================================
// 0. نظام اللغتين (العربية والإنجليزية)
// =========================================================================
let currentLang = 'ar';
try {
  const savedLang = localStorage.getItem('lamssa_lang');
  if (savedLang === 'en' || savedLang === 'ar') currentLang = savedLang;
} catch (e) {}

const i18n = {
  ar: {
    pageTitle: 'لمسة - Lamssa (نموذج أولي تجريبي)',
    prototypeBadge: 'نموذج أولي تجريبي',
    prototypeBannerNote: 'تُسجَّل الطلبات محلياً للعرض فقط دون إرسال فعلي.',
    ordersPrototypeNote: 'نموذج أولي تجريبي — تُحفَظ الطلبات داخل الصفحة فقط دون إرسال فعلي إلى الشريكات.',
    langToggleText: 'EN',
    langToggleTitle: 'Switch to English',
    splashStartBtn: 'ابدئي الآن',
    backTitle: 'رجوع',
    bellTitle: 'التنبيهات والطلبات',
    logoTitle: 'العودة لشاشة البداية',
    logoAlt: 'شعار لمسة',
    ordersTitle: 'سجل الحجوزات',
    setupHeading: 'جهّزي إطلالتك في مكان واحد',
    setupSubtitle: 'اختاري المناسبة والميزانية ونرتّب لكِ الأزياء<br/>والجمال المتاحة من مشاريع قطرية محلية.',
    occasionLabel: 'ما المناسبة؟',
    occGraduation: 'حفل تخرّج',
    occPhotoshoot: 'جلسة تصوير',
    occPrivate: 'مناسبة خاصة',
    whenLabel: 'متى تحتاجين الجاهزية؟',
    chooseHourMinute: 'اختاري الساعة والدقيقة',
    periodAM: 'صباحاً',
    periodPM: 'مساءً',
    hourLabel: 'الساعة',
    minuteLabel: 'الدقيقة',
    confirmTimeBtn: 'تأكيد الوقت',
    budgetLabel: 'ميزانيتك',
    maxBudgetLabel: 'الحد الأقصى',
    currency: 'ريال',
    currencyShort: 'ر.ق',
    whatYouHaveLabel: 'ما لديك',
    blackAbayaOwned: 'عباية سوداء أملكها',
    showMyPlanBtn: 'اعرض خطتي',
    totalLabel: 'الإجمالي',
    editOccasionBudgetBtn: 'تعديل المناسبة أو الميزانية',
    confirmPlanBtn: 'اعتماد الخطة وتسجيل طلب تجريبي',
    eventsHeading: 'احجزي ركن «لمسة قبل الصورة»',
    eventsSubtitle: 'ركن في موقع الفعالية لتجهيز الإطلالات قبل التصوير.',
    boothHoursLabel: 'مدة التشغيل (ساعات)',
    boothStaffLabel: 'عدد العاملات',
    boothServicesLabel: 'الخدمات',
    svcShayla: 'ضبط الشيلة',
    svcLint: 'إزالة الوبر من العباية',
    svcMakeup: 'رتوش المكياج',
    boothLocationPlaceholder: 'موقع الفعالية',
    boothLocationDefault: 'مجمّع البحوث جامعة قطر',
    boothPriceNote: 'تُقدَّر التكلفة بحسب مدة التشغيل وعدد العاملات والخدمات المختارة',
    boothEstimatedLabel: 'التكلفة التقديرية للركن:',
    submitBoothBtn: 'تسجيل طلب حجز تجريبي',
    subtabFashion: 'خيارات الأزياء والإكسسوارات',
    subtabShoot: 'صوّري مجموعتكِ',
    projectsHeading: 'المشاريع القطرية المشاركة',
    projectsSubtitle: 'تصفّحي خيارات العبايات والإكسسوارات والجمال وأضيفيها لخطتكِ',
    catAll: 'الكل',
    catAbayas: 'عبايات',
    catAccessories: 'إكسسوارات وحقائب',
    catTailoring: 'تعديل وخياطة',
    catBeauty: 'مكياج وجمال',
    inYourPlan: '✓ في خطتكِ',
    addItem: '+ أضيفي',
    shootHeading: 'صوّري مجموعتكِ',
    shootSubtitle: 'لأصحاب مشاريع العبايات والإكسسوارات.. جلسة<br/>تصوير احترافية مصغّرة لمجموعة أزياء.',
    shootPiecesLabel: 'عدد القطع',
    shootLooksLabel: 'عدد الإطلالات',
    shootOutputsLabel: 'المخرجات',
    outputPhotos: 'صور للمتجر',
    outputVideo: 'فيديو قصير',
    shootInfoNote: 'تحصلين على نسخة عالية الجودة من الصور ومقاطع الفيديو جاهزة للاستخدام في متجرك.',
    submitShootBtn: 'تسجيل طلب موعد تجريبي',
    navClient: 'العميلة',
    navEvents: 'الفعاليات',
    navProjects: 'المشاريع',
    ordersDrawerTitle: 'طلباتي وحجوزاتي في لمسة',
    ordersEmpty: 'لا توجد طلبات تجريبية مسجّلة حالياً. جرّبي اعتماد خطة العميلة أو حجز ركن الفعاليات.',
    orderReceived: '✓ تم تسجيل طلب تجريبي',
    weekdaysShort: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
    weekdaysFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    planTitle: (occ) => `خطة ${occ}`,
    planSubheading: (date, budget) => `${date} - الميزانية: ${budget} ريال`,
    budgetRemaining: (diff) => `ضمن ميزانيتك - متبقي ${diff} ريال`,
    budgetExact: 'ضمن ميزانيتك تماماً',
    budgetOver: (over) => `أعلى من ميزانيتك بـ ${over} ريال`,
    backToBaseSlot: (base) => `العودة للموعد الأساسي (${base} ريال)`,
    tryAltMakeup: 'جرّبي: تعذّر موعد المكياج (البديل 270 ر.ق)',
    statusProposed: 'خدمة مقترحة',
    statusAwaiting: 'بانتظار قبول مقدمة الخدمة',
    statusConfirmed: 'مؤكد',
    statusFlowHintProposed: 'جميع الخدمات التالية مقترحة ضمن الخطة ولم تُؤكَّد بعد حتى تسجيل الطلب وقبول مقدمة الخدمة.',
    statusFlowHintAwaiting: 'تم تسجيل طلب تجريبي داخل الصفحة — بانتظار قبول مقدمة الخدمة، ويمكنكِ محاكاة القبول للتجربة.',
    statusFlowHintConfirmed: 'تم قبول الخدمات فعلياً من مقدمات الخدمات وأصبحت الحجوزات مؤكدة.',
    acceptSingleBtn: 'محاكاة القبول',
    simulateAcceptAllBtn: 'جرّبي: قبول مقدمات الخدمات (تأكيد الحجز)',
    viewOrdersPlanBtn: 'عرض الطلب في سجل الحجوزات',
    allConfirmedOrdersBtn: 'جميع الخدمات مؤكدة — عرض سجل الحجوزات',
    sendAltMakeupBtn: 'تسجيل طلب تجريبي للخدمات المضافة/المعدّلة',
    orderStatusAwaiting: '⏳ تم تسجيل طلب تجريبي — بانتظار قبول مقدمة الخدمة',
    orderStatusPartial: (done, total) => `⏳ مؤكد جزئياً (${done}/${total}) — بانتظار الباقي`,
    orderStatusConfirmed: '✓ مؤكد بعد قبول مقدمة الخدمة',
    drawerAcceptBtn: 'محاكاة قبول مقدمة الخدمة',
    removeFromPlanTitle: 'إزالة من الخطة',
    emptyPlanMsg: 'لا توجد خدمات مضافة حالياً في خطتكِ.',
    browseBrandsBtn: 'تصفّحي المشاريع لإضافة خدمات',
    catalogPlanSummary: (count, total) => `في خطتكِ: ${count} خدمات • الإجمالي ${total} ريال`,
    catalogPlanEmpty: 'خطتكِ فارغة حالياً (0 ريال)',
    viewMyPlanShortBtn: 'عرض خطتي',
    tlTime1: '12:00 ظ',
    tlTitle1: 'تعديل الأكمام',
    tlSub1: '(خياطة بسيطة)',
    tlTime2: '2:00 م',
    tlTitle2: 'تأجير حقيبة',
    tlTime3Base: '3:30 م',
    tlTime3Alt: '4:30 م',
    tlTitle3: 'حجز مكياج',
    tlSub3Alt: 'صالون لمار (البديل)',
    tlTime4: 'مع الاستلام',
    tlTitle4: 'توصيل قياسي',
    tlTitle5: 'جاهزة للمناسبة',
    toastAltOn: (total) => `تم اقتراح الموعد البديل للمكياج (4:30 م • 270 ريال) — الإجمالي ${total} ريال`,
    toastAltOff: (total) => `تمت العودة للخطة المقترحة الأساسية (${total} ريال)`,
    toastPlanSent: (total) => `تم تسجيل طلب تجريبي (${total}) — الحالة الآن: بانتظار قبول مقدمة الخدمة`,
    toastAltResent: (total) => `تم تسجيل طلب تجريبي للتحديثات (${total}) — بانتظار قبول مقدمة الخدمة`,
    toastSingleAccepted: (title) => `وافقت مقدمة الخدمة على «${title}» — الحالة الآن: مؤكد`,
    toastAllAccepted: 'وافقت مقدمات الخدمات فعلياً — جميع الحجوزات الآن مؤكدة',
    toastBoothSent: 'تم تسجيل طلب تجريبي لحجز ركن «لمسة قبل الصورة»',
    toastShootSent: 'تم تسجيل طلب تجريبي لموعد جلسة تصوير مجموعتكِ',
    toastCatalogAdd: (title, total) => `تمت إضافة «${title}» إلى خطتكِ — الإجمالي الآن ${total} ريال`,
    toastCatalogRemove: (title, total) => `تمت إزالة «${title}» من خطتكِ — الإجمالي الآن ${total} ريال`,
    toastLogoUpdated: 'تم تحديث شعار لمسة في أعلى جميع الصفحات',
    toastLangSwitched: 'تم التبديل إلى اللغة العربية'
  },
  en: {
    pageTitle: 'Lamssa - لمسة (Demo Prototype)',
    prototypeBadge: 'Demo Prototype',
    prototypeBannerNote: 'Requests are logged locally for preview only without live submission.',
    ordersPrototypeNote: 'Demo Prototype — Requests are saved inside this page only without live submission to partners.',
    langToggleText: 'عربي',
    langToggleTitle: 'التبديل إلى العربية',
    splashStartBtn: 'Get Started',
    backTitle: 'Back',
    bellTitle: 'Notifications & Orders',
    logoTitle: 'Back to Home',
    logoAlt: 'Lamssa Logo',
    ordersTitle: 'Booking History',
    setupHeading: 'Plan Your Look in One Place',
    setupSubtitle: 'Choose your occasion and budget, and we’ll coordinate<br/>fashion & beauty from local Qatari businesses.',
    occasionLabel: 'What is the occasion?',
    occGraduation: 'Graduation',
    occPhotoshoot: 'Photoshoot',
    occPrivate: 'Private Event',
    whenLabel: 'When do you need to be ready?',
    chooseHourMinute: 'Select Hour & Minute',
    periodAM: 'AM',
    periodPM: 'PM',
    hourLabel: 'Hour',
    minuteLabel: 'Minute',
    confirmTimeBtn: 'Confirm Time',
    budgetLabel: 'Your Budget',
    maxBudgetLabel: 'Maximum',
    currency: 'QAR',
    currencyShort: 'QAR',
    whatYouHaveLabel: 'What You Have',
    blackAbayaOwned: 'Black abaya I already own',
    showMyPlanBtn: 'Show My Plan',
    totalLabel: 'Total',
    editOccasionBudgetBtn: 'Edit Occasion or Budget',
    confirmPlanBtn: 'Confirm Plan & Log Demo Request',
    eventsHeading: 'Book "Lamssa Before the Shot"',
    eventsSubtitle: 'An on-site touch-up booth at your event to perfect looks before photos.',
    boothHoursLabel: 'Operating Duration (Hours)',
    boothStaffLabel: 'Number of Specialists',
    boothServicesLabel: 'Services',
    svcShayla: 'Shayla Styling',
    svcLint: 'Abaya Lint Removal',
    svcMakeup: 'Makeup Touch-Ups',
    boothLocationPlaceholder: 'Event Location',
    boothLocationDefault: 'Research Complex Qatar University',
    boothPriceNote: 'Estimated cost is calculated based on duration, specialists, and selected services.',
    boothEstimatedLabel: 'Estimated Booth Cost:',
    submitBoothBtn: 'Log Demo Booking Request',
    subtabFashion: 'Fashion & Accessories',
    subtabShoot: 'Shoot Your Collection',
    projectsHeading: 'Participating Qatari Brands',
    projectsSubtitle: 'Browse local abayas, accessories & beauty services and add them to your plan',
    catAll: 'All',
    catAbayas: 'Abayas',
    catAccessories: 'Accessories & Bags',
    catTailoring: 'Tailoring',
    catBeauty: 'Makeup & Beauty',
    inYourPlan: '✓ In Plan',
    addItem: '+ Add',
    shootHeading: 'Shoot Your Collection',
    shootSubtitle: 'For abaya & accessory brands.. a mini<br/>professional photoshoot for your collection.',
    shootPiecesLabel: 'Number of Pieces',
    shootLooksLabel: 'Number of Looks',
    shootOutputsLabel: 'Deliverables',
    outputPhotos: 'Store Photos',
    outputVideo: 'Short Video',
    shootInfoNote: 'Receive high-resolution photos and video clips ready to publish in your online store.',
    submitShootBtn: 'Log Demo Session Request',
    navClient: 'Client',
    navEvents: 'Events',
    navProjects: 'Brands',
    ordersDrawerTitle: 'My Lamssa Orders & Bookings',
    ordersEmpty: 'No demo requests logged yet. Try confirming a client plan or booking an event booth.',
    orderReceived: '✓ Demo request logged',
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdaysFull: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    planTitle: (occ) => `${occ} Plan`,
    planSubheading: (date, budget) => `${date} • Budget: ${budget} QAR`,
    budgetRemaining: (diff) => `Within your budget • ${diff} QAR left`,
    budgetExact: 'Right on your budget',
    budgetOver: (over) => `Over your budget by ${over} QAR`,
    backToBaseSlot: (base) => `Back to original slot (${base} QAR)`,
    tryAltMakeup: 'Try: Makeup slot unavailable (Alt 270 QAR)',
    statusProposed: 'Proposed Service',
    statusAwaiting: 'Awaiting Provider Acceptance',
    statusConfirmed: 'Confirmed',
    statusFlowHintProposed: 'All services below are proposed in your plan and are not confirmed until requested and accepted by each provider.',
    statusFlowHintAwaiting: 'Demo request logged locally — awaiting provider acceptance, or simulate acceptance below.',
    statusFlowHintConfirmed: 'All services have been accepted by providers and are now confirmed.',
    acceptSingleBtn: 'Simulate Accept',
    simulateAcceptAllBtn: 'Try: Providers Accept Requests (Confirm)',
    viewOrdersPlanBtn: 'View Request in Booking History',
    allConfirmedOrdersBtn: 'All Services Confirmed — View Bookings',
    sendAltMakeupBtn: 'Log Demo Request for Added/Updated Services',
    orderStatusAwaiting: '⏳ Demo request logged — Awaiting Provider Acceptance',
    orderStatusPartial: (done, total) => `⏳ Partially Confirmed (${done}/${total})`,
    orderStatusConfirmed: '✓ Confirmed by Provider',
    drawerAcceptBtn: 'Simulate Provider Acceptance',
    removeFromPlanTitle: 'Remove from plan',
    emptyPlanMsg: 'No services are currently added to your plan.',
    browseBrandsBtn: 'Browse Brands to Add Services',
    catalogPlanSummary: (count, total) => `In Plan: ${count} services • Total ${total} QAR`,
    catalogPlanEmpty: 'Your plan is empty (0 QAR)',
    viewMyPlanShortBtn: 'View Plan',
    tlTime1: '12:00 PM',
    tlTitle1: 'Sleeve Alterations',
    tlSub1: '(Simple tailoring)',
    tlTime2: '2:00 PM',
    tlTitle2: 'Handbag Rental',
    tlTime3Base: '3:30 PM',
    tlTime3Alt: '4:30 PM',
    tlTitle3: 'Makeup Booking',
    tlSub3Alt: 'Lamar Salon (Alternative)',
    tlTime4: 'On pickup',
    tlTitle4: 'Standard Delivery',
    tlTitle5: 'Ready for the Event',
    toastAltOn: (total) => `Alternative makeup proposed (4:30 PM • 270 QAR) — Total ${total} QAR`,
    toastAltOff: (total) => `Reverted to original proposed plan (${total} QAR)`,
    toastPlanSent: (total) => `Demo request logged (${total}) — Status: Awaiting Provider Acceptance`,
    toastAltResent: (total) => `Demo request logged for updates (${total}) — Awaiting Provider Acceptance`,
    toastSingleAccepted: (title) => `Provider accepted "${title}" — Status: Confirmed`,
    toastAllAccepted: 'Providers accepted — All bookings are now Confirmed',
    toastBoothSent: 'Demo request logged for "Lamssa Before the Shot" booth',
    toastShootSent: 'Demo request logged for your collection photoshoot',
    toastCatalogAdd: (title, total) => `Added "${title}" to your plan — Total now ${total} QAR`,
    toastCatalogRemove: (title, total) => `Removed "${title}" from your plan — Total now ${total} QAR`,
    toastLogoUpdated: 'Lamssa logo updated across all pages',
    toastLangSwitched: 'Switched to English'
  }
};

function t(key) {
  return i18n[currentLang][key];
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  try {
    localStorage.setItem('lamssa_lang', currentLang);
  } catch (e) {}
  applyLanguage(true);
}

function applyLanguage(showFeedback = false) {
  const isAr = currentLang === 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.title = t('pageTitle');

  // تبديل خلفية شاشة البداية حسب اللغة
  const splashScreen = document.getElementById('screen-splash');
  if (splashScreen) {
    splashScreen.style.backgroundImage = isAr
      ? "url('background/00.jpg')"
      : "url('background/00-en.jpeg')";
  }

  // تحديث كل النصوص الثابتة
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key] !== undefined) {
      el.textContent = i18n[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[currentLang][key] !== undefined) {
      el.innerHTML = i18n[currentLang][key];
    }
  });

  // تحديث أزرار تبديل اللغة
  document.querySelectorAll('.lang-toggle-label').forEach(el => {
    el.textContent = t('langToggleText');
  });
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.title = t('langToggleTitle');
  });

  // تحديث الأيقونات الاتجاهية (RTL vs LTR)
  const splashArrow = document.getElementById('splash-start-arrow');
  if (splashArrow) {
    splashArrow.className = isAr ? 'fa-solid fa-arrow-left text-base' : 'fa-solid fa-arrow-right text-base';
  }
  const backIcon = document.getElementById('header-back-icon');
  if (backIcon) {
    backIcon.className = isAr ? 'fa-solid fa-arrow-right text-sm' : 'fa-solid fa-arrow-left text-sm';
  }
  const calPrevIcon = document.getElementById('cal-prev-icon');
  const calNextIcon = document.getElementById('cal-next-icon');
  if (calPrevIcon && calNextIcon) {
    calPrevIcon.className = isAr ? 'fa-solid fa-chevron-right text-xs' : 'fa-solid fa-chevron-left text-xs';
    calNextIcon.className = isAr ? 'fa-solid fa-chevron-left text-xs' : 'fa-solid fa-chevron-right text-xs';
  }

  // تحديث عناوين التلميحات (title/alt/placeholder)
  const backBtn = document.getElementById('header-back-btn');
  const bellBtn = document.getElementById('header-bell-btn');
  const logoBtn = document.getElementById('header-logo-btn');
  const logoImg = document.getElementById('header-logo-img');
  const ordersBtn = document.getElementById('header-orders-btn');
  if (backBtn) backBtn.title = t('backTitle');
  if (bellBtn) bellBtn.title = t('bellTitle');
  if (logoBtn) logoBtn.title = t('logoTitle');
  if (logoImg) logoImg.alt = t('logoAlt');
  if (ordersBtn) ordersBtn.title = t('ordersTitle');

  // تحديث موقع الفعالية الافتراضي إن لم يعدّله المستخدم
  const locInput = document.getElementById('booth-location-input');
  if (locInput) {
    locInput.placeholder = t('boothLocationPlaceholder');
    if (!boothLocationEdited) {
      locInput.value = t('boothLocationDefault');
    }
  }

  // تحديث صف أيام الأسبوع في التقويم
  const weekdaysRow = document.getElementById('cal-weekdays-row');
  if (weekdaysRow) {
    weekdaysRow.innerHTML = t('weekdaysShort').map(d => `<span>${d}</span>`).join('');
  }

  // تحديث قيمة الميزانية والأرقام
  updateBudgetDisplay();

  // إعادة رسم المكونات الديناميكية
  updateSelectedDateUI();
  renderSetupCalendar();
  updateSelectedTimeUI();
  updateBoothEstimatedPrice();
  renderFashionCatalog(currentCatalogCategory);

  if (currentScreen === 'client-plan') {
    renderClientPlan();
  }
  if (!document.getElementById('orders-drawer').classList.contains('hidden')) {
    renderOrdersDrawerList();
  }

  if (showFeedback) {
    showToast(t('toastLangSwitched'));
  }
}

let customUploadedLogoUrl = null;

function renderAllLogos() {
  const slots = document.querySelectorAll('.lamssa-logo-slot');
  const tpl = document.getElementById('lamssa-logo-template');

  slots.forEach(slot => {
    if (customUploadedLogoUrl) {
      slot.innerHTML = '';
      const img = document.createElement('img');
      img.src = customUploadedLogoUrl;
      img.alt = t('logoAlt');
      img.className = 'max-h-full max-w-full object-contain drop-shadow';
      slot.appendChild(img);
    } else if (tpl && tpl.content) {
      slot.innerHTML = '';
      slot.appendChild(tpl.content.cloneNode(true));
    }
  });
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    customUploadedLogoUrl = e.target.result;
    renderAllLogos();
    showToast(t('toastLogoUpdated'));
  };
  reader.readAsDataURL(file);
}

// =========================================================================
// 2. حالة التطبيق والبيانات
// =========================================================================
let currentScreen = 'splash';
let previousScreen = 'splash';
let isAlternativeMakeupActive = false;
let selectedOccasionKey = 'graduation';
let clientBudget = 400;
let hasBlackAbaya = true;
let currentCatalogCategory = 'all';

const occasionMeta = {
  graduation: { ar: 'حفل تخرّج', en: 'Graduation', icon: 'fa-graduation-cap' },
  photoshoot: { ar: 'جلسة تصوير', en: 'Photoshoot', icon: 'fa-camera' },
  private: { ar: 'مناسبة خاصة', en: 'Private Event', icon: 'fa-calendar-check' }
};

const boothServiceLabels = {
  shayla: { ar: 'ضبط الشيلة', en: 'Shayla Styling' },
  lint: { ar: 'إزالة الوبر من العباية', en: 'Abaya Lint Removal' },
  makeup: { ar: 'رتوش المكياج', en: 'Makeup Touch-Ups' }
};

const shootOutputLabels = {
  photos: { ar: 'صور للمتجر', en: 'Store Photos' },
  video: { ar: 'فيديو قصير', en: 'Short Video' }
};

// عدادات الفعاليات
let boothHours = 2;
let boothStaff = 2;
let boothServices = ['shayla', 'lint', 'makeup'];
let boothLocationEdited = false;

// عدادات التصوير
let shootPieces = 5;
let shootLooks = 2;
let shootOutputs = ['photos'];

// سجل الطلبات (يدعم اللغتين)
let bookingsHistory = [];

// كتالوج المشاريع القطرية المشاركة (مرتبط مباشرةً بالخط الزمني وإجمالي الخطة)
const fashionCatalog = [
  {
    id: 'f1',
    planKey: 'tailoring',
    timelineOrder: 1,
    category: 'tailoring',
    partner: { ar: 'مشغل دانة للخياطة', en: 'Dana Tailoring Atelier' },
    title: { ar: 'تعديل الأكمام (خياطة بسيطة)', en: 'Sleeve Alterations (Simple Tailoring)' },
    timelineTitle: { ar: 'تعديل الأكمام', en: 'Sleeve Alterations' },
    timelineSubtitle: { ar: '(خياطة بسيطة)', en: '(Simple tailoring)' },
    timelineTime: { ar: '12:00 ظ', en: '12:00 PM' },
    price: 60,
    timeNote: { ar: 'جاهزة 12:00 ظهراً', en: 'Ready by 12:00 PM' },
    icon: 'fa-scissors',
    timelineIcon: 'fa-scissors',
    iconBg: 'bg-[#F3E6E8] text-plumPrimary',
    added: true
  },
  {
    id: 'f4',
    planKey: 'abaya',
    timelineOrder: 2,
    category: 'abayas',
    partner: { ar: 'دار سديم للعبايات القطرية', en: 'Sadeem Qatari Abayas' },
    title: { ar: 'عباية كريب بتطريز ذهبي هادئ', en: 'Crepe Abaya with Soft Gold Embroidery' },
    timelineTitle: { ar: 'عباية كريب بتطريز ذهبي هادئ', en: 'Crepe Abaya (Gold Embroidery)' },
    timelineSubtitle: { ar: 'دار سديم للعبايات القطرية', en: 'Sadeem Qatari Abayas' },
    timelineTime: { ar: '1:00 م', en: '1:00 PM' },
    price: 340,
    timeNote: { ar: 'توصيل فوري خلال 3 ساعات', en: 'Express delivery in 3 hours' },
    icon: 'fa-shirt',
    timelineIcon: 'fa-shirt',
    iconBg: 'bg-[#F5EBF0] text-plumPrimary',
    added: false
  },
  {
    id: 'f2',
    planKey: 'bag',
    timelineOrder: 3,
    category: 'accessories',
    partner: { ar: 'بوتيك ترف للإكسسوارات', en: 'Taraf Accessories Boutique' },
    title: { ar: 'تأجير حقيبة سهرة كلاسيكية', en: 'Classic Evening Bag Rental' },
    timelineTitle: { ar: 'تأجير حقيبة', en: 'Handbag Rental' },
    timelineSubtitle: { ar: '', en: '' },
    timelineTime: { ar: '2:00 م', en: '2:00 PM' },
    price: 60,
    timeNote: { ar: 'توصيل 2:00 ظهراً', en: 'Delivery at 2:00 PM' },
    icon: 'fa-bag-shopping',
    timelineIcon: 'fa-bag-shopping',
    iconBg: 'bg-[#F5ECE4] text-[#7A4E2D]',
    added: true
  },
  {
    id: 'f5',
    planKey: 'jewelry',
    timelineOrder: 4,
    category: 'accessories',
    partner: { ar: 'لمعة للمجوهرات والإكسسوار', en: 'Lamaa Jewelry & Accessories' },
    title: { ar: 'طقم أقراط وسوار مطلي بالذهب', en: 'Gold-Plated Earrings & Bracelet Set' },
    timelineTitle: { ar: 'طقم أقراط وسوار مطلي بالذهب', en: 'Gold-Plated Earrings & Bracelet' },
    timelineSubtitle: { ar: 'لمعة للمجوهرات والإكسسوار', en: 'Lamaa Jewelry & Accessories' },
    timelineTime: { ar: '2:30 م', en: '2:30 PM' },
    price: 55,
    timeNote: { ar: 'تأجير أو شراء', en: 'Rent or buy' },
    icon: 'fa-gem',
    timelineIcon: 'fa-gem',
    iconBg: 'bg-[#FAF0E1] text-[#9A6B26]',
    added: false
  },
  {
    id: 'f3',
    planKey: 'makeup',
    timelineOrder: 5,
    category: 'beauty',
    partner: { ar: 'خبيرة المكياج نورة', en: 'Makeup Artist Noura' },
    title: { ar: 'حجز مكياج مناسبات وتخرج', en: 'Event & Graduation Makeup' },
    timelineTitle: { ar: 'حجز مكياج', en: 'Makeup Booking' },
    timelineSubtitle: { ar: '', en: '' },
    timelineTime: { ar: '3:30 م', en: '3:30 PM' },
    price: 210,
    timeNote: { ar: 'موعد 3:30 عصراً', en: 'Appointment at 3:30 PM' },
    icon: 'fa-wand-magic-sparkles',
    timelineIcon: 'fa-paintbrush',
    iconBg: 'bg-[#F7E8EC] text-plumPrimary',
    added: true
  }
];

// =========================================================================
// 3. التنقل بين الشاشات
// =========================================================================
function navigateTo(screenId, useAltMakeup = null) {
  if (screenId !== currentScreen) {
    previousScreen = currentScreen;
  }
  currentScreen = screenId;

  if (useAltMakeup !== null) {
    isAlternativeMakeupActive = useAltMakeup;
  }

  const splashEl = document.getElementById('screen-splash');
  const topHeaderEl = document.getElementById('app-top-header');
  const mainContentEl = document.getElementById('main-content');
  const bottomNavEl = document.getElementById('app-bottom-nav');

  ['screen-client-setup', 'screen-client-plan', 'screen-events', 'screen-projects'].forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  if (screenId === 'splash') {
    splashEl.classList.remove('hidden');
    topHeaderEl.classList.add('hidden');
    mainContentEl.classList.add('hidden');
    bottomNavEl.classList.add('hidden');
    return;
  }

  splashEl.classList.add('hidden');
  topHeaderEl.classList.remove('hidden');
  mainContentEl.classList.remove('hidden');
  bottomNavEl.classList.remove('hidden');

  document.getElementById('screen-' + screenId).classList.remove('hidden');
  mainContentEl.scrollTop = 0;

  const backBtn = document.getElementById('header-back-btn');
  const bellBtn = document.getElementById('header-bell-btn');
  if (screenId === 'client-setup') {
    backBtn.classList.add('hidden');
    bellBtn.classList.remove('hidden');
  } else {
    backBtn.classList.remove('hidden');
    bellBtn.classList.add('hidden');
  }

  const navClient = document.getElementById('nav-btn-client');
  const navEvents = document.getElementById('nav-btn-events');
  const navProjects = document.getElementById('nav-btn-projects');

  [navClient, navEvents, navProjects].forEach(btn => {
    btn.className = 'flex flex-col items-center justify-center gap-1 text-inkMuted hover:text-plumPrimary font-bold transition';
  });

  if (screenId === 'client-setup' || screenId === 'client-plan') {
    navClient.className = 'flex flex-col items-center justify-center gap-1 text-plumPrimary font-extrabold transition';
  } else if (screenId === 'events') {
    navEvents.className = 'flex flex-col items-center justify-center gap-1 text-plumPrimary font-extrabold transition';
  } else if (screenId === 'projects') {
    navProjects.className = 'flex flex-col items-center justify-center gap-1 text-plumPrimary font-extrabold transition';
  }

  if (screenId === 'client-plan') {
    renderClientPlan();
  } else if (screenId === 'projects') {
    renderFashionCatalog(currentCatalogCategory);
  }
}

function goBack() {
  navigateTo('client-setup');
}

// =========================================================================
// 4. منطق شاشة إعداد العميلة وشاشة الخطة الزمنية
// =========================================================================
function selectOccasion(occasionKey, btnEl) {
  selectedOccasionKey = occasionKey;
  document.querySelectorAll('.occasion-card').forEach(card => {
    card.className = 'occasion-card bg-white text-inkMain rounded-3xl py-3.5 px-2 flex flex-col items-center justify-center gap-1.5 shadow-xs border border-blushBorder hover:border-plumPrimary transition';
    const icon = card.querySelector('i');
    if (icon) icon.classList.add('text-plumPrimary');
  });

  btnEl.className = 'occasion-card bg-plumPrimary text-white rounded-3xl py-3.5 px-2 flex flex-col items-center justify-center gap-1.5 shadow-md border border-plumPrimary transition';
  const activeIcon = btnEl.querySelector('i');
  if (activeIcon) activeIcon.classList.remove('text-plumPrimary');
}

function toArabicDigits(num) {
  return num.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

function updateBudgetDisplay() {
  const valEl = document.getElementById('setup-budget-value');
  const slider = document.getElementById('setup-budget-range');
  if (valEl) {
    valEl.textContent = currentLang === 'ar' ? toArabicDigits(clientBudget) : String(clientBudget);
  }
  if (slider) {
    const pct = ((clientBudget - 200) / (1000 - 200)) * 100;
    slider.style.setProperty('--val', pct + '%');
  }
}

function onBudgetSliderChange(slider) {
  clientBudget = parseInt(slider.value, 10);
  updateBudgetDisplay();
}

function toggleBlackAbaya() {
  hasBlackAbaya = !hasBlackAbaya;
  const circle = document.getElementById('abaya-check-circle');
  if (hasBlackAbaya) {
    circle.className = 'w-6 h-6 rounded-full bg-plumPrimary text-white flex items-center justify-center text-xs transition';
  } else {
    circle.className = 'w-6 h-6 rounded-full bg-blushBg border border-blushBorder text-transparent flex items-center justify-center text-xs transition';
  }
}

let currentPlanTotal = 0;

// تسلسل حالات الحجز لكل خدمة: proposed (خدمة مقترحة) -> awaiting (بانتظار قبول مقدمة الخدمة) -> confirmed (مؤكد)
let serviceStatuses = {
  tailoring: 'proposed',
  abaya: 'proposed',
  bag: 'proposed',
  jewelry: 'proposed',
  makeup: 'proposed',
  delivery: 'proposed'
};
let activePlanOrderCode = null;

function getAddedCatalogItems() {
  return fashionCatalog
    .filter(item => item.added)
    .sort((a, b) => a.timelineOrder - b.timelineOrder);
}

function buildActiveTimelineServices(lang = currentLang) {
  const addedItems = getAddedCatalogItems();
  const services = addedItems.map(item => {
    const isMakeupAlt = item.planKey === 'makeup' && isAlternativeMakeupActive;
    const price = isMakeupAlt ? 270 : item.price;
    const time = isMakeupAlt
      ? i18n[lang].tlTime3Alt
      : item.timelineTime[lang];
    const title = item.timelineTitle[lang];
    const subtitle = isMakeupAlt
      ? i18n[lang].tlSub3Alt
      : (item.timelineSubtitle[lang] || '');

    if (!serviceStatuses[item.planKey]) {
      serviceStatuses[item.planKey] = 'proposed';
    }

    return {
      key: item.planKey,
      catalogId: item.id,
      time,
      price,
      title,
      subtitle,
      statusType: serviceStatuses[item.planKey],
      icon: item.timelineIcon || item.icon,
      iconBg: item.iconBg || 'bg-plumSoft text-plumPrimary'
    };
  });

  if (services.length > 0) {
    if (!serviceStatuses.delivery) {
      serviceStatuses.delivery = 'proposed';
    }
    services.push({
      key: 'delivery',
      catalogId: null,
      time: i18n[lang].tlTime4,
      price: 10,
      title: i18n[lang].tlTitle4,
      subtitle: '',
      statusType: serviceStatuses.delivery,
      icon: 'fa-car-side',
      iconBg: 'bg-[#EFEFEF] text-inkMain'
    });
  }

  return services;
}

function getActiveBookableKeys() {
  return buildActiveTimelineServices(currentLang).map(s => s.key);
}

function getCurrentPlanTotal() {
  return buildActiveTimelineServices(currentLang).reduce((sum, item) => sum + (item.price || 0), 0);
}

function buildActivePlanSummaryText() {
  const arList = buildActiveTimelineServices('ar').map(s =>
    s.key === 'makeup'
      ? (isAlternativeMakeupActive ? 'مكياج بديل (4:30 م)' : 'حجز مكياج (3:30 م)')
      : s.title
  );
  const enList = buildActiveTimelineServices('en').map(s =>
    s.key === 'makeup'
      ? (isAlternativeMakeupActive ? 'Alt makeup (4:30 PM)' : 'Makeup (3:30 PM)')
      : s.title
  );
  return {
    ar: arList.join(' + ') || 'لا توجد خدمات مضافة',
    en: enList.join(' + ') || 'No services added'
  };
}

function resetPlanStatuses() {
  Object.keys(serviceStatuses).forEach(k => {
    serviceStatuses[k] = 'proposed';
  });
  activePlanOrderCode = null;
}

function openProposedClientPlan() {
  resetPlanStatuses();
  navigateTo('client-plan', false);
}

function getServiceStatusLabel(statusType) {
  if (statusType === 'confirmed') return t('statusConfirmed');
  if (statusType === 'awaiting') return t('statusAwaiting');
  return t('statusProposed');
}

function getPlanStageSummary() {
  const keys = getActiveBookableKeys();
  const values = keys.map(k => serviceStatuses[k] || 'proposed');
  const proposedCount = values.filter(v => v === 'proposed').length;
  const awaitingCount = values.filter(v => v === 'awaiting').length;
  const confirmedCount = values.filter(v => v === 'confirmed').length;
  const total = keys.length;

  if (total === 0) {
    return { stage: 0, proposedCount: 0, awaitingCount: 0, confirmedCount: 0, total: 0 };
  }
  if (confirmedCount === total) {
    return { stage: 3, proposedCount, awaitingCount, confirmedCount, total };
  }
  if (awaitingCount > 0 || confirmedCount > 0) {
    return { stage: 2, proposedCount, awaitingCount, confirmedCount, total };
  }
  return { stage: 1, proposedCount, awaitingCount, confirmedCount, total };
}

function renderPlanStatusStepper() {
  const stepperEl = document.getElementById('plan-status-stepper');
  if (!stepperEl) return;

  const { stage, total } = getPlanStageSummary();
  if (total === 0) {
    stepperEl.classList.add('hidden');
    return;
  }
  stepperEl.classList.remove('hidden');

  const arrowIcon = currentLang === 'ar' ? 'fa-chevron-left' : 'fa-chevron-right';
  const steps = [
    { num: 1, label: t('statusProposed') },
    { num: 2, label: t('statusAwaiting') },
    { num: 3, label: t('statusConfirmed') }
  ];

  const hintText = stage === 3
    ? t('statusFlowHintConfirmed')
    : stage === 2
      ? t('statusFlowHintAwaiting')
      : t('statusFlowHintProposed');

  const stepsHtml = steps.map((step, idx) => {
    const isDone = stage > step.num;
    const isActive = stage === step.num;

    let pillClass = 'bg-blushBg text-inkMuted border border-blushBorder/80';
    let iconHtml = `<span class="w-3.5 h-3.5 rounded-full bg-blushBorder/80 text-inkMuted text-[9px] font-black inline-flex items-center justify-center shrink-0">${step.num}</span>`;

    if (isDone) {
      pillClass = 'bg-sageBg/80 text-sageText border border-sageText/25';
      iconHtml = `<i class="fa-solid fa-check text-[9px] shrink-0"></i>`;
    } else if (isActive) {
      if (step.num === 1) {
        pillClass = 'bg-[#F7EFE8] text-[#8A5A2B] border border-goldWarm shadow-2xs';
        iconHtml = `<i class="fa-regular fa-circle-dot text-[10px] shrink-0"></i>`;
      } else if (step.num === 2) {
        pillClass = 'bg-plumSoft text-plumPrimary border border-plumPrimary/35 shadow-2xs';
        iconHtml = `<i class="fa-regular fa-clock text-[10px] shrink-0"></i>`;
      } else {
        pillClass = 'bg-sageBg text-sageText border border-sageText/40 shadow-2xs';
        iconHtml = `<i class="fa-solid fa-check text-[10px] shrink-0"></i>`;
      }
    }

    const connector = idx < steps.length - 1
      ? `<i class="fa-solid ${arrowIcon} text-[9px] text-inkMuted/60 shrink-0"></i>`
      : '';

    return `
      <div class="flex items-center gap-1 px-2 py-1 rounded-full text-[9.5px] font-extrabold leading-tight ${pillClass}">
        ${iconHtml}
        <span>${step.label}</span>
      </div>
      ${connector}
    `;
  }).join('');

  stepperEl.innerHTML = `
    <div class="flex flex-wrap items-center justify-center gap-1">
      ${stepsHtml}
    </div>
    <p class="text-[10.5px] font-bold text-inkMuted text-center leading-snug">${hintText}</p>
  `;
}

function syncActivePlanOrder() {
  if (!activePlanOrderCode) return;
  const order = bookingsHistory.find(b => b.code === activePlanOrderCode);
  if (!order) return;

  const summaryState = getPlanStageSummary();
  currentPlanTotal = getCurrentPlanTotal();
  order.priceNum = currentPlanTotal;
  order.summary = buildActivePlanSummaryText();
  order.confirmedCount = summaryState.confirmedCount;
  order.totalServices = summaryState.total;
  order.planStatus = summaryState.total > 0 && summaryState.confirmedCount === summaryState.total
    ? 'confirmed'
    : summaryState.confirmedCount > 0
      ? 'partial'
      : 'awaiting';
}

function renderClientPlan() {
  const occ = occasionMeta[selectedOccasionKey] || occasionMeta.graduation;
  document.getElementById('plan-heading').textContent = t('planTitle')(occ[currentLang]);
  const headingIcon = document.getElementById('plan-heading-icon');
  if (headingIcon) {
    headingIcon.className = `fa-solid ${occ.icon} text-xl`;
  }

  const chosenDate = formatLocalizedDate(selectedDate);
  document.getElementById('plan-subheading').textContent = t('planSubheading')(chosenDate, clientBudget);

  renderPlanStatusStepper();

  const activeServices = buildActiveTimelineServices(currentLang);
  const hasMakeupInPlan = activeServices.some(s => s.key === 'makeup');
  const makeupService = activeServices.find(s => s.key === 'makeup');
  const makeupPrice = makeupService ? makeupService.price : 0;

  const timelineData = activeServices.length > 0
    ? [
        ...activeServices,
        {
          key: 'final',
          catalogId: null,
          time: formatLocalizedTime(),
          price: 0,
          title: t('tlTitle5'),
          subtitle: '',
          statusType: 'final',
          icon: occ.icon,
          iconBg: 'bg-[#F5E9D6] text-plumPrimary'
        }
      ]
    : [];

  const displayTotal = activeServices.reduce((sum, item) => sum + (item.price || 0), 0);
  currentPlanTotal = displayTotal;
  const curr = t('currency');

  const wrapper = document.getElementById('timeline-items-wrapper');
  if (timelineData.length === 0) {
    wrapper.innerHTML = `
      <div class="py-6 text-center space-y-2.5">
        <i class="fa-regular fa-folder-open text-2xl text-inkMuted/60"></i>
        <p class="text-xs font-bold text-inkMuted">${t('emptyPlanMsg')}</p>
        <button type="button" onclick="navigateTo('projects')" class="px-4 py-2 rounded-full bg-plumPrimary text-white text-xs font-extrabold hover:opacity-95 transition">
          ${t('browseBrandsBtn')}
        </button>
      </div>
    `;
  } else {
    wrapper.innerHTML = timelineData.map(item => {
      const statusLabel = item.statusType === 'final' ? '' : getServiceStatusLabel(item.statusType);

      let statusRowHtml = '';
      if (item.statusType === 'proposed') {
        statusRowHtml = `
          <div class="flex flex-wrap items-center gap-1.5 mt-1">
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F7EFE8] text-[#8A5A2B] border border-goldWarm/50 text-[10px] font-extrabold">
              <i class="fa-regular fa-circle-dot text-[9px]"></i>
              <span>${statusLabel}</span>
            </span>
          </div>
        `;
      } else if (item.statusType === 'awaiting') {
        statusRowHtml = `
          <div class="flex flex-wrap items-center gap-1.5 mt-1">
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-plumSoft text-plumPrimary border border-plumPrimary/20 text-[10px] font-extrabold">
              <i class="fa-regular fa-clock text-[9px]"></i>
              <span>${statusLabel}</span>
            </span>
            <button type="button" onclick="acceptServiceByProvider('${item.key}')" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white hover:bg-sageBg text-sageText border border-sageText/40 text-[9.5px] font-extrabold transition active:scale-95">
              <i class="fa-solid fa-check text-[9px]"></i>
              <span>${t('acceptSingleBtn')}</span>
            </button>
          </div>
        `;
      } else if (item.statusType === 'confirmed') {
        statusRowHtml = `
          <div class="flex flex-wrap items-center gap-1.5 mt-1">
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sageBg text-sageText border border-sageText/25 text-[10px] font-extrabold">
              <i class="fa-solid fa-check text-[9px]"></i>
              <span>${statusLabel}</span>
            </span>
          </div>
        `;
      }

      const removeBtnHtml = item.catalogId
        ? `<button type="button" onclick="toggleCatalogItem('${item.catalogId}')" title="${t('removeFromPlanTitle')}" class="w-6 h-6 rounded-full text-inkMuted/70 hover:text-red-600 hover:bg-red-50 flex items-center justify-center shrink-0 transition">
            <i class="fa-solid fa-xmark text-[11px]"></i>
          </button>`
        : '';

      const nodeClass = item.statusType === 'final'
        ? 'w-4 h-4 rounded-full bg-goldMetallic ring-4 ring-goldChampagne/40'
        : item.statusType === 'confirmed'
          ? 'w-3.5 h-3.5 rounded-full bg-sageText border-[2px] border-white ring-2 ring-sageBg'
          : item.statusType === 'awaiting'
            ? 'w-3.5 h-3.5 rounded-full bg-plumPrimary border-[2px] border-white ring-2 ring-plumSoft'
            : 'w-3.5 h-3.5 rounded-full bg-white border-[2.5px] border-goldWarm';

      return `
        <div class="relative flex items-start justify-between gap-2 py-1.5 border-b border-blushBorder/60 last:border-b-0">
          <div class="flex items-center gap-2 shrink-0 min-w-[82px] pt-1">
            <span class="${nodeClass} z-10 shrink-0"></span>
            <div class="leading-tight">
              <span class="block text-[11px] font-extrabold text-[#9A6B26]">${item.time}</span>
              ${item.price > 0 ? `<span class="block text-[11px] font-bold text-inkMain mt-0.5">${item.price} ${curr}</span>` : ''}
            </div>
          </div>

          <div class="flex items-start gap-2 flex-1 min-w-0">
            <div class="w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 border border-blushBorder/60 mt-0.5">
              <i class="fa-solid ${item.icon} text-sm"></i>
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-start justify-between gap-1">
                <div class="min-w-0">
                  <p class="text-xs font-extrabold text-inkMain leading-snug">${item.title}</p>
                  ${item.subtitle ? `<p class="text-[10px] font-bold text-inkMuted leading-snug">${item.subtitle}</p>` : ''}
                </div>
                ${removeBtnHtml}
              </div>
              ${statusRowHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('plan-total-amount').innerHTML = `${displayTotal} <span class="text-sm font-bold">${curr}</span>`;

  const feedbackEl = document.getElementById('plan-budget-feedback');
  const toggleAltBtn = document.getElementById('toggle-alt-makeup-btn');
  const toggleBtnLabel = document.getElementById('toggle-alt-makeup-label');
  const diff = clientBudget - displayTotal;

  if (diff > 0) {
    feedbackEl.className = 'flex items-center gap-1.5 text-xs font-extrabold text-sageText';
    feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check text-sm"></i><span>${t('budgetRemaining')(diff)}</span>`;
  } else if (diff === 0) {
    feedbackEl.className = 'flex items-center gap-1.5 text-xs font-extrabold text-sageText';
    feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check text-sm"></i><span>${t('budgetExact')}</span>`;
  } else {
    const overBudget = Math.abs(diff);
    feedbackEl.className = 'flex items-center gap-1.5 text-xs font-extrabold text-red-600';
    feedbackEl.innerHTML = `<i class="fa-solid fa-circle-exclamation text-sm"></i><span>${t('budgetOver')(overBudget)}</span>`;
  }

  if (toggleAltBtn && toggleBtnLabel) {
    if (hasMakeupInPlan) {
      toggleAltBtn.classList.remove('hidden');
      const baseTotal = displayTotal - makeupPrice + 210;
      toggleBtnLabel.textContent = isAlternativeMakeupActive
        ? t('backToBaseSlot')(baseTotal)
        : t('tryAltMakeup');
    } else {
      toggleAltBtn.classList.add('hidden');
    }
  }

  // تحديث أزرار الإجراءات حسب المرحلة الحالية
  const summaryState = getPlanStageSummary();
  const simAllBtn = document.getElementById('simulate-accept-all-btn');
  const simAllLabel = document.getElementById('simulate-accept-all-label');
  const confirmLabel = document.getElementById('confirm-plan-label');
  const confirmIcon = document.getElementById('confirm-plan-icon');

  if (simAllBtn && simAllLabel) {
    simAllLabel.textContent = t('simulateAcceptAllBtn');
    if (summaryState.awaitingCount > 0) {
      simAllBtn.classList.remove('hidden');
    } else {
      simAllBtn.classList.add('hidden');
    }
  }

  if (confirmLabel && confirmIcon) {
    if (summaryState.total === 0) {
      confirmLabel.textContent = t('browseBrandsBtn');
      confirmIcon.className = 'fa-solid fa-gem text-goldChampagne';
    } else if (summaryState.proposedCount === summaryState.total) {
      confirmLabel.textContent = t('confirmPlanBtn');
      confirmIcon.className = 'fa-solid fa-paper-plane text-goldChampagne';
    } else if (summaryState.proposedCount > 0) {
      confirmLabel.textContent = t('sendAltMakeupBtn');
      confirmIcon.className = 'fa-solid fa-paper-plane text-goldChampagne';
    } else if (summaryState.confirmedCount === summaryState.total) {
      confirmLabel.textContent = t('allConfirmedOrdersBtn');
      confirmIcon.className = 'fa-solid fa-circle-check text-goldChampagne';
    } else {
      confirmLabel.textContent = t('viewOrdersPlanBtn');
      confirmIcon.className = 'fa-solid fa-receipt text-goldChampagne';
    }
  }
}

function toggleAlternativeMakeup() {
  const makeupItem = fashionCatalog.find(i => i.planKey === 'makeup');
  if (!makeupItem || !makeupItem.added) return;
  isAlternativeMakeupActive = !isAlternativeMakeupActive;
  // أي خيار مكياج بديل أو جديد يبدأ كخدمة مقترحة حتى يتم تسجيل طلبه وقبوله فعلياً
  if (serviceStatuses.makeup !== 'proposed') {
    serviceStatuses.makeup = 'proposed';
  }
  renderClientPlan();
  syncActivePlanOrder();
  showToast(isAlternativeMakeupActive
    ? t('toastAltOn')(currentPlanTotal)
    : t('toastAltOff')(currentPlanTotal));
}

function confirmCurrentLookPlan() {
  const summaryState = getPlanStageSummary();
  if (summaryState.total === 0) {
    navigateTo('projects');
    return;
  }
  if (summaryState.proposedCount === 0) {
    openOrdersDrawer();
    return;
  }

  const wasPartialResend = summaryState.proposedCount < summaryState.total && activePlanOrderCode !== null;
  const activeKeys = getActiveBookableKeys();

  activeKeys.forEach(k => {
    if (serviceStatuses[k] === 'proposed') {
      serviceStatuses[k] = 'awaiting';
    }
  });

  const occ = occasionMeta[selectedOccasionKey] || occasionMeta.graduation;
  currentPlanTotal = getCurrentPlanTotal();
  if (!activePlanOrderCode) {
    activePlanOrderCode = 'LMS-' + Math.floor(100 + Math.random() * 900);
    bookingsHistory.unshift({
      code: activePlanOrderCode,
      orderType: 'client-plan',
      planStatus: 'awaiting',
      confirmedCount: 0,
      totalServices: activeKeys.length,
      category: { ar: 'خطة إطلالة العميلة', en: 'Client Look Plan' },
      title: { ar: `خطة ${occ.ar}`, en: `${occ.en} Plan` },
      summary: buildActivePlanSummaryText(),
      priceNum: currentPlanTotal
    });
  }

  renderClientPlan();
  syncActivePlanOrder();
  showToast(wasPartialResend
    ? t('toastAltResent')(`${currentPlanTotal} ${t('currency')}`)
    : t('toastPlanSent')(`${currentPlanTotal} ${t('currency')}`));
}

function acceptServiceByProvider(serviceKey) {
  if (serviceStatuses[serviceKey] !== 'awaiting') return;
  serviceStatuses[serviceKey] = 'confirmed';

  const activeSvc = buildActiveTimelineServices(currentLang).find(s => s.key === serviceKey);
  const svcTitle = activeSvc ? activeSvc.title : '';

  renderClientPlan();
  syncActivePlanOrder();
  if (!document.getElementById('orders-drawer').classList.contains('hidden')) {
    renderOrdersDrawerList();
  }
  showToast(t('toastSingleAccepted')(svcTitle));
}

function acceptAllAwaitingServices(targetOrderCode = null) {
  const activeKeys = getActiveBookableKeys();
  if (targetOrderCode && targetOrderCode !== activePlanOrderCode) {
    const order = bookingsHistory.find(b => b.code === targetOrderCode);
    if (order) {
      order.planStatus = 'confirmed';
      order.confirmedCount = order.totalServices || activeKeys.length;
    }
    renderOrdersDrawerList();
    showToast(t('toastAllAccepted'));
    return;
  }

  let changed = false;
  activeKeys.forEach(k => {
    if (serviceStatuses[k] === 'awaiting') {
      serviceStatuses[k] = 'confirmed';
      changed = true;
    }
  });

  if (!changed) return;
  renderClientPlan();
  syncActivePlanOrder();
  if (!document.getElementById('orders-drawer').classList.contains('hidden')) {
    renderOrdersDrawerList();
  }
  showToast(t('toastAllAccepted'));
}

// =========================================================================
// 5. منطق شاشة الفعاليات — حجز ركن «لمسة قبل الصورة»
// =========================================================================
function changeBoothStepper(type, delta) {
  if (type === 'hours') {
    boothHours = Math.min(8, Math.max(1, boothHours + delta));
    document.getElementById('booth-hours-val').textContent = boothHours;
  } else if (type === 'staff') {
    boothStaff = Math.min(6, Math.max(1, boothStaff + delta));
    document.getElementById('booth-staff-val').textContent = boothStaff;
  }
  updateBoothEstimatedPrice();
}

function toggleBoothService(btn, serviceKey) {
  const idx = boothServices.indexOf(serviceKey);
  if (idx > -1) {
    boothServices.splice(idx, 1);
    btn.className = 'booth-svc-pill bg-white border border-blushBorder rounded-full py-2.5 px-3 flex items-center justify-center gap-2 opacity-70 transition';
  } else {
    boothServices.push(serviceKey);
    btn.className = 'booth-svc-pill active bg-white border-2 border-plumPrimary rounded-full py-2.5 px-3 flex items-center justify-center gap-2 shadow-xs transition';
  }
  if (serviceKey === 'makeup') {
    btn.classList.add('col-span-2', 'mx-auto', 'w-2/3');
  }
  updateBoothEstimatedPrice();
}

function getBoothEstimatedNumeric() {
  return (boothHours * boothStaff * 100) + (boothServices.length * 25);
}

function updateBoothEstimatedPrice() {
  const estimated = getBoothEstimatedNumeric();
  const el = document.getElementById('booth-estimated-price');
  if (el) el.textContent = `${estimated} ${t('currency')}`;
}

function submitBoothRequest() {
  const rawLoc = document.getElementById('booth-location-input').value.trim();
  const locAr = boothLocationEdited ? (rawLoc || 'موقع الفعالية') : i18n.ar.boothLocationDefault;
  const locEn = boothLocationEdited ? (rawLoc || 'Event Location') : i18n.en.boothLocationDefault;
  const svcsAr = boothServices.map(k => boothServiceLabels[k].ar).join('، ') || 'تجهيز عام';
  const svcsEn = boothServices.map(k => boothServiceLabels[k].en).join(', ') || 'General prep';
  const estimated = getBoothEstimatedNumeric();

  bookingsHistory.unshift({
    code: 'EVT-' + Math.floor(100 + Math.random() * 900),
    category: { ar: 'ركن لمسة قبل الصورة', en: 'Lamssa Before the Shot Booth' },
    title: {
      ar: `حجز ركن ميداني (${boothHours} ساعات • ${boothStaff} عاملات)`,
      en: `On-Site Booth (${boothHours} hrs • ${boothStaff} specialists)`
    },
    summary: {
      ar: `الموقع: ${locAr} • الخدمات: ${svcsAr}`,
      en: `Location: ${locEn} • Services: ${svcsEn}`
    },
    priceNum: estimated
  });
  showToast(t('toastBoothSent'));
  openOrdersDrawer();
}

// =========================================================================
// 6. منطق شاشة المشاريع — الأزياء والإكسسوارات + صوّري مجموعتكِ
// =========================================================================
function switchProjectsSubtab(tab) {
  const fashionView = document.getElementById('projects-fashion-view');
  const shootView = document.getElementById('projects-shoot-view');
  const btnFashion = document.getElementById('proj-subtab-fashion');
  const btnShoot = document.getElementById('proj-subtab-shoot');

  if (tab === 'fashion') {
    fashionView.classList.remove('hidden');
    shootView.classList.add('hidden');
    btnFashion.className = 'py-2 px-3 rounded-full text-xs font-extrabold bg-plumPrimary text-white transition';
    btnShoot.className = 'py-2 px-3 rounded-full text-xs font-extrabold text-inkMuted hover:text-plumPrimary transition';
  } else {
    fashionView.classList.add('hidden');
    shootView.classList.remove('hidden');
    btnShoot.className = 'py-2 px-3 rounded-full text-xs font-extrabold bg-plumPrimary text-white transition';
    btnFashion.className = 'py-2 px-3 rounded-full text-xs font-extrabold text-inkMuted hover:text-plumPrimary transition';
  }
}

function filterFashionCatalog(cat, btnEl) {
  currentCatalogCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(p => {
    p.className = 'cat-pill shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold bg-white border border-blushBorder text-inkMain';
  });
  if (btnEl) {
    btnEl.className = 'cat-pill shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold bg-plumPrimary text-white';
  }
  renderFashionCatalog(cat);
}

function renderCatalogPlanSummaryBar() {
  const bar = document.getElementById('catalog-plan-summary-bar');
  if (!bar) return;

  const activeServices = buildActiveTimelineServices(currentLang);
  const total = getCurrentPlanTotal();
  currentPlanTotal = total;
  const summaryText = activeServices.length > 0
    ? t('catalogPlanSummary')(activeServices.length, total)
    : t('catalogPlanEmpty');

  bar.innerHTML = `
    <div class="min-w-0">
      <p class="text-[11px] font-extrabold text-plumPrimary truncate">${summaryText}</p>
    </div>
    <button type="button" onclick="navigateTo('client-plan')" class="shrink-0 px-3.5 py-1.5 rounded-full bg-plumPrimary hover:opacity-95 text-white text-[11px] font-extrabold transition active:scale-95">
      ${t('viewMyPlanShortBtn')}
    </button>
  `;
}

function renderFashionCatalog(cat) {
  const container = document.getElementById('fashion-catalog-list');
  if (!container) return;
  const items = cat === 'all' ? fashionCatalog : fashionCatalog.filter(i => i.category === cat);
  const curr = t('currency');

  container.innerHTML = items.map(item => `
    <div class="bg-white rounded-2xl border ${item.added ? 'border-plumPrimary/50' : 'border-blushBorder'} p-3 flex items-center justify-between gap-2.5 shadow-xs">
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="w-11 h-11 rounded-2xl bg-plumSoft text-plumPrimary flex items-center justify-center shrink-0">
          <i class="fa-solid ${item.icon} text-base"></i>
        </div>
        <div class="min-w-0">
          <span class="text-[10px] font-bold text-[#9A6B26] block truncate">${item.partner[currentLang]}</span>
          <h4 class="text-xs font-extrabold text-inkMain truncate">${item.title[currentLang]}</h4>
          <span class="text-[10px] text-inkMuted block mt-0.5"><i class="fa-regular fa-clock me-1"></i>${item.timeNote[currentLang]}</span>
        </div>
      </div>

      <div class="flex flex-col items-end gap-1.5 shrink-0">
        <span class="text-xs font-black text-plumPrimary">${item.price} ${curr}</span>
        <button onclick="toggleCatalogItem('${item.id}')" class="px-3 py-1 rounded-full text-[10px] font-extrabold transition ${
          item.added
            ? 'bg-sageBg text-sageText'
            : 'bg-plumPrimary text-white hover:opacity-90'
        }">
          ${item.added ? t('inYourPlan') : t('addItem')}
        </button>
      </div>
    </div>
  `).join('');

  renderCatalogPlanSummaryBar();
}

function toggleCatalogItem(id) {
  const target = fashionCatalog.find(i => i.id === id);
  if (!target) return;

  target.added = !target.added;

  // ربط الإضافة والإزالة مباشرةً بحالة الخدمة ومحتوى الخطة وإجماليها
  serviceStatuses[target.planKey] = 'proposed';
  if (!target.added && target.planKey === 'makeup') {
    isAlternativeMakeupActive = false;
  }
  if (getAddedCatalogItems().length === 0) {
    serviceStatuses.delivery = 'proposed';
  }

  currentPlanTotal = getCurrentPlanTotal();
  renderFashionCatalog(currentCatalogCategory);
  renderClientPlan();
  syncActivePlanOrder();
  if (!document.getElementById('orders-drawer').classList.contains('hidden')) {
    renderOrdersDrawerList();
  }

  showToast(target.added
    ? t('toastCatalogAdd')(target.title[currentLang], currentPlanTotal)
    : t('toastCatalogRemove')(target.title[currentLang], currentPlanTotal));
}

function changeShootStepper(type, delta) {
  if (type === 'pieces') {
    shootPieces = Math.min(30, Math.max(1, shootPieces + delta));
    document.getElementById('shoot-pieces-val').textContent = shootPieces;
  } else if (type === 'looks') {
    shootLooks = Math.min(10, Math.max(1, shootLooks + delta));
    document.getElementById('shoot-looks-val').textContent = shootLooks;
  }
}

function toggleShootOutput(btn, outputKey) {
  const idx = shootOutputs.indexOf(outputKey);
  if (idx > -1 && shootOutputs.length > 1) {
    shootOutputs.splice(idx, 1);
    btn.className = 'shoot-out-btn bg-white text-inkMain border border-blushBorder rounded-full py-3 px-3 flex items-center justify-center gap-2 shadow-xs transition';
    btn.querySelector('i').classList.add('text-plumPrimary');
  } else if (idx === -1) {
    shootOutputs.push(outputKey);
    btn.className = 'shoot-out-btn active bg-plumPrimary text-white border border-plumPrimary rounded-full py-3 px-3 flex items-center justify-center gap-2 shadow-sm transition';
    btn.querySelector('i').classList.remove('text-plumPrimary');
  }
}

function submitShootBooking() {
  const outAr = shootOutputs.map(k => shootOutputLabels[k].ar).join(' + ');
  const outEn = shootOutputs.map(k => shootOutputLabels[k].en).join(' + ');
  const total = shootPieces * 60 + shootLooks * 75;

  bookingsHistory.unshift({
    code: 'SHT-' + Math.floor(100 + Math.random() * 900),
    category: { ar: 'صوّري مجموعتكِ (الشريكات)', en: 'Shoot Your Collection (Partners)' },
    title: {
      ar: `جلسة تصوير (${shootPieces} قطع • ${shootLooks} إطلالات)`,
      en: `Photoshoot (${shootPieces} pieces • ${shootLooks} looks)`
    },
    summary: {
      ar: `المخرجات المطلوبة: ${outAr}`,
      en: `Requested deliverables: ${outEn}`
    },
    priceNum: total
  });
  showToast(t('toastShootSent'));
  openOrdersDrawer();
}

// =========================================================================
// 7. سجل الحجوزات والإشعارات
// =========================================================================
function renderOrdersDrawerList() {
  const list = document.getElementById('orders-drawer-list');
  if (!list) return;
  if (bookingsHistory.length === 0) {
    list.innerHTML = `<p class="text-center text-xs text-inkMuted py-6">${t('ordersEmpty')}</p>`;
  } else {
    const curr = t('currency');
    list.innerHTML = bookingsHistory.map(b => {
      let statusHtml = `<span class="text-[10px] font-extrabold text-sageText">${t('orderReceived')}</span>`;
      let actionHtml = '';

      if (b.orderType === 'client-plan') {
        if (b.planStatus === 'confirmed') {
          statusHtml = `<span class="text-[10px] font-extrabold text-sageText">${t('orderStatusConfirmed')}</span>`;
        } else if (b.planStatus === 'partial') {
          statusHtml = `<span class="text-[10px] font-extrabold text-plumPrimary">${t('orderStatusPartial')(b.confirmedCount || 0, b.totalServices || 4)}</span>`;
          actionHtml = `
            <button type="button" onclick="acceptAllAwaitingServices('${b.code}')" class="mt-2 w-full py-1.5 px-3 rounded-full bg-sageBg hover:opacity-90 text-sageText border border-sageText/30 text-[10px] font-extrabold flex items-center justify-center gap-1.5 transition">
              <i class="fa-solid fa-user-check text-[10px]"></i>
              <span>${t('drawerAcceptBtn')}</span>
            </button>
          `;
        } else {
          statusHtml = `<span class="text-[10px] font-extrabold text-plumPrimary">${t('orderStatusAwaiting')}</span>`;
          actionHtml = `
            <button type="button" onclick="acceptAllAwaitingServices('${b.code}')" class="mt-2 w-full py-1.5 px-3 rounded-full bg-sageBg hover:opacity-90 text-sageText border border-sageText/30 text-[10px] font-extrabold flex items-center justify-center gap-1.5 transition">
              <i class="fa-solid fa-user-check text-[10px]"></i>
              <span>${t('drawerAcceptBtn')}</span>
            </button>
          `;
        }
      }

      return `
        <div class="bg-white rounded-2xl border border-blushBorder p-3 space-y-1 shadow-xs">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-0.5 rounded-full bg-plumSoft text-plumPrimary text-[10px] font-extrabold">${b.category[currentLang]}</span>
            <span class="text-[10px] font-bold text-inkMuted">#${b.code}</span>
          </div>
          <h4 class="text-xs font-extrabold text-inkMain">${b.title[currentLang]}</h4>
          <p class="text-[11px] text-inkMuted">${b.summary[currentLang]}</p>
          <div class="flex items-center justify-between pt-1.5 border-t border-blushBorder/60">
            ${statusHtml}
            <span class="text-xs font-black text-plumPrimary">${b.priceNum} ${curr}</span>
          </div>
          ${actionHtml}
        </div>
      `;
    }).join('');
  }
}

function openOrdersDrawer() {
  renderOrdersDrawerList();
  document.getElementById('orders-drawer').classList.remove('hidden');
}

function closeOrdersDrawer() {
  document.getElementById('orders-drawer').classList.add('hidden');
}

let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('lamssa-toast');
  document.getElementById('lamssa-toast-msg').textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// =========================================================================
// 8. التقويم ومختار الوقت (يدعمان اللغتين)
// =========================================================================
let selectedDate = new Date();
let calViewYear = selectedDate.getFullYear();
let calViewMonth = selectedDate.getMonth();

function formatLocalizedDate(dateObj) {
  const days = t('weekdaysFull');
  const months = t('months');
  if (currentLang === 'ar') {
    return `${days[dateObj.getDay()]}، ${dateObj.getDate()} ${months[dateObj.getMonth()]}`;
  }
  return `${days[dateObj.getDay()]}, ${months[dateObj.getMonth()].slice(0, 3)} ${dateObj.getDate()}`;
}

function updateSelectedDateUI() {
  const formatted = formatLocalizedDate(selectedDate);
  const labelEl = document.getElementById('setup-date-label');
  const hiddenEl = document.getElementById('setup-date');
  if (labelEl) labelEl.textContent = formatted;
  if (hiddenEl) hiddenEl.value = formatted;
}

function toggleCalendarPopup() {
  closeTimePopup();
  const box = document.getElementById('setup-calendar-box');
  const chevron = document.getElementById('setup-date-chevron');
  const isHidden = box.classList.toggle('hidden');
  chevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
  if (!isHidden) {
    renderSetupCalendar();
  }
}

function changeCalendarMonth(delta) {
  calViewMonth += delta;
  if (calViewMonth < 0) {
    calViewMonth = 11;
    calViewYear--;
  } else if (calViewMonth > 11) {
    calViewMonth = 0;
    calViewYear++;
  }
  renderSetupCalendar();
}

function selectCalendarDay(year, month, day) {
  selectedDate = new Date(year, month, day);
  updateSelectedDateUI();
  renderSetupCalendar();
  toggleCalendarPopup();
}

function renderSetupCalendar() {
  const titleEl = document.getElementById('cal-month-title');
  const gridEl = document.getElementById('cal-days-grid');
  if (!titleEl || !gridEl) return;

  titleEl.textContent = `${t('months')[calViewMonth]} ${calViewYear}`;

  const firstDayIndex = new Date(calViewYear, calViewMonth, 1).getDay();
  const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
  const today = new Date();

  let html = '';
  for (let i = 0; i < firstDayIndex; i++) {
    html += '<span></span>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected =
      selectedDate.getFullYear() === calViewYear &&
      selectedDate.getMonth() === calViewMonth &&
      selectedDate.getDate() === day;

    const isToday =
      today.getFullYear() === calViewYear &&
      today.getMonth() === calViewMonth &&
      today.getDate() === day;

    let btnClasses = 'h-8 w-8 mx-auto rounded-full text-xs font-bold flex items-center justify-center transition ';
    if (isSelected) {
      btnClasses += 'bg-plumPrimary text-white font-extrabold shadow-sm';
    } else if (isToday) {
      btnClasses += 'bg-plumSoft text-plumPrimary font-extrabold';
    } else {
      btnClasses += 'text-inkMain hover:bg-plumSoft/70';
    }

    html += `<button type="button" onclick="selectCalendarDay(${calViewYear}, ${calViewMonth}, ${day})" class="${btnClasses}">${day}</button>`;
  }

  gridEl.innerHTML = html;
}

let selectedHour = 6;
let selectedMinute = 0;
let selectedPeriodKey = 'PM';

function formatLocalizedTime() {
  const mm = String(selectedMinute).padStart(2, '0');
  const periodLabel = selectedPeriodKey === 'AM' ? t('periodAM') : t('periodPM');
  return `${selectedHour}:${mm} ${periodLabel}`;
}

function updateSelectedTimeUI() {
  const formatted = formatLocalizedTime();
  const labelEl = document.getElementById('setup-time-label');
  const hiddenEl = document.getElementById('setup-time');
  const hourInput = document.getElementById('time-hour-input');
  const minInput = document.getElementById('time-minute-input');

  if (labelEl) labelEl.textContent = formatted;
  if (hiddenEl) hiddenEl.value = formatted;
  if (hourInput) hourInput.value = selectedHour;
  if (minInput) minInput.value = String(selectedMinute).padStart(2, '0');

  const amBtn = document.getElementById('period-am-btn');
  const pmBtn = document.getElementById('period-pm-btn');
  if (amBtn && pmBtn) {
    if (selectedPeriodKey === 'AM') {
      amBtn.className = 'px-3 py-1 rounded-full text-[11px] font-extrabold bg-plumPrimary text-white transition';
      pmBtn.className = 'px-3 py-1 rounded-full text-[11px] font-bold text-inkMuted transition';
    } else {
      pmBtn.className = 'px-3 py-1 rounded-full text-[11px] font-extrabold bg-plumPrimary text-white transition';
      amBtn.className = 'px-3 py-1 rounded-full text-[11px] font-bold text-inkMuted transition';
    }
  }
}

function closeTimePopup() {
  const box = document.getElementById('setup-time-box');
  const chevron = document.getElementById('setup-time-chevron');
  if (box) box.classList.add('hidden');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
}

function closeCalendarPopup() {
  const box = document.getElementById('setup-calendar-box');
  const chevron = document.getElementById('setup-date-chevron');
  if (box) box.classList.add('hidden');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
}

function toggleTimePopup() {
  closeCalendarPopup();
  const box = document.getElementById('setup-time-box');
  const chevron = document.getElementById('setup-time-chevron');
  const isHidden = box.classList.toggle('hidden');
  chevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
  if (!isHidden) {
    updateSelectedTimeUI();
  }
}

function stepTimeHour(delta) {
  selectedHour = ((selectedHour - 1 + delta + 12) % 12) + 1;
  updateSelectedTimeUI();
}

function stepTimeMinute(delta) {
  selectedMinute = (selectedMinute + delta + 60) % 60;
  updateSelectedTimeUI();
}

function onHourInputChange(input) {
  let val = parseInt(input.value, 10);
  if (isNaN(val) || val < 1) val = 1;
  if (val > 12) val = 12;
  selectedHour = val;
  updateSelectedTimeUI();
}

function onMinuteInputChange(input) {
  let val = parseInt(input.value, 10);
  if (isNaN(val) || val < 0) val = 0;
  if (val > 59) val = 59;
  selectedMinute = val;
  updateSelectedTimeUI();
}

function setQuickMinute(min) {
  selectedMinute = min;
  updateSelectedTimeUI();
}

function setTimePeriod(periodKey) {
  selectedPeriodKey = periodKey;
  updateSelectedTimeUI();
}

function confirmSelectedTime() {
  updateSelectedTimeUI();
  closeTimePopup();
}

window.addEventListener('DOMContentLoaded', () => {
  renderAllLogos();
  applyLanguage(false);
});
