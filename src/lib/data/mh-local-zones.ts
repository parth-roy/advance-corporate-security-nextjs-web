import type { LocalZone } from "../locationFaqHelper";

/**
 * Complete Maharashtra MIDC Industrial Corridor, Logistics Belts, Rail Freight & Estate Map
 * covering key Maharashtra industrial hubs, manufacturing corridors, and port zones
 * to provide authentic hyper-local deployment signals for B2B procurement and AI search.
 */
export const MH_EXTRA_LOCAL_ZONES: Record<string, LocalZone[]> = {
  chakan: [
    { name: "Chakan MIDC Phase I & II Auto Hub", type: "Automotive & Heavy Engineering", distance: "Core Sector" },
    { name: "Mahalunge-Ingale Precision Engineering Cluster", type: "Auto Component SEZ", distance: "2 km" },
    { name: "Talegaon–Chakan Industrial Corridor (SH-55)", type: "Electronics & Heavy Machinery", distance: "4 km" },
    { name: "Nanekarwadi & Kuruli Logistics Warehousing Park", type: "3PL & Warehouse Logistics", distance: "3 km" },
  ],
  talegaon: [
    { name: "Talegaon MIDC Industrial Area Phase 1 & 2", type: "Automotive & Electronics Assembly", distance: "Core Zone" },
    { name: "Urse Industrial Corridor & Expressway Interchange", type: "Heavy Engineering & Plastics", distance: "3 km" },
    { name: "Navi Mumbai–Pune Old Highway (NH-48) Strip", type: "Logistics & Freight Terminal", distance: "Transit Belt" },
    { name: "Talegaon Dabhade Central Logistics Hub", type: "Cold Chain & Distribution", distance: "2 km" },
  ],
  ranjangaon: [
    { name: "Ranjangaon Five Star MIDC Industrial Area", type: "MNC Automotive & White Goods", distance: "Core Hub" },
    { name: "Karegaon Industrial Strip & Fabrication Yard", type: "Heavy Engineering Ancillary", distance: "2.5 km" },
    { name: "Pune–Ahmednagar Highway (SH-27) Logistics Belt", type: "Container Freight Corridor", distance: "Highway Zone" },
    { name: "Shirur Industrial & Agro-Processing Cluster", type: "Agro & FMCG Manufacturing", distance: "6 km" },
  ],
  bhiwandi: [
    { name: "Mankoli–Anjurphata Mega Logistics Corridor", type: "Grade-A Fulfillment & E-Commerce", distance: "Primary Belt" },
    { name: "Dapoda & Rahnal Warehousing Hub", type: "3PL Logistics & FMCG Depots", distance: "2 km" },
    { name: "Sonale & Val Industrial Logistics Park", type: "Chemical & Heavy Storage", distance: "4 km" },
    { name: "Mumbai–Nashik Highway (NH-160) Freight Corridor", type: "National Highway Logistics", distance: "Core Artery" },
  ],
  taloja: [
    { name: "Taloja MIDC Phase I & II Chemical & Engineering", type: "Chemicals, Pharma & Heavy Steel", distance: "Core MIDC" },
    { name: "Navde Railway Freight Siding & Logistics Corridor", type: "Rail Freight & Transshipment", distance: "2 km" },
    { name: "Panvel–Sion Expressway Industrial Axis", type: "Commercial Transit & Distribution", distance: "3 km" },
    { name: "Ghot & Koynave Industrial Strip", type: "Manufacturing & Fabrication", distance: "1.5 km" },
  ],
  thane: [
    { name: "Wagle Industrial Estate (MIDC)", type: "IT Parks, Precision & Commercial", distance: "Core Sector" },
    { name: "Ghodbunder Road Logistics & Commercial Corridor", type: "Warehousing & Corporate Offices", distance: "North Thane" },
    { name: "Kolshet Road Commercial & Industrial Hub", type: "Corporate Tech Parks & Light Industry", distance: "Central Zone" },
    { name: "Majiwada & Pokhran Road Commercial District", type: "BFSI & Retail Corporate Hub", distance: "City Center" },
  ],
  "navi-mumbai": [
    { name: "Turbhe & Pawane MIDC Industrial Area", type: "Heavy Manufacturing & Chemical Storage", distance: "TTC Zone" },
    { name: "Mahape Millennium Business Park & Electronic Zone", type: "IT/ITES & Telecom Tech Parks", distance: "TTC Core" },
    { name: "Airoli Mindspace & Gigaplex Tech SEZ", type: "Global Capability Centers (GCC)", distance: "North Node" },
    { name: "JNPT Nhava Sheva Port Container Corridor", type: "Maritime Container Freight & CFS", distance: "12 km" },
  ],
  aurangabad: [
    { name: "AURIC Shendra-Bidkin DMIC Smart City", type: "DMIC Greenfield Industrial Cluster", distance: "Core Corridor" },
    { name: "Waluj MIDC Industrial Area", type: "Automotive Ancillary & White Goods", distance: "West Hub" },
    { name: "Chikalthana MIDC Industrial Area & Airport Strip", type: "Pharma & Precision Engineering", distance: "East Core" },
    { name: "Aurangabad Railway Goods Terminal", type: "Rail Freight & Distribution", distance: "Central" },
  ],
  "chhatrapati-sambhajinagar": [
    { name: "AURIC Shendra-Bidkin DMIC Smart City", type: "DMIC Greenfield Industrial Cluster", distance: "Core Corridor" },
    { name: "Waluj MIDC Industrial Area", type: "Automotive Ancillary & White Goods", distance: "West Hub" },
    { name: "Chikalthana MIDC Industrial Area & Airport Strip", type: "Pharma & Precision Engineering", distance: "East Core" },
    { name: "Chhatrapati Sambhajinagar Rail Cargo Shed", type: "Rail Freight & Distribution", distance: "Central" },
  ],
  nagpur: [
    { name: "Butibori Five Star MIDC Industrial Area", type: "Heavy Engineering, Steel & Textiles", distance: "South Hub" },
    { name: "MIHAN SEZ & Multi-Modal Cargo Hub", type: "Aviation, IT SEZ & Cargo Logistics", distance: "Wardha Road" },
    { name: "Hingna MIDC Industrial Area", type: "Light Engineering, Plastics & Food", distance: "West Zone" },
    { name: "Kalmeshwar Steel & Metal Works Corridor", type: "Galvanized Steel & Cold Rolling", distance: "North Hub" },
  ],
  nashik: [
    { name: "Ambad MIDC Industrial Area", type: "Automotive, Electrical & CNC Tooling", distance: "Core MIDC" },
    { name: "Satpur MIDC Industrial Area", type: "Heavy Engineering & Packaging", distance: "North-West" },
    { name: "Sinnar MIDC & Musalgaon SEZ", type: "Auto Components, Textile & Steel", distance: "18 km" },
    { name: "Mumbai–Agra NH-3 Industrial Belt", type: "Highway Distribution & Logistics", distance: "Transit Belt" },
  ],
  kolhapur: [
    { name: "Kagal Five Star MIDC Industrial Area", type: "Foundry, Textile & Auto Components", distance: "Core Corridor" },
    { name: "Shiroli MIDC Industrial Estate", type: "Castings & Heavy Engineering", distance: "North Hub" },
    { name: "Gokul Shirgaon MIDC Area", type: "Foundry Ancillaries & Precision Tools", distance: "East Hub" },
    { name: "Pune–Bengaluru NH-48 Kolhapur Freight Axis", type: "Interstate Freight Corridor", distance: "Highway Zone" },
  ],
  panvel: [
    { name: "JNPT Container Freight Station (CFS) Belt", type: "Maritime Logistics & Cold Storage", distance: "Port Corridor" },
    { name: "Navi Mumbai International Airport (NMIA) Cargo Zone", type: "Air Cargo & Aerospace Logistics", distance: "South Panvel" },
    { name: "Palaspe Phata Multi-Highway Junction", type: "NH-48 / NH-66 Freight Nexus", distance: "2 km" },
    { name: "Panvel Industrial Estate & Goods Yard", type: "Manufacturing & Distribution", distance: "Central" },
  ],
  tarapur: [
    { name: "Tarapur MIDC Chemical & Specialty Pharma Zone", type: "Chemicals, Bulk Drugs & Steel", distance: "Core MIDC" },
    { name: "Boisar Industrial Estate & Steel Rolling Mills", type: "Steel Fabrication & Textiles", distance: "1.5 km" },
    { name: "Western Railway Boisar Freight Yard", type: "Heavy Rail Cargo Siding", distance: "Station Zone" },
    { name: "Tarapur Atomic & Heavy Power Industrial Perimeter", type: "Critical Infrastructure", distance: "Coastal Belt" },
  ],
  solapur: [
    { name: "Chincholi MIDC Industrial Area", type: "Textile Machinery, Terry Towel & Steel", distance: "Core Zone" },
    { name: "Akkalkot Road Industrial Estate", type: "Textiles, Weaving & Processing", distance: "South Hub" },
    { name: "Solapur Railway Goods Terminal & Dry Port", type: "Rail Freight & Transshipment", distance: "Central" },
    { name: "Pune–Solapur NH-65 Logistics Belt", type: "Highway Transport Corridor", distance: "Highway Zone" },
  ],
  ahmednagar: [
    { name: "Nagapur MIDC Industrial Area", type: "Automotive Ancillary & Machine Tools", distance: "Core MIDC" },
    { name: "Kedgaon Industrial Strip", type: "Light Engineering & Fabrication", distance: "3 km" },
    { name: "Ahmednagar Railway Goods Siding", type: "Agro & Metal Freight", distance: "Central" },
    { name: "Pune–Nagar Highway Logistics Axis", type: "Transit Logistics Belt", distance: "Highway Zone" },
  ],
};
