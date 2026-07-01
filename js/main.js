// ============================================================
// DP ROAST — Complete JavaScript
// ============================================================

// ==================== SVG ICONS ====================
const SVG = {
    gym: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5h11"/><path d="M6.5 17.5h11"/><path d="M3 6.5v11"/><path d="M21 6.5v11"/><path d="M1 8v8"/><path d="M23 8v8"/><circle cx="12" cy="12" r="2"/></svg>`,
    nature: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>`,
    car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-6A1 1 0 0 0 12.38 4H5.62a1 1 0 0 0-.92.62L2 11l-2.16.86A1 1 0 0 0-.99 12.85V16h3"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>`,
    food: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    couple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M19 10l2 2-2 2"/></svg>`,
    mirror: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-1a5 5 0 0 1 10 0v1"/><path d="M8 21h8"/></svg>`,
    friends: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    pet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M7 10c-1 0-2 1-2 2s1 2 2 2"/><path d="M17 10c1 0 2 1 2 2s-1 2-2 2"/></svg>`,
    travel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
    quote: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="13" y2="13"/></svg>`,
    anime: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    blackscreen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    childhood: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="9" cy="7" r="0.5" fill="currentColor"/><circle cx="15" cy="7" r="0.5" fill="currentColor"/><path d="M10 10.5c.5.5 1.5 1 2 1s1.5-.5 2-1"/></svg>`,
    cricket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/><path d="M12 2c2.5 3.5 4 7.5 4 10s-1.5 6.5-4 10"/><path d="M12 2c-2.5 3.5-4 7.5-4 10s1.5 6.5 4 10"/></svg>`,
    religious: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/><path d="M12 22V12"/></svg>`,
    baby: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="9.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="14.5" cy="7.5" r="0.5" fill="currentColor"/><path d="M10 11c.5.8 1.2 1 2 1s1.5-.2 2-1"/></svg>`,
    motorbike: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M12 17H5l3-8h6l3 8"/><path d="M12 9l3-4"/><path d="M8 17l4-8"/></svg>`
};

function getCatSvg(id) {
    return SVG[id] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
}

// ==================== DATA ====================
const DP_CATEGORIES = [
    { id: 'gym', name: 'Gym Selfie' },
    { id: 'nature', name: 'Nature/Sunset' },
    { id: 'car', name: 'Car Pic' },
    { id: 'food', name: 'Food Pic' },
    { id: 'couple', name: 'Couple Pic' },
    { id: 'mirror', name: 'Solo Mirror Selfie' },
    { id: 'friends', name: 'Group Friends Pic' },
    { id: 'pet', name: 'Pet Pic' },
    { id: 'travel', name: 'Travel/Airport' },
    { id: 'quote', name: 'Quote/Text DP' },
    { id: 'anime', name: 'Cartoon/Anime' },
    { id: 'blackscreen', name: 'Black Screen' },
    { id: 'childhood', name: 'Old Childhood Pic' },
    { id: 'cricket', name: 'Cricket/Sports' },
    { id: 'religious', name: 'Religious/Calligraphy' },
    { id: 'baby', name: 'Baby Pic (own kid)' },
    { id: 'motorbike', name: 'Motorbike Pic' }
];

