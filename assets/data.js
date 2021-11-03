const astros = [    
      
    {
        id:0,
        craft: "ISS", 
        name: "Megan McArthur",
        country_id: "flags/us.svg",
        bio: "Megan McArthur was selected as an astronaut in 2000.  She holds a Bachelor of Science in Aerospace Engineering from the University of California, Los Angeles and a Ph.D. in Oceanography from the University of California, San Diego where she performed research activities at the Scripps Institution of Oceanography.  McArthur served as a Mission Specialist aboard STS-125, the final space shuttle mission to the Hubble Space Telescope.  The successful mission improved the telescope’s capabilities and extended its life – it is still in operation today.  In completing her first space mission, McArthur has logged almost 13 days in space. She is currently serving as Pilot of the NASA SpaceX Crew-2 mission to the ISS, which launched on April 23, 2021.",
        img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/25450113025_b5c83c2c07_o.jpg"
    }, 
    {
        id:1,
        craft: "ISS", 
        name: "Pyotr Dubrov",
        country_id: "flags/ru.svg",
        bio: "In 1999 he graduated from the Khabarovsk State University. Software Engineer, specialty 'Software computers and automated systems'. Place of work: LLC 'CBOSS International Development'. Hobbies: computer programming, parachute jumping. OKP (cosmonaut basic training): 10.2012 - 06.2014.",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Pyotr_Dubrov_in_2021.jpg"
    }, 
    {
        id:2,
        craft: "ISS", 
        name: "Thomas Pesquet",
        country_id: "flags/fr.svg",
        bio: "Thomas was launched to the International Space Station on 17 November 2016 for his six-month Proxima mission, as a flight engineer for Expeditions 50 and 51. Thomas' second spaceflight was announced on 28 July 2020. He is currently in the International Space Station travelled on the second SpaceX Crew Dragon mission together with JAXA astronaut Akihiko Hoshide and NASA astronauts Shane Kimbrough and pilot Megan McArthur. The mission is called Alpha, after Alpha Centauri, the closest stellar system to Earth, following the French tradition to name space missions after stars or constellations. The mission assignment is the first time a European will fly to the Space Station in the Crew Dragon, and the first time from USA in over a decade.",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Thomas_Pesquet%2C_official_portrait_%281%29.jpg"
    }, 
    {
        id:3,
        craft: "ISS", 
        name: "Mark Vande Hei",
        country_id: "flags/us.svg",
        bio: "Mark T. Vande Hei was selected by NASA in 2009.  Born in Virginia then raised in New Jersey and Minnesota, Vande Hei earned a Bachelor of Science in Physics from Saint John's University and a Master of Science in Applied Physics from Stanford University.  He was commissioned in the U.S. Army through the ROTC program and served as a combat engineer.  In 1999, he became an assistant professor of physics at the United States Military Academy in West Point.  Vande Hei is currently serving as Flight Engineer aboard the ISS for Expedition 65.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2016e000683_alt.jpg"
    }, 
    {
        id:4,
        craft: "ISS", 
        name: "Shane Kimbrough",
        country_id: "flags/us.svg",
        bio: "R. Shane Kimbrough was selected by NASA in 2004.  He completed his first spaceflight in 2008 on STS-126, where he spent almost 16 days on the mission to expand the crew living quarters to accommodate a six-member crew.  During the mission, he performed two spacewalks.  Kimbrough earned a Master of Science degree from the Georgia Institute of Technology.  Before being selected as an astronaut, Kimbrough joined NASA in 2000 as a Flight Simulation Engineer (FSE) on the Shuttle Training Aircraft (STA).  Kimbrough flew on the Expedition 49/50 mission where he performed 4 spacewalks and has now logged in a total of 189 days in space.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/9368719226_330105140d_o.jpg"
    }, 
    {
        id:5,
        craft: "ISS", 
        name: "Akihiko Hoshide",
        country_id: "flags/jp.svg",
        bio: "Born in Tokyo in 1968, HOSHIDE Akihiko joined NASDA (currently JAXA) in 1992 and was selected as a Japanese astronaut candidate to board the International Space Station (ISS) in 1999. He became a certified astronaut in 2001. In June 2008, he traveled to the ISS aboard the Space Shuttle Discovery, where, among other operations, he participated in work to attach Kibo’s internal experiment room to the ISS. In July 2012, he traveled again to the ISS aboard the Soyuz spacecraft, deploying small satellites and performing three Extravehicular Activities over the course of roughly four months in space.",
        img: "https://humans-in-space.jaxa.jp/en/astronaut/item/hoshide-akihiko/hoshide-akihiko_profile.jpg"
    }, 
    {
        id:6,
        craft: "ISS", 
        name: "Anton Shkaplerov",
        country_id: "flags/ru.svg",
        bio: "Anton Nikolaevich Shkaplerov (Russian: Антон Николаевич Шкаплеров; born 20 February 1972) is a Russian cosmonaut. He is a veteran of four spaceflights and is a former Commander of the International Space Station. ",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Cosmonaut_Anton_shkaplerov-2.jpg"
    }, 
    {
        id:7,
        craft: "Shenzhou 13", 
        name: "Zhai Zhigang",
        country_id: "flags/cn.svg",
        bio: "Zhai Zhigang, (born October 10, 1966, Longjiang, Qiqihar, Heilongjiang, China), Chinese astronaut who performed China’s first spacewalk.  In the 05/2003 issue of Fliegerrevue, this was one of 12 new names listed as Chinese astronauts in training. The day before the scheduled launch of Shenzhou-5, China's first manned flight, he was named as the second finalist or back-up crew member for the flight. In his service as a PLAAF fighter pilot he had accumulated 1000 hours flight time. Selected in 2008 as prime crew of Shenzhou 7.",
        img: "https://cdn.britannica.com/04/136004-050-BF956F62/Zhai-Zhigang-2008.jpg"
    }, 
    {
        id:8,
        craft: "Shenzhou 13", 
        name: "Wang Yaping",
        country_id: "flags/cn.svg",
        bio: "Colonel Wang Yaping (born 27 January 1980) is a Chinese military pilot and astronaut. Wang was the second female astronaut selected to the People's Liberation Army Astronaut Corps, and the second Chinese woman in space. Wang was selected as one of the three crew members to fly on Shenzhou 13 to the Tiangong space station, marking her second spaceflight and the first time a Chinese woman will travel to space twice. She will also be the first female astronaut to board the Tiangong space station and to perform an EVA.",
        img: "https://europe.chinadaily.com.cn/china/images/attachement/jpg/site1/20130610/eca86bd9e2f9131fdbf737.jpg"
    }, 
    {
        id:9,
        craft: "Shenzhou 13", 
        name: "Ye Guangfu",
        country_id: "flags/cn.svg",
        bio: "Chinese astronaut Ye Guangfu was born in 1980 in the Sichuan province of China. He is an air force pilot and spent four years as an instructor and four years as a jet fighter pilot amassing 1100 hours of flight time. Ye was recruited as an astronaut trainee for China’s Astronaut Center in 2010 and qualified in 2014. ",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Ye_Guangfu_in_2021.jpg"
    },
    {
        id:10,
        craft: "ISS", 
        name: "Raja Chari",
        "space_agency": "NASA",
        country_id: "flags/us.svg",
        bio: "Raja Chari was selected by NASA to join the 2017 Astronaut Candidate Class. He reported for duty in August 2017. The Iowa native graduated from the U.S. Air Force Academy in 1999 with a bachelor’s degrees in Astronautical Engineering and Engineering Science. He continued on to earn a master’s degree in Aeronautics and Astronautics from Massachusetts Institute of Technology and graduated from the U.S. Naval Test Pilot School. He is currently assigned as commander of the SpaceX Crew-3 mission to the ISS scheduled to launch October 2021.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2017e114853.jpg"
    },
    {
        id:11,
        craft: "ISS", 
        name: "Thomas H. Marshburn",
        "space_agency": "NASA",
        country_id: "flags/us.svg",
        bio: "Dr. Thomas H. Marshburn was selected by NASA in 2004. He holds a Bachelor of Science in Physics from Davidson College, North Carolina; a Masters in Engineering Physics from the University of Virginia; a Doctorate of Medicine from Wake Forest University; and a Masters in Medical Science from the University of Texas Medical Branch. The North Carolina native is a veteran of two spaceflights, STS‐127 and Expedition 34/35. Prior to becoming an astronaut, Dr. Marshburn served as a Flight Surgeon, assigned to Space Shuttle Medical Operations and to the joint U.S./Russian Space Program and eventually became the Medical Operations Lead for the International Space Station. He is currently assigned as the pilot of the NASA SpaceX Crew-3 mission to the ISS scheduled to launch October 2021.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/9368855062_a548b9c5eb_o.jpg"
    },
    {
        id:12,
        craft: "ISS", 
        name: "Kayla Barron",
        "space_agency": "NASA",
        country_id: "flags/us.svg",
        bio: "Kayla Barron was selected by NASA to join the 2017 Astronaut Candidate Class. She reported for duty in August 2017 and is currently training as Mission Specialist for NASA SpaceX Crew-3 Mission to the ISS scheduled to launch October 2021. The Washington native graduated from the U.S. Naval Academy with a bachelor’s degree in Systems Engineering. A Gates Cambridge Scholar, Barron earned a master’s degree in Nuclear Engineering from the University of Cambridge. As a Submarine Warfare Officer, Barron was a member of the first class of women commissioned into the submarine community.",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2017e118421.jpg"
    },
    {
        id:13,
        craft: "ISS", 
        name: "Matthias Maurer",
        "space_agency": "ESA",
        country_id: "flags/de.svg",
        bio: "Matthias Maurer was born in Sankt Wendel (Saarland), Germany, on 18 March 1970. His favourite activities are travelling, photography, reading, politics and learning foreign languages. He also enjoys sports, especially cycling and hiking. In December 2020, Matthias was officially assigned to his first International Space Station mission known as 'Cosmic Kiss'. He is the second ESA astronaut to fly under NASA’s Commercial Crew Programme and has launched from the agency’s Kennedy Space Center in Florida, USA, as part of SpaceX Crew-3, alongside NASA astronauts Raja Chari, Thomas Marshburn and Kayla Barron in late 2021. Prior to his mission assignment, Matthias was based at ESA’s Astronaut Centre in Cologne, Germany where he was project managing the development of a new ESA Moon simulation facility known as Luna.",
        img: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/06/matthias_maurer/19454911-1-eng-GB/Matthias_Maurer_pillars.jpg"
    }

    
]
module.exports = astros
