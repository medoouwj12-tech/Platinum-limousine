/* ==========================================================================
   PLATINUM LIMOUSINE - PREMIUM JS LOGIC
   ========================================================================== */

// 1. Translation Dictionary
const translations = {
    en: {
        dir: "ltr",
        langText: "العربية",
        // Navigation
        "nav-home": "Home",
        "nav-offers": "Special Offers",
        "nav-fleet": "Our Fleet",
        "nav-features": "Why Us",
        "nav-book": "Book Now",
        // Hero
        "hero-badge": "VIP Transport Service",
        "hero-title": "Elevate Your Journey",
        "hero-subtitle": "Premium executive travel between Cairo, Alexandria, and Airports with utmost comfort and punctuality.",
        "hero-btn-book": "Book A Ride",
        "hero-btn-offers": "Explore Offers",
        // Special Offers
        "offers-subtitle": "Exclusive Deals",
        "offers-title": "Signature Special Offers",
        "offer-tag": "BEST VALUE",
        "offer-route": "Cairo ↔ Alexandria / Airports",
        "offer-name": "The Signature 1100 EGP Offer",
        "offer-desc": "Enjoy a premium one-way private travel experience between Cairo and Alexandria or airport transfer. Luxury transport has never been this accessible.",
        "offer-f1": "Fixed All-Inclusive Rate",
        "offer-f2": "Sedan or Mitsubishi Xpander (6 Seats)",
        "offer-f3": "Door-to-door safe pickup",
        "egp": "EGP",
        "one-way": "/ One Way",
        "offer-btn": "Claim This Offer",
        // Fleet
        "fleet-subtitle": "Premium Fleet",
        "fleet-title": "Choose Your Luxury Class",
        "view-ext": "Exterior",
        "view-int": "Interior",
        "book-car": "Select This Vehicle",
        // Fleet Cars
        "car1-name": "Mitsubishi Xpander",
        "car1-class": "Family SUV / 6-Seater",
        "car1-seats": "6 Passenger Seats",
        "car1-luggage": "4 Medium Bags",
        "car1-special": "AC & Dual Airbags",
        
        "car2-name": "Toyota Hiace",
        "car2-class": "VIP Executive Van / 14-Seater",
        "car2-seats": "14 Passenger Seats",
        "car2-luggage": "10 Large Bags",
        "car2-special": "Premium Executive Space",
        
        "car3-name": "Toyota Corolla",
        "car3-class": "Executive Sedan",
        "car3-seats": "4 Passenger Seats",
        "car3-luggage": "3 Medium Bags",
        "car3-special": "Latest model, extreme comfort",
        
        "car4-name": "Fiat Tipo",
        "car4-class": "Comfort Sedan",
        "car4-seats": "4 Passenger Seats",
        "car4-luggage": "3 Medium Bags",
        "car4-special": "Smooth ride, clean AC cabin",

        "car5-name": "Hyundai Elantra",
        "car5-class": "Executive Sedan",
        "car5-seats": "4 Passenger Seats",
        "car5-luggage": "3 Medium Bags",
        "car5-special": "Smooth and quiet ride",

        "car6-name": "Toyota Coaster",
        "car6-class": "Executive Minibus / 22-Seater",
        "car6-seats": "22 Passenger Seats",
        "car6-luggage": "15 Large Bags",
        "car6-special": "Spacious group transport",

        "car7-name": "Kia Cerato",
        "car7-class": "Comfort Sedan",
        "car7-seats": "4 Passenger Seats",
        "car7-luggage": "3 Medium Bags",
        "car7-special": "Modern safety features",

        "car8-name": "Kia Sportage",
        "car8-class": "Premium Crossover SUV",
        "car8-seats": "5 Passenger Seats",
        "car8-luggage": "4 Large Bags",
        "car8-special": "Panoramic roof, luxury travel",

        "car9-name": "Jetour X70",
        "car9-class": "Luxury Family SUV / 7-Seater",
        "car9-seats": "7 Passenger Seats",
        "car9-luggage": "5 Medium Bags",
        "car9-special": "Premium leather & ambient styling",
        // Features
        "features-subtitle": "Our Promise",
        "features-title": "Designed for Your Satisfaction",
        "feat1-title": "Modern & AC Fleets",
        "feat1-desc": "All vehicles are late-model, clean, fully sanitised, and feature air-conditioned cabins for maximum comfort.",
        "feat2-title": "Uniformed Chauffeurs",
        "feat2-desc": "Courteous, fully licensed, and uniformed professional drivers trained in hospitality and safe navigation.",
        "feat3-title": "Strict Punctuality",
        "feat3-desc": "We respect your time. Drivers arrive 10 minutes early at your pick-up point to guarantee a stress-free travel startup.",
        "feat4-title": "Door-to-Door Pickup",
        "feat4-desc": "From your exact doorstep directly to your final destination, handling all luggage with absolute care.",
        // Booking Form
        "book-subtitle": "Reservations",
        "book-heading": "Secure Your Private Premium Travel",
        "book-intro": "Fill out the quick reservation details. Your booking will be instantly formatted and sent to our booking agent on WhatsApp for instant confirmation. No prepayment required.",
        "book-call-us": "Call or Text Us",
        "book-email": "Email Inquiries",
        "form-triptype": "Trip Category",
        "opt-offer": "Cairo-Alexandria 1100 EGP Special Offer",
        "opt-airport": "Airport Transfer (Cairo/Borg El Arab)",
        "opt-custom": "Custom Private Ride",
        "form-pickup": "Pickup City / Area",
        "form-dropoff": "Drop-off City / Area",
        "form-date": "Pickup Date",
        "form-time": "Pickup Time",
        "form-fleet": "Select Vehicle",
        "opt-sedan": "Sedan (Corolla / Tipo / Elantra / Cerato)",
        "opt-xpander": "Mitsubishi Xpander (6 Seats)",
        "opt-suv": "Premium SUV (Sportage / Jetour)",
        "opt-hiace": "Toyota Hiace VIP Van (14 Seats)",
        "opt-coaster": "Toyota Coaster Minibus (22 Seats)",
        "form-name": "Your Full Name",
        "form-notes": "Special Requests / Flight Number",
        "form-submit": "Confirm Booking on WhatsApp",
        // Placeholders
        "placeholder-pickup": "e.g. Rushdy, Alexandria",
        "placeholder-dropoff": "e.g. New Cairo",
        "placeholder-name": "e.g. John Doe",
        "placeholder-notes": "Any specific requirements (child seats, flight details, extra luggage...)",
        // Footer
        "foot-desc": "Premium luxury limousine travel agency providing professional chauffeurs, elite vehicles, and punctual schedules across the Arab Republic of Egypt.",
        "foot-links": "Quick Navigation",
        "foot-contact": "Office Address",
        "foot-address": "456 Rushdy, Abou Qir St, in front of London Boutique, Alexandria, Egypt",
        // Video Showcase
        "video-subtitle": "Watch The Experience",
        "video-title": "Discover Your Luxury Journey",
        "video-desc": "We deliver an exceptional travel experience with the highest levels of luxury and comfort — see for yourself what sets Platinum Limousine apart.",
        "play-video": "PLAY VIDEO",
        "vstat1": "Luxury Cars",
        "vstat2": "24/7 Service",
        "vstat3": "EGP Per Trip",
        "vstat4": "Client Satisfaction"
    },
    ar: {
        dir: "rtl",
        langText: "English",
        // Navigation
        "nav-home": "الرئيسية",
        "nav-offers": "العروض الخاصة",
        "nav-fleet": "أسطولنا",
        "nav-features": "لماذا نحن",
        "nav-book": "احجز الآن",
        // Hero
        "hero-badge": "خدمة النقل الفاخرة VIP",
        "hero-title": "ارتقِ برحلتك الفاخرة",
        "hero-subtitle": "خدمات سفر وليموزين راقية لرجال الأعمال والعائلات بين القاهرة والإسكندرية والمطارات بأعلى درجات الأمان والالتزام.",
        "hero-btn-book": "احجز رحلتك",
        "hero-btn-offers": "استكشف العروض",
        // Special Offers
        "offers-subtitle": "عروض حصرية",
        "offers-title": "العروض الخاصة المميزة",
        "offer-tag": "الأفضل قيمة",
        "offer-route": "القاهرة ↔ الإسكندرية / المطارات",
        "offer-name": "عرض الـ 1100 جنيه المميز",
        "offer-desc": "استمتع بتجربة سفر خاصة وفاخرة باتجاه واحد بين القاهرة والإسكندرية أو توصيل للمطارات. السفر الفاخر لم يكن أبداً بهذه السهولة.",
        "offer-f1": "سعر ثابت شامل كافة المصاريف",
        "offer-f2": "سيارة سيدان أو ميتسوبيشي إكسباندر (6 مقاعد)",
        "offer-f3": "خدمة التوصيل من الباب إلى الباب بأمان",
        "egp": "جنيه",
        "one-way": "/ اتجاه واحد",
        "offer-btn": "احجز هذا العرض الآن",
        // Fleet
        "fleet-subtitle": "أسطولنا الفاخر",
        "fleet-title": "اختر فئة سيارتك المفضلة",
        "view-ext": "صورة من بره",
        "view-int": "صورة من جوه",
        "book-car": "اختر هذه السيارة",
        // Fleet Cars
        "car1-name": "ميتسوبيشي إكسباندر",
        "car1-class": "سيارة عائلية رياضية / 6 مقاعد",
        "car1-seats": "6 مقاعد واسعة للركاب",
        "car1-luggage": "4 حقائب سفر متوسطة",
        "car1-special": "مكيفة بالكامل ووسائد هوائية مزدوجة",
        
        "car2-name": "تويوتا هايس",
        "car2-class": "حافلة كبار الشخصيات الفاخرة / 14 مقعد",
        "car2-seats": "14 مقعداً وثيراً للركاب",
        "car2-luggage": "10 حقائب سفر كبيرة",
        "car2-special": "مساحة فارهة مخصصة لكبار الشخصيات",
        
        "car3-name": "تويوتا كورولا",
        "car3-class": "سيارة سيدان فاخرة",
        "car3-seats": "4 مقاعد مريحة للركاب",
        "car3-luggage": "3 حقائب متوسطة",
        "car3-special": "أحدث موديل، مستوى عالٍ من الهدوء والراحة",
        
        "car4-name": "فيات تيبو",
        "car4-class": "سيارة سيدان مريحة",
        "car4-seats": "4 مقاعد مريحة للركاب",
        "car4-luggage": "3 حقائب متوسطة",
        "car4-special": "تكييف هواء فائق وقمرة قيادة مريحة ونظيفة",

        "car5-name": "هيونداي إلنترا",
        "car5-class": "سيارة سيدان فاخرة",
        "car5-seats": "4 مقاعد مريحة للركاب",
        "car5-luggage": "3 حقائب متوسطة",
        "car5-special": "قيادة ناعمة وهادئة وثبات فائق",
        
        "car6-name": "تويوتا كوستر",
        "car6-class": "حافلة سياحية / 22 مقعد",
        "car6-seats": "22 مقعداً مريحاً للركاب",
        "car6-luggage": "15 حقيبة سفر كبيرة",
        "car6-special": "مساحة واسعة جداً للمجموعات الكبيرة والرحلات",
        
        "car7-name": "كيا سيراتو",
        "car7-class": "سيارة سيدان مريحة",
        "car7-seats": "4 مقاعد مريحة للركاب",
        "car7-luggage": "3 حقائب متوسطة",
        "car7-special": "أنظمة أمان حديثة وسلاسة تامة في القيادة",
        
        "car8-name": "كيا سبورتاج",
        "car8-class": "سيارة SUV رياضية فاخرة",
        "car8-seats": "5 مقاعد مريحة للركاب",
        "car8-luggage": "4 حقائب سفر كبيرة",
        "car8-special": "سقف بانورامي ومستوى عالٍ من الرفاهية والراحة",
        
        "car9-name": "جيتور X70",
        "car9-class": "سيارة عائلية فاخرة / 7 مقاعد",
        "car9-seats": "7 مقاعد فاخرة للركاب",
        "car9-luggage": "5 حقائب متوسطة",
        "car9-special": "مقصورة جلدية فاخرة وإضاءة محيطية راقية",
        // Features
        "features-subtitle": "وعدنا لكم",
        "features-title": "مصممة خصيصاً لراحتكم ورضاكم",
        "feat1-title": "سيارات حديثة ومكيفة",
        "feat1-desc": "جميع سياراتنا من أحدث الموديلات، نظيفة ومعقمة بالكامل، ومجهزة بتكييف هواء فائق الأداء لراحة تامة.",
        "feat2-title": "سائقون بزي رسمي محترف",
        "feat2-desc": "سائقون محترفون ومرخصون يرتدون زياً رسمياً، مدربون على القيادة الآمنة وأصول الضيافة الراقية.",
        "feat3-title": "التزام صارم بالمواعيد",
        "feat3-desc": "نحن نحترم وقتكم تماماً. يصل سائقونا قبل الموعد بـ 10 دقائق في نقطة الالتقاء لضمان بداية سفر خالية من القلق.",
        "feat4-title": "خدمة من الباب إلى الباب",
        "feat4-desc": "من عتبة بابكم مباشرة إلى وجهتكم النهائية مع العناية التامة بجميع حقائبكم وأمتعتكم.",
        // Booking Form
        "book-subtitle": "الحجوزات والاتصال",
        "book-heading": "احجز رحلتك الخاصة والآمنة الآن",
        "book-intro": "يرجى ملء تفاصيل الحجز السريع. سيتم تنسيق طلبكم فوراً وإرساله إلى موظف الحجز لدينا على واتساب لتأكيد الحجز فوراً بدون أي دفع مسبق.",
        "book-call-us": "اتصل بنا أو راسلنا",
        "book-email": "البريد الإلكتروني للاستفسارات",
        "form-triptype": "فئة الرحلة المطلوبة",
        "opt-offer": "عرض الـ 1100 جنيه المميز (القاهرة-الإسكندرية)",
        "opt-airport": "توصيل للمطارات (مطار القاهرة / برج العرب)",
        "opt-custom": "رحلة خاصة مخصصة",
        "form-pickup": "مدينة أو منطقة الركوب",
        "form-dropoff": "مدينة أو منطقة الوصول",
        "form-date": "تاريخ الرحلة",
        "form-time": "توقيت الرحلة",
        "form-fleet": "اختر نوع السيارة",
        "opt-sedan": "سيارة سيدان (كورولا / تيبو / إلنترا / سيراتو)",
        "opt-xpander": "ميتسوبيشي إكسباندر (6 مقاعد)",
        "opt-suv": "سيارة SUV فاخرة (سبورتاج / جيتور)",
        "opt-hiace": "تويوتا هايس عائلية فاخرة (14 مقعداً)",
        "opt-coaster": "تويوتا كوستر ميني باص (22 مقعداً)",
        "form-name": "الاسم بالكامل",
        "form-notes": "طلبات خاصة / رقم الرحلة الجوية",
        "form-submit": "تأكيد الحجز عبر الواتساب",
        // Placeholders
        "placeholder-pickup": "مثال: رشدي، الإسكندرية",
        "placeholder-dropoff": "مثال: التجمع الخامس، القاهرة",
        "placeholder-name": "مثال: أحمد محمد",
        "placeholder-notes": "أي متطلبات خاصة (مقاعد أطفال، تفاصيل رحلة الطيران، حقائب إضافية...)",
        // Footer
        "foot-desc": "وكالة ليموزين فاخرة ومميزة تقدم سائقين محترفين وسيارات راقية وجداول مواعيد دقيقة في جميع أنحاء جمهورية مصر العربية.",
        "foot-links": "روابط سريعة",
        "foot-contact": "عنوان المكتب الرئيسي",
        "foot-address": "456 رشدي، شارع أبو قير، أمام لندن بوتيك، الإسكندرية، مصر",
        // Video Showcase
        "video-subtitle": "شاهد التجربة",
        "video-title": "اكتشف رحلتك الفاخرة",
        "video-desc": "نقدم لك تجربة سفر استثنائية بأعلى مستويات الرفاهية والراحة — شاهد بنفسك ما يميز Platinum Limousine عن غيره.",
        "play-video": "شغّل الفيديو",
        "vstat1": "سيارات فاخرة",
        "vstat2": "خدمة متواصلة",
        "vstat3": "جنيه للرحلة",
        "vstat4": "رضا العملاء"
    }
};