const ROASTS = {
    gym: {
        mild: [
            "Gym selfie same angle se kyun hoti hai? Camera tripod pe rakhte ho kya?",
            "Bhai mirror ke saath posing kar rahe ho ya mirror ko impress kar rahe ho?",
            "Yeh dumbbell uthaya hai ya bas photo ke liye pakda hai?",
            "Gym membership ka proof sirf DP hai kya?",
            "Post-workout selfie mein itna makeup kyun?",
            "Gym mein toh weight uthaya nahi jaata, DP mein Hercules ban rahe ho"
        ],
        medium: [
            "Gym selfie bhejte ho lekin gym ka gate kabhi khula nahi lagta",
            "Bhai tu gym jaata hai ya gym tere ghar aata hai? Itni selfies kaise?",
            "Same gym, same mirror, same angle — daily routine boring hai bhai",
            "Protein shake peene se body nahi banti, DP mein filter lagane se kya hoga",
            "Gym membership December mein liya, January se ghar baith ke DP daal raha hai",
            "Tere gym selfie mein equipment zyada fresh hai, tu khud se zyada used lagta hai"
        ],
        savage: [
            "Bhai gym mein itna time spend karta hai toh body kab banegi? Abhi toh sirf mirror se baat karta hai",
            "Tere gym selfie ka quality teri deadlift se zyada impressive hai",
            "Daily gym selfie but zero progress — consistency toh hai kam se kam!",
            "Tu gym jaata hai ya gym ke saamne khada hoke selfie leta hai?",
            "Gym mein phone chalana allowed hai kya? Warna itni selfies kaise le raha hai?",
            "Body toh nahi bani, lekin gym selfie ka portfolio zaroor bana liya"
        ]
    },
    nature: {
        mild: [
            "Sunset DP lagaya hai — aesthetic hai bhai, approved!",
            "Nature ki photo leke lagta hai jaise tu khud nature ka part hai",
            "Yeh sunset tu ne dekha ya Google se download kiya?",
            "Shakal nahi dikhni toh bolo na bhai, nature kyun fasa rahe ho?",
            "Every sunset DP person thinks they're a photographer",
            "Sunset itni baar dekh liya, ab toh bore ho gaya hoga"
        ],
        medium: [
            "Bhai sunset dekhne jaata hai ya sirf photo ke liye jaata hai?",
            "Nature lover hai ya nature ko use kar raha hai DP ke liye?",
            "Sunset DP laga ke lagta hai weather reporter hai tu",
            "Hills pe jaake photo lena hai toh至少 shakal toh dikha",
            "Tere sunset DP mein sunset bhi bore ho raha hai itni baar dekh ke",
            "Nature DP = shakal nahi dikhni, nature dikha dete hain"
        ],
        savage: [
            "Nature lover hai lekin ghar ka kachra fenkne mein lazy hai",
            "Sunset itni baar dekha hai, ab toh sun bhi bol raha hai 'bhai chhod de'",
            "Tere nature DP mein itna filter hai ki asli nature bhi pehchan nahi paata",
            "Shakal chhupani hai toh seedha bol bhai, nature ko beech mein mat la",
            "Tere nature DP se zyada natural toh tera school ka report card hai",
            "Sunset ke saath selfie lete ho — sunset bhi bol raha hai 'please leave me alone'"
        ]
    },
    car: {
        mild: [
            "Car DP lagaya hai — flex kar rahe ho bhai!",
            "Gadi ki photo mein driver nazar nahi aa raha, chalao bhi ya sirf photo ke liye?",
            "Car DP hai ya insurance ka proof hai?",
            "Sirf gadi dikhao, driver mat dikhao — smart move!",
            "Car ka brand pata chalta hai DP se, driver ka nahi",
            "Nice car! Kiski hai waise?"
        ],
        medium: [
            "Bhai car ki photo hai ya car ko adopt kiya hai?",
            "Gadi ke saath pose de raha hai jaise film ka hero hai tu",
            "Car DP mein gadi toh dikh rahi hai, driver ka license dikhao zara",
            "Apni gadi hai ya rental? Proof dikhao!",
            "Car ki photo lagake lagta hai Uber driver hai tu",
            "Gadi chalati bhi hai ya sirf DP ke liye rakhi hai?"
        ],
        savage: [
            "Car DP laga ke lagta hai parking attendant hai tu",
            "Bhai gadi ki photo mein gadi bhi bor ho rahi hai itni baar photo khichwa ke",
            "Apni gadi nahi hai toh kisi aur ki photo mat la — sharam kar!",
            "Car DP = 'dekho meri gadi hai' but actually bus parking hai",
            "Tere car DP se zyada honest toh tera school ka attendance record hai",
            "Gadi ki photo mein driver ka chehra nahi hai — suspicious hai bhai!"
        ]
    },
    food: {
        mild: [
            "Food DP hai — khana khaya ya photo ke liye rakh diya?",
            "Plate itni sundar hai, khana bhi sundar hoga",
            "Food photography ka shauk hai, camera bhi achha hoga",
            "DP mein khana dikhake lagta hai food blogger hai tu",
            "Biryani hai kya? Warna food DP valid nahi hai",
            "Khana dekh ke bhookh badh gayi, shukriya!"
        ],
        medium: [
            "Food DP mein itna effort hai, khana mein bhi utna effort hota?",
            "Khana thanda ho gaya hoga photo khichne mein",
            "Plate saaf hai — khana khaya bhi ya sirf photo ke liye rakh diya?",
            "Food DP laga ke lagta hai masterchef hai tu",
            "Bhai khana khane se pehle permission leta hai kya camera se?",
            "Tere food DP mein food bhi bol raha hai 'mujhe khao, photo mat khicho'"
        ],
        savage: [
            "Food DP hai lekin khud khata kya hai? Sirf photo ke liye order karta hai?",
            "Plate saaf hai — clearly khana nahi khaya, sirf photo liya",
            "Tere food DP mein khana itna posed lag raha hai ki khud bhi khana nahi chahta",
            "Food DP lagake lagta hai zomato ka advertisement hai tu",
            "Bhai khana khane se pehle camera se permission leta hai, phone ke bina jeena hai kya?",
            "Food DP = 'main khata hoon lekin tumhe nahi dikhaunga'"
        ]
    },
    couple: {
        mild: [
            "Couple DP hai — relationship goals bhai!",
            "Dono ki photo mein dono khush lag rahe ho, cute hai!",
            "Couple DP lagake lagta hai dono ko validation chahiye",
            "Ek doosre ke saath photo mein dono ka expression same hai",
            "Relationship status: DP mein confirmed!",
            "Couple DP hai lekin comments mein sirf aunty like kar rahi hain"
        ],
        medium: [
            "Couple DP hai — single friends ki jalane ke liye lagaya hai na?",
            "Dono ki photo mein se kisi ka expression forced lag raha hai",
            "Couple DP = 'hum relationship mein hain, tumhari kya zaroorat'",
            "Bhai itni baar couple photo change karte ho, break up toh nahi hua?",
            "Couple DP mein dono itne serious ho, shaadi kab?",
            "Single logon ko trigger karne ke liye achha hai ye DP"
        ],
        savage: [
            "Couple DP hai lekin relationship itna fresh hai ki kal tak single tha",
            "Dono ki photo mein se koi ek bore ho raha hai, pata hai na?",
            "Couple DP lagake lagta hai duniya ko dikhana hai ki 'dekho, kisi ne mujhe chuna'",
            "Break up hone do, phir DP change karni padegi — mehnat zyada hai",
            "Tere couple DP mein dono ke beech distance zyada hai, kya ho raha hai?",
            "Couple DP = relationship status ka screenshot, proof dikhao!"
        ]
    },
    mirror: {
        mild: [
            "Mirror selfie hai — classic choice bhai!",
            "Mirror itna saaf hai ki reflection bhi impress ho gaya",
            "Shakal nahi dikhni toh mirror se baat kyun kar rahe ho?",
            "Mirror selfie mein phone ki quality achhi hai at least",
            "Same mirror, different day — consistency toh hai!",
            "Mirror ko dekh ke pose de rahe ho, mirror bhi confused hai"
        ],
        medium: [
            "Bhai mirror selfie mein phone itna close hai ki shakal nahi dikh rahi",
            "Mirror itna saaf hai — tu nahi, mirror hi achha lag raha hai",
            "Mirror selfie mein pose de raha hai jaise fashion show hai",
            "Kya mirror se baat karta hai daily? Isliye itni selfies?",
            "Mirror selfie mein shirt iron kiya hai ya wrinkled hi hai?",
            "Phone ki quality achhi hai, mirror ki quality bhi achhi hai — bas tu nahi dikh raha"
        ],
        savage: [
            "Mirror selfie mein shakal nahi dikh rahi — mission accomplished!",
            "Bhai mirror itna clean hai ki tu dikh bhi raha hai, unfortunate",
            "Mirror selfie lagake lagta hai mirror se darr lagta hai tujhe",
            "Tere mirror selfie mein mirror bhi bol raha hai 'bhai please leave me alone'",
            "Mirror selfie mein phone itna bada hai ki shakal chhup gayi — smart!",
            "Tu mirror selfie leta hai ya mirror tere saath selfie leta hai?"
        ]
    },
    friends: {
        mild: [
            "Group photo hai — sabke expressions different hain!",
            "Friends ke saath photo mein sab khush lag rahe ho, nice!",
            "Group DP lagake lagta hai sab friends ho ek doosre ke",
            "Photo mein sabke haath free hain — kisi ne phone nahi chalaya, progress!",
            "Group photo mein sabki height same lag rahi hai, camera angle master!",
            "Friends ke saath photo — memories bhi hain, DP bhi hai"
        ],
        medium: [
            "Group photo mein sabki expressions dekh ke lagta hai force kiya hai",
            "Friends ke saath photo hai lekin koi ek bore ho raha hai pakka",
            "Group DP mein sab smile kar rahe hain, lekin kisi ka eyes mein dard hai",
            "Photo ke liye sabko ikattha kiya — manager hai kya tu?",
            "Group photo mein sabki height equal hai — camera angle genius!",
            "Friends ke saath photo mein sabko tag karna mat bhoolna!"
        ],
        savage: [
            "Group photo mein sabki expressions dekh ke lagta hai hostage situation hai",
            "Friends ke saath photo hai lekin koi tere saath nahi khada hona chahta tha",
            "Group DP mein sabki expressions same hain — sab bore ho rahe hain",
            "Photo ke liye sabko bulaya — tu organizer hai ya forcibly le aaya?",
            "Tere group DP mein sabki expressions dekh ke lagta hai sab tere se darr rahe hain",
            "Friends ke saath photo mein koi tere upar haath rakh ke khada hai — control hai bhai!"
        ]
    },
    pet: {
        mild: [
            "Pet DP hai — cute hai bhai!",
            "Pet ke saath photo mein pet hi zyada cute lag raha hai",
            "Pet DP lagake lagta hai pet lover hai tu",
            "Pet ki photo mein pet ki expression best hai!",
            "Pet DP hai — animal lover approved!",
            "Pet ke saath photo mein pet hi star hai, tu extra hai"
        ],
        medium: [
            "Pet DP mein pet ko pose diya hai ya pet ne khud pose kiya?",
            "Pet ki photo mein pet itna bored lag raha hai ki soch raha hai 'kya karwa diya'",
            "Pet DP lagake lagta hai pet ko bhi social media pe chadhaya hai",
            "Pet ki photo mein pet ki expression dekh ke lagta hai pet bhi frustrated hai",
            "Pet DP hai — pet ki fame ke peeche tu bhaag raha hai",
            "Pet ke saath selfie lene mein pet ka phone bhi chahiye kya?"
        ],
        savage: [
            "Pet DP mein pet ki expression dekh ke lagta hai pet tere se zyada smart hai",
            "Pet DP lagake lagta hai pet ko bhi influencer banana hai",
            "Pet ki photo mein pet bol raha hai 'bhai please meri privacy rakh'",
            "Tere pet DP mein pet tujhse zyada photogenic hai — accept kar!",
            "Pet ke saath photo mein pet ne phone chalana seekh liya hai kya?",
            "Pet DP = pet tere se better DP rakh sakta hai"
        ]
    },
    travel: {
        mild: [
            "Travel DP hai — wanderlust hai bhai!",
            "Airport mein photo leke lagta hai flight wait kar raha hai",
            "Travel DP lagake lagta hai duniya ghoom raha hai tu",
            "Passport se zyada photo mein boarding pass dikh raha hai",
            "Travel DP hai — vacation pe ho ya sirf airport tak gaye?",
            "Travel DP mein airport ka background achha hai, tu bhi achha hai"
        ],
        medium: [
            "Travel DP mein sirf airport dikh raha hai — kab udne wala hai?",
            "Airport mein photo leke lagta hai flight ka wait kar raha hai tu bhi",
            "Travel DP hai lekin destination nazar nahi aa raha",
            "Boarding pass dikhake lagta hai visa mil gaya hai",
            "Travel DP mein luggage bhi dikh raha hai — pack kiya hai ya khali hai?",
            "Airport mein photo lene mein boarding bhi miss ho gayi hogi"
        ],
        savage: [
            "Travel DP mein sirf airport hai — tujhe pata hai flight udta hai na?",
            "Airport mein photo leke lagta hai pehli baar flight dekh raha hai tu",
            "Boarding pass dikhake lagta hai flex kar raha hai lekin economy hai",
            "Travel DP mein itna filter hai ki airport bhi Taj Mahal lag raha hai",
            "Tere travel DP mein destination nahi, sirf airport hai — honest hai bhai",
            "Passport dikhake lagta hai duniya ghoom raha hai lekin visa reject ho gaya"
        ]
    },
    quote: {
        mild: [
            "Quote DP hai — philosophical ho gaya hai tu!",
            "Quote lagake lagta hai deep sochta hai tu",
            "Text DP hai — words se impress kar raha hai",
            "Quote DP mein words achhe hain, font bhi achha hai",
            "Quote lagake lagta hai life ka meaning mil gaya hai",
            "Quote DP hai — thoughts share kar raha hai"
        ],
        medium: [
            "Quote DP hai — khud nahi likha hoga ye, Google se copy kiya hoga",
            "Text DP mein words toh achhe hain, lekin tu samajhta hai kya?",
            "Quote lagake lagta hai philosopher ban gaya hai tu",
            "Quote DP mein itna deep hai ki koi samajh nahi paata",
            "Text DP lagake lagta hai shakal nahi dikhni, words dikha dete hain",
            "Quote DP hai — life ka lesson de raha hai bina life experience ke"
        ],
        savage: [
            "Quote DP mein itna deep hai ki tu khud bhi samajh nahi paata hoga",
            "Quote lagake lagta hai philosopher ban gaya hai lekin homework nahi ho raha",
            "Text DP = shakal nahi dikhni, dusron ka quote daal dete hain",
            "Quote DP mein words toh achhe hain, lekin tu inhe follow karta hai kya?",
            "Google se quote copy karke lagaya — original thinker hai tu!",
            "Quote DP lagake lagta hai duniya ko gyaan de raha hai bina gyaan ke"
        ]
    },
    anime: {
        mild: [
            "Anime DP hai — weeb hai bhai!",
            "Cartoon DP lagake lagta hai bachpan nahi gaya",
            "Anime character ki DP hai — kaunsa anime hai?",
            "Anime DP mein character ka expression best hai",
            "Cartoon DP hai — animation lover approved!",
            "Anime DP lagake lagta hai Japanese culture fan hai tu"
        ],
        medium: [
            "Anime DP hai — tu character se zyada relate karta hai kya?",
            "Cartoon DP lagake lagta hai reality se bhag raha hai tu",
            "Anime DP mein character ki expression tere se better hai",
            "Tu anime character ki DP lagake lagta hai khud ko hero samajhta hai",
            "Anime DP hai — real life mein bhi aise behave karta hai kya?",
            "Cartoon DP lagake lagta hai duniya se disconnect ho gaya hai tu"
        ],
        savage: [
            "Anime DP mein character tujhse zyada real lagta hai",
            "Cartoon DP lagake lagta hai real life se escape kar raha hai tu",
            "Tu anime character ki DP lagake lagta hai khud ko samajhta hai lekin duniya tujhe nahi samajhti",
            "Anime DP mein character ka expression tujhse zyada expressive hai",
            "Tu cartoon DP lagake lagta hai bachpan mein ruk gaya hai",
            "Anime DP hai — real world mein bhi aise hi behave karta hai kya?"
        ]
    },
    blackscreen: {
        mild: [
            "Black screen DP hai — mysterious hai bhai!",
            "Kuch nahi dikh raha — hidden identity!",
            "Black screen DP lagake lagta hai privacy lover hai tu",
            "DP mein kuch nahi hai — minimalistic approach!",
            "Black screen hai — phone band hai kya?",
            "Dark mode DP hai — aesthetic hai!"
        ],
        medium: [
            "Black screen DP hai — phone dead hai kya?",
            "Kuch nahi dikh raha — shakal nahi dikhni, phone bhi nahi chal raha",
            "Black screen DP lagake lagta hai lazy hai tu, photo daalne ki mehnat nahi",
            "DP mein kuch nahi hai — imagination pe chhod diya sabko",
            "Dark mode DP hai — light mode ki tarah bright nahi ho paata",
            "Black screen hai — tu bhi invisible hai kya?"
        ],
        savage: [
            "Black screen DP — shakal nahi dikhni, phone bhi dead hai, kuch nahi hai",
            "Tu black screen DP lagake lagta hai duniya se chhup raha hai",
            "DP mein kuch nahi hai — tu bhi kuch nahi hai kya?",
            "Black screen hai — tu bhi dark mode mein hai kya?",
            "Tu black screen DP lagake lagta hai phone bhi use nahi karta, sirf show off",
            "Dark mode DP — light mode mein darr lagta hai kya?"
        ]
    },
    childhood: {
        mild: [
            "Bachpan ki photo hai — nostalgic hai bhai!",
            "Purani photo mein itni innocence thi!",
            "Childhood DP hai — memories share kar raha hai",
            "Bachpan mein itna cute tha — kya ho gaya ab?",
            "Purani photo mein expression same hai — consistency!",
            "Childhood DP hai — purani yaadein taza kar raha hai"
        ],
        medium: [
            "Bachpan ki photo hai — ab ki photo nahi mil rahi kya?",
            "Purani photo mein itni innocence thi — ab kahan gayi?",
            "Childhood DP lagake lagta hai bachpan mein return karna chahta hai tu",
            "Bachpan mein cute tha, ab... chhodho!",
            "Purani photo mein expression same hai — grow hua nahi tu!",
            "Childhood DP hai — nostalgia se bhag raha hai tu"
        ],
        savage: [
            "Bachpan ki photo hai — ab ki photo nahi mili kya? Darr lagta hai kya?",
            "Purani photo mein itni innocence thi — ab ki photo mein kitna filter hai",
            "Tu bachpan ki photo lagake lagta hai duniya ko dikhana chahta hai ki 'dekho main pehle achha tha'",
            "Childhood DP mein expression same hai — tu literally grow nahi hua!",
            "Bachpan ki photo hai — ab ki photo daalne ki himmat nahi hai",
            "Purani photo mein cute tha — ab ki photo mein bhi cute hai, lekin different way"
        ]
    },
    cricket: {
        mild: [
            "Cricket DP hai — fan hai bhai!",
            "Sports DP lagake lagta hai athlete hai tu",
            "Cricket mein pose de raha hai — bowler hai ya batsman?",
            "Sports DP hai — active lifestyle approved!",
            "Cricket DP mein action pose hai — dramatic hai tu!",
            "Sports fan hai — passion dikh raha hai"
        ],
        medium: [
            "Cricket DP hai — tu khelta bhi hai ya sirf dekhta hai?",
            "Sports DP lagake lagta hai fitness enthusiast hai tu, lekin gym nahi jaata",
            "Cricket mein pose de raha hai jaise World Cup jeeta hai tu",
            "Sports DP hai — reality mein kitna active hai tu?",
            "Cricket DP mein action pose hai — tu action mein hota toh photo ki zaroorat nahi hoti",
            "Sports fan hai — sirf TV pe dekhta hai ya ground pe bhi jaata hai?"
        ],
        savage: [
            "Cricket DP hai — tu sirf TV pe dekhta hai, ground pe jaake dekh!",
            "Sports DP lagake lagta hai fitness enthusiast hai lekin saans phool jaati hai",
            "Cricket mein pose de raha hai — tu player hai ya cheerleader?",
            "Sports DP mein action pose hai — reality mein sirf sofa pe leta rehta hai",
            "Tu cricket DP lagake lagta hai duniya ko dikhana chahta hai ki 'main bhi kuch karta hoon'",
            "Sports DP hai — teri activity level aur DP mein bahut fark hai"
        ]
    },
    religious: {
        mild: [
            "Religious DP hai — spiritual hai bhai!",
            "Calligraphy DP hai — art hai bhai!",
            "Religious DP lagake lagta hai devotional hai tu",
            "Calligraphy mein words achhe hain — aesthetic hai!",
            "Religious DP hai — faith share kar raha hai",
            "Spiritual DP hai — inner peace dikh raha hai"
        ],
        medium: [
            "Religious DP hai — sirf DP pe spiritual hai ya real mein bhi?",
            "Calligraphy DP lagake lagta hai calligraphy seekh raha hai tu",
            "Religious DP mein words toh achhe hain, lekin tu inhe follow karta hai kya?",
            "Spiritual DP hai — daily routine mein bhi itna hi spiritual hai tu?",
            "Calligraphy DP hai — art share kar raha hai, nice!",
            "Religious DP lagake lagta hai duniya ko dikhana chahta hai ki 'main achha hoon'"
        ],
        savage: [
            "Religious DP hai — sirf DP pe spiritual, real mein kaisa hai tu?",
            "Calligraphy DP mein words toh achhe hain, lekin tu inhe samajhta hai kya?",
            "Tu religious DP lagake lagta hai duniya ko dikhana chahta hai ki 'main bahut achha hoon'",
            "Religious DP hai — teri DP aur teri behavior mein bahut fark hai",
            "Spiritual DP lagake lagta hai meditation karta hai, lekin phone pe angry comments karta hai",
            "Calligraphy DP — art toh achha hai, lekin artist ka behavior bhi achha hona chahiye"
        ]
    },
    baby: {
        mild: [
            "Baby DP hai — cute hai bhai!",
            "Apne bacche ki photo hai — parenting goals!",
            "Baby DP lagake lagta hai proud parent hai tu",
            "Bacche ki photo mein expression best hai!",
            "Baby DP hai — family man hai tu!",
            "Bacche ki photo share kar raha hai — sweet hai!"
        ],
        medium: [
            "Baby DP hai — bacche ki DP hai ya teri identity hai?",
            "Apne bacche ki photo lagake lagta hai bacche ke saath identity ban raha hai tu",
            "Baby DP mein baccha itna cute hai — teri genes hain kya?",
            "Bacche ki photo share kar raha hai — parenting ka proof dikh raha hai",
            "Baby DP hai — bacche ki fame ke peeche tu bhi bhaag raha hai",
            "Apne bacche ki photo lagake lagta hai duniya ko dikhana chahta hai ki 'mera baccha hai'"
        ],
        savage: [
            "Baby DP hai — teri identity ab tera baccha hai kya?",
            "Apne bacche ki photo lagake lagta hai khud ko dikhana nahi chahta, bacche ko dikhata hai",
            "Baby DP mein baccha itna cute hai — tu uska credit le raha hai?",
            "Bacche ki photo share kar raha hai — duniya ko pata hai tu parent hai, ab normal DP daal!",
            "Tu baby DP lagake lagta hai bacche ke saath social media pe chadh raha hai",
            "Baby DP hai — baccha grow hoga toh DP bhi change karega na?"
        ]
    },
    motorbike: {
        mild: [
            "Motorbike DP hai — biker hai bhai!",
            "Bike ki photo mein bike toh achhi hai!",
            "Motorbike DP lagake lagta hai rider hai tu",
            "Bike pe pose de raha hai — cool lag raha hai!",
            "Motorbike DP hai — speed lover!",
            "Bike ki photo mein helmet bhi hai — safety first!"
        ],
        medium: [
            "Motorbike DP hai — bike chalati bhi hai ya sirf photo ke liye?",
            "Bike ki photo mein pose de raha hai jaise film ka villain hai tu",
            "Motorbike DP lagake lagta hai speed ka shauk hai, lekin license hai?",
            "Bike pe pose de raha hai — reality mein kitna fast chalata hai tu?",
            "Motorbike DP mein helmet hai — safety conscious hai, ya phir darr lagta hai?",
            "Bike ki photo share kar raha hai — bike teri hai ya kisi aur ki?"
        ],
        savage: [
            "Motorbike DP hai — bike chalati bhi hai ya sirf photo ke liye pose deta hai?",
            "Bike pe pose de raha hai — tu rider hai ya parking attendant?",
            "Tu motorbike DP lagake lagta hai duniya ko dikhana chahta hai ki 'meri bike hai'",
            "Motorbike DP mein helmet hai — darr lagta hai kya? Ya safety conscious hai?",
            "Bike ki photo mein bike tujhse zyada cool lag rahi hai — accept kar!",
            "Tu motorbike DP lagake lagta hai biker hai, lekin reality mein cycle bhi nahi chalata"
        ]
    }
};

