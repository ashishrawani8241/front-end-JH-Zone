const iconData = [
    // FREEDOM FIGHTERS
    { id: 1, category: 'freedom', name: "Birsa Munda", life: "1875 - 1900", short: "Tribal folk hero and freedom fighter.", long: "Birsa Munda led the 'Ulgulan' (Great Tumult) movement against the British Raj. He advocated for tribal land rights and is celebrated as 'Dharti Aba'. He died in Ranchi Jail at age 24.", img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/11/14/3409520-birsa-munda-jayanti-3.png" },
    { id: 2, category: 'freedom', name: "Sidho & Kanhu Murmu", life: "1855 Rebellion", short: "Leaders of the Santhal Rebellion.", long: "Brothers who led 60,000 Santhals against the British East India Company and the exploitative Zamindari system in 1855, known as the Santhal Hul.", img: "https://i.pinimg.com/736x/b1/fd/05/b1fd058ed69f97f45b2fc223e68c9eab.jpg" },
    { id: 3, category: 'freedom', name: "Phulo & Jhano Murmu", life: "1855 Rebellion", short: "Fearless Santhal women warriors.", long: "Sisters of Sidho and Kanhu, they were legendary warriors who entered British camps to gather intelligence and fought valiantly with traditional weapons.", img: "https://s3.youthkiawaaz.com/wp-content/uploads/2019/04/24173533/FB-271.jpg" },

    // INDUSTRY
    { id: 4, category: 'industry', name: "Jamsetji Tata", life: "1839 - 1904", short: "Father of Indian Industry.", long: "Founder of the Tata Group and visionary behind Jamshedpur, India's first planned industrial city. He laid the foundation for Tata Steel.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sir_J._N._Tata_%28cropped%29.jpg/500px-Sir_J._N._Tata_%28cropped%29.jpg" },
    { id: 5, category: 'industry', name: "Ratan Tata", life: "1937 - 2024", short: "Legendary Industrialist & Philanthropist.", long: "Former Chairman of Tata Sons who expanded the group globally. Known for his humility and deep contribution to the development of Jamshedpur and India.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK05V6BMdsJfJk8FCgPfMTgpryGZj7miQNhc_kXh8DAhU7lw6omb4NjGP5j0mBhcqFBVAQ8ipoJgU3AhBEhLPoXaCJSH9eUECnNUfszh2voQ&s=10" },

    // SPORTS
    { id: 6, category: 'sports', name: "Mahendra Singh Dhoni", life: "1981 - Present", short: "Legendary Cricket Captain.", long: "Born in Ranchi, 'Mahi' led India to the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy. He is India's most successful captain.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLso9DqaX5-H1DRxwl3A2onMfHBa-OSQ3wirWI_gIwEb0JxkQKAdpHeUse8M02yySjVaGAiMcZFjJxQSwbEg6k-0kXlC3fuNWsciBlvoKU7Q&s=10" },
    { id: 7, category: 'sports', name: "Deepika Kumari", life: "1994 - Present", short: "World Champion Archer.", long: "Born in Ranchi, she reached World No. 1 in Archery. A recipient of the Padma Shri and Arjuna Award, she has represented India in multiple Olympics.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtE1km0NkQf3ovapDRuVVFAputhgMAu7SZHcGiz1ldizenDkamu5wejHnkW4_DWcs102tOtxU4K_1CQ-5BBudiLjxEt4R_oUeUyxh23qOm7g&s=10" },

    // CELEBRITIES
    { id: 8, category: 'arts', name: "Priyanka Chopra", life: "1982 - Present", short: "Global Icon and Miss World 2000.", long: "Born in Jamshedpur, she is one of the world's most recognizable actors, a UNICEF Goodwill Ambassador, and a Padma Shri winner.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMB8AQL02_YA-l59-q3dede1b7hTvO9xw4MlJ7eI_8CYcvNBBlyPIaZclVHKsAOQjY-lnd6qpB7zsuwoZe0WTdD5EwzYN4tYOOBlu1asV-&s=10" },
    { id: 9, category: 'arts', name: "Sushant Singh Rajput", life: "1986 - 2020", short: "Actor & Ranchi's Beloved Reel-Life Dhoni.", long: "Though born in Patna, his portrayal of M.S. Dhoni made him a household name in Jharkhand, inspiring millions with his passion for science and cinema.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AQkSSgncyLvCIb7_FE9M0ILj6-bF_UES4y8f8C7qdxgFol8he4HLceh-0Sb_PbvPOxApxDGxt9iPxUZB7OG6xgdfvqdg5TN9ZdVT2QFY&s=10" },
    { id: 10, category: 'arts', name: "Shilpa Rao", life: "1984 - Present", short: "Leading Playback Singer.", long: "Hailing from Jamshedpur, she has lent her voice to major Bollywood hits and won multiple awards for her soulful singing style.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nv67yR8TN-Kgy0NzBGor9ML1hwvJ2E6n3xCl7DQPwAjcMPC-HX4j899Qh4bP9FQWpwxC85xHMWHQgUW6G45BEhGxi1VAz0yXCMPUmlL5aA&s=10" },
    { id: 11, category: 'arts', name: "Pankaj Tripathi", life: "1976 - Present", short: "Acclaimed Film Actor.", long: "A master of realistic acting who spent significant time in Jharkhand. Known for his legendary performances in Mirzapur and Newton.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCtqiKhUS55cvnzLhCXQ19uMQyUJRcvrUD-afQjCWb8euiLrf0z6QPRh5BPoRKb3SLSYBIz0QyIsdAx3wg25lKDVn3xKOY_5QxwymUJZo&s=10" },
    { id: 12, category: 'arts', name: "Mukund Nayak", life: "1949 - Present", short: "Folk Artist & Padma Shri Awardee.", long: "A veteran of the Nagpuri folk dance 'Jhumair', he has performed worldwide to preserve the tribal music and culture of Jharkhand.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrfAEjhB6kVvULGHfGOhHxRcZS5k_uMr-iVtIm3rdcOSwefv7QjQj5Zqwdr8j_8yQWFmSw1fO88JfeHT_AUyQjDNO4zfF2bZ1hEI6myRf&s=10" },

    // POLITICS
    { id: 13, category: 'politics', name: "Shibu Soren", life: "1944 - Present", short: "Jharkhand Movement Leader.", long: "Known as 'Guruji', he was a central figure in the movement for a separate Jharkhand state and served as Chief Minister several times.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0GE9vrutflYhanSIdR1zjNswzrhmXpOF6qyf24gSH072wecoQ69cxgr0E-hVgs-98lsiJS865wQ0NAiCZZbVm3dXY0IcAb5x7Ja3RXz8Pw&s=10" },
    { id: 14, category: 'politics', name: "Arjun Munda", life: "1968 - Present", short: "Former CM and Union Minister.", long: "A prominent tribal leader who has served as the CM of Jharkhand and the Union Minister for Tribal Affairs.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKdWvffx-dXOQGq2NnLwFd_RbMqoe6XqBhGCEirLmT0Ky-o3KW3SUnca0DQmAgMffgiyMhp8ipnZsOhFQIqpXeZhGfZHcmeDUJepuOA&s=10" },
    { id: 15, category: 'politics', name: "Raghubar Das", life: "1955 - Present", short: "First Non-Tribal CM of Jharkhand.", long: "The first Chief Minister of Jharkhand to complete a full 5-year term. He is currently serving as a Governor.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG28C7Fm9fvsTMZ89gYSh0aTMtB13QvwGKI2GSGazOD9p4XNj28PxYzFCBKp4ULetsKwCWzoxKdUTFKyxT5px_GMrWQBxLLZBVTDK65xSNw&s=10" },
    { id: 16, category: 'politics', name: "Kartik Oraon", life: "1924 - 1981", short: "Visionary Leader & Engineer.", long: "A world-renowned engineer and politician who dedicated his life to the socio-economic development of the tribal communities.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEvFoUwfWNeF0VraKIQ00kLUusJXGFJx4eGdlsm1_x8IawzxQGpQDyY0wpMBDy9AOEfEXlLBgE0x-R3XHqN2OD1Zy1Yjs8twuH4ntQEo-&s=10" },
    { id: 17, category: 'politics', name: "Jaipal Singh Munda", life: "1903 - 1970", short: "Hockey Gold Medalist & Statesman.", long: "Captained India to Olympic Gold in 1928 and later became a champion of tribal rights in the Constituent Assembly.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4UB5cMgU3ReqVcnNzymQ2Rw-4ZXmE0rA3D9aqJy7V283truzw21wytza_73twO9_AO9J1gPpOYqjmKNOwm2L5jF2MyB5sUVnSo3rpF4qsQ&s=10" }
];

function createCard(icon) {
    return `
        <div onclick="openDetails(${icon.id})" class="bg-zinc-800 rounded-2xl p-6 shadow-xl transition-all duration-700 ease-in-out hover:scale-105 hover:bg-zinc-700 cursor-pointer flex flex-col items-center text-center">
            <img src="${icon.img}" class="w-28 h-28 rounded-full object-cover border-4 border-emerald-500 mb-4 shadow-lg">
            <h2 class="text-xl font-bold text-white">${icon.name}</h2>
            <p class="text-emerald-400 text-sm mb-2">${icon.life}</p>
            <p class="text-zinc-400 text-sm leading-relaxed">${icon.short}</p>
        </div>
    `;
}

function renderGallery() {
    const categories = {
        'freedom': 'freedom-grid',
        'industry': 'industry-grid',
        'sports': 'sports-grid',
        'arts': 'arts-grid',
        'politics': 'politics-grid'
    };

    for (const [cat, gridId] of Object.entries(categories)) {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = iconData
                .filter(icon => icon.category === cat)
                .map(icon => createCard(icon))
                .join('');
        }
    }
}

function openDetails(id) {
    const icon = iconData.find(item => item.id === id);
    const content = document.getElementById('modalContent');
    content.innerHTML = `
        <div class="flex flex-col items-center">
            <img src="${icon.img}" class="w-40 h-40 rounded-full object-cover border-4 border-emerald-400 mb-4">
            <h2 class="text-4xl font-bold text-emerald-400">${icon.name}</h2>
            <p class="text-zinc-400 italic text-lg">${icon.life}</p>
        </div>
        <div class="mt-6 border-t border-zinc-700 pt-6">
            <p class="text-zinc-200 text-lg leading-loose font-light">${icon.long}</p>
        </div>
    `;
    document.getElementById('detailBlock').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeDetails() {
    document.getElementById('detailBlock').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Start
renderGallery();