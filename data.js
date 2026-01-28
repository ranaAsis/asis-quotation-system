// ==================== ASIS BOATS QUOTATION SYSTEM - DATA MODULE ====================
// Contains all product data, pricing, accessories, and configuration

export const BOATS = {
    aluminum: {
        name: 'Aluminium Boats', 
        desc: 'Professional-grade aluminum hull RHIBs', 
        icon: '🚤',
        sizes: [
            {size:'6.5M', price:103090, fuel:'150L', pax:8},
            {size:'7.6M', price:120030, fuel:'450L', pax:10},
            {size:'8.5M', price:149800, fuel:'600L', pax:12},
            {size:'9.5M', price:180765, fuel:'600L', pax:14},
            {size:'11.5M', price:246770, fuel:'1200L', pax:18},
            {size:'13M', price:289475, fuel:'1100L', pax:20}
        ]
    },
    fiberglass: {
        name: 'Fiberglass Boats (GRP)', 
        desc: 'Versatile GRP construction RHIBs', 
        icon: '⛵',
        sizes: [
            {size:'4.1M', price:22900, fuel:'N/A', pax:4},
            {size:'5.1M', price:33560, fuel:'90L', pax:6},
            {size:'5.5M', price:35000, fuel:'90L', pax:6},
            {size:'6.5M', price:53040, fuel:'225L', pax:8},
            {size:'7.2M', price:56850, fuel:'225L', pax:10},
            {size:'8.0M', price:66560, fuel:'225L', pax:12},
            {size:'8.5M', price:83200, fuel:'225L', pax:14},
            {size:'9.5M', price:130080, fuel:'2x350L', pax:16},
            {size:'12M', price:160960, fuel:'2x300L', pax:20}
        ]
    },
    inflatable: {
        name: 'Inflatable Boats (HDIB)', 
        desc: 'Heavy Duty Inflatable Boats', 
        icon: '🛟',
        sizes: [
            {size:'2.8M', price:8300, fuel:'N/A', pax:3},
            {size:'3.2M', price:9800, fuel:'N/A', pax:4},
            {size:'3.5M', price:10800, fuel:'N/A', pax:5},
            {size:'4.2M', price:12600, fuel:'N/A', pax:6},
            {size:'4.8M', price:15700, fuel:'N/A', pax:7},
            {size:'5.1M', price:16900, fuel:'N/A', pax:8}
        ]
    }
};