const CAPTION_KEYWORDS = {
    alone: {
        mild: ["'Alone' likha hai — lekin phone mein 500 contacts hain, kaise alone ho bhai?"],
        medium: ["'Alhamdulillah alone' — dua hai ki koi saath na de? Bold move!"],
        savage: ["'Alone' likh ke flex kar raha hai jaise koi achievement ho — bhai loneliness goal nahi hai"]
    },
    busy: {
        mild: ["'Busy' likha hai — kya kar raha hai bhai, Netflix dekh raha hai?"],
        medium: ["'Busy' hai lekin phone pe 24/7 online hai — kaisa busy hai ye?"],
        savage: ["'Busy' likha hai lekin har 5 minute pe status check kar raha hai — busy nahi, bored hai tu"]
    },
    blessed: {
        mild: ["'Blessed' hai — Allah ka shukar hai bhai, approved!"],
        medium: ["'Blessed' likha hai lekin har doosre din complaint karta hai — kaisa blessed hai ye?"],
        savage: ["'Blessed' likha hai lekin blessings ke liye kuch karta nahi — sirf DP pe blessed hai"]
    },
    grateful: {
        mild: ["'Grateful' hai — shukr guzar hai bhai, nice!"],
        medium: ["'Grateful' likha hai lekin kiske liye grateful hai ye pata nahi"],
        savage: ["'Grateful' likha hai lekin gratitude dikhta nahi — sirf word use kiya hai"]
    },
    life: {
        mild: ["'Living my best life' — best life hai bhai, enjoy karo!"],
        medium: ["'Living my best life' likha hai lekin best nahi lag raha — try harder!"],
        savage: ["'Living my best life' — best life hai ya best excuse hai? Reality check kar!"]
    },
    love: {
        mild: ["'Love' hai — pyaar hai bhai, nice!"],
        medium: ["'Love' likha hai lekin kis se? Confusion hai bhai!"],
        savage: ["'Love' likha hai lekin DM mein koi nahi aata — love kahan se aayega?"]
    },
    attitude: {
        mild: ["'Attitude' hai — style hai bhai, approved!"],
        medium: ["'Attitude' likha hai lekin reality mein sirf ego hai — fark hai bhai!"],
        savage: ["'Attitude' hai lekin attitude dikhane ke liye kuch hai nahi — sirf DP pe hai"]
    },
    sad: {
        mild: ["'Sad' hai — kya hua bhai? Sab theek hoga!"],
        medium: ["'Sad' likha hai lekin story mein party ki photos hain — sad kaise?"],
        savage: ["'Sad' likha hai lekin sad nahi hai tu, sirf attention chahiye — common hai ye"]
    },
    poetry: {
        mild: ["Shayari likhi hai — poet hai bhai!"],
        medium: ["Shayari likhi hai lekin Google se copy ki hai — original hai ya nahi?"],
        savage: ["Shayari lagayi hai lekin meaning bhi samajhta hai ya sirf words hain ye?"]
    },
    urdu: {
        mild: ["Urdu mein likha hai — culture hai bhai, nice!"],
        medium: ["Urdu mein likha hai lekin meaning samajh nahi aata — translate karo zara!"],
        savage: ["Urdu mein likha hai lekin khud nahi samajhta — Google translate se kiya hai kya?"]
    },
    alhamdulillah: {
        mild: ["Alhamdulillah hai — Allah ka shukar hai bhai!"],
        medium: ["Alhamdulillah likha hai lekin har waqt complain karta hai — kaisa shukr hai ye?"],
        savage: ["Alhamdulillah likha hai lekin gratitude sirf DP pe hai — real life mein kaisa hai?"]
    },
    whatsapp: {
        mild: ["WhatsApp pe hi active rehta hai — digital citizen hai bhai!"],
        medium: ["WhatsApp pe itna active hai ki phone bhi bore ho raha hai"],
        savage: ["WhatsApp pe 24/7 active hai — kaam dhandha hai kya? Ya sirf forwarding karta hai?"]
    },
    hate: {
        mild: ["'Hate' likha hai — gussa kyun hai bhai? Chill karo!"],
        medium: ["'Hate' likha hai lekin pyaar se zyada gussa dikh raha hai — control kar!"],
        savage: ["'Hate' likha hai — hate dikhane ke liye kuch hai nahi, sirf word hai"]
    },
    smile: {
        mild: ["'Smile' hai — muskura raha hai bhai, achhi baat hai!"],
        medium: ["'Smile' likha hai lekin smile nahi aa rahi — forced hai kya?"],
        savage: ["'Smile' likha hai lekin smile sirf DP pe hai — real mein dikkat hai kya?"]
    },
    dream: {
        mild: ["'Dream' hai — sapne dekh raha hai bhai, nice!"],
        medium: ["'Dream' likha hai lekin sapne bhi reality mein nahi aa rahe"],
        savage: ["'Dream' likha hai — dream mein hi rehta hai tu, reality mein kya karta hai?"]
    },
    music: {
        mild: ["Music lover hai — songs share kar raha hai, nice!"],
        medium: ["Music lover hai lekin sirf ek gaana sunta hai — playlist banao!"],
        savage: ["Music lover hai — sirf trending gaane sunta hai, original taste hai kya?"]
    }
};

