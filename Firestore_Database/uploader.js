const firebase = require("firebase");
//const fetch = require("node-fetch");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Ffirestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyARvQ3IhXrjDC9kDFOs86UkR44X8rqxi7I",
    authDomain: "vehiclopedia.firebaseapp.com",
    projectId: "vehiclopedia"
  });
  
  var db = firebase.firestore();

  var cars =[
	{
		"Name": "Ford Edge SUV 2012",
		"Price": "650000",
		"Type": "SUV",
		"Company": "Ford ",
		"Engine power(hp)": "335",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "Hyundai Accent Sedan 2012",
		"Price": "950000",
		"Type": "Sedan",
		"Company": "Hyundai",
		"Engine power(hp)": "138",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Diesel",
		"Country": "South Korea"
	},
	{
		"Name": "Hyundai Elantra Touring Hatchback 2012",
		"Price": "580000",
		"Type": "Sedan",
		"Company": "Hyundai",
		"Engine power(hp)": "138",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Diesel",
		"Country": "South Korea"
	},
	{
		"Name": "Ferrari 458 Italia Convertible 2012",
		"Price": "900000",
		"Type": " sedan",
		"Company": "Ferrari",
		"Engine power(hp)": "562",
		"Seater": "2",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Italy"
	},
	{
		"Name": "Ferrari FF Coupe 2012",
		"Price": "37900000",
		"Type": "mini sedan",
		"Company": "Ferrari",
		"Engine power(hp)": "651",
		"Seater": "4",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Italy"
	},
	{
		"Name": "FIAT 500 Convertible 2012",
		"Price": "14930000",
		"Type": "SUV",
		"Company": "FIAT",
		"Engine power(hp)": "160",
		"Seater": "4",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Diesel",
		"Country": "Italy"
	},
	{
		"Name": "Honda Accord Coupe 2012",
		"Price": "20800000",
		"Type": "Sedan",
		"Company": "Honda",
		"Engine power(hp)": "271.3",
		"Seater": "5",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Jeep Compass SUV 2012",
		"Price": "28290000",
		"Type": "SUV",
		"Company": "Jeep",
		"Engine power(hp)": "172",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Diesel",
		"Country": "America"
	},
	{
		"Name": "FIAT 500 Abarth 2012",
		"Price": "29850000",
		"Type": "SUV",
		"Company": "FIAT",
		"Engine power(hp)": "160",
		"Seater": "4",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Italy"
	},
	{
		"Name": "Lamborghini Aventador Coupe 2012",
		"Price": "62500000",
		"Type": "sedan",
		"Company": "Lamborghini",
		"Engine power(hp)": "770",
		"Seater": "2",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Italy"
	},
	{
		"Name": "Mercedes-Benz  C-Class Sedan 2012",
		"Price": "32070000",
		"Type": "sedan",
		"Company": "Mercedes",
		"Engine power(hp)": "228",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "both",
		"Country": "Germany"
	},
	{
		"Name": "Mercedes-Benz  E-Class Sedan 2012",
		"Price": "62830000",
		"Type": "sedan",
		"Company": "Mercedes",
		"Engine power(hp)": "603.46",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Mercedes-Benz S-Class Sedan 2012",
		"Price": "14100000",
		"Type": "sedan",
		"Company": "Mercedes",
		"Engine power(hp)": "630",
		"Seater": "4",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Mercedes-Benz SL-Class Coupe 2009",
		"Price": "99940000",
		"Type": "convertible",
		"Company": "Mercedes",
		"Engine power(hp)": "316",
		"Seater": "2",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Hyundai Elantra Sedan 2012",
		"Price": "16530000",
		"Type": "sedan",
		"Company": "Hyundai",
		"Engine power(hp)": "147.5",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "South Korea"
	},
	{
		"Name": "Hyundai Santa Fe SUV 2012",
		"Price": "25830000",
		"Type": "SUV",
		"Company": "Hyundai",
		"Engine power(hp)": "194.3",
		"Seater": "7",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Diesel",
		"Country": "South Korea"
	},
	{
		"Name": "Hyundai Sonata Hybrid Sedan 2012",
		"Price": "21280000",
		"Type": "sedan",
		"Company": "Hyundai",
		"Engine power(hp)": "175",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "South Korea"
	},
	{
		"Name": "Hyundai Sonata Sedan 2012",
		"Price": "19460000",
		"Type": "sedan",
		"Company": "Hyundai",
		"Engine power(hp)": "198",
		"Seater": "5",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Petrol",
		"Country": "South Korea"
	},
	{
		"Name": "Hyundai Tuscon 2012",
		"Price": "27330000",
		"Type": "SUV",
		"Company": "Hyundai",
		"Engine power(hp)": "182.47",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Diesel",
		"Country": "South Korea"
	},
	{
		"Name": "Hyundai Veracruz SUV 2012",
		"Price": "22050000",
		"Type": "SUV",
		"Company": "Hyundai",
		"Engine power(hp)": "260",
		"Seater": "7",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "South Korea"
	},
	{
		"Name": "Nissan 240SX Coupe 1998",
		"Price": "19460000",
		"Type": "sedan",
		"Company": "Nissan",
		"Engine power(hp)": "155",
		"Seater": "4",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Nissan Juke Hatchback 2012",
		"Price": "15750000",
		"Type": "sedan",
		"Company": "Nissan",
		"Engine power(hp)": "188",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Nissan Leaf Hatchback 2012",
		"Price": "27100000",
		"Type": "sedan",
		"Company": "Nissan",
		"Engine power(hp)": "107",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Rolls-Royce Ghost Sedan 2012",
		"Price": "79500000",
		"Type": "sedan",
		"Company": "Rolls-royce",
		"Engine power(hp)": "563",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "U.K"
	},
	{
		"Name": "Rolls-Royce Phantom Sedan 2012",
		"Price": "104800000",
		"Type": "sedan",
		"Company": "Rolls-royce",
		"Engine power(hp)": "563",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "U.K"
	},
	{
		"Name": "Suzuki Aerio Sedan 2007",
		"Price": "12510000",
		"Type": "sedan",
		"Company": "Suzuki",
		"Engine power(hp)": "155",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Suzuki Kizashi Sedan 2012",
		"Price": "17520000",
		"Type": "sedan",
		"Company": "Suzuki",
		"Engine power(hp)": "175.6",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Suzuki SX4 Hatchback 2012",
		"Price": "9510000",
		"Type": "sedan",
		"Company": "Suzuki",
		"Engine power(hp)": "104",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Tesla Model S Sedan 2012",
		"Price": "15000000",
		"Type": "sedan",
		"Company": "Tesla",
		"Engine power(hp)": "416",
		"Seater": "4",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Electric",
		"Country": "U.S "
	},
	{
		"Name": "Toyota 4Runner SUV 2012",
		"Price": "18840000",
		"Type": "SUV",
		"Company": "Toyota",
		"Engine power(hp)": "270",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Toyota Camry Sedan 2012",
		"Price": "28910000",
		"Type": "sedan",
		"Company": "Toyota",
		"Engine power(hp)": "178",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Toyota Corolla Sedan 2012",
		"Price": "20190000",
		"Type": "sedan",
		"Company": "Toyota",
		"Engine power(hp)": "87.2",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Diesel",
		"Country": "Japan"
	},
	{
		"Name": "Toyota Sequoia SUV 2012",
		"Price": "21550000",
		"Type": "SUV",
		"Company": "Toyota",
		"Engine power(hp)": "381",
		"Seater": "7",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Japan"
	},
	{
		"Name": "Volkswagen Beetles Hatchback 2012",
		"Price": "21470000",
		"Type": "sedan",
		"Company": "volkswagen",
		"Engine power(hp)": "114.4",
		"Seater": "4",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Volkswagen Golf Hatchback 1991",
		"Price": "230000",
		"Type": "sedan",
		"Company": "volkswagen",
		"Engine power(hp)": "100",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Ford Fiesta Sedan 2012",
		"Price": "9990000",
		"Type": "sedan",
		"Company": "Ford ",
		"Engine power(hp)": "107.5",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "Ford Focus Sedan 2012",
		"Price": "13260000",
		"Type": "sedan",
		"Company": "Ford ",
		"Engine power(hp)": "160",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "Ford Freestar Minivan 2007",
		"Price": "2520000",
		"Type": "sedan",
		"Company": "Ford ",
		"Engine power(hp)": "201",
		"Seater": "7",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "Jaguar XK XKR  2012",
		"Price": "18800000",
		"Type": "sedan",
		"Company": "Jaguar",
		"Engine power(hp)": "502.8",
		"Seater": "4",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "U.K"
	},
	{
		"Name": "Ford Mustang Convertible 2007",
		"Price": "70620000",
		"Type": "sedan",
		"Company": "Ford ",
		"Engine power(hp)": "395",
		"Seater": "4",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "GMC Acadia SUV 2012",
		"Price": "1265000",
		"Type": "SUV",
		"Company": "GMC",
		"Engine power(hp)": "288",
		"Seater": "7",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "GMC Canyon Extended Cab 2012",
		"Price": "17940000",
		"Type": "SUV",
		"Company": "GMC",
		"Engine power(hp)": "185",
		"Seater": "6",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "GMC Savana Van 2012",
		"Price": "14540000",
		"Type": "SUV",
		"Company": "GMC",
		"Engine power(hp)": "324",
		"Seater": "12",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "GMC Terrain SUV 2012",
		"Price": "9520000",
		"Type": "SUV",
		"Company": "GMC",
		"Engine power(hp)": "264",
		"Seater": "5",
		"Gear transmission": "Auto",
		"Diesel/Petrol": "Petrol",
		"Country": "America"
	},
	{
		"Name": "Acura RL Sedan 2012",
		"Price": "3,518,600",
		"Type": "Sedan",
		"Company": "Acura",
		"Engine power(hp)": "300",
		"Seater": "5",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Gas",
		"Country": "Japan"
	},
	{
		"Name": "Acura TL Sedan 2012",
		"Price": "2,606,465",
		"Type": "Sedan",
		"Company": "Acura",
		"Engine power(hp)": "280",
		"Seater": "5",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Gas",
		"Country": "Japan"
	},
	{
		"Name": "Acura ZDX Hatchback 2012",
		"Price": "3,366,760",
		"Type": "Hatchback",
		"Company": "Acura",
		"Engine power(hp)": "300",
		"Seater": "5",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Gas",
		"Country": "Japan"
	},
	{
		"Name": "AM General Hummer SUV 2000",
		"Price": "5,840,000",
		"Type": "SUV",
		"Company": "AM General",
		"Engine power(hp)": "195",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Diesel",
		"Country": "USA"
	},
	{
		"Name": "Aston Martin V8 Vantage Convertible 2012",
		"Price": "8,760,000",
		"Type": "Sedan",
		"Company": "Aston Martin",
		"Engine power(hp)": "430",
		"Seater": "2",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "UK"
	},
	{
		"Name": "Aston Martin Virage Convertible 2012",
		"Price": "16,300,535",
		"Type": "Sedan",
		"Company": "Aston Martin",
		"Engine power(hp)": "490",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "UK"
	},
	{
		"Name": "Audi A5 Coupe 2012",
		"Price": "2,847,000",
		"Type": "Sedan",
		"Company": "Audi",
		"Engine power(hp)": "211",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Audi R8 Coupe 2012",
		"Price": "8,336,600",
		"Type": "Sedan",
		"Company": "Audi",
		"Engine power(hp)": "430",
		"Seater": "2",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Audi S4 Sedan 2012",
		"Price": "5,447,698",
		"Type": "Sedan",
		"Company": "Audi",
		"Engine power(hp)": "334",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Audi S5 Convertible 2012",
		"Price": "3426109",
		"Type": "Sedan",
		"Company": "Audi",
		"Engine power(hp)": "333",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Audi S6 Sedan 2011",
		"Price": "5,555,300",
		"Type": "Sedan",
		"Company": "Audi",
		"Engine power(hp)": "435",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Audi TT RS Coupe 2012",
		"Price": "4,216,480",
		"Type": "Sedan",
		"Company": "Audi",
		"Engine power(hp)": "360",
		"Seater": "2",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Bentley Arnage Sedan 2009",
		"Price": "16,425,000",
		"Type": "Sedan",
		"Company": "Bentley",
		"Engine power(hp)": "500",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "UK"
	},
	{
		"Name": "Bentley Continental GT Coupe 2012",
		"Price": "14,034,250",
		"Type": "Sedan",
		"Company": "Bentley",
		"Engine power(hp)": "567",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "UK"
	},
	{
		"Name": "Bentley Mulsanne Sedan 2011",
		"Price": "20,805,000",
		"Type": "Sedan",
		"Company": "Bentley",
		"Engine power(hp)": "505",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "UK"
	},
	{
		"Name": "BMW 1 Series Convertible 2012",
		"Price": "3,219,300",
		"Type": "Sedan",
		"Company": "BMW",
		"Engine power(hp)": "300",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both",
		"Country": "Germany"
	},
	{
		"Name": "BMW 3 Series Sedan 2012",
		"Price": "3,740,520",
		"Type": "Sedan",
		"Company": "BMW",
		"Engine power(hp)": "240",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both",
		"Country": "Germany"
	},
	{
		"Name": "BMW ActiveHybrid 5 Sedan 2012",
		"Price": "4,514,685",
		"Type": "Sedan",
		"Company": "BMW",
		"Engine power(hp)": "300",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both, electric",
		"Country": "Germany"
	},
	{
		"Name": "BMW M3 Coupe 2012",
		"Price": "4,387,300",
		"Type": "Sedan",
		"Company": "BMW",
		"Engine power(hp)": "414",
		"Seater": "4",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "BMW M6 Convertible 2010",
		"Price": "7,891,300",
		"Type": "Sedan",
		"Company": "BMW",
		"Engine power(hp)": "500",
		"Seater": "4",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "BMW X3 SUV 2012",
		"Price": "3,073,300",
		"Type": "SUV",
		"Company": "BMW",
		"Engine power(hp)": "240",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "BMW X5 SUV 2007",
		"Price": "3,650,000",
		"Type": "SUV",
		"Company": "BMW",
		"Engine power(hp)": "260",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "BMW X6 SUV 2012",
		"Price": "4,681,125",
		"Type": "SUV",
		"Company": "BMW",
		"Engine power(hp)": "300",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "BMW Z4 Convertible 2012",
		"Price": "3,810,600",
		"Type": "Sedan",
		"Company": "BMW",
		"Engine power(hp)": "240",
		"Seater": "2",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Germany"
	},
	{
		"Name": "Bugatti Veyron 16.4 Convertible 2009",
		"Price": "145,566,672",
		"Type": "Sedan",
		"Company": "Bugatti",
		"Engine power(hp)": "1001",
		"Seater": "2",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Petrol",
		"Country": "France"
	},
	{
		"Name": "Buick Enclave SUV 2012",
		"Price": "2,920,000",
		"Type": "SUV",
		"Company": "Buick (General Motors)",
		"Engine power(hp)": "288",
		"Seater": "7",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Cadillac CTS-V Sedan 2012",
		"Price": "4,745,000",
		"Type": "Sedan",
		"Company": "Cadillac (General Motors)",
		"Engine power(hp)": "556",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Cadillac SRX SUV 2012",
		"Price": "3,077,680",
		"Type": "SUV",
		"Company": "Cadillac (General Motors)",
		"Engine power(hp)": "308",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Avalanche Crew Cab 2012",
		"Price": "3,285,000",
		"Type": "SUV",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "320",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Mexico"
	},
	{
		"Name": "Chevrolet Camaro Convertible 2012",
		"Price": "3,226,600",
		"Type": "Sedan",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "426",
		"Seater": "4",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "Canada"
	},
	{
		"Name": "Chevrolet Corvette Convertible 2012",
		"Price": "4,234,000",
		"Type": "Sedan",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "430",
		"Seater": "2",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Corvette ZR1 2012",
		"Price": "8,395,000",
		"Type": "Sedan",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "604",
		"Seater": "2",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Impala Sedan 2007",
		"Price": "1,679,000",
		"Type": "Sedan",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "211",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Malibu Sedan 2007",
		"Price": "1,314,000",
		"Type": "Sedan",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "144",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Monte Carlo Coupe 2007",
		"Price": "1,547,600",
		"Type": "Sedan",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "211",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Silverado 1500 Extended Cab 2012",
		"Price": "2,555,000",
		"Type": "SUV",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "315",
		"Seater": "6",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Sonic Sedan 2012",
		"Price": "1,241,000",
		"Type": "Sedan",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "138",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Tahoe Hybrid SUV 2012",
		"Price": "4,015,000",
		"Type": "SUV",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "332",
		"Seater": "8",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chevrolet Traverse SUV 2012",
		"Price": "2,190,000",
		"Type": "SUV",
		"Company": "Chevrolet (General Motors)",
		"Engine power(hp)": "281",
		"Seater": "8",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chrysler Aspen SUV 2009",
		"Price": "2,555,000",
		"Type": "SUV",
		"Company": "Chrysler",
		"Engine power(hp)": "303",
		"Seater": "8",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Chrysler PT Cruiser Convertible 2008",
		"Price": "1,460,000",
		"Type": "Hatchback",
		"Company": "Chrysler",
		"Engine power(hp)": "150",
		"Seater": "4",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Diesel",
		"Country": "USA"
	},
	{
		"Name": "Chrysler Sebring Convertible 2010",
		"Price": "2,190,000",
		"Type": "Sedan",
		"Company": "Chrysler",
		"Engine power(hp)": "186",
		"Seater": "4",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both",
		"Country": "USA"
	},
	{
		"Name": "Dodge Caliber Wagon 2012",
		"Price": "1,460,000",
		"Type": "Sedan",
		"Company": "Dodge",
		"Engine power(hp)": "158",
		"Seater": "5",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Dodge Challenger SRT8 2011",
		"Price": "3,358,000",
		"Type": "Sedan",
		"Company": "Dodge",
		"Engine power(hp)": "470",
		"Seater": "5",
		"Gear transmission": "Both",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Dodge Charger Sedan 2012",
		"Price": "1,898,000",
		"Type": "Sedan",
		"Company": "Dodge",
		"Engine power(hp)": "292",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both",
		"Country": "USA"
	},
	{
		"Name": "Dodge Durango SUV 2012",
		"Price": "2,701,000",
		"Type": "SUV",
		"Company": "Dodge",
		"Engine power(hp)": "290",
		"Seater": "7",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Both",
		"Country": "USA"
	},
	{
		"Name": "Dodge Journey SUV 2012",
		"Price": "1,752,000",
		"Type": "SUV",
		"Company": "Dodge",
		"Engine power(hp)": "173",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Dodge Magnum Wagon 2008",
		"Price": "1,825,000",
		"Type": "SUV",
		"Company": "Dodge",
		"Engine power(hp)": "178",
		"Seater": "5",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "USA"
	},
	{
		"Name": "Dodge Ram Pickup 3500 Crew Cab 2010",
		"Price": "3,504,000",
		"Type": "SUV",
		"Company": "Dodge",
		"Engine power(hp)": "350",
		"Seater": "6",
		"Gear transmission": "Manual",
		"Diesel/Petrol": "Diesel",
		"Country": "USA"
	},
	{
		"Name": "Ferrari 458 Italia Convertible 2012",
		"Price": "19,345,000",
		"Type": "Sedan",
		"Company": "Ferrari",
		"Engine power(hp)": "562",
		"Seater": "2",
		"Gear transmission": "Automatic",
		"Diesel/Petrol": "Petrol",
		"Country": "Italy"
	}
]
const a1="Name"; 
const a2="Price";
const a3="Type";
const a4="Company";
const a5="Engine power(hp)";
const a6="Seater";
const a7="Gear transmission";
const a8="Diesel/Petrol";
const a9="Country";
cars.forEach(function(obj) {
      db.collection("cars").add({
          Name:obj[a1],
          Price:obj[a2],
          Type:obj[a3],
          Company:obj[a4],
          Engine_Power:obj[a5],
          Seater:obj[a6],
          Gear_type:obj[a7],
          Fuel:obj[a8],
          Country:obj[a9]
      }).then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
  });