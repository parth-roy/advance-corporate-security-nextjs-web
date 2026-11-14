import type { LocalZone } from "../locationFaqHelper";

/**
 * Complete Karnataka KIADB Industrial Corridor, Aerospace Parks, Rail Freight & Estate Map
 * covering key Karnataka industrial hubs, auto belts, tech corridors, and coastal ports
 * to provide authentic hyper-local deployment signals for B2B procurement and AI search.
 */
export const KA_EXTRA_LOCAL_ZONES: Record<string, LocalZone[]> = {
  peenya: [
    { name: "Peenya Industrial Area Stage I to IV", type: "Micro, Small & Medium Manufacturing", distance: "Core Sector" },
    { name: "Jalahalli–Peenya Precision Tooling Belt", type: "CNC Machining & Aerospace Ancillary", distance: "1.5 km" },
    { name: "Tumkur Road (NH-48) Logistics Corridor", type: "National Highway Heavy Freight", distance: "Transit Belt" },
    { name: "Yeshwanthpur Railway Goods & Freight Yard", type: "Rail Freight & Transshipment", distance: "3 km" },
  ],
  devanahalli: [
    { name: "Devanahalli Aerospace & Defence Park (KIADB)", type: "Aerospace, Defence & Precision SEZ", distance: "Core Hub" },
    { name: "IT Hardware Park & Foxconn Manufacturing Belt", type: "Electronics & Mobile Assembly", distance: "2 km" },
    { name: "Kempegowda International Airport (BIAL) Cargo Hub", type: "Air Cargo & Cold Chain Logistics", distance: "4 km" },
    { name: "Bengaluru–Hyderabad NH-44 Freight Axis", type: "Interstate Highway Corridor", distance: "Core Artery" },
  ],
  bidadi: [
    { name: "Bidadi KIADB Industrial Area Phase 1 & 2", type: "Automotive OEM & Heavy Engineering", distance: "Core Sector" },
    { name: "Toyota Ancillary Auto Component Cluster", type: "JIT Automotive Supplier Park", distance: "1.5 km" },
    { name: "Bengaluru–Mysuru 10-Lane Expressway Corridor", type: "Expressway Freight & Logistics", distance: "Transit Belt" },
    { name: "Hejjala & Bidadi Warehousing Strip", type: "3PL Logistics & Distribution", distance: "3 km" },
  ],
  bommasandra: [
    { name: "Bommasandra KIADB Industrial Area Phases I-IV", type: "Automotive, Pharma & Heavy Machinery", distance: "Core MIDC" },
    { name: "Jigani Industrial Area & Granite Processing Belt", type: "Granite, Heavy Engineering & Steel", distance: "3 km" },
    { name: "Attibele Industrial Strip & Interstate Border Hub", type: "Warehousing & Freight Terminal", distance: "4 km" },
    { name: "Hosur Road (NH-44) Heavy Transport Axis", type: "Interstate Freight Corridor", distance: "Highway Zone" },
  ],
  jigani: [
    { name: "Jigani KIADB Industrial Area Phases 1 & 2", type: "Granite, Precision Tooling & Chemicals", distance: "Core Hub" },
    { name: "Anekal–Jigani Heavy Manufacturing Link", type: "Heavy Engineering & Fabrication", distance: "2 km" },
    { name: "Bommasandra–Jigani Link Road Commercial Belt", type: "Commercial Transport & Ancillaries", distance: "1 km" },
    { name: "Bannerghatta Road Industrial Buffer Zone", type: "Light Manufacturing & Warehousing", distance: "3.5 km" },
  ],
  narasapura: [
    { name: "Narasapura KIADB Industrial Area Phase 1 & 2", type: "Automotive & Electronics Mega Cluster", distance: "Core Zone" },
    { name: "Vemgal KIADB Industrial Area (Scania/Aerospace)", type: "Heavy Commercial Vehicles & Aerospace", distance: "5 km" },
    { name: "Bengaluru–Chennai NH-75 Industrial Expressway", type: "Heavy Freight & Port Transit Axis", distance: "Core Artery" },
    { name: "Malur KIADB Logistics Park & Inland Warehousing", type: "Grade-A 3PL Warehousing", distance: "8 km" },
  ],
  tumakuru: [
    { name: "Vasanthanarasapura KIADB Industrial Area Phase I-III", type: "Mega Manufacturing & Auto Hub", distance: "Core Zone" },
    { name: "Japanese Industrial Township (JIT Vasanthanarasapura)", type: "Bilateral FDI & Precision Electronics", distance: "2 km" },
    { name: "Tumkur Machine Tool Park (TMTP)", type: "Heavy Machine Tools & CNC Equipment", distance: "3 km" },
    { name: "Bengaluru–Mumbai NH-48 Heavy Freight Corridor", type: "Interstate Freight Expressway", distance: "Transit Belt" },
  ],
  tumkur: [
    { name: "Vasanthanarasapura KIADB Industrial Area Phase I-III", type: "Mega Manufacturing & Auto Hub", distance: "Core Zone" },
    { name: "Japanese Industrial Township (JIT Vasanthanarasapura)", type: "Bilateral FDI & Precision Electronics", distance: "2 km" },
    { name: "Tumkur Machine Tool Park (TMTP)", type: "Heavy Machine Tools & CNC Equipment", distance: "3 km" },
    { name: "Tumkur Railway Goods Shed & Freight Terminal", type: "Rail Freight & Transshipment", distance: "Central" },
  ],
  mysuru: [
    { name: "Hebbal KIADB Industrial Area & Electronic City", type: "IT/ITES, Electronics & Healthcare", distance: "Core Hub" },
    { name: "Koorgalli KIADB Industrial Area", type: "Heavy Engineering & Machinery", distance: "West Zone" },
    { name: "Nanjangud Industrial Corridor (KIADB)", type: "Pharma, Textiles & Food Processing", distance: "14 km" },
    { name: "Belagola & Hootagalli Manufacturing Belt", type: "Automotive Ancillary & Packaging", distance: "North-West" },
  ],
  mysore: [
    { name: "Hebbal KIADB Industrial Area & Electronic City", type: "IT/ITES, Electronics & Healthcare", distance: "Core Hub" },
    { name: "Koorgalli KIADB Industrial Area", type: "Heavy Engineering & Machinery", distance: "West Zone" },
    { name: "Nanjangud Industrial Corridor (KIADB)", type: "Pharma, Textiles & Food Processing", distance: "14 km" },
    { name: "Mysuru Railway Freight Siding & Goods Shed", type: "Rail Transshipment & Distribution", distance: "Central" },
  ],
  dharwad: [
    { name: "Belur KIADB Industrial Area Phases 1 & 2", type: "Automotive & Heavy Engineering SEZ", distance: "Core Belt" },
    { name: "Tarihal Industrial Estate & Machine Tools", type: "Fabrication & Foundry Ancillary", distance: "Hubballi Link" },
    { name: "BMIC Dharwad Mega Industrial Node", type: "Industrial Corridor Development", distance: "NH-48 Belt" },
    { name: "Dharwad Railway Goods Terminal", type: "Rail Freight & Industrial Raw Materials", distance: "Central" },
  ],
  belagavi: [
    { name: "Machhe & Udyambag Industrial Estate", type: "Precision Foundry & Machine Casting", distance: "Core Sector" },
    { name: "Kanagala KIADB Industrial Area", type: "Automotive Ancillary & Hydraulic Systems", distance: "South Hub" },
    { name: "Belagavi Aerospace Precision Machining Cluster", type: "Aerospace CNC & Defense Forging", distance: "Core Sector" },
    { name: "Pune–Bengaluru NH-48 Industrial Corridor", type: "National Highway Logistics", distance: "Transit Belt" },
  ],
  mangaluru: [
    { name: "Baikampady KIADB Industrial Area", type: "Engineering, Chemicals & Food Processing", distance: "Port Hub" },
    { name: "New Mangalore Port Authority (NMPT) Container Terminal", type: "Maritime Cargo & CFS Warehousing", distance: "Coastal Zone" },
    { name: "MRPL & MSEZ Petrochemical Buffer Corridor", type: "Refinery, Petrochem & Fertilizers", distance: "North Hub" },
    { name: "Panambur Port Railway Goods Yard", type: "Bulk Liquid & Container Rail Siding", distance: "Port Link" },
  ],
  ballari: [
    { name: "Toranagallu JSW Vijayanagar Steel Belt", type: "Integrated Steel Plant & Metallurgical", distance: "Core Hub" },
    { name: "Ballari Industrial Estate & Fabrication Yard", type: "Garments, Steel Forging & Casting", distance: "Central Zone" },
    { name: "Kudatini KIADB Industrial Area", type: "Heavy Steel & Mineral Processing", distance: "8 km" },
    { name: "Ballari Railway Goods Shed & Iron Ore Siding", type: "Heavy Minerals Rail Freight", distance: "Rail Node" },
  ],
};