const GENERIC_ROASTS = {
    mild: [
        "Status toh achha hai bhai, keep it up!",
        "Bio mein kuch likha hai — at least sochta hai tu!",
        "Status update karne wala hai — active citizen!",
        "Nice status bhai, keep vibing!",
        "Status mein personality dikh rahi hai!",
        "Bio likha hai — creative hai tu!",
        "Status achha hai — positive energy!",
        "Tera status dekh ke motivation aata hai!",
        "Status mein depth hai — sochta hai tu!",
        "Nice bio bhai, approved!"
    ],
    medium: [
        "Status toh achha hai, lekin thoda generic hai — original banao!",
        "Bio mein words hain, lekin meaning dhundhna padta hai",
        "Status update kiya hai — 2 logon ne like kiya hoga",
        "Tera status padh ke laga ki tu bhi confused hai",
        "Status likha hai — lekin kya kehna chahta hai ye samajh nahi aaya",
        "Bio mein attitude hai — lekin reality mein kitna hai?",
        "Status toh OK hai — 10 mein se 6 number!"
    ],
    savage: [
        "Tera status padh ke laga ki tu khud nahi samajhta kya likha hai",
        "Bio mein itna kuch hai — lekin kuch nahi hai!",
        "Status update kiya hai — 2 logon ne ignore kiya hoga!",
        "Tera status itna generic hai ki 100 logon ka same hai",
        "Status likha hai — lekin original kuch nahi hai!",
        "Tera status dekh ke laga ki tu bhi ek copy-paste hai!",
        "Bio mein words hain — lekin teri personality mein nahi!"
    ]
};