// Default setup
let currentLanguage = 'en';

// 2. DOM Elements Selection
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const header = document.getElementById("header");
    const themeToggleBtn = document.getElementById("themeToggle");
    const langToggleBtn = document.getElementById("langToggle");
    const langTextEl = document.getElementById("langText");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNavOverlay = document.getElementById("mobileNavOverlay");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    // Hide Preloader smoothly
    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.transform = "scale(1.05)";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 600);
        }
    }, 800);

    // Initialize System Language
    const savedLanguage = localStorage.getItem("platinum_lang") || 'en';
    setLanguage(savedLanguage);

    // Initialize Theme
    const savedTheme = localStorage.getItem("platinum_theme") || 'dark';
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Header scroll background modification
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Theme Toggle Handler
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("platinum_theme", newTheme);
        });
    }

    // Language Toggle Handler
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            const targetLanguage = currentLanguage === 'en' ? 'ar' : 'en';
            setLanguage(targetLanguage);
        });
    }

    // Mobile Hamburger Menu Trigger
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("active");
            mobileNavOverlay.classList.toggle("active");
            document.body.classList.toggle("overflow-hidden");
        });
    }

    // Click links inside mobile nav to auto close overlay
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuBtn.classList.remove("active");
            mobileNavOverlay.classList.remove("active");
            document.body.classList.remove("overflow-hidden");
        });
    });

    // IntersectionObserver scroll animation fades
    const animatedElements = document.querySelectorAll(".hero-badge, .hero-title, .hero-subtitle, .hero-actions-row, .offer-card-featured, .fleet-card, .feature-card, .booking-grid");
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add("fade-in");
        scrollObserver.observe(el);
    });
});

