// src/lib/cities.ts
// ============================================================
// ACS — Master Pan-India Cities & Locations Dataset
// Covers all Indian States, UTs, Census Metros, Industrial Corridors & SEZs
// Total locations: 823
// ============================================================

export interface ACSCity {
  id?: string;
  placeId?: string;
  name: string;
  slug: string;
  state: string;
  stateSlug: string;
  tier: 1 | 2 | 3; // 1 = Metro / Major Hub, 2 = Tier-2 City / Industrial Area, 3 = Emerging Hub
  region?: string; // Operational / economic service region (e.g. 'NCR', 'Eastern India')
  aliases?: string[]; // Canonical aliases / alternative names (e.g. ['Gurgaon'] for Gurugram)
}

export const ACS_CITIES: ACSCity[] = [
  {
    "name": "Port Blair",
    "slug": "port-blair",
    "state": "Andaman",
    "stateSlug": "andaman",
    "tier": 2,
    "id": "in-andaman-port-blair",
    "placeId": "in-andaman-port-blair"
  },
  {
    "name": "Visakhapatnam",
    "slug": "visakhapatnam",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-visakhapatnam",
    "placeId": "in-andhra-pradesh-visakhapatnam",
    "aliases": [
      "Vizag",
      "Waltair"
    ]
  },
  {
    "name": "Vijayawada",
    "slug": "vijayawada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-vijayawada",
    "placeId": "in-andhra-pradesh-vijayawada"
  },
  {
    "name": "Guntur",
    "slug": "guntur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-guntur",
    "placeId": "in-andhra-pradesh-guntur"
  },
  {
    "name": "Nellore",
    "slug": "nellore",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-nellore",
    "placeId": "in-andhra-pradesh-nellore"
  },
  {
    "name": "Kurnool",
    "slug": "kurnool",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-kurnool",
    "placeId": "in-andhra-pradesh-kurnool"
  },
  {
    "name": "Rajahmundry",
    "slug": "rajahmundry",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-rajahmundry",
    "placeId": "in-andhra-pradesh-rajahmundry"
  },
  {
    "name": "Kakinada",
    "slug": "kakinada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-kakinada",
    "placeId": "in-andhra-pradesh-kakinada"
  },
  {
    "name": "Tirupati",
    "slug": "tirupati",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-tirupati",
    "placeId": "in-andhra-pradesh-tirupati"
  },
  {
    "name": "Anantapur",
    "slug": "anantapur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-anantapur",
    "placeId": "in-andhra-pradesh-anantapur"
  },
  {
    "name": "Vizianagaram",
    "slug": "vizianagaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-vizianagaram",
    "placeId": "in-andhra-pradesh-vizianagaram"
  },
  {
    "name": "Ongole",
    "slug": "ongole",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-ongole",
    "placeId": "in-andhra-pradesh-ongole"
  },
  {
    "name": "Eluru",
    "slug": "eluru",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-eluru",
    "placeId": "in-andhra-pradesh-eluru"
  },
  {
    "name": "Nandyal",
    "slug": "nandyal",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-nandyal",
    "placeId": "in-andhra-pradesh-nandyal"
  },
  {
    "name": "Chittoor",
    "slug": "chittoor",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-chittoor",
    "placeId": "in-andhra-pradesh-chittoor"
  },
  {
    "name": "Machilipatnam",
    "slug": "machilipatnam",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-machilipatnam",
    "placeId": "in-andhra-pradesh-machilipatnam"
  },
  {
    "name": "Tenali",
    "slug": "tenali",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-tenali",
    "placeId": "in-andhra-pradesh-tenali"
  },
  {
    "name": "Proddatur",
    "slug": "proddatur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-proddatur",
    "placeId": "in-andhra-pradesh-proddatur"
  },
  {
    "name": "Srikakulam",
    "slug": "srikakulam",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-srikakulam",
    "placeId": "in-andhra-pradesh-srikakulam"
  },
  {
    "name": "Gudivada",
    "slug": "gudivada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-gudivada",
    "placeId": "in-andhra-pradesh-gudivada"
  },
  {
    "name": "Guwahati",
    "slug": "guwahati",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-guwahati",
    "placeId": "in-assam-guwahati",
    "aliases": [
      "Gauhati"
    ]
  },
  {
    "name": "Silchar",
    "slug": "silchar",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-silchar",
    "placeId": "in-assam-silchar"
  },
  {
    "name": "Dibrugarh",
    "slug": "dibrugarh",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-dibrugarh",
    "placeId": "in-assam-dibrugarh"
  },
  {
    "name": "Nagaon",
    "slug": "nagaon",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-nagaon",
    "placeId": "in-assam-nagaon"
  },
  {
    "name": "Patna",
    "slug": "patna",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-patna",
    "placeId": "in-bihar-patna"
  },
  {
    "name": "Gaya",
    "slug": "gaya",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-gaya",
    "placeId": "in-bihar-gaya"
  },
  {
    "name": "Bhagalpur",
    "slug": "bhagalpur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-bhagalpur",
    "placeId": "in-bihar-bhagalpur"
  },
  {
    "name": "Muzaffarpur",
    "slug": "muzaffarpur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-muzaffarpur",
    "placeId": "in-bihar-muzaffarpur"
  },
  {
    "name": "Darbhanga",
    "slug": "darbhanga",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-darbhanga",
    "placeId": "in-bihar-darbhanga"
  },
  {
    "name": "Purnia",
    "slug": "purnia",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-purnia",
    "placeId": "in-bihar-purnia"
  },
  {
    "name": "Munger",
    "slug": "munger",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-munger",
    "placeId": "in-bihar-munger"
  },
  {
    "name": "Chapra",
    "slug": "chapra",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-chapra",
    "placeId": "in-bihar-chapra"
  },
  {
    "name": "Sasaram",
    "slug": "sasaram",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-sasaram",
    "placeId": "in-bihar-sasaram"
  },
  {
    "name": "Bettiah",
    "slug": "bettiah",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-bettiah",
    "placeId": "in-bihar-bettiah"
  },
  {
    "name": "Motihari",
    "slug": "motihari",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-motihari",
    "placeId": "in-bihar-motihari"
  },
  {
    "name": "Chandigarh",
    "slug": "chandigarh",
    "state": "Chandigarh",
    "stateSlug": "chandigarh",
    "tier": 2,
    "id": "in-chandigarh-chandigarh",
    "placeId": "in-chandigarh-chandigarh"
  },
  {
    "name": "Raipur",
    "slug": "raipur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-raipur",
    "placeId": "in-chhattisgarh-raipur"
  },
  {
    "name": "Bhilai Nagar",
    "slug": "bhilai-nagar",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-bhilai-nagar",
    "placeId": "in-chhattisgarh-bhilai-nagar"
  },
  {
    "name": "Korba",
    "slug": "korba",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-korba",
    "placeId": "in-chhattisgarh-korba"
  },
  {
    "name": "Bilaspur",
    "slug": "bilaspur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-bilaspur",
    "placeId": "in-chhattisgarh-bilaspur"
  },
  {
    "name": "Durg",
    "slug": "durg",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-durg",
    "placeId": "in-chhattisgarh-durg"
  },
  {
    "name": "Raigarh",
    "slug": "raigarh",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-raigarh",
    "placeId": "in-chhattisgarh-raigarh"
  },
  {
    "name": "Jagdalpur",
    "slug": "jagdalpur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-jagdalpur",
    "placeId": "in-chhattisgarh-jagdalpur"
  },
  {
    "name": "New Delhi",
    "slug": "new-delhi",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-new-delhi",
    "placeId": "in-delhi-new-delhi",
    "region": "NCR"
  },
  {
    "name": "Delhi",
    "slug": "delhi",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-delhi",
    "placeId": "in-delhi-delhi",
    "region": "NCR"
  },
  {
    "name": "Ahmedabad",
    "slug": "ahmedabad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-ahmedabad",
    "placeId": "in-gujarat-ahmedabad"
  },
  {
    "name": "Surat",
    "slug": "surat",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-surat",
    "placeId": "in-gujarat-surat"
  },
  {
    "name": "Vadodara",
    "slug": "vadodara",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-vadodara",
    "placeId": "in-gujarat-vadodara",
    "aliases": [
      "Baroda"
    ]
  },
  {
    "name": "Rajkot",
    "slug": "rajkot",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-rajkot",
    "placeId": "in-gujarat-rajkot"
  },
  {
    "name": "Bhavnagar",
    "slug": "bhavnagar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-bhavnagar",
    "placeId": "in-gujarat-bhavnagar"
  },
  {
    "name": "Jamnagar",
    "slug": "jamnagar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-jamnagar",
    "placeId": "in-gujarat-jamnagar"
  },
  {
    "name": "Junagadh",
    "slug": "junagadh",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-junagadh",
    "placeId": "in-gujarat-junagadh"
  },
  {
    "name": "Gandhinagar",
    "slug": "gandhinagar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-gandhinagar",
    "placeId": "in-gujarat-gandhinagar"
  },
  {
    "name": "Anand",
    "slug": "anand",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-anand",
    "placeId": "in-gujarat-anand"
  },
  {
    "name": "Bharuch",
    "slug": "bharuch",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-bharuch",
    "placeId": "in-gujarat-bharuch"
  },
  {
    "name": "Ankleshwar",
    "slug": "ankleshwar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-ankleshwar",
    "placeId": "in-gujarat-ankleshwar"
  },
  {
    "name": "Vapi",
    "slug": "vapi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-vapi",
    "placeId": "in-gujarat-vapi"
  },
  {
    "name": "Gandhidham",
    "slug": "gandhidham",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-gandhidham",
    "placeId": "in-gujarat-gandhidham"
  },
  {
    "name": "Morvi",
    "slug": "morvi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-morvi",
    "placeId": "in-gujarat-morvi"
  },
  {
    "name": "Nadiad",
    "slug": "nadiad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-nadiad",
    "placeId": "in-gujarat-nadiad"
  },
  {
    "name": "Navsari",
    "slug": "navsari",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-navsari",
    "placeId": "in-gujarat-navsari"
  },
  {
    "name": "Bhuj",
    "slug": "bhuj",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-bhuj",
    "placeId": "in-gujarat-bhuj"
  },
  {
    "name": "Godhra",
    "slug": "godhra",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-godhra",
    "placeId": "in-gujarat-godhra"
  },
  {
    "name": "Amreli",
    "slug": "amreli",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-amreli",
    "placeId": "in-gujarat-amreli"
  },
  {
    "name": "Gurugram",
    "slug": "gurugram",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "region": "NCR",
    "aliases": [
      "Gurgaon"
    ],
    "id": "in-hr-gurugram",
    "placeId": "in-hr-gurugram"
  },
  {
    "name": "Faridabad",
    "slug": "faridabad",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "region": "NCR",
    "id": "in-hr-faridabad",
    "placeId": "in-hr-faridabad"
  },
  {
    "name": "Rohtak",
    "slug": "rohtak",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-rohtak",
    "placeId": "in-haryana-rohtak",
    "region": "NCR"
  },
  {
    "name": "Hisar",
    "slug": "hisar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-hisar",
    "placeId": "in-haryana-hisar"
  },
  {
    "name": "Panipat",
    "slug": "panipat",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-panipat",
    "placeId": "in-haryana-panipat",
    "region": "NCR"
  },
  {
    "name": "Karnal",
    "slug": "karnal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-karnal",
    "placeId": "in-haryana-karnal"
  },
  {
    "name": "Sonipat",
    "slug": "sonipat",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-sonipat",
    "placeId": "in-haryana-sonipat",
    "region": "NCR"
  },
  {
    "name": "Ambala",
    "slug": "ambala",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-ambala",
    "placeId": "in-haryana-ambala"
  },
  {
    "name": "Panchkula",
    "slug": "panchkula",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-panchkula",
    "placeId": "in-haryana-panchkula"
  },
  {
    "name": "Yamunanagar",
    "slug": "yamunanagar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-yamunanagar",
    "placeId": "in-haryana-yamunanagar"
  },
  {
    "name": "Bhiwani",
    "slug": "bhiwani",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-bhiwani",
    "placeId": "in-haryana-bhiwani"
  },
  {
    "name": "Jind",
    "slug": "jind",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-jind",
    "placeId": "in-haryana-jind"
  },
  {
    "name": "Rewari",
    "slug": "rewari",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-rewari",
    "placeId": "in-haryana-rewari",
    "region": "NCR"
  },
  {
    "name": "Shimla",
    "slug": "shimla",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2,
    "id": "in-himachal-pradesh-shimla",
    "placeId": "in-himachal-pradesh-shimla",
    "aliases": [
      "Simla"
    ]
  },
  {
    "name": "Srinagar",
    "slug": "srinagar",
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "tier": 2,
    "id": "in-jammu-and-kashmir-srinagar",
    "placeId": "in-jammu-and-kashmir-srinagar"
  },
  {
    "name": "Jammu",
    "slug": "jammu",
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "tier": 2,
    "id": "in-jammu-and-kashmir-jammu",
    "placeId": "in-jammu-and-kashmir-jammu"
  },
  {
    "name": "Ranchi",
    "slug": "ranchi",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-ranchi",
    "placeId": "in-jharkhand-ranchi"
  },
  {
    "name": "Jamshedpur",
    "slug": "jamshedpur",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-jamshedpur",
    "placeId": "in-jharkhand-jamshedpur"
  },
  {
    "name": "Bokaro Steel City",
    "slug": "bokaro-steel-city",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-bokaro-steel-city",
    "placeId": "in-jharkhand-bokaro-steel-city"
  },
  {
    "name": "Hazaribag",
    "slug": "hazaribag",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-hazaribag",
    "placeId": "in-jharkhand-hazaribag"
  },
  {
    "name": "Deoghar",
    "slug": "deoghar",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-deoghar",
    "placeId": "in-jharkhand-deoghar"
  },
  {
    "name": "Bengaluru",
    "slug": "bengaluru",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bengaluru",
    "placeId": "in-karnataka-bengaluru",
    "aliases": [
      "Bangalore"
    ]
  },
  {
    "name": "Mysore",
    "slug": "mysore",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-mysore",
    "placeId": "in-karnataka-mysore"
  },
  {
    "name": "Hubli",
    "slug": "hubli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-hubli",
    "placeId": "in-karnataka-hubli"
  },
  {
    "name": "Mangalore",
    "slug": "mangalore",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-mangalore",
    "placeId": "in-karnataka-mangalore"
  },
  {
    "name": "Belgaum",
    "slug": "belgaum",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-belgaum",
    "placeId": "in-karnataka-belgaum"
  },
  {
    "name": "Davangere",
    "slug": "davangere",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-davangere",
    "placeId": "in-karnataka-davangere"
  },
  {
    "name": "Bellary",
    "slug": "bellary",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bellary",
    "placeId": "in-karnataka-bellary"
  },
  {
    "name": "Bijapur",
    "slug": "bijapur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bijapur",
    "placeId": "in-karnataka-bijapur"
  },
  {
    "name": "Shimoga",
    "slug": "shimoga",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-shimoga",
    "placeId": "in-karnataka-shimoga"
  },
  {
    "name": "Tumkur",
    "slug": "tumkur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-tumkur",
    "placeId": "in-karnataka-tumkur"
  },
  {
    "name": "Hospet",
    "slug": "hospet",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-hospet",
    "placeId": "in-karnataka-hospet"
  },
  {
    "name": "Udupi",
    "slug": "udupi",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-udupi",
    "placeId": "in-karnataka-udupi"
  },
  {
    "name": "Kolar",
    "slug": "kolar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-kolar",
    "placeId": "in-karnataka-kolar"
  },
  {
    "name": "Mandya",
    "slug": "mandya",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-mandya",
    "placeId": "in-karnataka-mandya"
  },
  {
    "name": "Hassan",
    "slug": "hassan",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-hassan",
    "placeId": "in-karnataka-hassan"
  },
  {
    "name": "Kochi",
    "slug": "kochi",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-kochi",
    "placeId": "in-kerala-kochi",
    "aliases": [
      "Cochin"
    ]
  },
  {
    "name": "Thiruvananthapuram",
    "slug": "thiruvananthapuram",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-thiruvananthapuram",
    "placeId": "in-kerala-thiruvananthapuram",
    "aliases": [
      "Trivandrum"
    ]
  },
  {
    "name": "Kozhikode",
    "slug": "kozhikode",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-kozhikode",
    "placeId": "in-kerala-kozhikode"
  },
  {
    "name": "Kollam",
    "slug": "kollam",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-kollam",
    "placeId": "in-kerala-kollam"
  },
  {
    "name": "Thrissur",
    "slug": "thrissur",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-thrissur",
    "placeId": "in-kerala-thrissur"
  },
  {
    "name": "Alappuzha",
    "slug": "alappuzha",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-alappuzha",
    "placeId": "in-kerala-alappuzha"
  },
  {
    "name": "Palakkad",
    "slug": "palakkad",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-palakkad",
    "placeId": "in-kerala-palakkad"
  },
  {
    "name": "Indore",
    "slug": "indore",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-indore",
    "placeId": "in-madhya-pradesh-indore"
  },
  {
    "name": "Bhopal",
    "slug": "bhopal",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-bhopal",
    "placeId": "in-madhya-pradesh-bhopal"
  },
  {
    "name": "Gwalior",
    "slug": "gwalior",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-gwalior",
    "placeId": "in-madhya-pradesh-gwalior"
  },
  {
    "name": "Jabalpur",
    "slug": "jabalpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-jabalpur",
    "placeId": "in-madhya-pradesh-jabalpur"
  },
  {
    "name": "Ujjain",
    "slug": "ujjain",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-ujjain",
    "placeId": "in-madhya-pradesh-ujjain"
  },
  {
    "name": "Dewas",
    "slug": "dewas",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-dewas",
    "placeId": "in-madhya-pradesh-dewas"
  },
  {
    "name": "Satna",
    "slug": "satna",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-satna",
    "placeId": "in-madhya-pradesh-satna"
  },
  {
    "name": "Ratlam",
    "slug": "ratlam",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-ratlam",
    "placeId": "in-madhya-pradesh-ratlam"
  },
  {
    "name": "Sagar",
    "slug": "sagar",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-sagar",
    "placeId": "in-madhya-pradesh-sagar"
  },
  {
    "name": "Rewa",
    "slug": "rewa",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-rewa",
    "placeId": "in-madhya-pradesh-rewa"
  },
  {
    "name": "Singrauli",
    "slug": "singrauli",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-singrauli",
    "placeId": "in-madhya-pradesh-singrauli"
  },
  {
    "name": "Morena",
    "slug": "morena",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-morena",
    "placeId": "in-madhya-pradesh-morena"
  },
  {
    "name": "Guna",
    "slug": "guna",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-guna",
    "placeId": "in-madhya-pradesh-guna"
  },
  {
    "name": "Shivpuri",
    "slug": "shivpuri",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-shivpuri",
    "placeId": "in-madhya-pradesh-shivpuri"
  },
  {
    "name": "Chhindwara",
    "slug": "chhindwara",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-chhindwara",
    "placeId": "in-madhya-pradesh-chhindwara"
  },
  {
    "name": "Mumbai",
    "slug": "mumbai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-mumbai",
    "placeId": "in-maharashtra-mumbai",
    "aliases": [
      "Bombay"
    ]
  },
  {
    "name": "Pune",
    "slug": "pune",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-pune",
    "placeId": "in-maharashtra-pune",
    "aliases": [
      "Poona"
    ]
  },
  {
    "name": "Nagpur",
    "slug": "nagpur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-nagpur",
    "placeId": "in-maharashtra-nagpur"
  },
  {
    "name": "Nashik",
    "slug": "nashik",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-nashik",
    "placeId": "in-maharashtra-nashik"
  },
  {
    "name": "Thane",
    "slug": "thane",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-thane",
    "placeId": "in-maharashtra-thane"
  },
  {
    "name": "Navi Mumbai",
    "slug": "navi-mumbai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-navi-mumbai",
    "placeId": "in-maharashtra-navi-mumbai"
  },
  {
    "name": "Aurangabad",
    "slug": "aurangabad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-aurangabad",
    "placeId": "in-maharashtra-aurangabad"
  },
  {
    "name": "Pimpri-Chinchwad",
    "slug": "pimpri-chinchwad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-pimpri-chinchwad",
    "placeId": "in-maharashtra-pimpri-chinchwad"
  },
  {
    "name": "Solapur",
    "slug": "solapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-solapur",
    "placeId": "in-maharashtra-solapur"
  },
  {
    "name": "Amravati",
    "slug": "amravati",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-amravati",
    "placeId": "in-maharashtra-amravati"
  },
  {
    "name": "Kolhapur",
    "slug": "kolhapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-kolhapur",
    "placeId": "in-maharashtra-kolhapur"
  },
  {
    "name": "Ulhasnagar",
    "slug": "ulhasnagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ulhasnagar",
    "placeId": "in-maharashtra-ulhasnagar"
  },
  {
    "name": "Bhiwandi",
    "slug": "bhiwandi",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-bhiwandi",
    "placeId": "in-maharashtra-bhiwandi"
  },
  {
    "name": "Jalgaon",
    "slug": "jalgaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-jalgaon",
    "placeId": "in-maharashtra-jalgaon"
  },
  {
    "name": "Akola",
    "slug": "akola",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-akola",
    "placeId": "in-maharashtra-akola"
  },
  {
    "name": "Ahmednagar",
    "slug": "ahmednagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ahmednagar",
    "placeId": "in-maharashtra-ahmednagar"
  },
  {
    "name": "Sangli",
    "slug": "sangli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-sangli",
    "placeId": "in-maharashtra-sangli"
  },
  {
    "name": "Latur",
    "slug": "latur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-latur",
    "placeId": "in-maharashtra-latur"
  },
  {
    "name": "Dhule",
    "slug": "dhule",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-dhule",
    "placeId": "in-maharashtra-dhule"
  },
  {
    "name": "Chandrapur",
    "slug": "chandrapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-chandrapur",
    "placeId": "in-maharashtra-chandrapur"
  },
  {
    "name": "Nanded",
    "slug": "nanded",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-nanded",
    "placeId": "in-maharashtra-nanded"
  },
  {
    "name": "Satara",
    "slug": "satara",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-satara",
    "placeId": "in-maharashtra-satara"
  },
  {
    "name": "Wardha",
    "slug": "wardha",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-wardha",
    "placeId": "in-maharashtra-wardha"
  },
  {
    "name": "Imphal",
    "slug": "imphal",
    "state": "Manipur",
    "stateSlug": "manipur",
    "tier": 2,
    "id": "in-manipur-imphal",
    "placeId": "in-manipur-imphal"
  },
  {
    "name": "Shillong",
    "slug": "shillong",
    "state": "Meghalaya",
    "stateSlug": "meghalaya",
    "tier": 2,
    "id": "in-meghalaya-shillong",
    "placeId": "in-meghalaya-shillong"
  },
  {
    "name": "Bhubaneswar",
    "slug": "bhubaneswar",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-bhubaneswar",
    "placeId": "in-odisha-bhubaneswar"
  },
  {
    "name": "Cuttack",
    "slug": "cuttack",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-cuttack",
    "placeId": "in-odisha-cuttack"
  },
  {
    "name": "Rourkela",
    "slug": "rourkela",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-rourkela",
    "placeId": "in-odisha-rourkela"
  },
  {
    "name": "Brahmapur",
    "slug": "brahmapur",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-brahmapur",
    "placeId": "in-odisha-brahmapur"
  },
  {
    "name": "Sambalpur",
    "slug": "sambalpur",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-sambalpur",
    "placeId": "in-odisha-sambalpur"
  },
  {
    "name": "Puri",
    "slug": "puri",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-puri",
    "placeId": "in-odisha-puri"
  },
  {
    "name": "Balasore",
    "slug": "balasore",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-balasore",
    "placeId": "in-odisha-balasore"
  },
  {
    "name": "Baripada",
    "slug": "baripada",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-baripada",
    "placeId": "in-odisha-baripada"
  },
  {
    "name": "Bhadrak",
    "slug": "bhadrak",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-bhadrak",
    "placeId": "in-odisha-bhadrak"
  },
  {
    "name": "Jharsuguda",
    "slug": "jharsuguda",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-jharsuguda",
    "placeId": "in-odisha-jharsuguda"
  },
  {
    "name": "Puducherry",
    "slug": "puducherry",
    "state": "Puducherry",
    "stateSlug": "puducherry",
    "tier": 2,
    "id": "in-puducherry-puducherry",
    "placeId": "in-puducherry-puducherry",
    "aliases": [
      "Pondicherry"
    ]
  },
  {
    "name": "Ludhiana",
    "slug": "ludhiana",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-ludhiana",
    "placeId": "in-punjab-ludhiana"
  },
  {
    "name": "Amritsar",
    "slug": "amritsar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-amritsar",
    "placeId": "in-punjab-amritsar"
  },
  {
    "name": "Jalandhar",
    "slug": "jalandhar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-jalandhar",
    "placeId": "in-punjab-jalandhar"
  },
  {
    "name": "Patiala",
    "slug": "patiala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-patiala",
    "placeId": "in-punjab-patiala"
  },
  {
    "name": "Bathinda",
    "slug": "bathinda",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-bathinda",
    "placeId": "in-punjab-bathinda"
  },
  {
    "name": "Mohali",
    "slug": "mohali",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-mohali",
    "placeId": "in-punjab-mohali"
  },
  {
    "name": "Pathankot",
    "slug": "pathankot",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-pathankot",
    "placeId": "in-punjab-pathankot"
  },
  {
    "name": "Hoshiarpur",
    "slug": "hoshiarpur",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-hoshiarpur",
    "placeId": "in-punjab-hoshiarpur"
  },
  {
    "name": "Moga",
    "slug": "moga",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-moga",
    "placeId": "in-punjab-moga"
  },
  {
    "name": "Firozpur",
    "slug": "firozpur",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-firozpur",
    "placeId": "in-punjab-firozpur"
  },
  {
    "name": "Kapurthala",
    "slug": "kapurthala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-kapurthala",
    "placeId": "in-punjab-kapurthala"
  },
  {
    "name": "Jaipur",
    "slug": "jaipur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-jaipur",
    "placeId": "in-rajasthan-jaipur"
  },
  {
    "name": "Jodhpur",
    "slug": "jodhpur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-jodhpur",
    "placeId": "in-rajasthan-jodhpur"
  },
  {
    "name": "Kota",
    "slug": "kota",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-kota",
    "placeId": "in-rajasthan-kota"
  },
  {
    "name": "Bikaner",
    "slug": "bikaner",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-bikaner",
    "placeId": "in-rajasthan-bikaner"
  },
  {
    "name": "Ajmer",
    "slug": "ajmer",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-ajmer",
    "placeId": "in-rajasthan-ajmer"
  },
  {
    "name": "Udaipur",
    "slug": "udaipur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-udaipur",
    "placeId": "in-rajasthan-udaipur"
  },
  {
    "name": "Bhilwara",
    "slug": "bhilwara",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-bhilwara",
    "placeId": "in-rajasthan-bhilwara"
  },
  {
    "name": "Alwar",
    "slug": "alwar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-alwar",
    "placeId": "in-rajasthan-alwar"
  },
  {
    "name": "Bharatpur",
    "slug": "bharatpur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-bharatpur",
    "placeId": "in-rajasthan-bharatpur"
  },
  {
    "name": "Neemrana",
    "slug": "neemrana",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-neemrana",
    "placeId": "in-rajasthan-neemrana"
  },
  {
    "name": "Bhiwadi",
    "slug": "bhiwadi",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-bhiwadi",
    "placeId": "in-rajasthan-bhiwadi",
    "region": "NCR"
  },
  {
    "name": "Sikar",
    "slug": "sikar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-sikar",
    "placeId": "in-rajasthan-sikar"
  },
  {
    "name": "Pali",
    "slug": "pali",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-pali",
    "placeId": "in-rajasthan-pali"
  },
  {
    "name": "Ganganagar",
    "slug": "ganganagar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-ganganagar",
    "placeId": "in-rajasthan-ganganagar"
  },
  {
    "name": "Chittorgarh",
    "slug": "chittorgarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-chittorgarh",
    "placeId": "in-rajasthan-chittorgarh"
  },
  {
    "name": "Nagaur",
    "slug": "nagaur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-nagaur",
    "placeId": "in-rajasthan-nagaur"
  },
  {
    "name": "Gangtok",
    "slug": "gangtok",
    "state": "Sikkim",
    "stateSlug": "sikkim",
    "tier": 2,
    "id": "in-sikkim-gangtok",
    "placeId": "in-sikkim-gangtok"
  },
  {
    "name": "Chennai",
    "slug": "chennai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-chennai",
    "placeId": "in-tamil-nadu-chennai",
    "aliases": [
      "Madras"
    ]
  },
  {
    "name": "Coimbatore",
    "slug": "coimbatore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-coimbatore",
    "placeId": "in-tamil-nadu-coimbatore"
  },
  {
    "name": "Madurai",
    "slug": "madurai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-madurai",
    "placeId": "in-tamil-nadu-madurai"
  },
  {
    "name": "Tiruchirappalli",
    "slug": "tiruchirappalli",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-tiruchirappalli",
    "placeId": "in-tamil-nadu-tiruchirappalli"
  },
  {
    "name": "Salem",
    "slug": "salem",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-salem",
    "placeId": "in-tamil-nadu-salem"
  },
  {
    "name": "Tirunelveli",
    "slug": "tirunelveli",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-tirunelveli",
    "placeId": "in-tamil-nadu-tirunelveli"
  },
  {
    "name": "Tiruppur",
    "slug": "tiruppur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-tiruppur",
    "placeId": "in-tamil-nadu-tiruppur"
  },
  {
    "name": "Vellore",
    "slug": "vellore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-vellore",
    "placeId": "in-tamil-nadu-vellore"
  },
  {
    "name": "Erode",
    "slug": "erode",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-erode",
    "placeId": "in-tamil-nadu-erode"
  },
  {
    "name": "Thoothukudi",
    "slug": "thoothukudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-thoothukudi",
    "placeId": "in-tamil-nadu-thoothukudi"
  },
  {
    "name": "Thanjavur",
    "slug": "thanjavur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-thanjavur",
    "placeId": "in-tamil-nadu-thanjavur"
  },
  {
    "name": "Kancheepuram",
    "slug": "kancheepuram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-kancheepuram",
    "placeId": "in-tamil-nadu-kancheepuram"
  },
  {
    "name": "Hosur",
    "slug": "hosur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-hosur",
    "placeId": "in-tamil-nadu-hosur"
  },
  {
    "name": "Oragadam",
    "slug": "oragadam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-oragadam",
    "placeId": "in-tamil-nadu-oragadam"
  },
  {
    "name": "Sriperumbudur",
    "slug": "sriperumbudur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-sriperumbudur",
    "placeId": "in-tamil-nadu-sriperumbudur"
  },
  {
    "name": "Dindigul",
    "slug": "dindigul",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-dindigul",
    "placeId": "in-tamil-nadu-dindigul"
  },
  {
    "name": "Cuddalore",
    "slug": "cuddalore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-cuddalore",
    "placeId": "in-tamil-nadu-cuddalore"
  },
  {
    "name": "Nagercoil",
    "slug": "nagercoil",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-nagercoil",
    "placeId": "in-tamil-nadu-nagercoil"
  },
  {
    "name": "Tiruvannamalai",
    "slug": "tiruvannamalai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-tiruvannamalai",
    "placeId": "in-tamil-nadu-tiruvannamalai"
  },
  {
    "name": "Hyderabad",
    "slug": "hyderabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-hyderabad",
    "placeId": "in-telangana-hyderabad"
  },
  {
    "name": "Secunderabad",
    "slug": "secunderabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-secunderabad",
    "placeId": "in-telangana-secunderabad"
  },
  {
    "name": "Warangal",
    "slug": "warangal",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-warangal",
    "placeId": "in-telangana-warangal"
  },
  {
    "name": "Nizamabad",
    "slug": "nizamabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-nizamabad",
    "placeId": "in-telangana-nizamabad"
  },
  {
    "name": "Karimnagar",
    "slug": "karimnagar",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-karimnagar",
    "placeId": "in-telangana-karimnagar"
  },
  {
    "name": "Khammam",
    "slug": "khammam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-khammam",
    "placeId": "in-telangana-khammam"
  },
  {
    "name": "Ramagundam",
    "slug": "ramagundam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-ramagundam",
    "placeId": "in-telangana-ramagundam"
  },
  {
    "name": "Agartala",
    "slug": "agartala",
    "state": "Tripura",
    "stateSlug": "tripura",
    "tier": 2,
    "id": "in-tripura-agartala",
    "placeId": "in-tripura-agartala"
  },
  {
    "name": "Lucknow",
    "slug": "lucknow",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-lucknow",
    "placeId": "in-uttar-pradesh-lucknow"
  },
  {
    "name": "Kanpur",
    "slug": "kanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-kanpur",
    "placeId": "in-uttar-pradesh-kanpur"
  },
  {
    "name": "Agra",
    "slug": "agra",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-agra",
    "placeId": "in-uttar-pradesh-agra"
  },
  {
    "name": "Varanasi",
    "slug": "varanasi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-varanasi",
    "placeId": "in-uttar-pradesh-varanasi",
    "aliases": [
      "Banaras",
      "Benares"
    ]
  },
  {
    "name": "Allahabad",
    "slug": "allahabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-allahabad",
    "placeId": "in-uttar-pradesh-allahabad"
  },
  {
    "name": "Meerut",
    "slug": "meerut",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-meerut",
    "placeId": "in-uttar-pradesh-meerut",
    "region": "NCR"
  },
  {
    "name": "Noida",
    "slug": "noida",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "region": "NCR",
    "id": "in-up-noida",
    "placeId": "in-up-noida"
  },
  {
    "name": "Greater Noida",
    "slug": "greater-noida",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "region": "NCR",
    "id": "in-up-greater-noida",
    "placeId": "in-up-greater-noida"
  },
  {
    "name": "Noida Extension",
    "slug": "noida-extension",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "region": "NCR",
    "aliases": [
      "Greater Noida West"
    ],
    "id": "in-up-noida-extension",
    "placeId": "in-up-noida-extension"
  },
  {
    "name": "Ghaziabad",
    "slug": "ghaziabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "region": "NCR",
    "id": "in-up-ghaziabad",
    "placeId": "in-up-ghaziabad"
  },
  {
    "name": "Bareilly",
    "slug": "bareilly",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-bareilly",
    "placeId": "in-uttar-pradesh-bareilly"
  },
  {
    "name": "Moradabad",
    "slug": "moradabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-moradabad",
    "placeId": "in-uttar-pradesh-moradabad"
  },
  {
    "name": "Aligarh",
    "slug": "aligarh",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-aligarh",
    "placeId": "in-uttar-pradesh-aligarh"
  },
  {
    "name": "Saharanpur",
    "slug": "saharanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-saharanpur",
    "placeId": "in-uttar-pradesh-saharanpur"
  },
  {
    "name": "Gorakhpur",
    "slug": "gorakhpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-gorakhpur",
    "placeId": "in-uttar-pradesh-gorakhpur"
  },
  {
    "name": "Firozabad",
    "slug": "firozabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-firozabad",
    "placeId": "in-uttar-pradesh-firozabad"
  },
  {
    "name": "Jhansi",
    "slug": "jhansi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-jhansi",
    "placeId": "in-uttar-pradesh-jhansi"
  },
  {
    "name": "Muzaffarnagar",
    "slug": "muzaffarnagar",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-muzaffarnagar",
    "placeId": "in-uttar-pradesh-muzaffarnagar"
  },
  {
    "name": "Mathura",
    "slug": "mathura",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-mathura",
    "placeId": "in-uttar-pradesh-mathura"
  },
  {
    "name": "Shahjahanpur",
    "slug": "shahjahanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-shahjahanpur",
    "placeId": "in-uttar-pradesh-shahjahanpur"
  },
  {
    "name": "Rampur",
    "slug": "rampur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-rampur",
    "placeId": "in-uttar-pradesh-rampur"
  },
  {
    "name": "Hapur",
    "slug": "hapur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-hapur",
    "placeId": "in-uttar-pradesh-hapur",
    "region": "NCR"
  },
  {
    "name": "Etawah",
    "slug": "etawah",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-etawah",
    "placeId": "in-uttar-pradesh-etawah"
  },
  {
    "name": "Bulandshahr",
    "slug": "bulandshahr",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-bulandshahr",
    "placeId": "in-uttar-pradesh-bulandshahr",
    "region": "NCR"
  },
  {
    "name": "Faizabad",
    "slug": "faizabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-faizabad",
    "placeId": "in-uttar-pradesh-faizabad"
  },
  {
    "name": "Sitapur",
    "slug": "sitapur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-sitapur",
    "placeId": "in-uttar-pradesh-sitapur"
  },
  {
    "name": "Unnao",
    "slug": "unnao",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-unnao",
    "placeId": "in-uttar-pradesh-unnao"
  },
  {
    "name": "Jaunpur",
    "slug": "jaunpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-jaunpur",
    "placeId": "in-uttar-pradesh-jaunpur"
  },
  {
    "name": "Azamgarh",
    "slug": "azamgarh",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-azamgarh",
    "placeId": "in-uttar-pradesh-azamgarh"
  },
  {
    "name": "Gonda",
    "slug": "gonda",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-gonda",
    "placeId": "in-uttar-pradesh-gonda"
  },
  {
    "name": "Sultanpur",
    "slug": "sultanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-sultanpur",
    "placeId": "in-uttar-pradesh-sultanpur"
  },
  {
    "name": "Dehradun",
    "slug": "dehradun",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-dehradun",
    "placeId": "in-uttarakhand-dehradun"
  },
  {
    "name": "Haridwar",
    "slug": "haridwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-haridwar",
    "placeId": "in-uttarakhand-haridwar"
  },
  {
    "name": "Haldwani",
    "slug": "haldwani",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-haldwani",
    "placeId": "in-uttarakhand-haldwani"
  },
  {
    "name": "Rudrapur",
    "slug": "rudrapur",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-rudrapur",
    "placeId": "in-uttarakhand-rudrapur"
  },
  {
    "name": "Roorkee",
    "slug": "roorkee",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-roorkee",
    "placeId": "in-uttarakhand-roorkee"
  },
  {
    "name": "Kolkata",
    "slug": "kolkata",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kolkata",
    "placeId": "in-west-bengal-kolkata",
    "aliases": [
      "Calcutta"
    ]
  },
  {
    "name": "Howrah",
    "slug": "howrah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-howrah",
    "placeId": "in-west-bengal-howrah"
  },
  {
    "name": "Asansol",
    "slug": "asansol",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-asansol",
    "placeId": "in-west-bengal-asansol"
  },
  {
    "name": "Durgapur",
    "slug": "durgapur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-durgapur",
    "placeId": "in-west-bengal-durgapur"
  },
  {
    "name": "Siliguri",
    "slug": "siliguri",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-siliguri",
    "placeId": "in-west-bengal-siliguri"
  },
  {
    "name": "Haldia",
    "slug": "haldia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-haldia",
    "placeId": "in-west-bengal-haldia"
  },
  {
    "name": "Barrackpore",
    "slug": "barrackpore",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-barrackpore",
    "placeId": "in-west-bengal-barrackpore",
    "aliases": [
      "Barakpur",
      "Barrackpur II",
      "North 24 Parganas"
    ]
  },
  {
    "name": "Kharagpur",
    "slug": "kharagpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kharagpur",
    "placeId": "in-west-bengal-kharagpur"
  },
  {
    "name": "Barasat",
    "slug": "barasat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-barasat",
    "placeId": "in-west-bengal-barasat"
  },
  {
    "name": "Darjeeling",
    "slug": "darjeeling",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-darjeeling",
    "placeId": "in-west-bengal-darjeeling"
  },
  {
    "name": "Jalpaiguri",
    "slug": "jalpaiguri",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-jalpaiguri",
    "placeId": "in-west-bengal-jalpaiguri"
  },
  {
    "name": "Kalyani",
    "slug": "kalyani",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kalyani",
    "placeId": "in-west-bengal-kalyani"
  },
  {
    "name": "Medinipur",
    "slug": "medinipur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-medinipur",
    "placeId": "in-west-bengal-medinipur"
  },
  {
    "name": "Malda",
    "slug": "malda",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-malda",
    "placeId": "in-west-bengal-malda"
  },
  {
    "name": "Baharampur",
    "slug": "baharampur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-baharampur",
    "placeId": "in-west-bengal-baharampur"
  },
  {
    "name": "Raiganj",
    "slug": "raiganj",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-raiganj",
    "placeId": "in-west-bengal-raiganj"
  },
  {
    "name": "Serampore",
    "slug": "serampore",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-serampore",
    "placeId": "in-west-bengal-serampore"
  },
  {
    "name": "Chandannagar",
    "slug": "chandannagar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-chandannagar",
    "placeId": "in-west-bengal-chandannagar"
  },
  {
    "name": "Santipur",
    "slug": "santipur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-santipur",
    "placeId": "in-west-bengal-santipur"
  },
  {
    "name": "Habra",
    "slug": "habra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-habra",
    "placeId": "in-west-bengal-habra"
  },
  {
    "name": "Bhatpara",
    "slug": "bhatpara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bhatpara",
    "placeId": "in-west-bengal-bhatpara"
  },
  {
    "name": "Panihati",
    "slug": "panihati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-panihati",
    "placeId": "in-west-bengal-panihati"
  },
  {
    "name": "Kamarhati",
    "slug": "kamarhati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kamarhati",
    "placeId": "in-west-bengal-kamarhati"
  },
  {
    "name": "Naihati",
    "slug": "naihati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-naihati",
    "placeId": "in-west-bengal-naihati"
  },
  {
    "name": "Bankura",
    "slug": "bankura",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bankura",
    "placeId": "in-west-bengal-bankura"
  },
  {
    "name": "Puruliya",
    "slug": "puruliya",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-puruliya",
    "placeId": "in-west-bengal-puruliya"
  },
  {
    "name": "Raniganj",
    "slug": "raniganj",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-raniganj",
    "placeId": "in-west-bengal-raniganj"
  },
  {
    "name": "Balurghat",
    "slug": "balurghat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-balurghat",
    "placeId": "in-west-bengal-balurghat"
  },
  {
    "name": "Cooch Behar",
    "slug": "cooch-behar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-cooch-behar",
    "placeId": "in-west-bengal-cooch-behar"
  },
  {
    "name": "Sri City",
    "slug": "sri-city",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-sri-city",
    "placeId": "in-andhra-pradesh-sri-city"
  },
  {
    "name": "Kadapa",
    "slug": "kadapa",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-kadapa",
    "placeId": "in-andhra-pradesh-kadapa"
  },
  {
    "name": "Adoni",
    "slug": "adoni",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-adoni",
    "placeId": "in-andhra-pradesh-adoni"
  },
  {
    "name": "Mahbubnagar",
    "slug": "mahbubnagar",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-mahbubnagar",
    "placeId": "in-andhra-pradesh-mahbubnagar"
  },
  {
    "name": "Hindupur",
    "slug": "hindupur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-hindupur",
    "placeId": "in-andhra-pradesh-hindupur"
  },
  {
    "name": "Bhimavaram",
    "slug": "bhimavaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-bhimavaram",
    "placeId": "in-andhra-pradesh-bhimavaram"
  },
  {
    "name": "Madanapalle",
    "slug": "madanapalle",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-madanapalle",
    "placeId": "in-andhra-pradesh-madanapalle"
  },
  {
    "name": "Nalgonda",
    "slug": "nalgonda",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-nalgonda",
    "placeId": "in-andhra-pradesh-nalgonda"
  },
  {
    "name": "Guntakal",
    "slug": "guntakal",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-guntakal",
    "placeId": "in-andhra-pradesh-guntakal"
  },
  {
    "name": "Dharmavaram",
    "slug": "dharmavaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-dharmavaram",
    "placeId": "in-andhra-pradesh-dharmavaram"
  },
  {
    "name": "Adilabad",
    "slug": "adilabad",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-adilabad",
    "placeId": "in-andhra-pradesh-adilabad"
  },
  {
    "name": "Narasaraopet",
    "slug": "narasaraopet",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-narasaraopet",
    "placeId": "in-andhra-pradesh-narasaraopet"
  },
  {
    "name": "Tadpatri",
    "slug": "tadpatri",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-tadpatri",
    "placeId": "in-andhra-pradesh-tadpatri"
  },
  {
    "name": "Suryapet",
    "slug": "suryapet",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-suryapet",
    "placeId": "in-andhra-pradesh-suryapet"
  },
  {
    "name": "Tadepalligudem",
    "slug": "tadepalligudem",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-tadepalligudem",
    "placeId": "in-andhra-pradesh-tadepalligudem"
  },
  {
    "name": "Miryalaguda",
    "slug": "miryalaguda",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-miryalaguda",
    "placeId": "in-andhra-pradesh-miryalaguda"
  },
  {
    "name": "Chilakaluripet",
    "slug": "chilakaluripet",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-chilakaluripet",
    "placeId": "in-andhra-pradesh-chilakaluripet"
  },
  {
    "name": "Hajipur",
    "slug": "hajipur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-hajipur",
    "placeId": "in-bihar-hajipur"
  },
  {
    "name": "Raxaul",
    "slug": "raxaul",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-raxaul",
    "placeId": "in-bihar-raxaul"
  },
  {
    "name": "Biharsharif",
    "slug": "biharsharif",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-biharsharif",
    "placeId": "in-bihar-biharsharif"
  },
  {
    "name": "Arrah",
    "slug": "arrah",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-arrah",
    "placeId": "in-bihar-arrah"
  },
  {
    "name": "Begusarai",
    "slug": "begusarai",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-begusarai",
    "placeId": "in-bihar-begusarai"
  },
  {
    "name": "Katihar",
    "slug": "katihar",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-katihar",
    "placeId": "in-bihar-katihar"
  },
  {
    "name": "Dinapur Nizamat",
    "slug": "dinapur-nizamat",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-dinapur-nizamat",
    "placeId": "in-bihar-dinapur-nizamat"
  },
  {
    "name": "Saharsa",
    "slug": "saharsa",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-saharsa",
    "placeId": "in-bihar-saharsa"
  },
  {
    "name": "Dehri",
    "slug": "dehri",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-dehri",
    "placeId": "in-bihar-dehri"
  },
  {
    "name": "Siwan",
    "slug": "siwan",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-siwan",
    "placeId": "in-bihar-siwan"
  },
  {
    "name": "Bagaha",
    "slug": "bagaha",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-bagaha",
    "placeId": "in-bihar-bagaha"
  },
  {
    "name": "Kishanganj",
    "slug": "kishanganj",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-kishanganj",
    "placeId": "in-bihar-kishanganj"
  },
  {
    "name": "Jamalpur",
    "slug": "jamalpur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-jamalpur",
    "placeId": "in-bihar-jamalpur"
  },
  {
    "name": "Jehanabad",
    "slug": "jehanabad",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-jehanabad",
    "placeId": "in-bihar-jehanabad"
  },
  {
    "name": "Buxar",
    "slug": "buxar",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-buxar",
    "placeId": "in-bihar-buxar"
  },
  {
    "name": "Aurangabad",
    "slug": "aurangabad-bihar",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-aurangabad-bihar",
    "placeId": "in-bihar-aurangabad-bihar"
  },
  {
    "name": "Rajnandgaon",
    "slug": "rajnandgaon",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-rajnandgaon",
    "placeId": "in-chhattisgarh-rajnandgaon"
  },
  {
    "name": "Ambikapur",
    "slug": "ambikapur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2,
    "id": "in-chhattisgarh-ambikapur",
    "placeId": "in-chhattisgarh-ambikapur"
  },
  {
    "name": "Kirari Suleman Nagar",
    "slug": "kirari-suleman-nagar",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-kirari-suleman-nagar",
    "placeId": "in-delhi-kirari-suleman-nagar",
    "region": "NCR"
  },
  {
    "name": "NDMC",
    "slug": "ndmc",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-ndmc",
    "placeId": "in-delhi-ndmc",
    "region": "NCR"
  },
  {
    "name": "Karawal Nagar",
    "slug": "karawal-nagar",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-karawal-nagar",
    "placeId": "in-delhi-karawal-nagar",
    "region": "NCR"
  },
  {
    "name": "Nangloi Jat",
    "slug": "nangloi-jat",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-nangloi-jat",
    "placeId": "in-delhi-nangloi-jat",
    "region": "NCR"
  },
  {
    "name": "Bhalswa Jahangir Pur",
    "slug": "bhalswa-jahangir-pur",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-bhalswa-jahangir-pur",
    "placeId": "in-delhi-bhalswa-jahangir-pur",
    "region": "NCR"
  },
  {
    "name": "Sultan Pur Majra",
    "slug": "sultan-pur-majra",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-sultan-pur-majra",
    "placeId": "in-delhi-sultan-pur-majra",
    "region": "NCR"
  },
  {
    "name": "Hastsal",
    "slug": "hastsal",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-hastsal",
    "placeId": "in-delhi-hastsal",
    "region": "NCR"
  },
  {
    "name": "Deoli",
    "slug": "deoli",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-deoli",
    "placeId": "in-delhi-deoli",
    "region": "NCR"
  },
  {
    "name": "Dallo Pura",
    "slug": "dallo-pura",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-dallo-pura",
    "placeId": "in-delhi-dallo-pura",
    "region": "NCR"
  },
  {
    "name": "Burari",
    "slug": "burari",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-burari",
    "placeId": "in-delhi-burari",
    "region": "NCR"
  },
  {
    "name": "Mustafabad",
    "slug": "mustafabad",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-mustafabad",
    "placeId": "in-delhi-mustafabad",
    "region": "NCR"
  },
  {
    "name": "Gokal Pur",
    "slug": "gokal-pur",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-gokal-pur",
    "placeId": "in-delhi-gokal-pur",
    "region": "NCR"
  },
  {
    "name": "Mandoli",
    "slug": "mandoli",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-mandoli",
    "placeId": "in-delhi-mandoli",
    "region": "NCR"
  },
  {
    "name": "Delhi Cantonment",
    "slug": "delhi-cantonment",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-delhi-cantonment",
    "placeId": "in-delhi-delhi-cantonment",
    "region": "NCR"
  },
  {
    "name": "Sanand",
    "slug": "sanand",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-sanand",
    "placeId": "in-gujarat-sanand"
  },
  {
    "name": "Mundra",
    "slug": "mundra",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-mundra",
    "placeId": "in-gujarat-mundra"
  },
  {
    "name": "Mahesana",
    "slug": "mahesana",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-mahesana",
    "placeId": "in-gujarat-mahesana"
  },
  {
    "name": "Surendranagar Dudhrej",
    "slug": "surendranagar-dudhrej",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-surendranagar-dudhrej",
    "placeId": "in-gujarat-surendranagar-dudhrej"
  },
  {
    "name": "Veraval",
    "slug": "veraval",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-veraval",
    "placeId": "in-gujarat-veraval"
  },
  {
    "name": "Porbandar",
    "slug": "porbandar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-porbandar",
    "placeId": "in-gujarat-porbandar"
  },
  {
    "name": "Botad",
    "slug": "botad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-botad",
    "placeId": "in-gujarat-botad"
  },
  {
    "name": "Patan",
    "slug": "patan",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-patan",
    "placeId": "in-gujarat-patan"
  },
  {
    "name": "Palanpur",
    "slug": "palanpur",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-palanpur",
    "placeId": "in-gujarat-palanpur"
  },
  {
    "name": "Jetpur Navagadh",
    "slug": "jetpur-navagadh",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-jetpur-navagadh",
    "placeId": "in-gujarat-jetpur-navagadh"
  },
  {
    "name": "Valsad",
    "slug": "valsad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-valsad",
    "placeId": "in-gujarat-valsad"
  },
  {
    "name": "Kalol",
    "slug": "kalol",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-kalol",
    "placeId": "in-gujarat-kalol"
  },
  {
    "name": "Gondal",
    "slug": "gondal",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-gondal",
    "placeId": "in-gujarat-gondal"
  },
  {
    "name": "Deesa",
    "slug": "deesa",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-deesa",
    "placeId": "in-gujarat-deesa"
  },
  {
    "name": "Manesar",
    "slug": "manesar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-manesar",
    "placeId": "in-haryana-manesar",
    "region": "NCR"
  },
  {
    "name": "Sirsa",
    "slug": "sirsa",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-sirsa",
    "placeId": "in-haryana-sirsa"
  },
  {
    "name": "Bahadurgarh",
    "slug": "bahadurgarh",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-bahadurgarh",
    "placeId": "in-haryana-bahadurgarh",
    "region": "NCR"
  },
  {
    "name": "Thanesar",
    "slug": "thanesar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-thanesar",
    "placeId": "in-haryana-thanesar"
  },
  {
    "name": "Kaithal",
    "slug": "kaithal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-kaithal",
    "placeId": "in-haryana-kaithal"
  },
  {
    "name": "Palwal",
    "slug": "palwal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-palwal",
    "placeId": "in-haryana-palwal",
    "region": "NCR"
  },
  {
    "name": "Jagadhri",
    "slug": "jagadhri",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-jagadhri",
    "placeId": "in-haryana-jagadhri"
  },
  {
    "name": "Ambala Sadar",
    "slug": "ambala-sadar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-ambala-sadar",
    "placeId": "in-haryana-ambala-sadar"
  },
  {
    "name": "Anantnag",
    "slug": "anantnag",
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "tier": 2,
    "id": "in-jammu-and-kashmir-anantnag",
    "placeId": "in-jammu-and-kashmir-anantnag"
  },
  {
    "name": "Bokaro Steel",
    "slug": "bokaro-steel",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-bokaro-steel",
    "placeId": "in-jharkhand-bokaro-steel"
  },
  {
    "name": "Mango",
    "slug": "mango",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-mango",
    "placeId": "in-jharkhand-mango"
  },
  {
    "name": "Adityapur",
    "slug": "adityapur",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-adityapur",
    "placeId": "in-jharkhand-adityapur"
  },
  {
    "name": "Chas",
    "slug": "chas",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-chas",
    "placeId": "in-jharkhand-chas"
  },
  {
    "name": "Giridih",
    "slug": "giridih",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-giridih",
    "placeId": "in-jharkhand-giridih"
  },
  {
    "name": "Peenya",
    "slug": "peenya",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-peenya",
    "placeId": "in-karnataka-peenya"
  },
  {
    "name": "Tumakuru",
    "slug": "tumakuru",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-tumakuru",
    "placeId": "in-karnataka-tumakuru"
  },
  {
    "name": "Hubli and Dharwad",
    "slug": "hubli-and-dharwad",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-hubli-and-dharwad",
    "placeId": "in-karnataka-hubli-and-dharwad"
  },
  {
    "name": "Gulbarga",
    "slug": "gulbarga",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-gulbarga",
    "placeId": "in-karnataka-gulbarga"
  },
  {
    "name": "Davanagere",
    "slug": "davanagere",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-davanagere",
    "placeId": "in-karnataka-davanagere"
  },
  {
    "name": "Raichur",
    "slug": "raichur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-raichur",
    "placeId": "in-karnataka-raichur"
  },
  {
    "name": "Bidar",
    "slug": "bidar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bidar",
    "placeId": "in-karnataka-bidar"
  },
  {
    "name": "Gadag and Betigeri",
    "slug": "gadag-and-betigeri",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-gadag-and-betigeri",
    "placeId": "in-karnataka-gadag-and-betigeri"
  },
  {
    "name": "Bhadravati",
    "slug": "bhadravati",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bhadravati",
    "placeId": "in-karnataka-bhadravati"
  },
  {
    "name": "Robertson Pet",
    "slug": "robertson-pet",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-robertson-pet",
    "placeId": "in-karnataka-robertson-pet"
  },
  {
    "name": "Chitradurga",
    "slug": "chitradurga",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-chitradurga",
    "placeId": "in-karnataka-chitradurga"
  },
  {
    "name": "Chikmagalur",
    "slug": "chikmagalur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-chikmagalur",
    "placeId": "in-karnataka-chikmagalur"
  },
  {
    "name": "Bagalkot",
    "slug": "bagalkot",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bagalkot",
    "placeId": "in-karnataka-bagalkot"
  },
  {
    "name": "Ranibennur",
    "slug": "ranibennur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-ranibennur",
    "placeId": "in-karnataka-ranibennur"
  },
  {
    "name": "Gangawati",
    "slug": "gangawati",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-gangawati",
    "placeId": "in-karnataka-gangawati"
  },
  {
    "name": "Pithampur",
    "slug": "pithampur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-pithampur",
    "placeId": "in-madhya-pradesh-pithampur"
  },
  {
    "name": "Murwara",
    "slug": "murwara",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-murwara",
    "placeId": "in-madhya-pradesh-murwara"
  },
  {
    "name": "Burhanpur",
    "slug": "burhanpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-burhanpur",
    "placeId": "in-madhya-pradesh-burhanpur"
  },
  {
    "name": "Khandwa",
    "slug": "khandwa",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-khandwa",
    "placeId": "in-madhya-pradesh-khandwa"
  },
  {
    "name": "Bhind",
    "slug": "bhind",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-bhind",
    "placeId": "in-madhya-pradesh-bhind"
  },
  {
    "name": "Vidisha",
    "slug": "vidisha",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-vidisha",
    "placeId": "in-madhya-pradesh-vidisha"
  },
  {
    "name": "Mandsaur",
    "slug": "mandsaur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-mandsaur",
    "placeId": "in-madhya-pradesh-mandsaur"
  },
  {
    "name": "Chhattarpur",
    "slug": "chhattarpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-chhattarpur",
    "placeId": "in-madhya-pradesh-chhattarpur"
  },
  {
    "name": "Neemuch",
    "slug": "neemuch",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-neemuch",
    "placeId": "in-madhya-pradesh-neemuch"
  },
  {
    "name": "Damoh",
    "slug": "damoh",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-damoh",
    "placeId": "in-madhya-pradesh-damoh"
  },
  {
    "name": "Hoshangabad",
    "slug": "hoshangabad",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-hoshangabad",
    "placeId": "in-madhya-pradesh-hoshangabad"
  },
  {
    "name": "Sehore",
    "slug": "sehore",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-sehore",
    "placeId": "in-madhya-pradesh-sehore"
  },
  {
    "name": "Khargone",
    "slug": "khargone",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-khargone",
    "placeId": "in-madhya-pradesh-khargone"
  },
  {
    "name": "Betul",
    "slug": "betul",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-betul",
    "placeId": "in-madhya-pradesh-betul"
  },
  {
    "name": "Seoni",
    "slug": "seoni",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-seoni",
    "placeId": "in-madhya-pradesh-seoni"
  },
  {
    "name": "Datia",
    "slug": "datia",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-datia",
    "placeId": "in-madhya-pradesh-datia"
  },
  {
    "name": "Nagda",
    "slug": "nagda",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-nagda",
    "placeId": "in-madhya-pradesh-nagda"
  },
  {
    "name": "JNPT",
    "slug": "jnpt",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-jnpt",
    "placeId": "in-maharashtra-jnpt"
  },
  {
    "name": "Chakan",
    "slug": "chakan",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-chakan",
    "placeId": "in-maharashtra-chakan"
  },
  {
    "name": "Kalyan and Dombivali",
    "slug": "kalyan-and-dombivali",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-kalyan-and-dombivali",
    "placeId": "in-maharashtra-kalyan-and-dombivali"
  },
  {
    "name": "Vasai Virar",
    "slug": "vasai-virar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-vasai-virar",
    "placeId": "in-maharashtra-vasai-virar"
  },
  {
    "name": "Mira and Bhayander",
    "slug": "mira-and-bhayander",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-mira-and-bhayander",
    "placeId": "in-maharashtra-mira-and-bhayander"
  },
  {
    "name": "Nanded Waghala",
    "slug": "nanded-waghala",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-nanded-waghala",
    "placeId": "in-maharashtra-nanded-waghala"
  },
  {
    "name": "Kolapur",
    "slug": "kolapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-kolapur",
    "placeId": "in-maharashtra-kolapur"
  },
  {
    "name": "Sangli Miraj Kupwad",
    "slug": "sangli-miraj-kupwad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-sangli-miraj-kupwad",
    "placeId": "in-maharashtra-sangli-miraj-kupwad"
  },
  {
    "name": "Malegaon",
    "slug": "malegaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-malegaon",
    "placeId": "in-maharashtra-malegaon"
  },
  {
    "name": "Ahmadnagar",
    "slug": "ahmadnagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ahmadnagar",
    "placeId": "in-maharashtra-ahmadnagar"
  },
  {
    "name": "Parbhani",
    "slug": "parbhani",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-parbhani",
    "placeId": "in-maharashtra-parbhani"
  },
  {
    "name": "Ichalkaranji",
    "slug": "ichalkaranji",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ichalkaranji",
    "placeId": "in-maharashtra-ichalkaranji"
  },
  {
    "name": "Jalna",
    "slug": "jalna",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-jalna",
    "placeId": "in-maharashtra-jalna"
  },
  {
    "name": "Ambernath",
    "slug": "ambernath",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ambernath",
    "placeId": "in-maharashtra-ambernath"
  },
  {
    "name": "Navi Mumbai Panvel Raigad",
    "slug": "navi-mumbai-panvel-raigad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-navi-mumbai-panvel-raigad",
    "placeId": "in-maharashtra-navi-mumbai-panvel-raigad"
  },
  {
    "name": "Bhusawal",
    "slug": "bhusawal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-bhusawal",
    "placeId": "in-maharashtra-bhusawal"
  },
  {
    "name": "Panvel",
    "slug": "panvel",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-panvel",
    "placeId": "in-maharashtra-panvel"
  },
  {
    "name": "Badalapur",
    "slug": "badalapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-badalapur",
    "placeId": "in-maharashtra-badalapur"
  },
  {
    "name": "Bid",
    "slug": "bid",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-bid",
    "placeId": "in-maharashtra-bid"
  },
  {
    "name": "Gondiya",
    "slug": "gondiya",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-gondiya",
    "placeId": "in-maharashtra-gondiya"
  },
  {
    "name": "Barshi",
    "slug": "barshi",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-barshi",
    "placeId": "in-maharashtra-barshi"
  },
  {
    "name": "Yavatmal",
    "slug": "yavatmal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-yavatmal",
    "placeId": "in-maharashtra-yavatmal"
  },
  {
    "name": "Achalpur",
    "slug": "achalpur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-achalpur",
    "placeId": "in-maharashtra-achalpur"
  },
  {
    "name": "Osmanabad",
    "slug": "osmanabad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-osmanabad",
    "placeId": "in-maharashtra-osmanabad"
  },
  {
    "name": "Nandurbar",
    "slug": "nandurbar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-nandurbar",
    "placeId": "in-maharashtra-nandurbar"
  },
  {
    "name": "Udgir",
    "slug": "udgir",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-udgir",
    "placeId": "in-maharashtra-udgir"
  },
  {
    "name": "Hinganghat",
    "slug": "hinganghat",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-hinganghat",
    "placeId": "in-maharashtra-hinganghat"
  },
  {
    "name": "Aizawl",
    "slug": "aizawl",
    "state": "Mizoram",
    "stateSlug": "mizoram",
    "tier": 2,
    "id": "in-mizoram-aizawl",
    "placeId": "in-mizoram-aizawl"
  },
  {
    "name": "Dimapur",
    "slug": "dimapur",
    "state": "Nagaland",
    "stateSlug": "nagaland",
    "tier": 2,
    "id": "in-nagaland-dimapur",
    "placeId": "in-nagaland-dimapur"
  },
  {
    "name": "Brahmapur Town",
    "slug": "brahmapur-town",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-brahmapur-town",
    "placeId": "in-odisha-brahmapur-town"
  },
  {
    "name": "Raurkela",
    "slug": "raurkela",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-raurkela",
    "placeId": "in-odisha-raurkela"
  },
  {
    "name": "Raurkela Industrial Township",
    "slug": "raurkela-industrial-township",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-raurkela-industrial-township",
    "placeId": "in-odisha-raurkela-industrial-township"
  },
  {
    "name": "Puri Town",
    "slug": "puri-town",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-puri-town",
    "placeId": "in-odisha-puri-town"
  },
  {
    "name": "Baleshwar",
    "slug": "baleshwar",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-baleshwar",
    "placeId": "in-odisha-baleshwar"
  },
  {
    "name": "Ozhukarai",
    "slug": "ozhukarai",
    "state": "Puducherry",
    "stateSlug": "puducherry",
    "tier": 2,
    "id": "in-puducherry-ozhukarai",
    "placeId": "in-puducherry-ozhukarai"
  },
  {
    "name": "Rajpura",
    "slug": "rajpura",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-rajpura",
    "placeId": "in-punjab-rajpura"
  },
  {
    "name": "Batala",
    "slug": "batala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-batala",
    "placeId": "in-punjab-batala"
  },
  {
    "name": "Abohar",
    "slug": "abohar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-abohar",
    "placeId": "in-punjab-abohar"
  },
  {
    "name": "Malerkotla",
    "slug": "malerkotla",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-malerkotla",
    "placeId": "in-punjab-malerkotla"
  },
  {
    "name": "Khanna",
    "slug": "khanna",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-khanna",
    "placeId": "in-punjab-khanna"
  },
  {
    "name": "Muktsar",
    "slug": "muktsar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-muktsar",
    "placeId": "in-punjab-muktsar"
  },
  {
    "name": "Barnala",
    "slug": "barnala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-barnala",
    "placeId": "in-punjab-barnala"
  },
  {
    "name": "Tonk",
    "slug": "tonk",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-tonk",
    "placeId": "in-rajasthan-tonk"
  },
  {
    "name": "Kishangarh",
    "slug": "kishangarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-kishangarh",
    "placeId": "in-rajasthan-kishangarh"
  },
  {
    "name": "Hanumangarh",
    "slug": "hanumangarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-hanumangarh",
    "placeId": "in-rajasthan-hanumangarh"
  },
  {
    "name": "Beawar",
    "slug": "beawar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-beawar",
    "placeId": "in-rajasthan-beawar"
  },
  {
    "name": "Dhaulpur",
    "slug": "dhaulpur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-dhaulpur",
    "placeId": "in-rajasthan-dhaulpur"
  },
  {
    "name": "Sawai Madhopur",
    "slug": "sawai-madhopur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-sawai-madhopur",
    "placeId": "in-rajasthan-sawai-madhopur"
  },
  {
    "name": "Churu",
    "slug": "churu",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-churu",
    "placeId": "in-rajasthan-churu"
  },
  {
    "name": "Gangapur",
    "slug": "gangapur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-gangapur",
    "placeId": "in-rajasthan-gangapur"
  },
  {
    "name": "Jhunjhunun",
    "slug": "jhunjhunun",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-jhunjhunun",
    "placeId": "in-rajasthan-jhunjhunun"
  },
  {
    "name": "Baran",
    "slug": "baran",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-baran",
    "placeId": "in-rajasthan-baran"
  },
  {
    "name": "Chittaurgarh",
    "slug": "chittaurgarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-chittaurgarh",
    "placeId": "in-rajasthan-chittaurgarh"
  },
  {
    "name": "Hindaun",
    "slug": "hindaun",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-hindaun",
    "placeId": "in-rajasthan-hindaun"
  },
  {
    "name": "Bundi",
    "slug": "bundi",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-bundi",
    "placeId": "in-rajasthan-bundi"
  },
  {
    "name": "Sujangarh",
    "slug": "sujangarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-sujangarh",
    "placeId": "in-rajasthan-sujangarh"
  },
  {
    "name": "Banswara",
    "slug": "banswara",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-banswara",
    "placeId": "in-rajasthan-banswara"
  },
  {
    "name": "Ambattur",
    "slug": "ambattur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-ambattur",
    "placeId": "in-tamil-nadu-ambattur"
  },
  {
    "name": "Avadi",
    "slug": "avadi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-avadi",
    "placeId": "in-tamil-nadu-avadi"
  },
  {
    "name": "Tiruvottiyur",
    "slug": "tiruvottiyur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-tiruvottiyur",
    "placeId": "in-tamil-nadu-tiruvottiyur"
  },
  {
    "name": "Thoothukkudi",
    "slug": "thoothukkudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-thoothukkudi",
    "placeId": "in-tamil-nadu-thoothukkudi"
  },
  {
    "name": "Pallavaram",
    "slug": "pallavaram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-pallavaram",
    "placeId": "in-tamil-nadu-pallavaram"
  },
  {
    "name": "Tambaram",
    "slug": "tambaram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-tambaram",
    "placeId": "in-tamil-nadu-tambaram"
  },
  {
    "name": "Alandur",
    "slug": "alandur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-alandur",
    "placeId": "in-tamil-nadu-alandur"
  },
  {
    "name": "Kumbakonam",
    "slug": "kumbakonam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-kumbakonam",
    "placeId": "in-tamil-nadu-kumbakonam"
  },
  {
    "name": "Rajapalayam",
    "slug": "rajapalayam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-rajapalayam",
    "placeId": "in-tamil-nadu-rajapalayam"
  },
  {
    "name": "Kurichi",
    "slug": "kurichi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-kurichi",
    "placeId": "in-tamil-nadu-kurichi"
  },
  {
    "name": "Madavaram",
    "slug": "madavaram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-madavaram",
    "placeId": "in-tamil-nadu-madavaram"
  },
  {
    "name": "Pudukkottai",
    "slug": "pudukkottai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-pudukkottai",
    "placeId": "in-tamil-nadu-pudukkottai"
  },
  {
    "name": "Ambur",
    "slug": "ambur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-ambur",
    "placeId": "in-tamil-nadu-ambur"
  },
  {
    "name": "Karaikkudi",
    "slug": "karaikkudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-karaikkudi",
    "placeId": "in-tamil-nadu-karaikkudi"
  },
  {
    "name": "Neyveli",
    "slug": "neyveli",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-neyveli",
    "placeId": "in-tamil-nadu-neyveli"
  },
  {
    "name": "Nagapattinam",
    "slug": "nagapattinam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-nagapattinam",
    "placeId": "in-tamil-nadu-nagapattinam"
  },
  {
    "name": "Medchal",
    "slug": "medchal",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-medchal",
    "placeId": "in-telangana-medchal"
  },
  {
    "name": "Zaheerabad",
    "slug": "zaheerabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-zaheerabad",
    "placeId": "in-telangana-zaheerabad"
  },
  {
    "name": "Dadri",
    "slug": "dadri",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-dadri",
    "placeId": "in-uttar-pradesh-dadri"
  },
  {
    "name": "Jewar",
    "slug": "jewar",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-jewar",
    "placeId": "in-uttar-pradesh-jewar"
  },
  {
    "name": "Loni",
    "slug": "loni",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-loni",
    "placeId": "in-uttar-pradesh-loni"
  },
  {
    "name": "Maunath Bhanjan",
    "slug": "maunath-bhanjan",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-maunath-bhanjan",
    "placeId": "in-uttar-pradesh-maunath-bhanjan"
  },
  {
    "name": "Farrukhabad and Fatehgarh",
    "slug": "farrukhabad-and-fatehgarh",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-farrukhabad-and-fatehgarh",
    "placeId": "in-uttar-pradesh-farrukhabad-and-fatehgarh"
  },
  {
    "name": "Mirzapur and Vindhyachal",
    "slug": "mirzapur-and-vindhyachal",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-mirzapur-and-vindhyachal",
    "placeId": "in-uttar-pradesh-mirzapur-and-vindhyachal"
  },
  {
    "name": "Sambhal",
    "slug": "sambhal",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-sambhal",
    "placeId": "in-uttar-pradesh-sambhal"
  },
  {
    "name": "Amroha",
    "slug": "amroha",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-amroha",
    "placeId": "in-uttar-pradesh-amroha"
  },
  {
    "name": "Fatehpur",
    "slug": "fatehpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-fatehpur",
    "placeId": "in-uttar-pradesh-fatehpur"
  },
  {
    "name": "Rae Bareli",
    "slug": "rae-bareli",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-rae-bareli",
    "placeId": "in-uttar-pradesh-rae-bareli"
  },
  {
    "name": "Khora",
    "slug": "khora",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-khora",
    "placeId": "in-uttar-pradesh-khora"
  },
  {
    "name": "Orai",
    "slug": "orai",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-orai",
    "placeId": "in-uttar-pradesh-orai"
  },
  {
    "name": "Bahraich",
    "slug": "bahraich",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-bahraich",
    "placeId": "in-uttar-pradesh-bahraich"
  },
  {
    "name": "Budaun",
    "slug": "budaun",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-budaun",
    "placeId": "in-uttar-pradesh-budaun"
  },
  {
    "name": "Banda",
    "slug": "banda",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-banda",
    "placeId": "in-uttar-pradesh-banda"
  },
  {
    "name": "Lakhimpur",
    "slug": "lakhimpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-lakhimpur",
    "placeId": "in-uttar-pradesh-lakhimpur"
  },
  {
    "name": "Hathras",
    "slug": "hathras",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-hathras",
    "placeId": "in-uttar-pradesh-hathras"
  },
  {
    "name": "Lalitpur",
    "slug": "lalitpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-lalitpur",
    "placeId": "in-uttar-pradesh-lalitpur"
  },
  {
    "name": "Modinagar",
    "slug": "modinagar",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-modinagar",
    "placeId": "in-uttar-pradesh-modinagar"
  },
  {
    "name": "Deoria",
    "slug": "deoria",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-deoria",
    "placeId": "in-uttar-pradesh-deoria"
  },
  {
    "name": "Pilibhit",
    "slug": "pilibhit",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-pilibhit",
    "placeId": "in-uttar-pradesh-pilibhit"
  },
  {
    "name": "Hardoi",
    "slug": "hardoi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-hardoi",
    "placeId": "in-uttar-pradesh-hardoi"
  },
  {
    "name": "Mainpuri",
    "slug": "mainpuri",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-mainpuri",
    "placeId": "in-uttar-pradesh-mainpuri"
  },
  {
    "name": "Etah",
    "slug": "etah",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-etah",
    "placeId": "in-uttar-pradesh-etah"
  },
  {
    "name": "Basti",
    "slug": "basti",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-basti",
    "placeId": "in-uttar-pradesh-basti"
  },
  {
    "name": "Chandausi",
    "slug": "chandausi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-chandausi",
    "placeId": "in-uttar-pradesh-chandausi"
  },
  {
    "name": "Akbarpur",
    "slug": "akbarpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-akbarpur",
    "placeId": "in-uttar-pradesh-akbarpur"
  },
  {
    "name": "Khurja",
    "slug": "khurja",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-khurja",
    "placeId": "in-uttar-pradesh-khurja"
  },
  {
    "name": "Ghazipur",
    "slug": "ghazipur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-ghazipur",
    "placeId": "in-uttar-pradesh-ghazipur"
  },
  {
    "name": "Mughalsarai",
    "slug": "mughalsarai",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-mughalsarai",
    "placeId": "in-uttar-pradesh-mughalsarai"
  },
  {
    "name": "Kanpur Cantonment",
    "slug": "kanpur-cantonment",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-kanpur-cantonment",
    "placeId": "in-uttar-pradesh-kanpur-cantonment"
  },
  {
    "name": "Shikohabad",
    "slug": "shikohabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-shikohabad",
    "placeId": "in-uttar-pradesh-shikohabad"
  },
  {
    "name": "Shamli",
    "slug": "shamli",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-shamli",
    "placeId": "in-uttar-pradesh-shamli"
  },
  {
    "name": "Ballia",
    "slug": "ballia",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-ballia",
    "placeId": "in-uttar-pradesh-ballia"
  },
  {
    "name": "Baraut",
    "slug": "baraut",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-baraut",
    "placeId": "in-uttar-pradesh-baraut"
  },
  {
    "name": "Kasganj",
    "slug": "kasganj",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-kasganj",
    "placeId": "in-uttar-pradesh-kasganj"
  },
  {
    "name": "Hardwar",
    "slug": "hardwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-hardwar",
    "placeId": "in-uttarakhand-hardwar"
  },
  {
    "name": "Haldwani and Kathgodam",
    "slug": "haldwani-and-kathgodam",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-haldwani-and-kathgodam",
    "placeId": "in-uttarakhand-haldwani-and-kathgodam"
  },
  {
    "name": "Kashipur",
    "slug": "kashipur",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-kashipur",
    "placeId": "in-uttarakhand-kashipur"
  },
  {
    "name": "Dankuni",
    "slug": "dankuni",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-dankuni",
    "placeId": "in-west-bengal-dankuni"
  },
  {
    "name": "Dhulagarh",
    "slug": "dhulagarh",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-dhulagarh",
    "placeId": "in-west-bengal-dhulagarh"
  },
  {
    "name": "Sankrail",
    "slug": "sankrail",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-sankrail",
    "placeId": "in-west-bengal-sankrail"
  },
  {
    "name": "Uluberia",
    "slug": "uluberia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-uluberia",
    "placeId": "in-west-bengal-uluberia"
  },
  {
    "name": "Panitanki",
    "slug": "panitanki",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-panitanki",
    "placeId": "in-west-bengal-panitanki"
  },
  {
    "name": "Maheshtala",
    "slug": "maheshtala",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-maheshtala",
    "placeId": "in-west-bengal-maheshtala"
  },
  {
    "name": "Rajpur Sonarpur",
    "slug": "rajpur-sonarpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-rajpur-sonarpur",
    "placeId": "in-west-bengal-rajpur-sonarpur"
  },
  {
    "name": "South Dum Dum",
    "slug": "south-dum-dum",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-south-dum-dum",
    "placeId": "in-west-bengal-south-dum-dum"
  },
  {
    "name": "Rajarhat Gopalpur",
    "slug": "rajarhat-gopalpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-rajarhat-gopalpur",
    "placeId": "in-west-bengal-rajarhat-gopalpur"
  },
  {
    "name": "Kulti",
    "slug": "kulti",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kulti",
    "placeId": "in-west-bengal-kulti"
  },
  {
    "name": "Bally",
    "slug": "bally",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bally",
    "placeId": "in-west-bengal-bally"
  },
  {
    "name": "North Dum Dum",
    "slug": "north-dum-dum",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-north-dum-dum",
    "placeId": "in-west-bengal-north-dum-dum"
  },
  {
    "name": "Baranagar",
    "slug": "baranagar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-baranagar",
    "placeId": "in-west-bengal-baranagar"
  },
  {
    "name": "English Bazar",
    "slug": "english-bazar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-english-bazar",
    "placeId": "in-west-bengal-english-bazar"
  },
  {
    "name": "Madhyamgram",
    "slug": "madhyamgram",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-madhyamgram",
    "placeId": "in-west-bengal-madhyamgram"
  },
  {
    "name": "Hugli and Chinsurah",
    "slug": "hugli-and-chinsurah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-hugli-and-chinsurah",
    "placeId": "in-west-bengal-hugli-and-chinsurah"
  },
  {
    "name": "Uttarpara Kotrung",
    "slug": "uttarpara-kotrung",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-uttarpara-kotrung",
    "placeId": "in-west-bengal-uttarpara-kotrung"
  },
  {
    "name": "Barrackpur",
    "slug": "barrackpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-barrackpur",
    "placeId": "in-west-bengal-barrackpur"
  },
  {
    "name": "Jamuria",
    "slug": "jamuria",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-jamuria",
    "placeId": "in-west-bengal-jamuria"
  },
  {
    "name": "North Barrackpur",
    "slug": "north-barrackpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-north-barrackpur",
    "placeId": "in-west-bengal-north-barrackpur"
  },
  {
    "name": "Nabadwip",
    "slug": "nabadwip",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-nabadwip",
    "placeId": "in-west-bengal-nabadwip"
  },
  {
    "name": "Basirhat",
    "slug": "basirhat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-basirhat",
    "placeId": "in-west-bengal-basirhat"
  },
  {
    "name": "Halisahar",
    "slug": "halisahar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-halisahar",
    "placeId": "in-west-bengal-halisahar"
  },
  {
    "name": "Rishra",
    "slug": "rishra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-rishra",
    "placeId": "in-west-bengal-rishra"
  },
  {
    "name": "Ashokenagar Kalyangarh",
    "slug": "ashokenagar-kalyangarh",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-ashokenagar-kalyangarh",
    "placeId": "in-west-bengal-ashokenagar-kalyangarh"
  },
  {
    "name": "Baidyabati",
    "slug": "baidyabati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-baidyabati",
    "placeId": "in-west-bengal-baidyabati"
  },
  {
    "name": "Kanchrapara",
    "slug": "kanchrapara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kanchrapara",
    "placeId": "in-west-bengal-kanchrapara"
  },
  {
    "name": "Dabgram",
    "slug": "dabgram",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-dabgram",
    "placeId": "in-west-bengal-dabgram"
  },
  {
    "name": "Darjiling",
    "slug": "darjiling",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-darjiling",
    "placeId": "in-west-bengal-darjiling"
  },
  {
    "name": "Titagarh",
    "slug": "titagarh",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-titagarh",
    "placeId": "in-west-bengal-titagarh"
  },
  {
    "name": "Dum Dum",
    "slug": "dum-dum",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-dum-dum",
    "placeId": "in-west-bengal-dum-dum"
  },
  {
    "name": "Bally Town",
    "slug": "bally-town",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bally-town",
    "placeId": "in-west-bengal-bally-town"
  },
  {
    "name": "Champdani",
    "slug": "champdani",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-champdani",
    "placeId": "in-west-bengal-champdani"
  },
  {
    "name": "Bongaon",
    "slug": "bongaon",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bongaon",
    "placeId": "in-west-bengal-bongaon"
  },
  {
    "name": "Khardaha",
    "slug": "khardaha",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-khardaha",
    "placeId": "in-west-bengal-khardaha"
  },
  {
    "name": "Bansberia",
    "slug": "bansberia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bansberia",
    "placeId": "in-west-bengal-bansberia"
  },
  {
    "name": "Bhadreswar",
    "slug": "bhadreswar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bhadreswar",
    "placeId": "in-west-bengal-bhadreswar"
  },
  {
    "name": "Salt Lake",
    "slug": "salt-lake",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-salt-lake",
    "placeId": "in-west-bengal-salt-lake"
  },
  {
    "name": "New Town",
    "slug": "new-town",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-new-town",
    "placeId": "in-west-bengal-new-town"
  },
  {
    "name": "Esplanade Metro",
    "slug": "esplanade",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-esplanade",
    "placeId": "in-west-bengal-esplanade"
  },
  {
    "name": "Garia",
    "slug": "garia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-garia",
    "placeId": "in-west-bengal-garia"
  },
  {
    "name": "Behala",
    "slug": "behala",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-behala",
    "placeId": "in-west-bengal-behala"
  },
  {
    "name": "Jadavpur",
    "slug": "jadavpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-jadavpur",
    "placeId": "in-west-bengal-jadavpur"
  },
  {
    "name": "Rajarhat",
    "slug": "rajarhat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-rajarhat",
    "placeId": "in-west-bengal-rajarhat"
  },
  {
    "name": "Andheri",
    "slug": "andheri",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-andheri",
    "placeId": "in-maharashtra-andheri"
  },
  {
    "name": "Bandra",
    "slug": "bandra",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-bandra",
    "placeId": "in-maharashtra-bandra"
  },
  {
    "name": "Borivali",
    "slug": "borivali",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-borivali",
    "placeId": "in-maharashtra-borivali"
  },
  {
    "name": "Kalyan",
    "slug": "kalyan",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-kalyan",
    "placeId": "in-maharashtra-kalyan"
  },
  {
    "name": "Ghatkopar",
    "slug": "ghatkopar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ghatkopar",
    "placeId": "in-maharashtra-ghatkopar"
  },
  {
    "name": "Powai",
    "slug": "powai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-powai",
    "placeId": "in-maharashtra-powai"
  },
  {
    "name": "Dadar",
    "slug": "dadar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-dadar",
    "placeId": "in-maharashtra-dadar"
  },
  {
    "name": "Malad",
    "slug": "malad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-malad",
    "placeId": "in-maharashtra-malad"
  },
  {
    "name": "Dwarka",
    "slug": "dwarka",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-dwarka",
    "placeId": "in-delhi-dwarka",
    "region": "NCR"
  },
  {
    "name": "Rohini",
    "slug": "rohini",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-rohini",
    "placeId": "in-delhi-rohini",
    "region": "NCR"
  },
  {
    "name": "Saket",
    "slug": "saket",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-saket",
    "placeId": "in-delhi-saket",
    "region": "NCR"
  },
  {
    "name": "Janakpuri",
    "slug": "janakpuri",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-janakpuri",
    "placeId": "in-delhi-janakpuri",
    "region": "NCR"
  },
  {
    "name": "Laxmi Nagar",
    "slug": "laxmi-nagar",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2,
    "id": "in-delhi-laxmi-nagar",
    "placeId": "in-delhi-laxmi-nagar",
    "region": "NCR"
  },
  {
    "name": "Koramangala",
    "slug": "koramangala",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-koramangala",
    "placeId": "in-karnataka-koramangala"
  },
  {
    "name": "Indiranagar",
    "slug": "indiranagar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-indiranagar",
    "placeId": "in-karnataka-indiranagar"
  },
  {
    "name": "Whitefield",
    "slug": "whitefield",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-whitefield",
    "placeId": "in-karnataka-whitefield"
  },
  {
    "name": "Jayanagar",
    "slug": "jayanagar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-jayanagar",
    "placeId": "in-karnataka-jayanagar"
  },
  {
    "name": "HSR Layout",
    "slug": "hsr-layout",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-hsr-layout",
    "placeId": "in-karnataka-hsr-layout"
  },
  {
    "name": "Electronic City",
    "slug": "electronic-city",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-electronic-city",
    "placeId": "in-karnataka-electronic-city"
  },
  {
    "name": "Marathahalli",
    "slug": "marathahalli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-marathahalli",
    "placeId": "in-karnataka-marathahalli"
  },
  {
    "name": "Bellandur",
    "slug": "bellandur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bellandur",
    "placeId": "in-karnataka-bellandur"
  },
  {
    "name": "T Nagar",
    "slug": "t-nagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-t-nagar",
    "placeId": "in-tamil-nadu-t-nagar"
  },
  {
    "name": "Velachery",
    "slug": "velachery",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-velachery",
    "placeId": "in-tamil-nadu-velachery"
  },
  {
    "name": "Anna Nagar",
    "slug": "anna-nagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-anna-nagar",
    "placeId": "in-tamil-nadu-anna-nagar"
  },
  {
    "name": "Guindy",
    "slug": "guindy",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-guindy",
    "placeId": "in-tamil-nadu-guindy"
  },
  {
    "name": "HITEC City",
    "slug": "hitec-city",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-hitec-city",
    "placeId": "in-telangana-hitec-city"
  },
  {
    "name": "Gachibowli",
    "slug": "gachibowli",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-gachibowli",
    "placeId": "in-telangana-gachibowli"
  },
  {
    "name": "Madhapur",
    "slug": "madhapur",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-madhapur",
    "placeId": "in-telangana-madhapur"
  },
  {
    "name": "Kukatpally",
    "slug": "kukatpally",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-kukatpally",
    "placeId": "in-telangana-kukatpally"
  },
  {
    "name": "Banjara Hills",
    "slug": "banjara-hills",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-banjara-hills",
    "placeId": "in-telangana-banjara-hills"
  },
  {
    "name": "Kothrud",
    "slug": "kothrud",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-kothrud",
    "placeId": "in-maharashtra-kothrud"
  },
  {
    "name": "Hadapsar",
    "slug": "hadapsar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-hadapsar",
    "placeId": "in-maharashtra-hadapsar"
  },
  {
    "name": "Wakad",
    "slug": "wakad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-wakad",
    "placeId": "in-maharashtra-wakad"
  },
  {
    "name": "Hinjewadi",
    "slug": "hinjewadi",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-hinjewadi",
    "placeId": "in-maharashtra-hinjewadi"
  },
  {
    "name": "Viman Nagar",
    "slug": "viman-nagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-viman-nagar",
    "placeId": "in-maharashtra-viman-nagar"
  },
  {
    "name": "Baner",
    "slug": "baner",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-baner",
    "placeId": "in-maharashtra-baner"
  },
  {
    "name": "Bhosari",
    "slug": "bhosari",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-bhosari",
    "placeId": "in-maharashtra-bhosari"
  },
  {
    "name": "Talegaon",
    "slug": "talegaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-talegaon",
    "placeId": "in-maharashtra-talegaon"
  },
  {
    "name": "Ranjangaon",
    "slug": "ranjangaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ranjangaon",
    "placeId": "in-maharashtra-ranjangaon"
  },
  {
    "name": "Shirwal",
    "slug": "shirwal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-shirwal",
    "placeId": "in-maharashtra-shirwal"
  },
  {
    "name": "Baramati",
    "slug": "baramati",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-baramati",
    "placeId": "in-maharashtra-baramati"
  },
  {
    "name": "Kurkumbh",
    "slug": "kurkumbh",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-kurkumbh",
    "placeId": "in-maharashtra-kurkumbh"
  },
  {
    "name": "Waluj",
    "slug": "waluj",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-waluj",
    "placeId": "in-maharashtra-waluj"
  },
  {
    "name": "Shendra",
    "slug": "shendra",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-shendra",
    "placeId": "in-maharashtra-shendra"
  },
  {
    "name": "Butibori",
    "slug": "butibori",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-butibori",
    "placeId": "in-maharashtra-butibori"
  },
  {
    "name": "Tarapur",
    "slug": "tarapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-tarapur",
    "placeId": "in-maharashtra-tarapur"
  },
  {
    "name": "Taloja",
    "slug": "taloja",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-taloja",
    "placeId": "in-maharashtra-taloja"
  },
  {
    "name": "Rabale",
    "slug": "rabale",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-rabale",
    "placeId": "in-maharashtra-rabale"
  },
  {
    "name": "Mahape",
    "slug": "mahape",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-mahape",
    "placeId": "in-maharashtra-mahape"
  },
  {
    "name": "Turbhe",
    "slug": "turbhe",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-turbhe",
    "placeId": "in-maharashtra-turbhe"
  },
  {
    "name": "Airoli",
    "slug": "airoli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-airoli",
    "placeId": "in-maharashtra-airoli"
  },
  {
    "name": "Boisar",
    "slug": "boisar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-boisar",
    "placeId": "in-maharashtra-boisar"
  },
  {
    "name": "Palghar",
    "slug": "palghar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-palghar",
    "placeId": "in-maharashtra-palghar"
  },
  {
    "name": "Vasai",
    "slug": "vasai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-vasai",
    "placeId": "in-maharashtra-vasai"
  },
  {
    "name": "Virar",
    "slug": "virar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-virar",
    "placeId": "in-maharashtra-virar"
  },
  {
    "name": "Mira Bhayandar",
    "slug": "mira-bhayandar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-mira-bhayandar",
    "placeId": "in-maharashtra-mira-bhayandar"
  },
  {
    "name": "Badlapur",
    "slug": "badlapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-badlapur",
    "placeId": "in-maharashtra-badlapur"
  },
  {
    "name": "Dombivli",
    "slug": "dombivli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-dombivli",
    "placeId": "in-maharashtra-dombivli"
  },
  {
    "name": "Uran",
    "slug": "uran",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-uran",
    "placeId": "in-maharashtra-uran"
  },
  {
    "name": "Pen",
    "slug": "pen",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-pen",
    "placeId": "in-maharashtra-pen"
  },
  {
    "name": "Roha",
    "slug": "roha",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-roha",
    "placeId": "in-maharashtra-roha"
  },
  {
    "name": "Mahad",
    "slug": "mahad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-mahad",
    "placeId": "in-maharashtra-mahad"
  },
  {
    "name": "Chiplun",
    "slug": "chiplun",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-chiplun",
    "placeId": "in-maharashtra-chiplun"
  },
  {
    "name": "Ratnagiri",
    "slug": "ratnagiri",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-ratnagiri",
    "placeId": "in-maharashtra-ratnagiri"
  },
  {
    "name": "Kudal",
    "slug": "kudal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-kudal",
    "placeId": "in-maharashtra-kudal"
  },
  {
    "name": "Karad",
    "slug": "karad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-karad",
    "placeId": "in-maharashtra-karad"
  },
  {
    "name": "Phaltan",
    "slug": "phaltan",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-phaltan",
    "placeId": "in-maharashtra-phaltan"
  },
  {
    "name": "Jaysingpur",
    "slug": "jaysingpur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-jaysingpur",
    "placeId": "in-maharashtra-jaysingpur"
  },
  {
    "name": "Miraj",
    "slug": "miraj",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-miraj",
    "placeId": "in-maharashtra-miraj"
  },
  {
    "name": "Beed",
    "slug": "beed",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-beed",
    "placeId": "in-maharashtra-beed"
  },
  {
    "name": "Hingoli",
    "slug": "hingoli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-hingoli",
    "placeId": "in-maharashtra-hingoli"
  },
  {
    "name": "Bhandara",
    "slug": "bhandara",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-bhandara",
    "placeId": "in-maharashtra-bhandara"
  },
  {
    "name": "Gondia",
    "slug": "gondia",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2,
    "id": "in-maharashtra-gondia",
    "placeId": "in-maharashtra-gondia"
  },
  {
    "name": "Gadchiroli",
    "slug": "gadchiroli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-gadchiroli",
    "placeId": "in-maharashtra-gadchiroli"
  },
  {
    "name": "Washim",
    "slug": "washim",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-washim",
    "placeId": "in-maharashtra-washim"
  },
  {
    "name": "Buldhana",
    "slug": "buldhana",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3,
    "id": "in-maharashtra-buldhana",
    "placeId": "in-maharashtra-buldhana"
  },
  {
    "name": "Changodar",
    "slug": "changodar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-changodar",
    "placeId": "in-gujarat-changodar"
  },
  {
    "name": "Kadi",
    "slug": "kadi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-kadi",
    "placeId": "in-gujarat-kadi"
  },
  {
    "name": "Halol",
    "slug": "halol",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-halol",
    "placeId": "in-gujarat-halol"
  },
  {
    "name": "Savli",
    "slug": "savli",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-savli",
    "placeId": "in-gujarat-savli"
  },
  {
    "name": "Dahej",
    "slug": "dahej",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-dahej",
    "placeId": "in-gujarat-dahej"
  },
  {
    "name": "Jhagadia",
    "slug": "jhagadia",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-jhagadia",
    "placeId": "in-gujarat-jhagadia"
  },
  {
    "name": "Panoli",
    "slug": "panoli",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-panoli",
    "placeId": "in-gujarat-panoli"
  },
  {
    "name": "Hazira",
    "slug": "hazira",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-hazira",
    "placeId": "in-gujarat-hazira"
  },
  {
    "name": "Sachin",
    "slug": "sachin",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-sachin",
    "placeId": "in-gujarat-sachin"
  },
  {
    "name": "Palsana",
    "slug": "palsana",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-palsana",
    "placeId": "in-gujarat-palsana"
  },
  {
    "name": "Sarigam",
    "slug": "sarigam",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-sarigam",
    "placeId": "in-gujarat-sarigam"
  },
  {
    "name": "Umbergaon",
    "slug": "umbergaon",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-umbergaon",
    "placeId": "in-gujarat-umbergaon"
  },
  {
    "name": "Chhatral",
    "slug": "chhatral",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-chhatral",
    "placeId": "in-gujarat-chhatral"
  },
  {
    "name": "Unjha",
    "slug": "unjha",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-unjha",
    "placeId": "in-gujarat-unjha"
  },
  {
    "name": "Siddhpur",
    "slug": "siddhpur",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-siddhpur",
    "placeId": "in-gujarat-siddhpur"
  },
  {
    "name": "Anjar",
    "slug": "anjar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-anjar",
    "placeId": "in-gujarat-anjar"
  },
  {
    "name": "Mandvi",
    "slug": "mandvi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-mandvi",
    "placeId": "in-gujarat-mandvi"
  },
  {
    "name": "Keshod",
    "slug": "keshod",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-keshod",
    "placeId": "in-gujarat-keshod"
  },
  {
    "name": "Jetpur",
    "slug": "jetpur",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-jetpur",
    "placeId": "in-gujarat-jetpur"
  },
  {
    "name": "Dhoraji",
    "slug": "dhoraji",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-dhoraji",
    "placeId": "in-gujarat-dhoraji"
  },
  {
    "name": "Wankaner",
    "slug": "wankaner",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-wankaner",
    "placeId": "in-gujarat-wankaner"
  },
  {
    "name": "Thangadh",
    "slug": "thangadh",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-thangadh",
    "placeId": "in-gujarat-thangadh"
  },
  {
    "name": "Wadhwan",
    "slug": "wadhwan",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-wadhwan",
    "placeId": "in-gujarat-wadhwan"
  },
  {
    "name": "Limbdi",
    "slug": "limbdi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-limbdi",
    "placeId": "in-gujarat-limbdi"
  },
  {
    "name": "Sihor",
    "slug": "sihor",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-sihor",
    "placeId": "in-gujarat-sihor"
  },
  {
    "name": "Mahuva",
    "slug": "mahuva",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3,
    "id": "in-gujarat-mahuva",
    "placeId": "in-gujarat-mahuva"
  },
  {
    "name": "Dholera",
    "slug": "dholera",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2,
    "id": "in-gujarat-dholera",
    "placeId": "in-gujarat-dholera"
  },
  {
    "name": "Maraimalai Nagar",
    "slug": "maraimalai-nagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-maraimalai-nagar",
    "placeId": "in-tamil-nadu-maraimalai-nagar"
  },
  {
    "name": "Irungattukottai",
    "slug": "irungattukottai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-irungattukottai",
    "placeId": "in-tamil-nadu-irungattukottai"
  },
  {
    "name": "Gummidipoondi",
    "slug": "gummidipoondi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-gummidipoondi",
    "placeId": "in-tamil-nadu-gummidipoondi"
  },
  {
    "name": "Ennore",
    "slug": "ennore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-ennore",
    "placeId": "in-tamil-nadu-ennore"
  },
  {
    "name": "Manali",
    "slug": "manali-tn",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-manali-tn",
    "placeId": "in-tamil-nadu-manali-tn"
  },
  {
    "name": "Perungudi",
    "slug": "perungudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-perungudi",
    "placeId": "in-tamil-nadu-perungudi"
  },
  {
    "name": "Sholinganallur",
    "slug": "sholinganallur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-sholinganallur",
    "placeId": "in-tamil-nadu-sholinganallur"
  },
  {
    "name": "Siruseri",
    "slug": "siruseri",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-siruseri",
    "placeId": "in-tamil-nadu-siruseri"
  },
  {
    "name": "Mahindra World City",
    "slug": "mahindra-world-city",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-mahindra-world-city",
    "placeId": "in-tamil-nadu-mahindra-world-city"
  },
  {
    "name": "Ranipet",
    "slug": "ranipet",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-ranipet",
    "placeId": "in-tamil-nadu-ranipet"
  },
  {
    "name": "Cheyyar",
    "slug": "cheyyar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-cheyyar",
    "placeId": "in-tamil-nadu-cheyyar"
  },
  {
    "name": "Bargur",
    "slug": "bargur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-bargur",
    "placeId": "in-tamil-nadu-bargur"
  },
  {
    "name": "Tiruchengode",
    "slug": "tiruchengode",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-tiruchengode",
    "placeId": "in-tamil-nadu-tiruchengode"
  },
  {
    "name": "Perundurai",
    "slug": "perundurai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-perundurai",
    "placeId": "in-tamil-nadu-perundurai"
  },
  {
    "name": "Avinashi",
    "slug": "avinashi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-avinashi",
    "placeId": "in-tamil-nadu-avinashi"
  },
  {
    "name": "Palladam",
    "slug": "palladam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-palladam",
    "placeId": "in-tamil-nadu-palladam"
  },
  {
    "name": "Pollachi",
    "slug": "pollachi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-pollachi",
    "placeId": "in-tamil-nadu-pollachi"
  },
  {
    "name": "Sivakasi",
    "slug": "sivakasi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-sivakasi",
    "placeId": "in-tamil-nadu-sivakasi"
  },
  {
    "name": "Virudhunagar",
    "slug": "virudhunagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-virudhunagar",
    "placeId": "in-tamil-nadu-virudhunagar"
  },
  {
    "name": "Gangaikondan",
    "slug": "gangaikondan",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-gangaikondan",
    "placeId": "in-tamil-nadu-gangaikondan"
  },
  {
    "name": "Nanguneri",
    "slug": "nanguneri",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-nanguneri",
    "placeId": "in-tamil-nadu-nanguneri"
  },
  {
    "name": "Vaniyambadi",
    "slug": "vaniyambadi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3,
    "id": "in-tamil-nadu-vaniyambadi",
    "placeId": "in-tamil-nadu-vaniyambadi"
  },
  {
    "name": "Arakkonam",
    "slug": "arakkonam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2,
    "id": "in-tamil-nadu-arakkonam",
    "placeId": "in-tamil-nadu-arakkonam"
  },
  {
    "name": "Bommasandra",
    "slug": "bommasandra",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bommasandra",
    "placeId": "in-karnataka-bommasandra"
  },
  {
    "name": "Jigani",
    "slug": "jigani",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-jigani",
    "placeId": "in-karnataka-jigani"
  },
  {
    "name": "Bidadi",
    "slug": "bidadi",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-bidadi",
    "placeId": "in-karnataka-bidadi"
  },
  {
    "name": "Harohalli",
    "slug": "harohalli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-harohalli",
    "placeId": "in-karnataka-harohalli"
  },
  {
    "name": "Dobbaspet",
    "slug": "dobbaspet",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-dobbaspet",
    "placeId": "in-karnataka-dobbaspet"
  },
  {
    "name": "Nelamangala",
    "slug": "nelamangala",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-nelamangala",
    "placeId": "in-karnataka-nelamangala"
  },
  {
    "name": "Malur",
    "slug": "malur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-malur",
    "placeId": "in-karnataka-malur"
  },
  {
    "name": "Narasapura",
    "slug": "narasapura",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-narasapura",
    "placeId": "in-karnataka-narasapura"
  },
  {
    "name": "Vemgal",
    "slug": "vemgal",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-vemgal",
    "placeId": "in-karnataka-vemgal"
  },
  {
    "name": "KGF",
    "slug": "kgf",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-kgf",
    "placeId": "in-karnataka-kgf"
  },
  {
    "name": "Hoskote",
    "slug": "hoskote",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-hoskote",
    "placeId": "in-karnataka-hoskote"
  },
  {
    "name": "Devanahalli",
    "slug": "devanahalli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-devanahalli",
    "placeId": "in-karnataka-devanahalli"
  },
  {
    "name": "Doddaballapur",
    "slug": "doddaballapur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-doddaballapur",
    "placeId": "in-karnataka-doddaballapur"
  },
  {
    "name": "Vasanthanarasapura",
    "slug": "vasanthanarasapura",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-vasanthanarasapura",
    "placeId": "in-karnataka-vasanthanarasapura"
  },
  {
    "name": "Nanjangud",
    "slug": "nanjangud",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-nanjangud",
    "placeId": "in-karnataka-nanjangud"
  },
  {
    "name": "Hebbal Industrial Area",
    "slug": "hebbal-mysore",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-hebbal-mysore",
    "placeId": "in-karnataka-hebbal-mysore"
  },
  {
    "name": "Baikampady",
    "slug": "baikampady",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-baikampady",
    "placeId": "in-karnataka-baikampady"
  },
  {
    "name": "Koppal",
    "slug": "koppal",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-koppal",
    "placeId": "in-karnataka-koppal"
  },
  {
    "name": "Yadgir",
    "slug": "yadgir",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-yadgir",
    "placeId": "in-karnataka-yadgir"
  },
  {
    "name": "Karwar",
    "slug": "karwar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2,
    "id": "in-karnataka-karwar",
    "placeId": "in-karnataka-karwar"
  },
  {
    "name": "Ranebennur",
    "slug": "ranebennur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3,
    "id": "in-karnataka-ranebennur",
    "placeId": "in-karnataka-ranebennur"
  },
  {
    "name": "Patancheru",
    "slug": "patancheru",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-patancheru",
    "placeId": "in-telangana-patancheru"
  },
  {
    "name": "Bolarum",
    "slug": "bolarum",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-bolarum",
    "placeId": "in-telangana-bolarum"
  },
  {
    "name": "Jeedimetla",
    "slug": "jeedimetla",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-jeedimetla",
    "placeId": "in-telangana-jeedimetla"
  },
  {
    "name": "Sanathnagar",
    "slug": "sanathnagar",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-sanathnagar",
    "placeId": "in-telangana-sanathnagar"
  },
  {
    "name": "Cherlapally",
    "slug": "cherlapally",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-cherlapally",
    "placeId": "in-telangana-cherlapally"
  },
  {
    "name": "Nacharam",
    "slug": "nacharam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-nacharam",
    "placeId": "in-telangana-nacharam"
  },
  {
    "name": "Mallapur",
    "slug": "mallapur",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 3,
    "id": "in-telangana-mallapur",
    "placeId": "in-telangana-mallapur"
  },
  {
    "name": "Uppal",
    "slug": "uppal",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-uppal",
    "placeId": "in-telangana-uppal"
  },
  {
    "name": "Pocharam",
    "slug": "pocharam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-pocharam",
    "placeId": "in-telangana-pocharam"
  },
  {
    "name": "Shamshabad",
    "slug": "shamshabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-shamshabad",
    "placeId": "in-telangana-shamshabad"
  },
  {
    "name": "Kothur",
    "slug": "kothur",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 3,
    "id": "in-telangana-kothur",
    "placeId": "in-telangana-kothur"
  },
  {
    "name": "Jadcherla",
    "slug": "jadcherla",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 3,
    "id": "in-telangana-jadcherla",
    "placeId": "in-telangana-jadcherla"
  },
  {
    "name": "Genome Valley",
    "slug": "genome-valley",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-genome-valley",
    "placeId": "in-telangana-genome-valley"
  },
  {
    "name": "Pashamylaram",
    "slug": "pashamylaram",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-pashamylaram",
    "placeId": "in-telangana-pashamylaram"
  },
  {
    "name": "Adibatla",
    "slug": "adibatla",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2,
    "id": "in-telangana-adibatla",
    "placeId": "in-telangana-adibatla"
  },
  {
    "name": "Naidupeta",
    "slug": "naidupeta",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3,
    "id": "in-andhra-pradesh-naidupeta",
    "placeId": "in-andhra-pradesh-naidupeta"
  },
  {
    "name": "Tada",
    "slug": "tada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3,
    "id": "in-andhra-pradesh-tada",
    "placeId": "in-andhra-pradesh-tada"
  },
  {
    "name": "Renigunta",
    "slug": "renigunta",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3,
    "id": "in-andhra-pradesh-renigunta",
    "placeId": "in-andhra-pradesh-renigunta"
  },
  {
    "name": "Srikalahasti",
    "slug": "srikalahasti",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3,
    "id": "in-andhra-pradesh-srikalahasti",
    "placeId": "in-andhra-pradesh-srikalahasti"
  },
  {
    "name": "Atchutapuram",
    "slug": "atchutapuram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-atchutapuram",
    "placeId": "in-andhra-pradesh-atchutapuram"
  },
  {
    "name": "Parawada",
    "slug": "parawada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3,
    "id": "in-andhra-pradesh-parawada",
    "placeId": "in-andhra-pradesh-parawada"
  },
  {
    "name": "Pydibhimavaram",
    "slug": "pydibhimavaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3,
    "id": "in-andhra-pradesh-pydibhimavaram",
    "placeId": "in-andhra-pradesh-pydibhimavaram"
  },
  {
    "name": "Gajuwaka",
    "slug": "gajuwaka",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-gajuwaka",
    "placeId": "in-andhra-pradesh-gajuwaka"
  },
  {
    "name": "Anakapalle",
    "slug": "anakapalle",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2,
    "id": "in-andhra-pradesh-anakapalle",
    "placeId": "in-andhra-pradesh-anakapalle"
  },
  {
    "name": "Bawal",
    "slug": "bawal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-bawal",
    "placeId": "in-haryana-bawal",
    "region": "NCR"
  },
  {
    "name": "Dharuhera",
    "slug": "dharuhera",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-dharuhera",
    "placeId": "in-haryana-dharuhera",
    "region": "NCR"
  },
  {
    "name": "Khushkhera",
    "slug": "khushkhera",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3,
    "id": "in-rajasthan-khushkhera",
    "placeId": "in-rajasthan-khushkhera"
  },
  {
    "name": "Tapukara",
    "slug": "tapukara",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3,
    "id": "in-rajasthan-tapukara",
    "placeId": "in-rajasthan-tapukara"
  },
  {
    "name": "Yamuna Expressway",
    "slug": "yamuna-expressway",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-yamuna-expressway",
    "placeId": "in-uttar-pradesh-yamuna-expressway"
  },
  {
    "name": "Surajpur",
    "slug": "surajpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-surajpur",
    "placeId": "in-uttar-pradesh-surajpur"
  },
  {
    "name": "Sikandrabad",
    "slug": "sikandrabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 3,
    "id": "in-uttar-pradesh-sikandrabad",
    "placeId": "in-uttar-pradesh-sikandrabad"
  },
  {
    "name": "Sahibabad",
    "slug": "sahibabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2,
    "id": "in-uttar-pradesh-sahibabad",
    "placeId": "in-uttar-pradesh-sahibabad"
  },
  {
    "name": "Pilkhuwa",
    "slug": "pilkhuwa",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 3,
    "id": "in-uttar-pradesh-pilkhuwa",
    "placeId": "in-uttar-pradesh-pilkhuwa"
  },
  {
    "name": "Partapur",
    "slug": "partapur-meerut",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 3,
    "id": "in-uttar-pradesh-partapur-meerut",
    "placeId": "in-uttar-pradesh-partapur-meerut"
  },
  {
    "name": "Kundli",
    "slug": "kundli",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-kundli",
    "placeId": "in-haryana-kundli",
    "region": "NCR"
  },
  {
    "name": "Rai",
    "slug": "rai",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3,
    "id": "in-haryana-rai",
    "placeId": "in-haryana-rai"
  },
  {
    "name": "Barhi",
    "slug": "barhi",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3,
    "id": "in-haryana-barhi",
    "placeId": "in-haryana-barhi"
  },
  {
    "name": "Samalkha",
    "slug": "samalkha",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3,
    "id": "in-haryana-samalkha",
    "placeId": "in-haryana-samalkha"
  },
  {
    "name": "Gharaunda",
    "slug": "gharaunda",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3,
    "id": "in-haryana-gharaunda",
    "placeId": "in-haryana-gharaunda"
  },
  {
    "name": "Shahbad",
    "slug": "shahbad",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3,
    "id": "in-haryana-shahbad",
    "placeId": "in-haryana-shahbad"
  },
  {
    "name": "Ambala Cantt",
    "slug": "ambala-cantt",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2,
    "id": "in-haryana-ambala-cantt",
    "placeId": "in-haryana-ambala-cantt"
  },
  {
    "name": "Baddi",
    "slug": "baddi",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2,
    "id": "in-himachal-pradesh-baddi",
    "placeId": "in-himachal-pradesh-baddi"
  },
  {
    "name": "Nalagarh",
    "slug": "nalagarh",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3,
    "id": "in-himachal-pradesh-nalagarh",
    "placeId": "in-himachal-pradesh-nalagarh"
  },
  {
    "name": "Paonta Sahib",
    "slug": "paonta-sahib",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3,
    "id": "in-himachal-pradesh-paonta-sahib",
    "placeId": "in-himachal-pradesh-paonta-sahib"
  },
  {
    "name": "Kala Amb",
    "slug": "kala-amb",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3,
    "id": "in-himachal-pradesh-kala-amb",
    "placeId": "in-himachal-pradesh-kala-amb"
  },
  {
    "name": "Solan",
    "slug": "solan",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2,
    "id": "in-himachal-pradesh-solan",
    "placeId": "in-himachal-pradesh-solan"
  },
  {
    "name": "Kullu",
    "slug": "kullu",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3,
    "id": "in-himachal-pradesh-kullu",
    "placeId": "in-himachal-pradesh-kullu"
  },
  {
    "name": "Mandi",
    "slug": "mandi",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3,
    "id": "in-himachal-pradesh-mandi",
    "placeId": "in-himachal-pradesh-mandi"
  },
  {
    "name": "Dharamshala",
    "slug": "dharamshala",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2,
    "id": "in-himachal-pradesh-dharamshala",
    "placeId": "in-himachal-pradesh-dharamshala"
  },
  {
    "name": "Dankuni Logistics Park",
    "slug": "dankuni-logistics",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-dankuni-logistics",
    "placeId": "in-west-bengal-dankuni-logistics"
  },
  {
    "name": "Kona Expressway",
    "slug": "kona-expressway",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kona-expressway",
    "placeId": "in-west-bengal-kona-expressway"
  },
  {
    "name": "Domjur",
    "slug": "domjur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-domjur",
    "placeId": "in-west-bengal-domjur"
  },
  {
    "name": "Bagnan",
    "slug": "bagnan",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-bagnan",
    "placeId": "in-west-bengal-bagnan"
  },
  {
    "name": "Taratala Industrial Area",
    "slug": "taratala",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-taratala",
    "placeId": "in-west-bengal-taratala"
  },
  {
    "name": "Kasba Industrial Estate",
    "slug": "kasba",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-kasba",
    "placeId": "in-west-bengal-kasba"
  },
  {
    "name": "Topsia",
    "slug": "topsia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-topsia",
    "placeId": "in-west-bengal-topsia"
  },
  {
    "name": "Tangra",
    "slug": "tangra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-tangra",
    "placeId": "in-west-bengal-tangra"
  },
  {
    "name": "Khardah",
    "slug": "khardah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-khardah",
    "placeId": "in-west-bengal-khardah"
  },
  {
    "name": "Sodepur",
    "slug": "sodepur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-sodepur",
    "placeId": "in-west-bengal-sodepur"
  },
  {
    "name": "Belgharia",
    "slug": "belgharia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-belgharia",
    "placeId": "in-west-bengal-belgharia"
  },
  {
    "name": "Agarpara",
    "slug": "agarpara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-agarpara",
    "placeId": "in-west-bengal-agarpara"
  },
  {
    "name": "Haringhata",
    "slug": "haringhata",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-haringhata",
    "placeId": "in-west-bengal-haringhata"
  },
  {
    "name": "Tribeni",
    "slug": "tribeni",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-tribeni",
    "placeId": "in-west-bengal-tribeni"
  },
  {
    "name": "Bandel",
    "slug": "bandel",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bandel",
    "placeId": "in-west-bengal-bandel"
  },
  {
    "name": "Chinsurah",
    "slug": "chinsurah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-chinsurah",
    "placeId": "in-west-bengal-chinsurah"
  },
  {
    "name": "Konnagar",
    "slug": "konnagar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-konnagar",
    "placeId": "in-west-bengal-konnagar"
  },
  {
    "name": "Uttarpara",
    "slug": "uttarpara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-uttarpara",
    "placeId": "in-west-bengal-uttarpara"
  },
  {
    "name": "Hindmotor",
    "slug": "hindmotor",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-hindmotor",
    "placeId": "in-west-bengal-hindmotor"
  },
  {
    "name": "Burnpur",
    "slug": "burnpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-burnpur",
    "placeId": "in-west-bengal-burnpur"
  },
  {
    "name": "Barakar",
    "slug": "barakar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-barakar",
    "placeId": "in-west-bengal-barakar"
  },
  {
    "name": "Andal",
    "slug": "andal",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-andal",
    "placeId": "in-west-bengal-andal"
  },
  {
    "name": "Pandaveswar",
    "slug": "pandaveswar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-pandaveswar",
    "placeId": "in-west-bengal-pandaveswar"
  },
  {
    "name": "Sutahata",
    "slug": "sutahata",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-sutahata",
    "placeId": "in-west-bengal-sutahata"
  },
  {
    "name": "Durgachak",
    "slug": "durgachak",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-durgachak",
    "placeId": "in-west-bengal-durgachak"
  },
  {
    "name": "Jhargram",
    "slug": "jhargram",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-jhargram",
    "placeId": "in-west-bengal-jhargram"
  },
  {
    "name": "Matigara",
    "slug": "matigara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-matigara",
    "placeId": "in-west-bengal-matigara"
  },
  {
    "name": "Fulbari",
    "slug": "fulbari",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-fulbari",
    "placeId": "in-west-bengal-fulbari"
  },
  {
    "name": "Bagdogra",
    "slug": "bagdogra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bagdogra",
    "placeId": "in-west-bengal-bagdogra"
  },
  {
    "name": "Alipurduar",
    "slug": "alipurduar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-alipurduar",
    "placeId": "in-west-bengal-alipurduar"
  },
  {
    "name": "Bishnupur",
    "slug": "bishnupur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-bishnupur",
    "placeId": "in-west-bengal-bishnupur"
  },
  {
    "name": "Suri",
    "slug": "suri",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-suri",
    "placeId": "in-west-bengal-suri"
  },
  {
    "name": "Bolpur",
    "slug": "bolpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2,
    "id": "in-west-bengal-bolpur",
    "placeId": "in-west-bengal-bolpur"
  },
  {
    "name": "Rampurhat",
    "slug": "rampurhat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3,
    "id": "in-west-bengal-rampurhat",
    "placeId": "in-west-bengal-rampurhat"
  },
  {
    "name": "Paradeep",
    "slug": "paradeep",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-paradeep",
    "placeId": "in-odisha-paradeep"
  },
  {
    "name": "Angul",
    "slug": "angul",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-angul",
    "placeId": "in-odisha-angul"
  },
  {
    "name": "Dhenkanal",
    "slug": "dhenkanal",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 3,
    "id": "in-odisha-dhenkanal",
    "placeId": "in-odisha-dhenkanal"
  },
  {
    "name": "Jajpur",
    "slug": "jajpur",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-jajpur",
    "placeId": "in-odisha-jajpur"
  },
  {
    "name": "Kalinganagar",
    "slug": "kalinganagar",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2,
    "id": "in-odisha-kalinganagar",
    "placeId": "in-odisha-kalinganagar"
  },
  {
    "name": "Rayagada",
    "slug": "rayagada",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 3,
    "id": "in-odisha-rayagada",
    "placeId": "in-odisha-rayagada"
  },
  {
    "name": "Barauni",
    "slug": "barauni",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2,
    "id": "in-bihar-barauni",
    "placeId": "in-bihar-barauni"
  },
  {
    "name": "Bihta",
    "slug": "bihta",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 3,
    "id": "in-bihar-bihta",
    "placeId": "in-bihar-bihta"
  },
  {
    "name": "Gamharia",
    "slug": "gamharia",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 3,
    "id": "in-jharkhand-gamharia",
    "placeId": "in-jharkhand-gamharia"
  },
  {
    "name": "Ramgarh",
    "slug": "ramgarh",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2,
    "id": "in-jharkhand-ramgarh",
    "placeId": "in-jharkhand-ramgarh"
  },
  {
    "name": "Dhanbad",
    "slug": "dhanbad",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 1,
    "id": "in-jharkhand-dhanbad",
    "placeId": "in-jharkhand-dhanbad"
  },
  {
    "name": "Mandi Deep",
    "slug": "mandi-deep",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2,
    "id": "in-madhya-pradesh-mandi-deep",
    "placeId": "in-madhya-pradesh-mandi-deep"
  },
  {
    "name": "Malanpur",
    "slug": "malanpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 3,
    "id": "in-madhya-pradesh-malanpur",
    "placeId": "in-madhya-pradesh-malanpur"
  },
  {
    "name": "Govindpura",
    "slug": "govindpura",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 3,
    "id": "in-madhya-pradesh-govindpura",
    "placeId": "in-madhya-pradesh-govindpura"
  },
  {
    "name": "Bhilai",
    "slug": "bhilai",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 1,
    "id": "in-chhattisgarh-bhilai",
    "placeId": "in-chhattisgarh-bhilai"
  },
  {
    "name": "Urla",
    "slug": "urla",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 3,
    "id": "in-chhattisgarh-urla",
    "placeId": "in-chhattisgarh-urla"
  },
  {
    "name": "Siltara",
    "slug": "siltara",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 3,
    "id": "in-chhattisgarh-siltara",
    "placeId": "in-chhattisgarh-siltara"
  },
  {
    "name": "Aluva",
    "slug": "aluva",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-aluva",
    "placeId": "in-kerala-aluva"
  },
  {
    "name": "Kalamassery",
    "slug": "kalamassery",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-kalamassery",
    "placeId": "in-kerala-kalamassery"
  },
  {
    "name": "Kakkanad",
    "slug": "kakkanad",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2,
    "id": "in-kerala-kakkanad",
    "placeId": "in-kerala-kakkanad"
  },
  {
    "name": "Angamaly",
    "slug": "angamaly",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3,
    "id": "in-kerala-angamaly",
    "placeId": "in-kerala-angamaly"
  },
  {
    "name": "Kanjikode",
    "slug": "kanjikode",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3,
    "id": "in-kerala-kanjikode",
    "placeId": "in-kerala-kanjikode"
  },
  {
    "name": "Aroor",
    "slug": "aroor",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3,
    "id": "in-kerala-aroor",
    "placeId": "in-kerala-aroor"
  },
  {
    "name": "Cherthala",
    "slug": "cherthala",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3,
    "id": "in-kerala-cherthala",
    "placeId": "in-kerala-cherthala"
  },
  {
    "name": "Beypore",
    "slug": "beypore",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3,
    "id": "in-kerala-beypore",
    "placeId": "in-kerala-beypore"
  },
  {
    "name": "Mandi Gobindgarh",
    "slug": "mandi-gobindgarh",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-mandi-gobindgarh",
    "placeId": "in-punjab-mandi-gobindgarh"
  },
  {
    "name": "Phagwara",
    "slug": "phagwara",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-phagwara",
    "placeId": "in-punjab-phagwara"
  },
  {
    "name": "Dera Bassi",
    "slug": "dera-bassi",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2,
    "id": "in-punjab-dera-bassi",
    "placeId": "in-punjab-dera-bassi"
  },
  {
    "name": "Lalru",
    "slug": "lalru",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 3,
    "id": "in-punjab-lalru",
    "placeId": "in-punjab-lalru"
  },
  {
    "name": "SIDCUL Haridwar",
    "slug": "sidcul-haridwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-sidcul-haridwar",
    "placeId": "in-uttarakhand-sidcul-haridwar"
  },
  {
    "name": "SIDCUL Pantnagar",
    "slug": "sidcul-pantnagar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2,
    "id": "in-uttarakhand-sidcul-pantnagar",
    "placeId": "in-uttarakhand-sidcul-pantnagar"
  },
  {
    "name": "Sitarganj",
    "slug": "sitarganj",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 3,
    "id": "in-uttarakhand-sitarganj",
    "placeId": "in-uttarakhand-sitarganj"
  },
  {
    "name": "Kotdwar",
    "slug": "kotdwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 3,
    "id": "in-uttarakhand-kotdwar",
    "placeId": "in-uttarakhand-kotdwar"
  },
  {
    "name": "Vikas Nagar",
    "slug": "vikas-nagar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 3,
    "id": "in-uttarakhand-vikas-nagar",
    "placeId": "in-uttarakhand-vikas-nagar"
  },
  {
    "name": "Numaligarh",
    "slug": "numaligarh",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 3,
    "id": "in-assam-numaligarh",
    "placeId": "in-assam-numaligarh"
  },
  {
    "name": "Bongaigaon",
    "slug": "bongaigaon",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-bongaigaon",
    "placeId": "in-assam-bongaigaon"
  },
  {
    "name": "Tinsukia",
    "slug": "tinsukia",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-tinsukia",
    "placeId": "in-assam-tinsukia"
  },
  {
    "name": "Digboi",
    "slug": "digboi",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 3,
    "id": "in-assam-digboi",
    "placeId": "in-assam-digboi"
  },
  {
    "name": "Duliajan",
    "slug": "duliajan",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 3,
    "id": "in-assam-duliajan",
    "placeId": "in-assam-duliajan"
  },
  {
    "name": "Tezpur",
    "slug": "tezpur",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-tezpur",
    "placeId": "in-assam-tezpur"
  },
  {
    "name": "Jorhat",
    "slug": "jorhat",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2,
    "id": "in-assam-jorhat",
    "placeId": "in-assam-jorhat"
  },
  {
    "name": "Kohima",
    "slug": "kohima",
    "state": "Nagaland",
    "stateSlug": "nagaland",
    "tier": 2,
    "id": "in-nagaland-kohima",
    "placeId": "in-nagaland-kohima"
  },
  {
    "name": "Sitapura",
    "slug": "sitapura",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-sitapura",
    "placeId": "in-rajasthan-sitapura"
  },
  {
    "name": "Mansarovar Industrial Area",
    "slug": "mansarovar-industrial",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-mansarovar-industrial",
    "placeId": "in-rajasthan-mansarovar-industrial"
  },
  {
    "name": "VKIA Jaipur",
    "slug": "vkia-jaipur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-vkia-jaipur",
    "placeId": "in-rajasthan-vkia-jaipur"
  },
  {
    "name": "Boranada",
    "slug": "boranada",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2,
    "id": "in-rajasthan-boranada",
    "placeId": "in-rajasthan-boranada"
  },
  {
    "name": "Kankroli",
    "slug": "kankroli",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3,
    "id": "in-rajasthan-kankroli",
    "placeId": "in-rajasthan-kankroli"
  },
  {
    "name": "Sukher",
    "slug": "sukher",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3,
    "id": "in-rajasthan-sukher",
    "placeId": "in-rajasthan-sukher"
  }
];

export const ACS_STATES: string[] = [
  "Andaman",
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

export function getCityBySlug(slug: string): ACSCity | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  // 1. Direct slug match
  const direct = ACS_CITIES.find((c) => c.slug.toLowerCase() === normalized);
  if (direct) return direct;

  // 2. Direct name match
  const nameMatch = ACS_CITIES.find((c) => c.name.toLowerCase() === normalized);
  if (nameMatch) return nameMatch;

  // 3. Alias match
  return ACS_CITIES.find((c) =>
    c.aliases?.some(
      (a) =>
        a.toLowerCase() === normalized ||
        a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === normalized
    )
  );
}

export function getCitiesByState(state: string): ACSCity[] {
  return ACS_CITIES.filter((c) => c.state.toLowerCase() === state.toLowerCase());
}

export function getCitiesByRegion(region: string): ACSCity[] {
  return ACS_CITIES.filter((c) => c.region?.toLowerCase() === region.toLowerCase());
}

export function getCitiesByTier(tier: 1 | 2 | 3): ACSCity[] {
  return ACS_CITIES.filter((c) => c.tier === tier);
}

export function getCityPlaceId(city: ACSCity): string {
  return city.placeId || city.id || `in-${city.stateSlug}-${city.slug}`;
}