const QUIZ_QUESTIONS = [
    {
        question: "Status kitni baar badalte ho ek hafte mein?",
        options: [
            { text: "Roz badalta hoon — updated rehna padta hai!", type: "attention" },
            { text: "Kabhi kabhi — jab mood ho", type: "chaos" },
            { text: "Nahi badalta — same hai mahino se", type: "ghost" },
            { text: "Sirf important cheezein share karta hoon", type: "professional" }
        ]
    },
    {
        question: "Group mein sabse pehle reply karte ho ya last?",
        options: [
            { text: "Sabse pehle — mera reply sabse zaroori hai!", type: "attention" },
            { text: "Depends on mood — kabhi pehle, kabhi last", type: "chaos" },
            { text: "Last reply karta hoon — sab dekh leta hoon pehle", type: "ghost" },
            { text: "Sirf zaroorat par reply karta hoon", type: "professional" }
        ]
    },
    {
        question: "Phone ki gallery mein sabse zyada kya hai?",
        options: [
            { text: "Meri selfies — bahut saari!", type: "attention" },
            { text: "Screenshots — yaad ke liye rakhta hoon", type: "mystery" },
            { text: "Memes — humour hai bhai!", type: "chaos" },
            { text: "Work files — productive hoon!", type: "professional" }
        ]
    },
    {
        question: "Akele waqt mein kya karte ho?",
        options: [
            { text: "Social media chalata hoon — updated rehta hoon", type: "attention" },
            { text: "Kuch nahi — bas baith ke sochta hoon", type: "ghost" },
            { text: "Random cheezein karta hoon — depend karta hai", type: "chaos" },
            { text: "Kaam karta hoon — productive rehta hoon", type: "professional" }
        ]
    },
    {
        question: "Tumhara phone kitne logon ka access hai?",
        options: [
            { text: "Sabka — mera phone sabke liye khula hai", type: "attention" },
            { text: "Sirf family ka — privacy important hai", type: "mystery" },
            { text: "Kisi ka nahi — mera phone sirf mera hai", type: "ghost" },
            { text: "Work colleagues ka — office ke liye", type: "professional" }
        ]
    },
    {
        question: "Agar kal sab khatam ho jaye, toh pehle kya karoge?",
        options: [
            { text: "Last status daalunga — duniya ko bataunga!", type: "attention" },
            { text: "Kisi ko nahi bataunga — secretly handle karunga", type: "mystery" },
            { text: "Kuch nahi karunga — jo hoga dekha jayega", type: "ghost" },
            { text: "Plan banaunga — organized rehna hai!", type: "professional" }
        ]
    }
];

const QUIZ_RESULTS = {
    attention: {
        name: "Attention Seeker DP",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
        description: "Tu woh insaan hai jo 5 minute mein 3 status update karta hai. Har cheez ka status hai tere paas — khana, travel, mood, weather, sab! Tere phone ki gallery mein selfies ki gallery hai. Tu social media pe itna active hai ki kya pata kal influencer ban jaye!"
    },
    ghost: {
        name: "Ghost Mode DP",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>`,
        description: "Tu woh insaan hai jo WhatsApp pe hai lekin dikhta nahi. Status kabhi nahi badalta, DP kabhi nahi update hoti, last seen pehle hafte ki hai. Sab log sochte hain tu zinda hai ya nahi — mystery hai bhai tu!"
    },
    chaos: {
        name: "Chaotic Random DP",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 7h3v3H7z"/><path d="M14 7h3v3h-3z"/><path d="M7 14h3v3H7z"/><path d="M14 14h3v3h-3z"/></svg>`,
        description: "Tu woh insaan hai jo ek minute mein happy hai, agle minute mein philosophical. Koi nahi samajh sakta tu kya karega — tu khud bhi nahi samajhta! Tera phone itna random hai ki kya pata kal kya dikhe!"
    },
    professional: {
        name: "Professional LinkedIn-on-WhatsApp DP",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M6 12h4"/><path d="M6 16h4"/><path d="M14 12h4"/><path d="M14 16h4"/></svg>`,
        description: "Tu woh insaan hai jo WhatsApp pe bhi professional hai. Status mein motivational quotes, DP mein professional photo, messages mein formal language. Bhai, LinkedIn hai kya WhatsApp? Thoda chill kar!"
    },
    mystery: {
        name: "Mystery No-DP Person",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8c-2.2 0-4 1.8-4 4 0 2 1.8 4 4 4"/><path d="M8 12h8"/></svg>`,
        description: "Tu woh insaan hai jo sab kuch dekhta hai lekin kuch dikhata nahi. Phone sabka dekh leta hai lekin apna kisi ko nahi deta. Tere phone mein itne secrets hain ki Netflix ka thriller bhi fail hai!"
    }
};