// 3. Translation Processor
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("platinum_lang", lang);

    // Apply document directions and translations
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", translations[lang].dir);

    // Translate elements with data-key attributes
    const elementsToTranslate = document.querySelectorAll("[data-key]");
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Translate placeholders
    const pickupInput = document.getElementById("pickup");
    const dropoffInput = document.getElementById("dropoff");
    const nameInput = document.getElementById("fullname");
    const notesInput = document.getElementById("notes");

    if (pickupInput) pickupInput.placeholder = translations[lang]["placeholder-pickup"];
    if (dropoffInput) dropoffInput.placeholder = translations[lang]["placeholder-dropoff"];
    if (nameInput) nameInput.placeholder = translations[lang]["placeholder-name"];
    if (notesInput) notesInput.placeholder = translations[lang]["placeholder-notes"];

    // Update language switcher button label
    const langTextEl = document.getElementById("langText");
    if (langTextEl) {
        langTextEl.innerText = translations[lang].langText;
    }
}

// 4. Fleet Image Switcher (Exterior/Interior Toggling)
function toggleVehicleView(carId, viewType, btnElement) {
    const carImage = document.getElementById(`${carId}-img`);
    if (!carImage) return;

    // Smooth transition dissolve
    carImage.classList.remove("active");
    
    // Update button states within this card
    const switchWrapper = btnElement.parentElement;
    const buttons = switchWrapper.querySelectorAll(".view-toggle-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    btnElement.classList.add("active");

    setTimeout(() => {
        // Swap file sources
        carImage.src = `assets/images/${carId}_${viewType}.png`;
        
        // Fade in
        setTimeout(() => {
            carImage.classList.add("active");
        }, 50);
    }, 200);
}

// 5. Booking Actions & Auto-fillers
function selectSpecialOffer() {
    const tripTypeSelect = document.getElementById("tripType");
    const fleetSelect = document.getElementById("fleetSelect");
    const pickupInput = document.getElementById("pickup");
    const dropoffInput = document.getElementById("dropoff");

    if (tripTypeSelect) {
        tripTypeSelect.value = "offer";
        adjustTripFields();
    }
    
    if (fleetSelect) {
        fleetSelect.value = "sedan"; // Default starting point for special offer
    }

    // Prefill locations for offer demo
    if (pickupInput && dropoffInput) {
        pickupInput.value = currentLanguage === 'en' ? "Alexandria" : "الإسكندرية";
        dropoffInput.value = currentLanguage === 'en' ? "Cairo Airport" : "مطار القاهرة";
    }

    // Scroll smoothly to form
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }
}