// Accessories by boat type - from Excel price list
// Each item has prices object keyed by size, with values: number, "X" (unavailable), "TBD", or "Incl."
export const ACCESSORIES = {
    aluminum: {
        "Propulsion / Engine": [
            {name: "Single Mercury F150Hp EXLPT (incl. controls, steering, gauges)", prices: {"6.5M":18620,"7.6M":"X","8.5M":"X","9.5M":"X","11.5M":"X","13M":"X"}},
            {name: "Twin Mercury F150Hp XLPT/CXLPT (incl. controls, steering, gauges)", prices: {"6.5M":"X","7.6M":34255,"8.5M":"X","9.5M":"X","11.5M":"X","13M":"X"}},
            {name: "Twin Mercury Verado F300 V8 XL/CXL (DTS, Vessel View 502)", prices: {"6.5M":"X","7.6M":"X","8.5M":68975,"9.5M":68975,"11.5M":68975,"13M":"X"}},
            {name: "Twin Mercury F400 V10 XL/CXL (DTS, Vessel View 502)", prices: {"6.5M":"X","7.6M":"X","8.5M":"X","9.5M":103120,"11.5M":103120,"13M":103120}},
            {name: "Triple Mercury Verado F300 V8 XL/CXL (DTS, Vessel View 702)", prices: {"6.5M":"X","7.6M":"X","8.5M":"X","9.5M":"X","11.5M":"X","13M":114950}},
            {name: "Triple Mercury F400 V10 XL/CXL (DTS, Vessel View 502)", prices: {"6.5M":"X","7.6M":"X","8.5M":"X","9.5M":"X","11.5M":"X","13M":166180}}
        ],
        "Customization": [
            {name: "Boat Painting", prices: {"6.5M":17000,"7.6M":20000,"8.5M":22000,"9.5M":25500,"11.5M":30000,"13M":32000}},
            {name: "Custom Color Hypalon", prices: {"6.5M":2500,"7.6M":3000,"8.5M":3500,"9.5M":4000,"11.5M":4500,"13M":5000}},
            {name: "Double Layer Hypalon", prices: {"6.5M":15340,"7.6M":17500,"8.5M":20000,"9.5M":22420,"11.5M":27000,"13M":28320}},
            {name: "Hypalon Strip Between Fender", prices: {"6.5M":5000,"7.6M":6000,"8.5M":6880,"9.5M":7700,"11.5M":9300,"13M":9720}},
            {name: "Hypalon Branding And Numbering", prices: {"6.5M":700,"7.6M":800,"8.5M":900,"9.5M":1000,"11.5M":1100,"13M":1100}},
            {name: "Extra Handle", prices: {"6.5M":250,"7.6M":250,"8.5M":250,"9.5M":250,"11.5M":250,"13M":250}},
            {name: "Diver-Notch", prices: {"6.5M":9800,"7.6M":9800,"8.5M":9800,"9.5M":9800,"11.5M":9800,"13M":9800}},
            {name: "Notch Filling Inserts", prices: {"6.5M":2500,"7.6M":2500,"8.5M":2500,"9.5M":2500,"11.5M":3500,"13M":3500}}
        ],
        "Consoles, Cabins & T-Tops": [
            {name: "Aluminium Console with Windscreen and Grab Rail", prices: {"6.5M":10115,"7.6M":10115,"8.5M":10500,"9.5M":11200,"11.5M":12000,"13M":12000}},
            {name: "Aluminum Cabin with Cuddy and Toilet", prices: {"6.5M":"X","7.6M":"X","8.5M":"X","9.5M":79570,"11.5M":79570,"13M":79570}},
            {name: "Aluminum Cabin for 4 Pax", prices: {"6.5M":"X","7.6M":"X","8.5M":"X","9.5M":"TBD","11.5M":"TBD","13M":"TBD"}},
            {name: "Aluminum Wheel-house", prices: {"6.5M":19115,"7.6M":19115,"8.5M":21000,"9.5M":21000,"11.5M":24000,"13M":24000}},
            {name: "Aluminium T-Top with Hard Top 1 (2.7m)", prices: {"6.5M":12560,"7.6M":12560,"8.5M":12560,"9.5M":12560,"11.5M":12560,"13M":12560}},
            {name: "Aluminium T-Top with Hard Top 2 (3.8m)", prices: {"6.5M":14920,"7.6M":14920,"8.5M":14920,"9.5M":14920,"11.5M":14920,"13M":14920}},
            {name: "Aluminium T-Top with Hard Top 3 (4.4m)", prices: {"6.5M":"X","7.6M":"X","8.5M":"X","9.5M":"X","11.5M":32000,"13M":32000}}
        ],
        "Seating - Leaning Posts": [
            {name: "Aluminium Leaning Post Single", prices: {"6.5M":2765,"7.6M":2765,"8.5M":2765,"9.5M":2765,"11.5M":2765,"13M":2765}},
            {name: "Aluminium Leaning Post with Back Rest Single", prices: {"6.5M":3310,"7.6M":3310,"8.5M":3310,"9.5M":3310,"11.5M":3310,"13M":3310}},
            {name: "Aluminium Leaning Post Double", prices: {"6.5M":3400,"7.6M":3400,"8.5M":3400,"9.5M":3400,"11.5M":3400,"13M":3400}},
            {name: "Aluminium Leaning Post with Back Rest Double", prices: {"6.5M":4000,"7.6M":4000,"8.5M":4000,"9.5M":4000,"11.5M":4000,"13M":4000}}
        ],
        "Seating - Jockey & Grab Rail": [
            {name: "Grab Rail for Front Seat", prices: {"6.5M":650,"7.6M":650,"8.5M":650,"9.5M":650,"11.5M":650,"13M":650}},
            {name: "Single Aluminium Jockey Seat with Grab Rail", prices: {"6.5M":1270,"7.6M":1270,"8.5M":1270,"9.5M":1270,"11.5M":1270,"13M":1270}},
            {name: "Double Aluminium Jockey Seat with Grab Rail", prices: {"6.5M":2535,"7.6M":2535,"8.5M":2535,"9.5M":2535,"11.5M":2535,"13M":2535}}
        ],
        "Seating - Suspension": [
            {name: "Ullman BISCAYA Jockey Suspension Seat", prices: {"6.5M":5500,"7.6M":5500,"8.5M":5500,"9.5M":5500,"11.5M":5500,"13M":5500}},
            {name: "Ullman Patrol Jockey Suspension Seat", prices: {"6.5M":6250,"7.6M":6250,"8.5M":6250,"9.5M":6250,"11.5M":6250,"13M":6250}},
            {name: "Echelon Midback Jockey Suspension Seat", prices: {"6.5M":16300,"7.6M":16300,"8.5M":16300,"9.5M":16300,"11.5M":16300,"13M":16300}}
        ],
        "Frames & Structure": [
            {name: "Aluminium A Frame", prices: {"6.5M":2885,"7.6M":2885,"8.5M":2885,"9.5M":2885,"11.5M":3260,"13M":3260}},
            {name: "Aluminium A Frame With Self-righting System", prices: {"6.5M":9730,"7.6M":9730,"8.5M":9730,"9.5M":9730,"11.5M":10140,"13M":10140}},
            {name: "Aluminium A Frame with Ladder", prices: {"6.5M":4300,"7.6M":4300,"8.5M":4300,"9.5M":4300,"11.5M":4675,"13M":4675}},
            {name: "Aluminium Tube Ladder", prices: {"6.5M":2500,"7.6M":2500,"8.5M":2500,"9.5M":2500,"11.5M":2500,"13M":2500}},
            {name: "Swim Platform at Transom for Inboard Engine", prices: {"6.5M":1285,"7.6M":1285,"8.5M":1285,"9.5M":1285,"11.5M":1285,"13M":1285}},
            {name: "Aluminium Bow Tow Post", prices: {"6.5M":2230,"7.6M":2230,"8.5M":2230,"9.5M":2230,"11.5M":2230,"13M":2230}},
            {name: "Aluminium Aft Tow Post", prices: {"6.5M":2230,"7.6M":2230,"8.5M":2230,"9.5M":2230,"11.5M":2230,"13M":2230}},
            {name: "Aluminium Bollard", prices: {"6.5M":835,"7.6M":835,"8.5M":835,"9.5M":835,"11.5M":835,"13M":835}},
            {name: "Bow HD Tow Post w/Weapons Mount Flange", prices: {"6.5M":7000,"7.6M":7000,"8.5M":7000,"9.5M":7000,"11.5M":7000,"13M":7000}},
            {name: "Aft HD Tow Post w/Weapons Mount Flange", prices: {"6.5M":7000,"7.6M":7000,"8.5M":7000,"9.5M":7000,"11.5M":7000,"13M":7000}}
        ],
        "Safety Equipment": [
            {name: "Bow Step with 2 Stainless Steel Cleats", prices: {"6.5M":545,"7.6M":545,"8.5M":545,"9.5M":545,"11.5M":545,"13M":545}},
            {name: "Aluminium Anchor with S.S Chain", prices: {"6.5M":1075,"7.6M":1075,"8.5M":1075,"9.5M":1075,"11.5M":1075,"13M":1075}},
            {name: "Aluminium Anchor with Rope 30m", prices: {"6.5M":390,"7.6M":390,"8.5M":390,"9.5M":390,"11.5M":390,"13M":390}},
            {name: "Windless Clipper with S.S Chain & Anchor", prices: {"6.5M":5360,"7.6M":5360,"8.5M":5360,"9.5M":5360,"11.5M":5360,"13M":5360}},
            {name: "Distress Signal Kit for Coastal Navigation", prices: {"6.5M":200,"7.6M":200,"8.5M":200,"9.5M":200,"11.5M":200,"13M":200}},
            {name: "2x Fire Extinguisher (2Kg) IAW COLREGS", prices: {"6.5M":300,"7.6M":300,"8.5M":300,"9.5M":300,"11.5M":300,"13M":300}},
            {name: "2x 20\" USCG Approved Ring Buoy IAW COLREGS", prices: {"6.5M":160,"7.6M":160,"8.5M":160,"9.5M":160,"11.5M":160,"13M":160}},
            {name: "2x Mooring Rope 12mm 20m", prices: {"6.5M":300,"7.6M":300,"8.5M":300,"9.5M":300,"11.5M":300,"13M":300}},
            {name: "2x Gunwale Mounted Boat Hook", prices: {"6.5M":150,"7.6M":150,"8.5M":150,"9.5M":150,"11.5M":150,"13M":150}},
            {name: "Forward Deck Mounted Boarding Team Hand Railing", prices: {"6.5M":5200,"7.6M":5200,"8.5M":5200,"9.5M":5200,"11.5M":5200,"13M":5200}},
            {name: "Single Hoisting Lifting System", prices: {"6.5M":19500,"7.6M":19500,"8.5M":19500,"9.5M":19500,"11.5M":19500,"13M":19500}},
            {name: "Fire Extinguisher Compartment", prices: {"6.5M":310,"7.6M":310,"8.5M":310,"9.5M":310,"11.5M":310,"13M":310}},
            {name: "Boat Cover", prices: {"6.5M":2500,"7.6M":4000,"8.5M":4500,"9.5M":5000,"11.5M":5500,"13M":5500}},
            {name: "Anti-fouling Hull Bottom Paint", prices: {"6.5M":2575,"7.6M":3140,"8.5M":3460,"9.5M":3750,"11.5M":4275,"13M":4500}},
            {name: "Life Ring", prices: {"6.5M":110,"7.6M":110,"8.5M":110,"9.5M":110,"11.5M":110,"13M":110}},
            {name: "Dive Bottle Rack (6 Bottles)", prices: {"6.5M":3250,"7.6M":3250,"8.5M":3250,"9.5M":3250,"11.5M":3250,"13M":3250}},
            {name: "Life Jacket SOLAS Foam with Flashlight 170N", prices: {"6.5M":85,"7.6M":85,"8.5M":85,"9.5M":85,"11.5M":85,"13M":85}},
            {name: "Life Jacket Manual Inflatable 170N", prices: {"6.5M":120,"7.6M":120,"8.5M":120,"9.5M":120,"11.5M":120,"13M":120}}
        ],
        "Navigation": [
            {name: "GARMIN GPSMAP 923 XSV 9\" MFD with Sonar", prices: {"6.5M":2270,"7.6M":2270,"8.5M":2270,"9.5M":2270,"11.5M":2270,"13M":2270}},
            {name: "GARMIN GPSMAP 8410 XSV 10\" MFD with Sonar", prices: {"6.5M":4400,"7.6M":4400,"8.5M":4400,"9.5M":4400,"11.5M":4400,"13M":4400}},
            {name: "GARMIN GPSMAP 8410 10\" MFD W/O Sonar", prices: {"6.5M":3500,"7.6M":3500,"8.5M":3500,"9.5M":3500,"11.5M":3500,"13M":3500}},
            {name: "GARMIN GMR 18HD+ 18NM Radar Scanner", prices: {"6.5M":2200,"7.6M":2200,"8.5M":2200,"9.5M":2200,"11.5M":2200,"13M":2200}},
            {name: "GARMIN GMR Fantom 18x Dome Radar", prices: {"6.5M":2600,"7.6M":2600,"8.5M":2600,"9.5M":2600,"11.5M":2600,"13M":2600}}
        ],
        "Communication": [
            {name: "Garmin 115i VHF Radio with Antenna", prices: {"6.5M":750,"7.6M":750,"8.5M":750,"9.5M":750,"11.5M":750,"13M":750}},
            {name: "Garmin 215i AIS VHF Radio with Antenna", prices: {"6.5M":1200,"7.6M":1200,"8.5M":1200,"9.5M":1200,"11.5M":1200,"13M":1200}},
            {name: "Whelen Siren/PA System IAW COLREGS", prices: {"6.5M":1100,"7.6M":1100,"8.5M":1100,"9.5M":1100,"11.5M":1100,"13M":1100}},
            {name: "Signal Horn 12VDC IAW COLREGS", prices: {"6.5M":250,"7.6M":250,"8.5M":250,"9.5M":250,"11.5M":250,"13M":250}}
        ],
        "Lighting & Electrical": [
            {name: "FLIR M232 Thermal Camera (320x240, 9Hz)", prices: {"6.5M":6500,"7.6M":6500,"8.5M":6500,"9.5M":6500,"11.5M":6500,"13M":6500}},
            {name: "FLIR M364C Gyro Stabilized Thermal IP Camera", prices: {"6.5M":27000,"7.6M":27000,"8.5M":27000,"9.5M":27000,"11.5M":27000,"13M":27000}},
            {name: "STL K-FORCE LED Law Enforcement Light Bar", prices: {"6.5M":1500,"7.6M":1500,"8.5M":1500,"9.5M":1500,"11.5M":1500,"13M":1500}},
            {name: "Remote Search Light ACR RCL 95 w/Joystick", prices: {"6.5M":1050,"7.6M":1050,"8.5M":1050,"9.5M":1050,"11.5M":1050,"13M":1050}},
            {name: "LED Flood Lights / Scene-Lights (4 pieces)", prices: {"6.5M":800,"7.6M":800,"8.5M":800,"9.5M":800,"11.5M":800,"13M":800}},
            {name: "Deck Light LED Tri-Color Lighting", prices: {"6.5M":1060,"7.6M":1060,"8.5M":1400,"9.5M":1400,"11.5M":1775,"13M":1775}},
            {name: "12 VDC Air-Compressor Tube Inflation System", prices: {"6.5M":400,"7.6M":400,"8.5M":400,"9.5M":400,"11.5M":400,"13M":400}},
            {name: "3-Bank Onboard Battery Charging System 40A", prices: {"6.5M":750,"7.6M":750,"8.5M":750,"9.5M":750,"11.5M":750,"13M":750}},
            {name: "BLUE SEA Accessory Receptacle 12VDC", prices: {"6.5M":75,"7.6M":75,"8.5M":75,"9.5M":75,"11.5M":75,"13M":75}},
            {name: "BLUE SEA 12VDC Dual USB Charging Outlets", prices: {"6.5M":100,"7.6M":100,"8.5M":100,"9.5M":100,"11.5M":100,"13M":100}},
            {name: "Plastimo Flush Mount Offshore Compass 95", prices: {"6.5M":380,"7.6M":380,"8.5M":380,"9.5M":380,"11.5M":380,"13M":380}}
        ],
        "Protection & Guards": [
            {name: "Aluminium Bow Guard with Pushing Knee", prices: {"6.5M":8110,"7.6M":8110,"8.5M":8110,"9.5M":8110,"11.5M":8110,"13M":8110}},
            {name: "PE Filled Foam - Pushing Knee", prices: {"6.5M":4400,"7.6M":4400,"8.5M":4400,"9.5M":4400,"11.5M":4400,"13M":4400}},
            {name: "HD Aluminium Engine Guard", prices: {"6.5M":2800,"7.6M":2800,"8.5M":2800,"9.5M":2800,"11.5M":2800,"13M":2800}},
            {name: "Propeller Guard", prices: {"6.5M":1680,"7.6M":1680,"8.5M":1680,"9.5M":1680,"11.5M":1680,"13M":1680}},
            {name: "Wooden Pallet with Shrink-Wrap Packaging", prices: {"6.5M":1430,"7.6M":1430,"8.5M":1430,"9.5M":1430,"11.5M":1430,"13M":1430}}
        ]
    },
    fiberglass: {
        "Propulsion / Engine": [
            {name: "Single Mercury F150Hp EXLPT (incl. controls, steering, gauges)", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":18620,"7.2M":"X","8.0M":"X","8.5M":"X","9.5M":"X","12M":"X"}},
            {name: "Twin Mercury F150Hp XLPT/CXLPT (incl. controls, steering, gauges)", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":"X","7.2M":"X","8.0M":34255,"8.5M":"X","9.5M":"X","12M":"X"}},
            {name: "Twin Mercury Verado F300 V8 XL/CXL (DTS, Vessel View 502)", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":"X","7.2M":"X","8.0M":"X","8.5M":68975,"9.5M":68975,"12M":"X"}},
            {name: "Twin Mercury F400 V10 XL/CXL (DTS, Vessel View 502)", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":"X","7.2M":"X","8.0M":"X","8.5M":"X","9.5M":"X","12M":103120}}
        ],
        "Customization": [
            {name: "Custom Color Hypalon", prices: {"4.1M":1200,"5.1M":1600,"5.5M":1800,"6.5M":2200,"7.2M":2500,"8.0M":2800,"8.5M":3200,"9.5M":3800,"12M":4500}},
            {name: "Double Layer Hypalon", prices: {"4.1M":6000,"5.1M":8000,"5.5M":9200,"6.5M":12000,"7.2M":14000,"8.0M":16000,"8.5M":18000,"9.5M":22000,"12M":27000}},
            {name: "Hypalon Branding And Numbering", prices: {"4.1M":400,"5.1M":500,"5.5M":550,"6.5M":600,"7.2M":700,"8.0M":750,"8.5M":800,"9.5M":900,"12M":1000}}
        ],
        "Consoles & T-Tops": [
            {name: "Fiberglass Console with Windscreen", prices: {"4.1M":"X","5.1M":4500,"5.5M":4800,"6.5M":5500,"7.2M":6200,"8.0M":6800,"8.5M":7500,"9.5M":8500,"12M":10000}},
            {name: "Aluminium T-Top with Hard Top (2.7m)", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":12560,"7.2M":12560,"8.0M":12560,"8.5M":12560,"9.5M":12560,"12M":12560}},
            {name: "Aluminium T-Top with Hard Top (3.8m)", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":"X","7.2M":"X","8.0M":14920,"8.5M":14920,"9.5M":14920,"12M":14920}}
        ],
        "Seating - Leaning Posts": [
            {name: "Aluminium Leaning Post Single", prices: {"4.1M":"X","5.1M":2765,"5.5M":2765,"6.5M":2765,"7.2M":2765,"8.0M":2765,"8.5M":2765,"9.5M":2765,"12M":2765}},
            {name: "Aluminium Leaning Post with Back Rest Single", prices: {"4.1M":"X","5.1M":3310,"5.5M":3310,"6.5M":3310,"7.2M":3310,"8.0M":3310,"8.5M":3310,"9.5M":3310,"12M":3310}},
            {name: "Aluminium Leaning Post Double", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":3400,"7.2M":3400,"8.0M":3400,"8.5M":3400,"9.5M":3400,"12M":3400}}
        ],
        "Seating - Jockey & Grab Rail": [
            {name: "Grab Rail for Front Seat", prices: {"4.1M":450,"5.1M":500,"5.5M":550,"6.5M":650,"7.2M":650,"8.0M":650,"8.5M":650,"9.5M":650,"12M":650}},
            {name: "Single Aluminium Jockey Seat with Grab Rail", prices: {"4.1M":1100,"5.1M":1200,"5.5M":1200,"6.5M":1270,"7.2M":1270,"8.0M":1270,"8.5M":1270,"9.5M":1270,"12M":1270}},
            {name: "Double Aluminium Jockey Seat with Grab Rail", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":2535,"7.2M":2535,"8.0M":2535,"8.5M":2535,"9.5M":2535,"12M":2535}}
        ],
        "Seating - Bench Seats": [
            {name: "Aluminium Bench Seat (2 person)", prices: {"4.1M":1800,"5.1M":1800,"5.5M":1800,"6.5M":1800,"7.2M":1800,"8.0M":1800,"8.5M":1800,"9.5M":1800,"12M":1800}},
            {name: "Aluminium Bench Seat (3 person)", prices: {"4.1M":"X","5.1M":2400,"5.5M":2400,"6.5M":2400,"7.2M":2400,"8.0M":2400,"8.5M":2400,"9.5M":2400,"12M":2400}},
            {name: "Aluminium Bench Seat (4 person)", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":"X","7.2M":3000,"8.0M":3000,"8.5M":3000,"9.5M":3000,"12M":3000}}
        ],
        "Seating - Helm Seats": [
            {name: "Helm Seat with Armrest", prices: {"4.1M":"X","5.1M":2200,"5.5M":2200,"6.5M":2500,"7.2M":2500,"8.0M":2500,"8.5M":2800,"9.5M":2800,"12M":3200}},
            {name: "Suspension Helm Seat", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":5500,"7.2M":5500,"8.0M":5500,"8.5M":5500,"9.5M":5500,"12M":5500}}
        ],
        "Deck & Storage": [
            {name: "Under-Deck Storage Compartment", prices: {"4.1M":800,"5.1M":1000,"5.5M":1100,"6.5M":1300,"7.2M":1500,"8.0M":1700,"8.5M":1900,"9.5M":2200,"12M":2800}},
            {name: "Bow Storage Box with Lid", prices: {"4.1M":600,"5.1M":750,"5.5M":800,"6.5M":950,"7.2M":1050,"8.0M":1150,"8.5M":1300,"9.5M":1500,"12M":1800}},
            {name: "Rod Holders (set of 4)", prices: {"4.1M":400,"5.1M":400,"5.5M":400,"6.5M":400,"7.2M":400,"8.0M":400,"8.5M":400,"9.5M":400,"12M":400}}
        ],
        "Canopy & Shade": [
            {name: "Bimini Top - Standard", prices: {"4.1M":1500,"5.1M":1800,"5.5M":2000,"6.5M":2400,"7.2M":2800,"8.0M":3200,"8.5M":3600,"9.5M":4200,"12M":5000}},
            {name: "Bimini Top - Premium with Side Curtains", prices: {"4.1M":"X","5.1M":2800,"5.5M":3200,"6.5M":3800,"7.2M":4400,"8.0M":5000,"8.5M":5600,"9.5M":6500,"12M":7800}},
            {name: "Full Boat Cover", prices: {"4.1M":1200,"5.1M":1600,"5.5M":1800,"6.5M":2200,"7.2M":2600,"8.0M":3000,"8.5M":3400,"9.5M":4000,"12M":5000}}
        ],
        "Safety & Navigation Equipment": [
            {name: "Stainless Steel Anchor with Chain", prices: {"4.1M":450,"5.1M":550,"5.5M":600,"6.5M":750,"7.2M":850,"8.0M":950,"8.5M":1075,"9.5M":1200,"12M":1500}},
            {name: "Navigation Lights (LED)", prices: {"4.1M":350,"5.1M":400,"5.5M":420,"6.5M":480,"7.2M":520,"8.0M":580,"8.5M":650,"9.5M":750,"12M":900}},
            {name: "Bilge Pump (automatic)", prices: {"4.1M":250,"5.1M":280,"5.5M":300,"6.5M":350,"7.2M":380,"8.0M":420,"8.5M":480,"9.5M":550,"12M":680}},
            {name: "Fire Extinguisher", prices: {"4.1M":120,"5.1M":120,"5.5M":120,"6.5M":150,"7.2M":150,"8.0M":150,"8.5M":150,"9.5M":150,"12M":150}},
            {name: "First Aid Kit", prices: {"4.1M":80,"5.1M":80,"5.5M":80,"6.5M":100,"7.2M":100,"8.0M":100,"8.5M":100,"9.5M":120,"12M":150}},
            {name: "Life Jackets (set of 4)", prices: {"4.1M":320,"5.1M":320,"5.5M":320,"6.5M":400,"7.2M":400,"8.0M":400,"8.5M":480,"9.5M":560,"12M":640}}
        ],
        "Navigation": [
            {name: "GARMIN GPSMAP 923 XSV 9\" MFD with Sonar", prices: {"4.1M":"X","5.1M":2270,"5.5M":2270,"6.5M":2270,"7.2M":2270,"8.0M":2270,"8.5M":2270,"9.5M":2270,"12M":2270}},
            {name: "GARMIN GPSMAP 8410 XSV 10\" MFD with Sonar", prices: {"4.1M":"X","5.1M":"X","5.5M":"X","6.5M":4400,"7.2M":4400,"8.0M":4400,"8.5M":4400,"9.5M":4400,"12M":4400}},
            {name: "Depth Sounder Basic", prices: {"4.1M":380,"5.1M":380,"5.5M":380,"6.5M":420,"7.2M":420,"8.0M":420,"8.5M":450,"9.5M":480,"12M":550}}
        ],
        "Communication": [
            {name: "VHF Radio with Antenna", prices: {"4.1M":450,"5.1M":520,"5.5M":550,"6.5M":650,"7.2M":700,"8.0M":750,"8.5M":800,"9.5M":900,"12M":1050}},
            {name: "Horn (12V Electric)", prices: {"4.1M":120,"5.1M":120,"5.5M":120,"6.5M":150,"7.2M":150,"8.0M":180,"8.5M":200,"9.5M":220,"12M":250}}
        ],
        "Lighting & Electrical": [
            {name: "LED Courtesy Lights (set)", prices: {"4.1M":280,"5.1M":320,"5.5M":350,"6.5M":420,"7.2M":480,"8.0M":550,"8.5M":620,"9.5M":720,"12M":880}},
            {name: "USB Charging Ports (2x)", prices: {"4.1M":100,"5.1M":100,"5.5M":100,"6.5M":100,"7.2M":100,"8.0M":100,"8.5M":100,"9.5M":100,"12M":100}},
            {name: "12V Accessory Outlet", prices: {"4.1M":75,"5.1M":75,"5.5M":75,"6.5M":75,"7.2M":75,"8.0M":75,"8.5M":75,"9.5M":75,"12M":75}},
            {name: "Battery Isolator Switch", prices: {"4.1M":150,"5.1M":150,"5.5M":150,"6.5M":180,"7.2M":180,"8.0M":200,"8.5M":220,"9.5M":250,"12M":300}}
        ],
        "Protection & Guards": [
            {name: "Rub Rail (full length)", prices: {"4.1M":400,"5.1M":550,"5.5M":620,"6.5M":780,"7.2M":900,"8.0M":1020,"8.5M":1150,"9.5M":1350,"12M":1650}},
            {name: "Keel Guard", prices: {"4.1M":280,"5.1M":350,"5.5M":400,"6.5M":500,"7.2M":580,"8.0M":680,"8.5M":780,"9.5M":920,"12M":1150}},
            {name: "Propeller Guard", prices: {"4.1M":800,"5.1M":950,"5.5M":1050,"6.5M":1280,"7.2M":1450,"8.0M":1600,"8.5M":1680,"9.5M":1850,"12M":2100}}
        ]
    },
    inflatable: {
        "Optional Accessories": [
            {name: "Air Floor Upgrade", prices: {"2.8M":350,"3.2M":400,"3.5M":450,"4.2M":520,"4.8M":600,"5.1M":680}},
            {name: "Aluminum Floor", prices: {"2.8M":550,"3.2M":650,"3.5M":750,"4.2M":900,"4.8M":1050,"5.1M":1200}},
            {name: "Oars with Oarlocks", prices: {"2.8M":120,"3.2M":130,"3.5M":140,"4.2M":160,"4.8M":180,"5.1M":200}},
            {name: "Foot Pump", prices: {"2.8M":45,"3.2M":45,"3.5M":45,"4.2M":50,"4.8M":50,"5.1M":55}},
            {name: "Electric Pump 12V", prices: {"2.8M":180,"3.2M":180,"3.5M":180,"4.2M":200,"4.8M":200,"5.1M":220}},
            {name: "Carry Bag", prices: {"2.8M":150,"3.2M":180,"3.5M":200,"4.2M":250,"4.8M":300,"5.1M":350}},
            {name: "Repair Kit", prices: {"2.8M":35,"3.2M":35,"3.5M":35,"4.2M":40,"4.8M":40,"5.1M":45}},
            {name: "Grab Handles (set of 4)", prices: {"2.8M":80,"3.2M":90,"3.5M":100,"4.2M":120,"4.8M":140,"5.1M":160}},
            {name: "Bow Towing Ring", prices: {"2.8M":65,"3.2M":70,"3.5M":75,"4.2M":85,"4.8M":95,"5.1M":105}},
            {name: "Transom Wheels", prices: {"2.8M":"X","3.2M":220,"3.5M":250,"4.2M":300,"4.8M":350,"5.1M":400}},
            {name: "Motor Mount Transom", prices: {"2.8M":180,"3.2M":200,"3.5M":220,"4.2M":260,"4.8M":300,"5.1M":340}},
            {name: "Seat Cushions (set)", prices: {"2.8M":120,"3.2M":140,"3.5M":160,"4.2M":200,"4.8M":240,"5.1M":280}},
            {name: "Sun Canopy", prices: {"2.8M":"X","3.2M":280,"3.5M":320,"4.2M":400,"4.8M":480,"5.1M":560}}
        ]
    }
};

// Category organization with main groups and subgroups
export const CATEGORY_GROUPS = {
    aluminum: [
        {
            name: "Propulsion & Engine",
            icon: "⚙️",
            flat: true,
            categories: ["Propulsion / Engine"]
        },
        {
            name: "Customization",
            icon: "🎨",
            flat: true,
            categories: ["Customization"]
        },
        {
            name: "Consoles, Cabins & T-Tops",
            icon: "🏠",
            flat: true,
            categories: ["Consoles, Cabins & T-Tops"]
        },
        {
            name: "Seating",
            icon: "💺",
            subgroups: [
                {name: "Leaning Posts", categories: ["Seating - Leaning Posts"]},
                {name: "Jockey & Grab Rail", categories: ["Seating - Jockey & Grab Rail"]},
                {name: "Suspension Seats", categories: ["Seating - Suspension"]}
            ]
        },
        {
            name: "Frames & Structure",
            icon: "🔧",
            flat: true,
            categories: ["Frames & Structure"]
        },
        {
            name: "Safety Equipment",
            icon: "🛡️",
            flat: true,
            categories: ["Safety Equipment"]
        },
        {
            name: "Navigation",
            icon: "🧭",
            flat: true,
            categories: ["Navigation"]
        },
        {
            name: "Communication",
            icon: "📡",
            flat: true,
            categories: ["Communication"]
        },
        {
            name: "Lighting & Electrical",
            icon: "💡",
            flat: true,
            categories: ["Lighting & Electrical"]
        },
        {
            name: "Protection & Guards",
            icon: "🛡️",
            flat: true,
            categories: ["Protection & Guards"]
        }
    ],
    fiberglass: [
        {
            name: "Propulsion & Engine",
            icon: "⚙️",
            flat: true,
            categories: ["Propulsion / Engine"]
        },
        {
            name: "Customization",
            icon: "🎨",
            flat: true,
            categories: ["Customization"]
        },
        {
            name: "Consoles & T-Tops",
            icon: "🏠",
            flat: true,
            categories: ["Consoles & T-Tops"]
        },
        {
            name: "Seating",
            icon: "💺",
            subgroups: [
                {name: "Leaning Posts", categories: ["Seating - Leaning Posts"]},
                {name: "Jockey & Grab Rail", categories: ["Seating - Jockey & Grab Rail"]},
                {name: "Bench Seats", categories: ["Seating - Bench Seats"]},
                {name: "Helm Seats", categories: ["Seating - Helm Seats"]}
            ]
        },
        {
            name: "Deck & Storage",
            icon: "📦",
            flat: true,
            categories: ["Deck & Storage"]
        },
        {
            name: "Canopy & Shade",
            icon: "☂️",
            flat: true,
            categories: ["Canopy & Shade"]
        },
        {
            name: "Safety & Navigation Equipment",
            icon: "🛡️",
            flat: true,
            categories: ["Safety & Navigation Equipment"]
        },
        {
            name: "Navigation",
            icon: "🧭",
            flat: true,
            categories: ["Navigation"]
        },
        {
            name: "Communication",
            icon: "📡",
            flat: true,
            categories: ["Communication"]
        },
        {
            name: "Lighting & Electrical",
            icon: "💡",
            flat: true,
            categories: ["Lighting & Electrical"]
        },
        {
            name: "Protection & Guards",
            icon: "🛡️",
            flat: true,
            categories: ["Protection & Guards"]
        }
    ],
    inflatable: [
        {
            name: "ASIS Accessories",
            icon: "🛠️",
            flat: true,
            categories: ["Optional Accessories"]
        }
    ]
};

// Salesman contact information
export const SALESMEN = {
    mario: {
        name: "Mario Hoyek",
        email: "marioh@asisboats.com",
        phone: "+971 50 462 9258"
    },
    soufiane: {
        name: "Soufiane Tangi",
        email: "soufianet@asisboats.com",
        phone: "+971 50 551 2985"
    },
    toji: {
        name: "Toji Paul",
        email: "tojip@asisboats.com",
        phone: "+971 54 791 3337"
    }
};

// Currency rates - AED fixed, EUR fetched from API
export let RATES = {USD: 1, AED: 3.6725, EUR: 0.92}; // AED fixed, EUR fallback
export let ratesLoaded = false;

export function setRates(newRates, loaded) {
    RATES = { ...RATES, ...newRates };
    ratesLoaded = loaded;
}