const BATTLE_WINNER_REASONS = [
    "{winner} ki DP category itni unique hai ki {loser} ki category boring lag rahi hai!",
    "{winner} ka roast score {score1} hai jo {loser} ke {score2} se kahin zyada hai!",
    "{winner} ne apni DP category se {loser} ko hara diya — DP mein dum hai bhai!",
    "Judges ka faisla: {winner} ki DP {loser} se zyada interesting hai!",
    "{winner} ka DP game strong hai — {loser} ko next time mehnat karni padegi!",
    "{winner} ne {loser} ko DP se hi maar diya — koi chance nahi tha!"
];

// ==================== SOUND SYSTEM ====================
class SoundSystem {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('dpRoastMuted') === 'true';
        this.init();
    }

    init() {
        this.updateIcon();
        document.getElementById('soundToggle').addEventListener('click', () => this.toggle());
    }

    getCtx() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        return this.ctx;
    }

    toggle() {
        this.muted = !this.muted;
        localStorage.setItem('dpRoastMuted', this.muted);
        this.updateIcon();
        if (!this.muted) this.playClick();
    }

    updateIcon() {
        const on = document.querySelector('.sound-on');
        const off = document.querySelector('.sound-off');
        if (this.muted) {
            on.style.display = 'none';
            off.style.display = 'block';
        } else {
            on.style.display = 'block';
            off.style.display = 'none';
        }
    }

    play(type) {
        if (this.muted) return;
        try {
            const ctx = this.getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            switch (type) {
                case 'click':
                    osc.frequency.value = 800;
                    osc.type = 'sine';
                    gain.gain.value = 0.1;
                    osc.start();
                    osc.stop(ctx.currentTime + 0.08);
                    break;
                case 'reveal':
                    osc.frequency.value = 523.25;
                    osc.type = 'sine';
                    gain.gain.value = 0.15;
                    osc.start();
                    setTimeout(() => { osc.frequency.value = 659.25; }, 100);
                    setTimeout(() => { osc.frequency.value = 783.99; }, 200);
                    osc.stop(ctx.currentTime + 0.4);
                    break;
                case 'drumroll':
                    osc.frequency.value = 100;
                    osc.type = 'sawtooth';
                    gain.gain.value = 0.08;
                    osc.start();
                    for (let i = 0; i < 10; i++) {
                        setTimeout(() => {
                            osc.frequency.value = 100 + Math.random() * 200;
                        }, i * 80);
                    }
                    osc.stop(ctx.currentTime + 0.9);
                    break;
                case 'quiz':
                    osc.frequency.value = 440;
                    osc.type = 'triangle';
                    gain.gain.value = 0.12;
                    osc.start();
                    osc.stop(ctx.currentTime + 0.15);
                    break;
                case 'win':
                    osc.frequency.value = 523.25;
                    osc.type = 'sine';
                    gain.gain.value = 0.15;
                    osc.start();
                    setTimeout(() => { osc.frequency.value = 659.25; }, 150);
                    setTimeout(() => { osc.frequency.value = 783.99; }, 300);
                    setTimeout(() => { osc.frequency.value = 1046.5; }, 450);
                    osc.stop(ctx.currentTime + 0.7);
                    break;
                default:
                    osc.frequency.value = 600;
                    osc.type = 'sine';
                    gain.gain.value = 0.1;
                    osc.start();
                    osc.stop(ctx.currentTime + 0.1);
            }
        } catch (e) { /* silent fail */ }
    }

    playClick() { this.play('click'); }
    playReveal() { this.play('reveal'); }
    playDrumroll() { this.play('drumroll'); }
    playQuiz() { this.play('quiz'); }
    playWin() { this.play('win'); }
}

// ==================== APP ====================
class DPRoastApp {
    constructor() {
        this.sound = new SoundSystem();
        this.selectedCategory = null;
        this.quizState = { current: 0, answers: [] };
        this.lastRoast = null;

        this.initDarkMode();
        this.initNavigation();
        this.initDPSection();
        this.initCaptionSection();
        this.initQuiz();
        this.initBattle();
        this.initHallOfFame();
    }