function selectFleetCar(carType) {
    const tripTypeSelect = document.getElementById("tripType");
    const fleetSelect = document.getElementById("fleetSelect");

    if (fleetSelect) {
        if (carType === "corolla" || carType === "tipo" || carType === "elantra" || carType === "cerato") {
            fleetSelect.value = "sedan";
        } else if (carType === "sportage" || carType === "jetour") {
            fleetSelect.value = "suv";
        } else {
            fleetSelect.value = carType;
        }
    }

    // Scroll smoothly to form
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Adjust form inputs based on trip category selection
function adjustTripFields() {
    const tripType = document.getElementById("tripType").value;
    const fleetSelect = document.getElementById("fleetSelect");
    const pickupInput = document.getElementById("pickup");
    const dropoffInput = document.getElementById("dropoff");

    if (tripType === "offer") {
        // Under 1100 Offer, only Sedan or Xpander are applicable
        if (fleetSelect) {
            fleetSelect.value = "sedan";
            // Disable options not allowed for the offer
            Array.from(fleetSelect.options).forEach(opt => {
                if (opt.value === "hiace" || opt.value === "suv" || opt.value === "coaster") {
                    opt.disabled = true;
                } else {
                    opt.disabled = false;
                }
            });
        }
        
        pickupInput.value = currentLanguage === 'en' ? "Alexandria" : "الإسكندرية";
        dropoffInput.value = currentLanguage === 'en' ? "Cairo" : "القاهرة";
    } else {
        // Re-enable all options
        if (fleetSelect) {
            Array.from(fleetSelect.options).forEach(opt => {
                opt.disabled = false;
            });
        }
    }
}

// 6. Form Submission & WhatsApp Formatter
function handleBookingSubmit(event) {
    event.preventDefault();

    const tripType = document.getElementById("tripType").value;
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;
    const tripDate = document.getElementById("tripDate").value;
    const tripTime = document.getElementById("tripTime").value;
    const vehicle = document.getElementById("fleetSelect").value;
    const fullname = document.getElementById("fullname").value;
    const notes = document.getElementById("notes").value;

    // Get vehicle display label matching language
    let vehicleLabel = "";
    if (vehicle === "sedan") {
        vehicleLabel = currentLanguage === 'en' ? "Sedan (Corolla/Tipo/Elantra/Cerato)" : "سيدان (كورولا / تيبو / إلنترا / سيراتو)";
    } else if (vehicle === "xpander") {
        vehicleLabel = currentLanguage === 'en' ? "Mitsubishi Xpander (6 Seats)" : "ميتسوبيشي إكسباندر (6 مقاعد)";
    } else if (vehicle === "suv") {
        vehicleLabel = currentLanguage === 'en' ? "Premium SUV (Sportage/Jetour)" : "سيارة SUV فاخرة (سبورتاج / جيتور)";
    } else if (vehicle === "hiace") {
        vehicleLabel = currentLanguage === 'en' ? "Toyota Hiace (14 Seats)" : "تويوتا هايس (14 مقعداً)";
    } else if (vehicle === "coaster") {
        vehicleLabel = currentLanguage === 'en' ? "Toyota Coaster Minibus (22 Seats)" : "تويوتا كوستر (22 مقعداً)";
    }

    // Get Trip category label
    let categoryLabel = "";
    if (tripType === "offer") {
        categoryLabel = currentLanguage === 'en' ? "Cairo-Alexandria 1100 EGP Special Offer" : "عرض الـ 1100 جنيه (القاهرة-الإسكندرية)";
    } else if (tripType === "airport") {
        categoryLabel = currentLanguage === 'en' ? "Airport Transfer" : "توصيل للمطار";
    } else {
        categoryLabel = currentLanguage === 'en' ? "Custom Private Ride" : "رحلة خاصة مخصصة";
    }

    // Build formatted message
    let message = "";
    if (currentLanguage === 'en') {
        message = `✨ *Platinum Limousine Reservation Request* ✨\n` +
                  `---------------------------------------------\n` +
                  `👤 *Client Name:* ${fullname}\n` +
                  `🗂️ *Trip Category:* ${categoryLabel}\n` +
                  `🚗 *Vehicle Type:* ${vehicleLabel}\n` +
                  `📍 *Pickup Location:* ${pickup}\n` +
                  `🏁 *Drop-off Location:* ${dropoff}\n` +
                  `📅 *Date:* ${tripDate}\n` +
                  `⏰ *Time:* ${tripTime}\n`;
        
        if (notes.trim() !== "") {
            message += `📝 *Special Notes:* ${notes}\n`;
        }
        
        if (tripType === "offer") {
            message += `\n💵 *Rate:* Fixed 1100 EGP (excluding tolls if applicable)`;
        }
        message += `\n---------------------------------------------\n` +
                   `⚡ _Sent from Platinum Limousine Web Booking System_`;
    } else {
        message = `✨ *طلب حجز ليموزين - بلاتينيوم ليموزين* ✨\n` +
                  `---------------------------------------------\n` +
                  `👤 *اسم العميل:* ${fullname}\n` +
                  `🗂️ *فئة الرحلة:* ${categoryLabel}\n` +
                  `🚗 *نوع السيارة:* ${vehicleLabel}\n` +
                  `📍 *مكان الركوب:* ${pickup}\n` +
                  `🏁 *مكان الوصول:* ${dropoff}\n` +
                  `📅 *التاريخ:* ${tripDate}\n` +
                  `⏰ *الوقت:* ${tripTime}\n`;
        
        if (notes.trim() !== "") {
            message += `📝 *ملاحظات خاصة:* ${notes}\n`;
        }
        
        if (tripType === "offer") {
            message += `\n💵 *السعر المقدر:* عرض الـ 1100 جنيه الثابت`;
        }
        message += `\n---------------------------------------------\n` +
                   `⚡ _أُرسلت عبر منصة حجز بلاتينيوم ليموزين الإلكترونية_`;
    }

    // Redirect to WhatsApp
    const whatsappNum = "201270501109";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

/* =====================================================
   SHOWCASE VIDEO TOGGLE
===================================================== */
function toggleShowcaseVideo() {
    const video   = document.getElementById('showcaseVideo');
    const overlay = document.getElementById('videoOverlay');
    const pause   = document.getElementById('videoPauseOverlay');

    if (!video) return;

    if (video.paused) {
        video.play();
        overlay.classList.add('hidden');
        pause.classList.remove('hidden');
    } else {
        video.pause();
        overlay.classList.remove('hidden');
        pause.classList.add('hidden');
    }
}
