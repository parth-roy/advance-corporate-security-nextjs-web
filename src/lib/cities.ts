// src/lib/cities.ts
// ============================================================
// ACS — Master 800+ Pan-India Cities & Locations Dataset
// Covers all Indian States, UTs, Census Metros, Industrial Corridors & SEZs
// Total locations: 828
// ============================================================

export interface ACSCity {
  name: string;
  slug: string;
  state: string;
  stateSlug: string;
  tier: 1 | 2 | 3; // 1 = Metro / Major Hub, 2 = Tier-2 City / Industrial Area, 3 = Emerging Hub
}

export const ACS_CITIES: ACSCity[] = [
  {
    "name": "Port Blair",
    "slug": "port-blair",
    "state": "Andaman",
    "stateSlug": "andaman",
    "tier": 2
  },
  {
    "name": "Visakhapatnam",
    "slug": "visakhapatnam",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Vijayawada",
    "slug": "vijayawada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Guntur",
    "slug": "guntur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Nellore",
    "slug": "nellore",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Kurnool",
    "slug": "kurnool",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Rajahmundry",
    "slug": "rajahmundry",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Kakinada",
    "slug": "kakinada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Tirupati",
    "slug": "tirupati",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Anantapur",
    "slug": "anantapur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Vizianagaram",
    "slug": "vizianagaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Ongole",
    "slug": "ongole",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Eluru",
    "slug": "eluru",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Nandyal",
    "slug": "nandyal",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Chittoor",
    "slug": "chittoor",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Machilipatnam",
    "slug": "machilipatnam",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Tenali",
    "slug": "tenali",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Proddatur",
    "slug": "proddatur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Srikakulam",
    "slug": "srikakulam",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Gudivada",
    "slug": "gudivada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Guwahati",
    "slug": "guwahati",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Silchar",
    "slug": "silchar",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Dibrugarh",
    "slug": "dibrugarh",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Nagaon",
    "slug": "nagaon",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Patna",
    "slug": "patna",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Gaya",
    "slug": "gaya",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Bhagalpur",
    "slug": "bhagalpur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Muzaffarpur",
    "slug": "muzaffarpur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Darbhanga",
    "slug": "darbhanga",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Purnia",
    "slug": "purnia",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Munger",
    "slug": "munger",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Chapra",
    "slug": "chapra",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Sasaram",
    "slug": "sasaram",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Bettiah",
    "slug": "bettiah",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Motihari",
    "slug": "motihari",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Chandigarh",
    "slug": "chandigarh",
    "state": "Chandigarh",
    "stateSlug": "chandigarh",
    "tier": 2
  },
  {
    "name": "Raipur",
    "slug": "raipur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Bhilai Nagar",
    "slug": "bhilai-nagar",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Korba",
    "slug": "korba",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Bilaspur",
    "slug": "bilaspur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Durg",
    "slug": "durg",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Raigarh",
    "slug": "raigarh",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Jagdalpur",
    "slug": "jagdalpur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "New Delhi",
    "slug": "new-delhi",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Delhi",
    "slug": "delhi",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Ghaziabad",
    "slug": "ghaziabad",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Noida",
    "slug": "noida",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Gurugram",
    "slug": "gurugram",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Faridabad",
    "slug": "faridabad",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Noida Extension",
    "slug": "noida-extension",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Ahmedabad",
    "slug": "ahmedabad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Surat",
    "slug": "surat",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Vadodara",
    "slug": "vadodara",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Rajkot",
    "slug": "rajkot",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Bhavnagar",
    "slug": "bhavnagar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Jamnagar",
    "slug": "jamnagar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Junagadh",
    "slug": "junagadh",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Gandhinagar",
    "slug": "gandhinagar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Anand",
    "slug": "anand",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Bharuch",
    "slug": "bharuch",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Ankleshwar",
    "slug": "ankleshwar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Vapi",
    "slug": "vapi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Gandhidham",
    "slug": "gandhidham",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Morvi",
    "slug": "morvi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Nadiad",
    "slug": "nadiad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Navsari",
    "slug": "navsari",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Bhuj",
    "slug": "bhuj",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Godhra",
    "slug": "godhra",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Amreli",
    "slug": "amreli",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Gurugram",
    "slug": "gurugram-hr",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Faridabad",
    "slug": "faridabad-hr",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Rohtak",
    "slug": "rohtak",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Hisar",
    "slug": "hisar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Panipat",
    "slug": "panipat",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Karnal",
    "slug": "karnal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Sonipat",
    "slug": "sonipat",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Ambala",
    "slug": "ambala",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Panchkula",
    "slug": "panchkula",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Yamunanagar",
    "slug": "yamunanagar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Bhiwani",
    "slug": "bhiwani",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Jind",
    "slug": "jind",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Rewari",
    "slug": "rewari",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Shimla",
    "slug": "shimla",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2
  },
  {
    "name": "Srinagar",
    "slug": "srinagar",
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "tier": 2
  },
  {
    "name": "Jammu",
    "slug": "jammu",
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "tier": 2
  },
  {
    "name": "Ranchi",
    "slug": "ranchi",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Jamshedpur",
    "slug": "jamshedpur",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Bokaro Steel City",
    "slug": "bokaro-steel-city",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Hazaribag",
    "slug": "hazaribag",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Deoghar",
    "slug": "deoghar",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Bengaluru",
    "slug": "bengaluru",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Mysore",
    "slug": "mysore",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Hubli",
    "slug": "hubli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Mangalore",
    "slug": "mangalore",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Belgaum",
    "slug": "belgaum",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Davangere",
    "slug": "davangere",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Bellary",
    "slug": "bellary",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Bijapur",
    "slug": "bijapur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Shimoga",
    "slug": "shimoga",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Tumkur",
    "slug": "tumkur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Hospet",
    "slug": "hospet",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Udupi",
    "slug": "udupi",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Kolar",
    "slug": "kolar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Mandya",
    "slug": "mandya",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Hassan",
    "slug": "hassan",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Kochi",
    "slug": "kochi",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Thiruvananthapuram",
    "slug": "thiruvananthapuram",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Kozhikode",
    "slug": "kozhikode",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Kollam",
    "slug": "kollam",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Thrissur",
    "slug": "thrissur",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Alappuzha",
    "slug": "alappuzha",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Palakkad",
    "slug": "palakkad",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Indore",
    "slug": "indore",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Bhopal",
    "slug": "bhopal",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Gwalior",
    "slug": "gwalior",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Jabalpur",
    "slug": "jabalpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Ujjain",
    "slug": "ujjain",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Dewas",
    "slug": "dewas",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Satna",
    "slug": "satna",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Ratlam",
    "slug": "ratlam",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Sagar",
    "slug": "sagar",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Rewa",
    "slug": "rewa",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Singrauli",
    "slug": "singrauli",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Morena",
    "slug": "morena",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Guna",
    "slug": "guna",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Shivpuri",
    "slug": "shivpuri",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Chhindwara",
    "slug": "chhindwara",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Mumbai",
    "slug": "mumbai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Pune",
    "slug": "pune",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Nagpur",
    "slug": "nagpur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Nashik",
    "slug": "nashik",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Thane",
    "slug": "thane",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Navi Mumbai",
    "slug": "navi-mumbai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Aurangabad",
    "slug": "aurangabad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Pimpri-Chinchwad",
    "slug": "pimpri-chinchwad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Solapur",
    "slug": "solapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Amravati",
    "slug": "amravati",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Kolhapur",
    "slug": "kolhapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Ulhasnagar",
    "slug": "ulhasnagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Bhiwandi",
    "slug": "bhiwandi",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Jalgaon",
    "slug": "jalgaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Akola",
    "slug": "akola",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Ahmednagar",
    "slug": "ahmednagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Sangli",
    "slug": "sangli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Latur",
    "slug": "latur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Dhule",
    "slug": "dhule",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Chandrapur",
    "slug": "chandrapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Nanded",
    "slug": "nanded",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Satara",
    "slug": "satara",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Wardha",
    "slug": "wardha",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Imphal",
    "slug": "imphal",
    "state": "Manipur",
    "stateSlug": "manipur",
    "tier": 2
  },
  {
    "name": "Shillong",
    "slug": "shillong",
    "state": "Meghalaya",
    "stateSlug": "meghalaya",
    "tier": 2
  },
  {
    "name": "Bhubaneswar",
    "slug": "bhubaneswar",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Cuttack",
    "slug": "cuttack",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Rourkela",
    "slug": "rourkela",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Brahmapur",
    "slug": "brahmapur",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Sambalpur",
    "slug": "sambalpur",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Puri",
    "slug": "puri",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Balasore",
    "slug": "balasore",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Baripada",
    "slug": "baripada",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Bhadrak",
    "slug": "bhadrak",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Jharsuguda",
    "slug": "jharsuguda",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Puducherry",
    "slug": "puducherry",
    "state": "Puducherry",
    "stateSlug": "puducherry",
    "tier": 2
  },
  {
    "name": "Ludhiana",
    "slug": "ludhiana",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Amritsar",
    "slug": "amritsar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Jalandhar",
    "slug": "jalandhar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Patiala",
    "slug": "patiala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Bathinda",
    "slug": "bathinda",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Mohali",
    "slug": "mohali",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Pathankot",
    "slug": "pathankot",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Hoshiarpur",
    "slug": "hoshiarpur",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Moga",
    "slug": "moga",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Firozpur",
    "slug": "firozpur",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Kapurthala",
    "slug": "kapurthala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Jaipur",
    "slug": "jaipur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Jodhpur",
    "slug": "jodhpur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Kota",
    "slug": "kota",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Bikaner",
    "slug": "bikaner",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Ajmer",
    "slug": "ajmer",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Udaipur",
    "slug": "udaipur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Bhilwara",
    "slug": "bhilwara",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Alwar",
    "slug": "alwar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Bharatpur",
    "slug": "bharatpur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Neemrana",
    "slug": "neemrana",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Bhiwadi",
    "slug": "bhiwadi",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Sikar",
    "slug": "sikar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Pali",
    "slug": "pali",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Ganganagar",
    "slug": "ganganagar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Chittorgarh",
    "slug": "chittorgarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Nagaur",
    "slug": "nagaur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Gangtok",
    "slug": "gangtok",
    "state": "Sikkim",
    "stateSlug": "sikkim",
    "tier": 2
  },
  {
    "name": "Chennai",
    "slug": "chennai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Coimbatore",
    "slug": "coimbatore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Madurai",
    "slug": "madurai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Tiruchirappalli",
    "slug": "tiruchirappalli",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Salem",
    "slug": "salem",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Tirunelveli",
    "slug": "tirunelveli",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Tiruppur",
    "slug": "tiruppur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Vellore",
    "slug": "vellore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Erode",
    "slug": "erode",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Thoothukudi",
    "slug": "thoothukudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Thanjavur",
    "slug": "thanjavur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Kancheepuram",
    "slug": "kancheepuram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Hosur",
    "slug": "hosur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Oragadam",
    "slug": "oragadam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Sriperumbudur",
    "slug": "sriperumbudur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Dindigul",
    "slug": "dindigul",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Cuddalore",
    "slug": "cuddalore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Nagercoil",
    "slug": "nagercoil",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Tiruvannamalai",
    "slug": "tiruvannamalai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Hyderabad",
    "slug": "hyderabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Secunderabad",
    "slug": "secunderabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Warangal",
    "slug": "warangal",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Nizamabad",
    "slug": "nizamabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Karimnagar",
    "slug": "karimnagar",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Khammam",
    "slug": "khammam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Ramagundam",
    "slug": "ramagundam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Agartala",
    "slug": "agartala",
    "state": "Tripura",
    "stateSlug": "tripura",
    "tier": 2
  },
  {
    "name": "Lucknow",
    "slug": "lucknow",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Kanpur",
    "slug": "kanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Agra",
    "slug": "agra",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Varanasi",
    "slug": "varanasi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Allahabad",
    "slug": "allahabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Meerut",
    "slug": "meerut",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Noida",
    "slug": "noida-up",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Greater Noida",
    "slug": "greater-noida",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Ghaziabad",
    "slug": "ghaziabad-up",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Bareilly",
    "slug": "bareilly",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Moradabad",
    "slug": "moradabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Aligarh",
    "slug": "aligarh",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Saharanpur",
    "slug": "saharanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Gorakhpur",
    "slug": "gorakhpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Firozabad",
    "slug": "firozabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Jhansi",
    "slug": "jhansi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Muzaffarnagar",
    "slug": "muzaffarnagar",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Mathura",
    "slug": "mathura",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Shahjahanpur",
    "slug": "shahjahanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Rampur",
    "slug": "rampur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Hapur",
    "slug": "hapur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Etawah",
    "slug": "etawah",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Bulandshahr",
    "slug": "bulandshahr",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Faizabad",
    "slug": "faizabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Sitapur",
    "slug": "sitapur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Unnao",
    "slug": "unnao",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Jaunpur",
    "slug": "jaunpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Azamgarh",
    "slug": "azamgarh",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Gonda",
    "slug": "gonda",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Sultanpur",
    "slug": "sultanpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Dehradun",
    "slug": "dehradun",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Haridwar",
    "slug": "haridwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Haldwani",
    "slug": "haldwani",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Rudrapur",
    "slug": "rudrapur",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Roorkee",
    "slug": "roorkee",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Kolkata",
    "slug": "kolkata",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Howrah",
    "slug": "howrah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Asansol",
    "slug": "asansol",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Durgapur",
    "slug": "durgapur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Siliguri",
    "slug": "siliguri",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Haldia",
    "slug": "haldia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Barrackpore",
    "slug": "barrackpore",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Kharagpur",
    "slug": "kharagpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Barasat",
    "slug": "barasat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Darjeeling",
    "slug": "darjeeling",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Jalpaiguri",
    "slug": "jalpaiguri",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Kalyani",
    "slug": "kalyani",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Medinipur",
    "slug": "medinipur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Malda",
    "slug": "malda",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Baharampur",
    "slug": "baharampur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Raiganj",
    "slug": "raiganj",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Serampore",
    "slug": "serampore",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Chandannagar",
    "slug": "chandannagar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Santipur",
    "slug": "santipur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Habra",
    "slug": "habra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bhatpara",
    "slug": "bhatpara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Panihati",
    "slug": "panihati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Kamarhati",
    "slug": "kamarhati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Naihati",
    "slug": "naihati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bankura",
    "slug": "bankura",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Puruliya",
    "slug": "puruliya",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Raniganj",
    "slug": "raniganj",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Balurghat",
    "slug": "balurghat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Cooch Behar",
    "slug": "cooch-behar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Sri City",
    "slug": "sri-city",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Kadapa",
    "slug": "kadapa",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Adoni",
    "slug": "adoni",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Mahbubnagar",
    "slug": "mahbubnagar",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Hindupur",
    "slug": "hindupur",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Bhimavaram",
    "slug": "bhimavaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Madanapalle",
    "slug": "madanapalle",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Nalgonda",
    "slug": "nalgonda",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Guntakal",
    "slug": "guntakal",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Dharmavaram",
    "slug": "dharmavaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Adilabad",
    "slug": "adilabad",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Narasaraopet",
    "slug": "narasaraopet",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Tadpatri",
    "slug": "tadpatri",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Suryapet",
    "slug": "suryapet",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Tadepalligudem",
    "slug": "tadepalligudem",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Miryalaguda",
    "slug": "miryalaguda",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Chilakaluripet",
    "slug": "chilakaluripet",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Hajipur",
    "slug": "hajipur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Raxaul",
    "slug": "raxaul",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Biharsharif",
    "slug": "biharsharif",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Arrah",
    "slug": "arrah",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Begusarai",
    "slug": "begusarai",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Katihar",
    "slug": "katihar",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Dinapur Nizamat",
    "slug": "dinapur-nizamat",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Saharsa",
    "slug": "saharsa",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Dehri",
    "slug": "dehri",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Siwan",
    "slug": "siwan",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Bagaha",
    "slug": "bagaha",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Kishanganj",
    "slug": "kishanganj",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Jamalpur",
    "slug": "jamalpur",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Jehanabad",
    "slug": "jehanabad",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Buxar",
    "slug": "buxar",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Aurangabad",
    "slug": "aurangabad-bihar",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Rajnandgaon",
    "slug": "rajnandgaon",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Ambikapur",
    "slug": "ambikapur",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 2
  },
  {
    "name": "Kirari Suleman Nagar",
    "slug": "kirari-suleman-nagar",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "NDMC",
    "slug": "ndmc",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Karawal Nagar",
    "slug": "karawal-nagar",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Nangloi Jat",
    "slug": "nangloi-jat",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Bhalswa Jahangir Pur",
    "slug": "bhalswa-jahangir-pur",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Sultan Pur Majra",
    "slug": "sultan-pur-majra",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Hastsal",
    "slug": "hastsal",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Deoli",
    "slug": "deoli",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Dallo Pura",
    "slug": "dallo-pura",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Burari",
    "slug": "burari",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Mustafabad",
    "slug": "mustafabad",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Gokal Pur",
    "slug": "gokal-pur",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Mandoli",
    "slug": "mandoli",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Delhi Cantonment",
    "slug": "delhi-cantonment",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Sanand",
    "slug": "sanand",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Mundra",
    "slug": "mundra",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Mahesana",
    "slug": "mahesana",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Surendranagar Dudhrej",
    "slug": "surendranagar-dudhrej",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Veraval",
    "slug": "veraval",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Porbandar",
    "slug": "porbandar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Botad",
    "slug": "botad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Patan",
    "slug": "patan",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Palanpur",
    "slug": "palanpur",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Jetpur Navagadh",
    "slug": "jetpur-navagadh",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Valsad",
    "slug": "valsad",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Kalol",
    "slug": "kalol",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Gondal",
    "slug": "gondal",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Deesa",
    "slug": "deesa",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Manesar",
    "slug": "manesar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Sirsa",
    "slug": "sirsa",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Bahadurgarh",
    "slug": "bahadurgarh",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Thanesar",
    "slug": "thanesar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Kaithal",
    "slug": "kaithal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Palwal",
    "slug": "palwal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Jagadhri",
    "slug": "jagadhri",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Ambala Sadar",
    "slug": "ambala-sadar",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Anantnag",
    "slug": "anantnag",
    "state": "Jammu and Kashmir",
    "stateSlug": "jammu-and-kashmir",
    "tier": 2
  },
  {
    "name": "Bokaro Steel",
    "slug": "bokaro-steel",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Mango",
    "slug": "mango",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Adityapur",
    "slug": "adityapur",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Chas",
    "slug": "chas",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Giridih",
    "slug": "giridih",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Peenya",
    "slug": "peenya",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Tumakuru",
    "slug": "tumakuru",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Hubli and Dharwad",
    "slug": "hubli-and-dharwad",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Gulbarga",
    "slug": "gulbarga",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Davanagere",
    "slug": "davanagere",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Raichur",
    "slug": "raichur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Bidar",
    "slug": "bidar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Gadag and Betigeri",
    "slug": "gadag-and-betigeri",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Bhadravati",
    "slug": "bhadravati",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Robertson Pet",
    "slug": "robertson-pet",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Chitradurga",
    "slug": "chitradurga",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Chikmagalur",
    "slug": "chikmagalur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Bagalkot",
    "slug": "bagalkot",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Ranibennur",
    "slug": "ranibennur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Gangawati",
    "slug": "gangawati",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Pithampur",
    "slug": "pithampur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Murwara",
    "slug": "murwara",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Burhanpur",
    "slug": "burhanpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Khandwa",
    "slug": "khandwa",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Bhind",
    "slug": "bhind",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Vidisha",
    "slug": "vidisha",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Mandsaur",
    "slug": "mandsaur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Chhattarpur",
    "slug": "chhattarpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Neemuch",
    "slug": "neemuch",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Damoh",
    "slug": "damoh",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Hoshangabad",
    "slug": "hoshangabad",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Sehore",
    "slug": "sehore",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Khargone",
    "slug": "khargone",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Betul",
    "slug": "betul",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Seoni",
    "slug": "seoni",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Datia",
    "slug": "datia",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Nagda",
    "slug": "nagda",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "JNPT",
    "slug": "jnpt",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Chakan",
    "slug": "chakan",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Kalyan and Dombivali",
    "slug": "kalyan-and-dombivali",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Vasai Virar",
    "slug": "vasai-virar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Mira and Bhayander",
    "slug": "mira-and-bhayander",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Nanded Waghala",
    "slug": "nanded-waghala",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Kolapur",
    "slug": "kolapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Sangli Miraj Kupwad",
    "slug": "sangli-miraj-kupwad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Malegaon",
    "slug": "malegaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Ahmadnagar",
    "slug": "ahmadnagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Parbhani",
    "slug": "parbhani",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Ichalkaranji",
    "slug": "ichalkaranji",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Jalna",
    "slug": "jalna",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Ambernath",
    "slug": "ambernath",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Navi Mumbai Panvel Raigad",
    "slug": "navi-mumbai-panvel-raigad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Bhusawal",
    "slug": "bhusawal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Panvel",
    "slug": "panvel",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Badalapur",
    "slug": "badalapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Bid",
    "slug": "bid",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Gondiya",
    "slug": "gondiya",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Barshi",
    "slug": "barshi",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Yavatmal",
    "slug": "yavatmal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Achalpur",
    "slug": "achalpur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Osmanabad",
    "slug": "osmanabad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Nandurbar",
    "slug": "nandurbar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Udgir",
    "slug": "udgir",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Hinganghat",
    "slug": "hinganghat",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Aizawl",
    "slug": "aizawl",
    "state": "Mizoram",
    "stateSlug": "mizoram",
    "tier": 2
  },
  {
    "name": "Dimapur",
    "slug": "dimapur",
    "state": "Nagaland",
    "stateSlug": "nagaland",
    "tier": 2
  },
  {
    "name": "Brahmapur Town",
    "slug": "brahmapur-town",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Raurkela",
    "slug": "raurkela",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Raurkela Industrial Township",
    "slug": "raurkela-industrial-township",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Puri Town",
    "slug": "puri-town",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Baleshwar",
    "slug": "baleshwar",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Ozhukarai",
    "slug": "ozhukarai",
    "state": "Puducherry",
    "stateSlug": "puducherry",
    "tier": 2
  },
  {
    "name": "Rajpura",
    "slug": "rajpura",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Batala",
    "slug": "batala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Abohar",
    "slug": "abohar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Malerkotla",
    "slug": "malerkotla",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Khanna",
    "slug": "khanna",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Muktsar",
    "slug": "muktsar",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Barnala",
    "slug": "barnala",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Tonk",
    "slug": "tonk",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Kishangarh",
    "slug": "kishangarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Hanumangarh",
    "slug": "hanumangarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Beawar",
    "slug": "beawar",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Dhaulpur",
    "slug": "dhaulpur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Sawai Madhopur",
    "slug": "sawai-madhopur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Churu",
    "slug": "churu",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Gangapur",
    "slug": "gangapur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Jhunjhunun",
    "slug": "jhunjhunun",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Baran",
    "slug": "baran",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Chittaurgarh",
    "slug": "chittaurgarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Hindaun",
    "slug": "hindaun",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Bundi",
    "slug": "bundi",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Sujangarh",
    "slug": "sujangarh",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Banswara",
    "slug": "banswara",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Ambattur",
    "slug": "ambattur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Avadi",
    "slug": "avadi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Tiruvottiyur",
    "slug": "tiruvottiyur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Thoothukkudi",
    "slug": "thoothukkudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Pallavaram",
    "slug": "pallavaram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Tambaram",
    "slug": "tambaram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Alandur",
    "slug": "alandur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Kumbakonam",
    "slug": "kumbakonam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Rajapalayam",
    "slug": "rajapalayam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Kurichi",
    "slug": "kurichi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Madavaram",
    "slug": "madavaram",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Pudukkottai",
    "slug": "pudukkottai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Ambur",
    "slug": "ambur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Karaikkudi",
    "slug": "karaikkudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Neyveli",
    "slug": "neyveli",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Nagapattinam",
    "slug": "nagapattinam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Medchal",
    "slug": "medchal",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Zaheerabad",
    "slug": "zaheerabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Dadri",
    "slug": "dadri",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Jewar",
    "slug": "jewar",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Loni",
    "slug": "loni",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Maunath Bhanjan",
    "slug": "maunath-bhanjan",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Farrukhabad and Fatehgarh",
    "slug": "farrukhabad-and-fatehgarh",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Mirzapur and Vindhyachal",
    "slug": "mirzapur-and-vindhyachal",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Sambhal",
    "slug": "sambhal",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Amroha",
    "slug": "amroha",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Fatehpur",
    "slug": "fatehpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Rae Bareli",
    "slug": "rae-bareli",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Khora",
    "slug": "khora",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Orai",
    "slug": "orai",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Bahraich",
    "slug": "bahraich",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Budaun",
    "slug": "budaun",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Banda",
    "slug": "banda",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Lakhimpur",
    "slug": "lakhimpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Hathras",
    "slug": "hathras",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Lalitpur",
    "slug": "lalitpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Modinagar",
    "slug": "modinagar",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Deoria",
    "slug": "deoria",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Pilibhit",
    "slug": "pilibhit",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Hardoi",
    "slug": "hardoi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Mainpuri",
    "slug": "mainpuri",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Etah",
    "slug": "etah",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Basti",
    "slug": "basti",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Chandausi",
    "slug": "chandausi",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Akbarpur",
    "slug": "akbarpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Khurja",
    "slug": "khurja",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Ghazipur",
    "slug": "ghazipur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Mughalsarai",
    "slug": "mughalsarai",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Kanpur Cantonment",
    "slug": "kanpur-cantonment",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Shikohabad",
    "slug": "shikohabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Shamli",
    "slug": "shamli",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Ballia",
    "slug": "ballia",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Baraut",
    "slug": "baraut",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Kasganj",
    "slug": "kasganj",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Hardwar",
    "slug": "hardwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Haldwani and Kathgodam",
    "slug": "haldwani-and-kathgodam",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Kashipur",
    "slug": "kashipur",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Dankuni",
    "slug": "dankuni",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Dhulagarh",
    "slug": "dhulagarh",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Sankrail",
    "slug": "sankrail",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Uluberia",
    "slug": "uluberia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Panitanki",
    "slug": "panitanki",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Maheshtala",
    "slug": "maheshtala",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Rajpur Sonarpur",
    "slug": "rajpur-sonarpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "South Dum Dum",
    "slug": "south-dum-dum",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Rajarhat Gopalpur",
    "slug": "rajarhat-gopalpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Kulti",
    "slug": "kulti",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bally",
    "slug": "bally",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "North Dum Dum",
    "slug": "north-dum-dum",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Baranagar",
    "slug": "baranagar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "English Bazar",
    "slug": "english-bazar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Madhyamgram",
    "slug": "madhyamgram",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Hugli and Chinsurah",
    "slug": "hugli-and-chinsurah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Uttarpara Kotrung",
    "slug": "uttarpara-kotrung",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Barrackpur",
    "slug": "barrackpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Jamuria",
    "slug": "jamuria",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "North Barrackpur",
    "slug": "north-barrackpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Nabadwip",
    "slug": "nabadwip",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Basirhat",
    "slug": "basirhat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Halisahar",
    "slug": "halisahar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Rishra",
    "slug": "rishra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Ashokenagar Kalyangarh",
    "slug": "ashokenagar-kalyangarh",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Baidyabati",
    "slug": "baidyabati",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Kanchrapara",
    "slug": "kanchrapara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Dabgram",
    "slug": "dabgram",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Darjiling",
    "slug": "darjiling",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Titagarh",
    "slug": "titagarh",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Dum Dum",
    "slug": "dum-dum",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bally Town",
    "slug": "bally-town",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Champdani",
    "slug": "champdani",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bongaon",
    "slug": "bongaon",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Khardaha",
    "slug": "khardaha",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bansberia",
    "slug": "bansberia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bhadreswar",
    "slug": "bhadreswar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Salt Lake",
    "slug": "salt-lake",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "New Town",
    "slug": "new-town",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Esplanade Metro",
    "slug": "esplanade",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Garia",
    "slug": "garia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Behala",
    "slug": "behala",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Jadavpur",
    "slug": "jadavpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Rajarhat",
    "slug": "rajarhat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Andheri",
    "slug": "andheri",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Bandra",
    "slug": "bandra",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Borivali",
    "slug": "borivali",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Kalyan",
    "slug": "kalyan",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Ghatkopar",
    "slug": "ghatkopar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Powai",
    "slug": "powai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Dadar",
    "slug": "dadar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Malad",
    "slug": "malad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Dwarka",
    "slug": "dwarka",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Rohini",
    "slug": "rohini",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Gurgaon",
    "slug": "gurgaon",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Saket",
    "slug": "saket",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Janakpuri",
    "slug": "janakpuri",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Laxmi Nagar",
    "slug": "laxmi-nagar",
    "state": "Delhi",
    "stateSlug": "delhi",
    "tier": 2
  },
  {
    "name": "Koramangala",
    "slug": "koramangala",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Indiranagar",
    "slug": "indiranagar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Whitefield",
    "slug": "whitefield",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Jayanagar",
    "slug": "jayanagar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "HSR Layout",
    "slug": "hsr-layout",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Electronic City",
    "slug": "electronic-city",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Marathahalli",
    "slug": "marathahalli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Bellandur",
    "slug": "bellandur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "T Nagar",
    "slug": "t-nagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Velachery",
    "slug": "velachery",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Anna Nagar",
    "slug": "anna-nagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Guindy",
    "slug": "guindy",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "HITEC City",
    "slug": "hitec-city",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Gachibowli",
    "slug": "gachibowli",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Madhapur",
    "slug": "madhapur",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Kukatpally",
    "slug": "kukatpally",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Banjara Hills",
    "slug": "banjara-hills",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Kothrud",
    "slug": "kothrud",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Hadapsar",
    "slug": "hadapsar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Wakad",
    "slug": "wakad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Hinjewadi",
    "slug": "hinjewadi",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Viman Nagar",
    "slug": "viman-nagar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Baner",
    "slug": "baner",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Bhosari",
    "slug": "bhosari",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Talegaon",
    "slug": "talegaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Ranjangaon",
    "slug": "ranjangaon",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Shirwal",
    "slug": "shirwal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Baramati",
    "slug": "baramati",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Kurkumbh",
    "slug": "kurkumbh",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Waluj",
    "slug": "waluj",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Shendra",
    "slug": "shendra",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Butibori",
    "slug": "butibori",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Tarapur",
    "slug": "tarapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Taloja",
    "slug": "taloja",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Rabale",
    "slug": "rabale",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Mahape",
    "slug": "mahape",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Turbhe",
    "slug": "turbhe",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Airoli",
    "slug": "airoli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Boisar",
    "slug": "boisar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Palghar",
    "slug": "palghar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Vasai",
    "slug": "vasai",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Virar",
    "slug": "virar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Mira Bhayandar",
    "slug": "mira-bhayandar",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Badlapur",
    "slug": "badlapur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Dombivli",
    "slug": "dombivli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Uran",
    "slug": "uran",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Pen",
    "slug": "pen",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Roha",
    "slug": "roha",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Mahad",
    "slug": "mahad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Chiplun",
    "slug": "chiplun",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Ratnagiri",
    "slug": "ratnagiri",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Kudal",
    "slug": "kudal",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Karad",
    "slug": "karad",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Phaltan",
    "slug": "phaltan",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Jaysingpur",
    "slug": "jaysingpur",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Miraj",
    "slug": "miraj",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Beed",
    "slug": "beed",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Hingoli",
    "slug": "hingoli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Bhandara",
    "slug": "bhandara",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Gondia",
    "slug": "gondia",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 2
  },
  {
    "name": "Gadchiroli",
    "slug": "gadchiroli",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Washim",
    "slug": "washim",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Buldhana",
    "slug": "buldhana",
    "state": "Maharashtra",
    "stateSlug": "maharashtra",
    "tier": 3
  },
  {
    "name": "Changodar",
    "slug": "changodar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Kadi",
    "slug": "kadi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Halol",
    "slug": "halol",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Savli",
    "slug": "savli",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Dahej",
    "slug": "dahej",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Jhagadia",
    "slug": "jhagadia",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Panoli",
    "slug": "panoli",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Hazira",
    "slug": "hazira",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Sachin",
    "slug": "sachin",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Palsana",
    "slug": "palsana",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Sarigam",
    "slug": "sarigam",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Umbergaon",
    "slug": "umbergaon",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Chhatral",
    "slug": "chhatral",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Unjha",
    "slug": "unjha",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Siddhpur",
    "slug": "siddhpur",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Anjar",
    "slug": "anjar",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Mandvi",
    "slug": "mandvi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Keshod",
    "slug": "keshod",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Jetpur",
    "slug": "jetpur",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Dhoraji",
    "slug": "dhoraji",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Wankaner",
    "slug": "wankaner",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Thangadh",
    "slug": "thangadh",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Wadhwan",
    "slug": "wadhwan",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Limbdi",
    "slug": "limbdi",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Sihor",
    "slug": "sihor",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Mahuva",
    "slug": "mahuva",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 3
  },
  {
    "name": "Dholera",
    "slug": "dholera",
    "state": "Gujarat",
    "stateSlug": "gujarat",
    "tier": 2
  },
  {
    "name": "Maraimalai Nagar",
    "slug": "maraimalai-nagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Irungattukottai",
    "slug": "irungattukottai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Gummidipoondi",
    "slug": "gummidipoondi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Ennore",
    "slug": "ennore",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Manali",
    "slug": "manali-tn",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Perungudi",
    "slug": "perungudi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Sholinganallur",
    "slug": "sholinganallur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Siruseri",
    "slug": "siruseri",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Mahindra World City",
    "slug": "mahindra-world-city",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Ranipet",
    "slug": "ranipet",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Cheyyar",
    "slug": "cheyyar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Bargur",
    "slug": "bargur",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Tiruchengode",
    "slug": "tiruchengode",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Perundurai",
    "slug": "perundurai",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Avinashi",
    "slug": "avinashi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Palladam",
    "slug": "palladam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Pollachi",
    "slug": "pollachi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Sivakasi",
    "slug": "sivakasi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Virudhunagar",
    "slug": "virudhunagar",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Gangaikondan",
    "slug": "gangaikondan",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Nanguneri",
    "slug": "nanguneri",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Vaniyambadi",
    "slug": "vaniyambadi",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 3
  },
  {
    "name": "Arakkonam",
    "slug": "arakkonam",
    "state": "Tamil Nadu",
    "stateSlug": "tamil-nadu",
    "tier": 2
  },
  {
    "name": "Bommasandra",
    "slug": "bommasandra",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Jigani",
    "slug": "jigani",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Bidadi",
    "slug": "bidadi",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Harohalli",
    "slug": "harohalli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "Dobbaspet",
    "slug": "dobbaspet",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "Nelamangala",
    "slug": "nelamangala",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Malur",
    "slug": "malur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "Narasapura",
    "slug": "narasapura",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Vemgal",
    "slug": "vemgal",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "KGF",
    "slug": "kgf",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Hoskote",
    "slug": "hoskote",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Devanahalli",
    "slug": "devanahalli",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Doddaballapur",
    "slug": "doddaballapur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Vasanthanarasapura",
    "slug": "vasanthanarasapura",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "Nanjangud",
    "slug": "nanjangud",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "Hebbal Industrial Area",
    "slug": "hebbal-mysore",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Baikampady",
    "slug": "baikampady",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Koppal",
    "slug": "koppal",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Yadgir",
    "slug": "yadgir",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "Karwar",
    "slug": "karwar",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 2
  },
  {
    "name": "Ranebennur",
    "slug": "ranebennur",
    "state": "Karnataka",
    "stateSlug": "karnataka",
    "tier": 3
  },
  {
    "name": "Patancheru",
    "slug": "patancheru",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Bolarum",
    "slug": "bolarum",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Jeedimetla",
    "slug": "jeedimetla",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Sanathnagar",
    "slug": "sanathnagar",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Cherlapally",
    "slug": "cherlapally",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Nacharam",
    "slug": "nacharam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Mallapur",
    "slug": "mallapur",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 3
  },
  {
    "name": "Uppal",
    "slug": "uppal",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Pocharam",
    "slug": "pocharam",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Shamshabad",
    "slug": "shamshabad",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Kothur",
    "slug": "kothur",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 3
  },
  {
    "name": "Jadcherla",
    "slug": "jadcherla",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 3
  },
  {
    "name": "Genome Valley",
    "slug": "genome-valley",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Pashamylaram",
    "slug": "pashamylaram",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Adibatla",
    "slug": "adibatla",
    "state": "Telangana",
    "stateSlug": "telangana",
    "tier": 2
  },
  {
    "name": "Naidupeta",
    "slug": "naidupeta",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3
  },
  {
    "name": "Tada",
    "slug": "tada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3
  },
  {
    "name": "Renigunta",
    "slug": "renigunta",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3
  },
  {
    "name": "Srikalahasti",
    "slug": "srikalahasti",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3
  },
  {
    "name": "Atchutapuram",
    "slug": "atchutapuram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Parawada",
    "slug": "parawada",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3
  },
  {
    "name": "Pydibhimavaram",
    "slug": "pydibhimavaram",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 3
  },
  {
    "name": "Gajuwaka",
    "slug": "gajuwaka",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Anakapalle",
    "slug": "anakapalle",
    "state": "Andhra Pradesh",
    "stateSlug": "andhra-pradesh",
    "tier": 2
  },
  {
    "name": "Bawal",
    "slug": "bawal",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Dharuhera",
    "slug": "dharuhera",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Khushkhera",
    "slug": "khushkhera",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3
  },
  {
    "name": "Tapukara",
    "slug": "tapukara",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3
  },
  {
    "name": "Yamuna Expressway",
    "slug": "yamuna-expressway",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Surajpur",
    "slug": "surajpur",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Sikandrabad",
    "slug": "sikandrabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 3
  },
  {
    "name": "Sahibabad",
    "slug": "sahibabad",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 2
  },
  {
    "name": "Pilkhuwa",
    "slug": "pilkhuwa",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 3
  },
  {
    "name": "Partapur",
    "slug": "partapur-meerut",
    "state": "Uttar Pradesh",
    "stateSlug": "uttar-pradesh",
    "tier": 3
  },
  {
    "name": "Kundli",
    "slug": "kundli",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Rai",
    "slug": "rai",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3
  },
  {
    "name": "Barhi",
    "slug": "barhi",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3
  },
  {
    "name": "Samalkha",
    "slug": "samalkha",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3
  },
  {
    "name": "Gharaunda",
    "slug": "gharaunda",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3
  },
  {
    "name": "Shahbad",
    "slug": "shahbad",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 3
  },
  {
    "name": "Ambala Cantt",
    "slug": "ambala-cantt",
    "state": "Haryana",
    "stateSlug": "haryana",
    "tier": 2
  },
  {
    "name": "Baddi",
    "slug": "baddi",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2
  },
  {
    "name": "Nalagarh",
    "slug": "nalagarh",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3
  },
  {
    "name": "Paonta Sahib",
    "slug": "paonta-sahib",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3
  },
  {
    "name": "Kala Amb",
    "slug": "kala-amb",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3
  },
  {
    "name": "Solan",
    "slug": "solan",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2
  },
  {
    "name": "Kullu",
    "slug": "kullu",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3
  },
  {
    "name": "Mandi",
    "slug": "mandi",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 3
  },
  {
    "name": "Dharamshala",
    "slug": "dharamshala",
    "state": "Himachal Pradesh",
    "stateSlug": "himachal-pradesh",
    "tier": 2
  },
  {
    "name": "Dankuni Logistics Park",
    "slug": "dankuni-logistics",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Kona Expressway",
    "slug": "kona-expressway",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Domjur",
    "slug": "domjur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Bagnan",
    "slug": "bagnan",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Taratala Industrial Area",
    "slug": "taratala",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Kasba Industrial Estate",
    "slug": "kasba",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Topsia",
    "slug": "topsia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Tangra",
    "slug": "tangra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Khardah",
    "slug": "khardah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Sodepur",
    "slug": "sodepur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Belgharia",
    "slug": "belgharia",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Agarpara",
    "slug": "agarpara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Haringhata",
    "slug": "haringhata",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Tribeni",
    "slug": "tribeni",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Bandel",
    "slug": "bandel",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Chinsurah",
    "slug": "chinsurah",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Konnagar",
    "slug": "konnagar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Uttarpara",
    "slug": "uttarpara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Hindmotor",
    "slug": "hindmotor",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Burnpur",
    "slug": "burnpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Barakar",
    "slug": "barakar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Andal",
    "slug": "andal",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Pandaveswar",
    "slug": "pandaveswar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Sutahata",
    "slug": "sutahata",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Durgachak",
    "slug": "durgachak",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Jhargram",
    "slug": "jhargram",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Matigara",
    "slug": "matigara",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Fulbari",
    "slug": "fulbari",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Bagdogra",
    "slug": "bagdogra",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Alipurduar",
    "slug": "alipurduar",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bishnupur",
    "slug": "bishnupur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Suri",
    "slug": "suri",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Bolpur",
    "slug": "bolpur",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 2
  },
  {
    "name": "Rampurhat",
    "slug": "rampurhat",
    "state": "West Bengal",
    "stateSlug": "west-bengal",
    "tier": 3
  },
  {
    "name": "Paradeep",
    "slug": "paradeep",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Angul",
    "slug": "angul",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Dhenkanal",
    "slug": "dhenkanal",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 3
  },
  {
    "name": "Jajpur",
    "slug": "jajpur",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Kalinganagar",
    "slug": "kalinganagar",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 2
  },
  {
    "name": "Rayagada",
    "slug": "rayagada",
    "state": "Odisha",
    "stateSlug": "odisha",
    "tier": 3
  },
  {
    "name": "Barauni",
    "slug": "barauni",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 2
  },
  {
    "name": "Bihta",
    "slug": "bihta",
    "state": "Bihar",
    "stateSlug": "bihar",
    "tier": 3
  },
  {
    "name": "Gamharia",
    "slug": "gamharia",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 3
  },
  {
    "name": "Ramgarh",
    "slug": "ramgarh",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 2
  },
  {
    "name": "Dhanbad",
    "slug": "dhanbad",
    "state": "Jharkhand",
    "stateSlug": "jharkhand",
    "tier": 1
  },
  {
    "name": "Mandi Deep",
    "slug": "mandi-deep",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 2
  },
  {
    "name": "Malanpur",
    "slug": "malanpur",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 3
  },
  {
    "name": "Govindpura",
    "slug": "govindpura",
    "state": "Madhya Pradesh",
    "stateSlug": "madhya-pradesh",
    "tier": 3
  },
  {
    "name": "Bhilai",
    "slug": "bhilai",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 1
  },
  {
    "name": "Urla",
    "slug": "urla",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 3
  },
  {
    "name": "Siltara",
    "slug": "siltara",
    "state": "Chhattisgarh",
    "stateSlug": "chhattisgarh",
    "tier": 3
  },
  {
    "name": "Aluva",
    "slug": "aluva",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Kalamassery",
    "slug": "kalamassery",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Kakkanad",
    "slug": "kakkanad",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 2
  },
  {
    "name": "Angamaly",
    "slug": "angamaly",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3
  },
  {
    "name": "Kanjikode",
    "slug": "kanjikode",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3
  },
  {
    "name": "Aroor",
    "slug": "aroor",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3
  },
  {
    "name": "Cherthala",
    "slug": "cherthala",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3
  },
  {
    "name": "Beypore",
    "slug": "beypore",
    "state": "Kerala",
    "stateSlug": "kerala",
    "tier": 3
  },
  {
    "name": "Mandi Gobindgarh",
    "slug": "mandi-gobindgarh",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Phagwara",
    "slug": "phagwara",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Dera Bassi",
    "slug": "dera-bassi",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 2
  },
  {
    "name": "Lalru",
    "slug": "lalru",
    "state": "Punjab",
    "stateSlug": "punjab",
    "tier": 3
  },
  {
    "name": "SIDCUL Haridwar",
    "slug": "sidcul-haridwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "SIDCUL Pantnagar",
    "slug": "sidcul-pantnagar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 2
  },
  {
    "name": "Sitarganj",
    "slug": "sitarganj",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 3
  },
  {
    "name": "Kotdwar",
    "slug": "kotdwar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 3
  },
  {
    "name": "Vikas Nagar",
    "slug": "vikas-nagar",
    "state": "Uttarakhand",
    "stateSlug": "uttarakhand",
    "tier": 3
  },
  {
    "name": "Numaligarh",
    "slug": "numaligarh",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 3
  },
  {
    "name": "Bongaigaon",
    "slug": "bongaigaon",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Tinsukia",
    "slug": "tinsukia",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Digboi",
    "slug": "digboi",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 3
  },
  {
    "name": "Duliajan",
    "slug": "duliajan",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 3
  },
  {
    "name": "Tezpur",
    "slug": "tezpur",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Jorhat",
    "slug": "jorhat",
    "state": "Assam",
    "stateSlug": "assam",
    "tier": 2
  },
  {
    "name": "Kohima",
    "slug": "kohima",
    "state": "Nagaland",
    "stateSlug": "nagaland",
    "tier": 2
  },
  {
    "name": "Sitapura",
    "slug": "sitapura",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Mansarovar Industrial Area",
    "slug": "mansarovar-industrial",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "VKIA Jaipur",
    "slug": "vkia-jaipur",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Boranada",
    "slug": "boranada",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 2
  },
  {
    "name": "Kankroli",
    "slug": "kankroli",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3
  },
  {
    "name": "Sukher",
    "slug": "sukher",
    "state": "Rajasthan",
    "stateSlug": "rajasthan",
    "tier": 3
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
  return ACS_CITIES.find((c) => c.slug === slug);
}

export function getCitiesByState(state: string): ACSCity[] {
  return ACS_CITIES.filter((c) => c.state === state);
}

export function getCitiesByTier(tier: 1 | 2 | 3): ACSCity[] {
  return ACS_CITIES.filter((c) => c.tier === tier);
}