    // DARK MODE
    initDarkMode() {
        const saved = localStorage.getItem('dpRoastTheme');
        if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateDarkIcon();

        document.getElementById('darkToggle').addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('dpRoastTheme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('dpRoastTheme', 'dark');
            }
            this.updateDarkIcon();
            this.sound.playClick();
        });
    }

    updateDarkIcon() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.querySelector('.sun-icon').style.display = isDark ? 'none' : 'block';
        document.querySelector('.moon-icon').style.display = isDark ? 'block' : 'none';
    }

    // NAVIGATION
    initNavigation() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.sound.playClick();

                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.getElementById(section).classList.add('active');

                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // DP ROAST SECTION
    initDPSection() {
        const grid = document.getElementById('categoryGrid');
        DP_CATEGORIES.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.id = cat.id;
            card.innerHTML = `<span class="category-icon">${getCatSvg(cat.id)}</span><span class="category-name">${cat.name}</span>`;
            card.addEventListener('click', () => {
                this.sound.playClick();
                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.selectedCategory = cat.id;
            });
            grid.appendChild(card);
        });

        // Intensity slider
        const slider = document.getElementById('intensitySlider');
        slider.addEventListener('input', () => {
            this.sound.playClick();
            document.querySelectorAll('#dp-roast .slider-label').forEach(l => l.classList.remove('active'));
            document.querySelector(`#dp-roast .slider-label[data-value="${slider.value}"]`).classList.add('active');
        });

        // Generate roast
        document.getElementById('generateRoast').addEventListener('click', () => this.generateRoast());

        // Surprise me
        document.getElementById('surpriseMe').addEventListener('click', () => this.surpriseMe());

        // Share buttons
        document.getElementById('shareWhatsApp').addEventListener('click', () => this.shareOnWhatsApp());
        document.getElementById('downloadImage').addEventListener('click', () => this.downloadAsImage());
    }

    generateRoast() {
        const name = document.getElementById('userName').value.trim();
        const intensity = parseInt(document.getElementById('intensitySlider').value);

        if (!this.selectedCategory) {
            this.shakeElement(document.getElementById('categoryGrid'));
            return;
        }
        if (!name) {
            this.shakeElement(document.getElementById('userName'));
            return;
        }

        const intensityKey = ['mild', 'medium', 'savage'][intensity];
        const roasts = ROASTS[this.selectedCategory][intensityKey];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];

        const greeting = intensity === 0 ? `Arey ${name}! ` : intensity === 1 ? `${name}, suno! ` : `${name}, padh le! `;
        const fullRoast = greeting + roast;

        this.lastRoast = {
            name,
            category: this.selectedCategory,
            intensity: intensityKey,
            text: fullRoast,
            timestamp: Date.now()
        };

        this.sound.playReveal();

        document.getElementById('roastText').textContent = fullRoast;
        const result = document.getElementById('roastResult');
        result.style.display = 'block';
        result.scrollIntoView({ behavior: 'smooth', block: 'center' });

        this.saveToHall(this.lastRoast);
    }

    surpriseMe() {
        this.sound.playClick();
        const randomCat = DP_CATEGORIES[Math.floor(Math.random() * DP_CATEGORIES.length)];

        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
        const card = document.querySelector(`.category-card[data-id="${randomCat.id}"]`);
        if (card) {
            card.classList.add('selected');
            this.selectedCategory = randomCat.id;
        }

        document.getElementById('userName').value = 'Random Bhai';
        this.generateRoast();
    }

    shakeElement(el) {
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = 'shake 0.5s ease';
        setTimeout(() => el.style.animation = '', 500);
    }

    // CAPTION ROAST
    initCaptionSection() {
        const textarea = document.getElementById('captionText');
        textarea.addEventListener('input', () => {
            document.getElementById('charCount').textContent = textarea.value.length;
        });

        const slider = document.getElementById('captionIntensity');
        slider.addEventListener('input', () => {
            this.sound.playClick();
            document.querySelectorAll('#caption-roast .slider-label').forEach(l => l.classList.remove('active'));
            document.querySelector(`#caption-roast .slider-label[data-value="${slider.value}"]`).classList.add('active');
        });

        document.getElementById('generateCaptionRoast').addEventListener('click', () => this.generateCaptionRoast());

        document.getElementById('shareCaptionWhatsApp').addEventListener('click', () => {
            if (this.lastCaptionRoast) {
                const url = `https://wa.me/?text=${encodeURIComponent(this.lastCaptionRoast.text + '\n\nDP Roast karo: ' + window.location.href)}`;
                window.open(url, '_blank');
            }
        });

        document.getElementById('downloadCaptionImage').addEventListener('click', () => {
            if (this.lastCaptionRoast) this.exportCanvas(this.lastCaptionRoast.text, 'Caption Roast');
        });
    }

    generateCaptionRoast() {
        const text = document.getElementById('captionText').value.trim();
        const intensity = parseInt(document.getElementById('captionIntensity').value);

        if (!text) {
            this.shakeElement(document.getElementById('captionText'));
            return;
        }

        const intensityKey = ['mild', 'medium', 'savage'][intensity];
        const lowerText = text.toLowerCase();

        let matchedRoast = null;

        for (const [keyword, data] of Object.entries(CAPTION_KEYWORDS)) {
            if (lowerText.includes(keyword)) {
                matchedRoast = data[intensityKey][Math.floor(Math.random() * data[intensityKey].length)];
                break;
            }
        }

        if (!matchedRoast) {
            const generics = GENERIC_ROASTS[intensityKey];
            matchedRoast = generics[Math.floor(Math.random() * generics.length)];
        }

        this.lastCaptionRoast = {
            name: 'Caption User',
            category: 'caption',
            intensity: intensityKey,
            text: matchedRoast,
            timestamp: Date.now()
        };

        this.sound.playReveal();

        document.getElementById('captionRoastText').textContent = matchedRoast;
        const result = document.getElementById('captionResult');
        result.style.display = 'block';
        result.scrollIntoView({ behavior: 'smooth', block: 'center' });

        this.saveToHall(this.lastCaptionRoast);
    }

    // QUIZ
    initQuiz() {
        document.getElementById('startQuiz').addEventListener('click', () => this.startQuiz());
        document.getElementById('retakeQuiz').addEventListener('click', () => {
            this.quizState = { current: 0, answers: [] };
            document.getElementById('quizResult').style.display = 'none';
            document.getElementById('quizContainer').style.display = 'block';
            this.startQuiz();
        });

        document.getElementById('shareQuizWhatsApp').addEventListener('click', () => {
            if (this.lastQuizResult) {
                const url = `https://wa.me/?text=${encodeURIComponent(`Mera DP Personality: ${this.lastQuizResult.name}\n\n${this.lastQuizResult.description}\n\nApna bhi try karo: ` + window.location.href)}`;
                window.open(url, '_blank');
            }
        });
    }

    startQuiz() {
        this.sound.playClick();
        this.quizState = { current: 0, answers: [] };
        document.getElementById('startQuiz').style.display = 'none';
        this.showQuizQuestion();
    }

    showQuizQuestion() {
        const q = QUIZ_QUESTIONS[this.quizState.current];
        document.getElementById('questionText').textContent = `${this.quizState.current + 1}. ${q.question}`;
        document.getElementById('quizProgressText').textContent = `${this.quizState.current + 1}/6`;
        document.getElementById('quizProgress').style.width = `${((this.quizState.current) / 6) * 100}%`;

        const optionsDiv = document.getElementById('quizOptions');
        optionsDiv.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt.text;
            btn.addEventListener('click', () => {
                this.sound.playQuiz();
                document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.quizState.answers.push(opt.type);

                setTimeout(() => {
                    this.quizState.current++;
                    if (this.quizState.current < QUIZ_QUESTIONS.length) {
                        this.showQuizQuestion();
                    } else {
                        this.showQuizResult();
                    }
                }, 400);
            });
            optionsDiv.appendChild(btn);
        });
    }

    showQuizResult() {
        const counts = {};
        this.quizState.answers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
        const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
        const result = QUIZ_RESULTS[topType];
        this.lastQuizResult = result;

        this.sound.playWin();

        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('quizResult').style.display = 'block';
        document.getElementById('badgeIcon').innerHTML = result.icon;
        document.getElementById('quizPersonality').textContent = result.name;
        document.getElementById('quizDescription').textContent = result.description;

        this.saveToHall({
            name: 'Quiz Participant',
            category: 'personality-quiz',
            intensity: 'medium',
            text: `Personality: ${result.name} — ${result.description}`,
            timestamp: Date.now()
        });
    }

    // BATTLE MODE
    initBattle() {
        const p1Select = document.getElementById('player1Category');
        const p2Select = document.getElementById('player2Category');
        DP_CATEGORIES.forEach(cat => {
            const o1 = new Option(cat.name, cat.id);
            const o2 = new Option(cat.name, cat.id);
            p1Select.add(o1);
            p2Select.add(o2);
        });

        document.getElementById('startBattle').addEventListener('click', () => this.startBattle());

        document.getElementById('shareBattleWhatsApp').addEventListener('click', () => {
            if (this.lastBattle) {
                const url = `https://wa.me/?text=${encodeURIComponent(this.lastBattle.shareText + '\n\nDP Battle karo: ' + window.location.href)}`;
                window.open(url, '_blank');
            }
        });

        document.getElementById('newBattle').addEventListener('click', () => {
            document.getElementById('battleResult').style.display = 'none';
            document.getElementById('player1Name').value = '';
            document.getElementById('player2Name').value = '';
            document.getElementById('player1Category').value = '';
            document.getElementById('player2Category').value = '';
        });
    }

    startBattle() {
        const n1 = document.getElementById('player1Name').value.trim();
        const n2 = document.getElementById('player2Name').value.trim();
        const c1 = document.getElementById('player1Category').value;
        const c2 = document.getElementById('player2Category').value;

        if (!n1 || !n2 || !c1 || !c2) {
            if (!n1) this.shakeElement(document.getElementById('player1Name'));
            if (!n2) this.shakeElement(document.getElementById('player2Name'));
            if (!c1) this.shakeElement(document.getElementById('player1Category'));
            if (!c2) this.shakeElement(document.getElementById('player2Category'));
            return;
        }

        this.sound.playDrumroll();

        const score1 = Math.floor(Math.random() * 40) + 40;
        const score2 = Math.floor(Math.random() * 40) + 40;

        const cat1 = DP_CATEGORIES.find(c => c.id === c1);
        const cat2 = DP_CATEGORIES.find(c => c.id === c2);

        const roasts1 = this.getRandomRoast(c1, 'medium');
        const roasts2 = this.getRandomRoast(c2, 'medium');

        const winner = score1 >= score2 ? 1 : 2;
        const winnerName = winner === 1 ? n1 : n2;
        const loserName = winner === 1 ? n2 : n1;
        const reasonTemplate = BATTLE_WINNER_REASONS[Math.floor(Math.random() * BATTLE_WINNER_REASONS.length)];
        const reason = reasonTemplate
            .replace('{winner}', winnerName)
            .replace('{loser}', loserName)
            .replace('{score1}', Math.max(score1, score2))
            .replace('{score2}', Math.min(score1, score2));

        setTimeout(() => {
            this.sound.playWin();

            const result = document.getElementById('battleResult');
            result.style.display = 'block';

            // Animate scores
            const p1 = document.getElementById('battlePlayer1');
            const p2 = document.getElementById('battlePlayer2');
            p1.querySelector('.battle-name').textContent = n1;
            p2.querySelector('.battle-name').textContent = n2;
            p1.querySelector('.battle-score').textContent = score1;
            p2.querySelector('.battle-score').textContent = score2;

            setTimeout(() => {
                p1.querySelector('.score-fill').style.width = `${score1}%`;
                p2.querySelector('.score-fill').style.width = `${score2}%`;
            }, 100);

            document.getElementById('winnerName').textContent = `${winnerName} Jeet Gaya!`;
            document.getElementById('winnerReason').textContent = reason;

            // Chat bubbles
            const chatDiv = document.getElementById('battleChatBubbles');
            chatDiv.innerHTML = `
                <div class="chat-bubble">
                    <div class="bubble-header">
                        <span class="bubble-avatar-svg">${getCatSvg(cat1.id)}</span>
                        <span class="bubble-name">${n1}</span>
                    </div>
                    <div class="bubble-text">${roasts1}</div>
                    <div class="bubble-check">✓✓</div>
                </div>
                <div class="chat-bubble">
                    <div class="bubble-header">
                        <span class="bubble-avatar-svg">${getCatSvg(cat2.id)}</span>
                        <span class="bubble-name">${n2}</span>
                    </div>
                    <div class="bubble-text">${roasts2}</div>
                    <div class="bubble-check">✓✓</div>
                </div>
            `;

            this.lastBattle = {
                score1, score2, n1, n2, c1, c2, winner, winnerName, reason,
                shareText: `DP Battle Result!\n${n1} (${cat1.name}): ${score1}/100\n${n2} (${cat2.name}): ${score2}/100\nWinner: ${winnerName}\n${reason}`
            };

            result.scrollIntoView({ behavior: 'smooth', block: 'center' });

            this.saveToHall({
                name: `${n1} vs ${n2}`,
                category: 'battle',
                intensity: 'savage',
                text: `${n1} (${cat1.name}): ${score1} vs ${n2} (${cat2.name}): ${score2} — Winner: ${winnerName}`,
                timestamp: Date.now()
            });
        }, 1200);
    }

    getRandomRoast(categoryId, intensity) {
        const roasts = ROASTS[categoryId][intensity];
        return roasts[Math.floor(Math.random() * roasts.length)];
    }

    // HALL OF FAME
    initHallOfFame() {
        this.renderHall();
        document.getElementById('clearHall').addEventListener('click', () => {
            this.sound.playClick();
            localStorage.removeItem('dpRoastHall');
            this.renderHall();
        });
    }

    saveToHall(roast) {
        let hall = JSON.parse(localStorage.getItem('dpRoastHall') || '[]');
        hall.unshift(roast);
        if (hall.length > 50) hall = hall.slice(0, 50);
        localStorage.setItem('dpRoastHall', JSON.stringify(hall));
        this.renderHall();
    }

    renderHall() {
        const hall = JSON.parse(localStorage.getItem('dpRoastHall') || '[]');
        const list = document.getElementById('hallList');
        const empty = document.getElementById('emptyHall');

        if (hall.length === 0) {
            list.innerHTML = '';
            list.appendChild(empty);
            empty.style.display = 'block';
            return;
        }

        empty.style.display = 'none';
        list.innerHTML = '';

        hall.forEach((item, i) => {
            const div = document.createElement('div');
            div.className = 'hall-item';
            const cat = DP_CATEGORIES.find(c => c.id === item.category);
            const iconHtml = cat ? getCatSvg(cat.id) : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
            const catName = cat ? cat.name : item.category;
            const time = this.timeAgo(item.timestamp);
            const intensityClass = item.intensity === 'mild' ? 'intensity-mild' : item.intensity === 'medium' ? 'intensity-medium' : 'intensity-savage';
            const intensityLabel = item.intensity === 'mild' ? 'Halka Phulka' : item.intensity === 'medium' ? 'Thoda Tez' : 'Khatarnak';

            div.innerHTML = `
                <div class="hall-item-header">
                    <span class="hall-item-avatar-svg">${iconHtml}</span>
                    <span class="hall-item-name">${item.name}</span>
                    <span class="hall-item-category">${catName}</span>
                </div>
                <span class="hall-item-intensity ${intensityClass}">${intensityLabel}</span>
                <div class="hall-item-text">${item.text}</div>
                <div class="hall-item-time">${time}</div>
            `;
            list.appendChild(div);
        });
    }

    timeAgo(ts) {
        const diff = Date.now() - ts;
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'Abhi abhi';
        if (mins < 60) return `${mins} min ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs} hr ago`;
        const days = Math.floor(hrs / 24);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    // SHARE & EXPORT
    shareOnWhatsApp() {
        if (this.lastRoast) {
            const url = `https://wa.me/?text=${encodeURIComponent(this.lastRoast.text + '\n\nDP Roast karo: ' + window.location.href)}`;
            window.open(url, '_blank');
        }
    }

    downloadAsImage() {
        if (this.lastRoast) this.exportCanvas(this.lastRoast.text, 'DP Roast');
    }

    exportCanvas(text, title) {
        const canvas = document.getElementById('exportCanvas');
        const ctx = canvas.getContext('2d');

        // Background
        const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
        gradient.addColorStop(0, '#075E54');
        gradient.addColorStop(1, '#128c7e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1080, 1080);

        // Decorative circles
        ctx.fillStyle = 'rgba(37, 211, 102, 0.1)';
        ctx.beginPath();
        ctx.arc(900, 180, 200, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(180, 900, 150, 0, Math.PI * 2);
        ctx.fill();

        // Header
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 52px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('DP Roast', 540, 120);

        ctx.font = '28px Poppins, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fillText(title, 540, 170);

        // Chat bubble background
        const bubbleX = 80;
        const bubbleY = 240;
        const bubbleW = 920;
        const bubbleH = 500;

        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        this.roundRect(ctx, bubbleX, bubbleY, bubbleW, bubbleH, 30);
        ctx.fill();

        // Bubble content
        ctx.fillStyle = '#fff';
        ctx.font = '600 30px Poppins, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('💬 Roast:', bubbleX + 40, bubbleY + 60);

        ctx.font = '24px Poppins, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        const words = text.split(' ');
        let line = '';
        let y = bubbleY + 110;
        const maxWidth = bubbleW - 80;

        for (const word of words) {
            const testLine = line + word + ' ';
            if (ctx.measureText(testLine).width > maxWidth) {
                ctx.fillText(line.trim(), bubbleX + 40, y);
                line = word + ' ';
                y += 36;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line.trim(), bubbleX + 40, y);

        // Footer
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '22px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Try DP Roast — WhatsApp DP/Status Vibe Roaster', 540, 850);
        ctx.fillText(window.location.href, 540, 900);

        // Watermark
        ctx.font = 'bold 20px Poppins, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.textAlign = 'right';
        ctx.fillText('Made with DP Roast', 1040, 1040);

        // Download
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `dp-roast-${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
        }, 'image/png');
    }

    roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-8px); } 40%, 80% { transform: translateX(8px); } }`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => new DPRoastApp());
