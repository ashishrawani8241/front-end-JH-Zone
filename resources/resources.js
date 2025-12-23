/* ================= Resources Data ================= */
const resources = [
    {
        id: 1,
        name: "Coal",
        tag: "Black Diamond",
        contrib: "27.3% of India's Reserves",
        location: "Jharia, Bokaro, Dhanbad, Giridih",
        desc: "Jharkhand is the powerhouse of India, holding the largest coal reserves in the country. The Jharia coalfield is famous for being the only source of prime coking coal essential for the steel industry.",
        images: [
            "https://imgs.search.brave.com/qKauQFEbBP6n4ioe3_7ra0xy3cRgF3sCgq-7LrksdxM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzczLzYzLzAy/LzM2MF9GXzE1NzM2/MzAyODZfdExFRzZ3/WWtRejNtMjE3UkMz/a2E0NzNZNVU5Z0VQ/VnkuanBn",
            "https://imgs.search.brave.com/lTD0BWU88EQgA6d9CejwR4IJ2BjvWuMe_odwsGuYa4U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdz/Lm1vbmdhYmF5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvMzAvMjAxOS8x/MC8wMzExNDcwMi9q/aGFyaWEtcG9sbHV0/aW9uLmpwZw",
            "https://imgs.search.brave.com/USYDgzQrqaEBUWIBCDTDnoSNJY0-955Zlp5auSNqQ8Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZGM1/MTRxaDd0MDVkLmNs/b3VkZnJvbnQubmV0/L2RBL2ZlMmUyZmVh/ZTMzOGZkYmY4ODdi/MzExN2Q1Njg5ZDg3/LzI0MDB3LzkwcQ"
        ]
    },
    {
        id: 2,
        name: "Iron Ore",
        tag: "Steel Backbone",
        contrib: "26% of India's Reserves",
        location: "West Singhbhum (Noamundi, Gua, Chiria)",
        desc: "The Singhbhum region boasts some of the finest hematite iron ore deposits in the world. The Chiria mine alone holds the largest single iron ore deposit in India, fueling steel plants like Tata Steel and SAIL.",
        images: [
            "https://imgs.search.brave.com/BekPCEN7S0tB1PsPYYlPRsJnoA2BWJrhCHYTw-2uoEw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/ODEwLzczNy9zbWFs/bC9pcm9uLW9yZS1y/b2Nrcy1hcmUtc3Rh/Y2tlZC1pbi1sYXJn/ZS1waWxlcy1uZWFy/LWEtc3RlZWwtbWFu/dWZhY3R1cmluZy1w/bGFudC13aXRoLWlu/ZHVzdHJpYWwtc3Ry/dWN0dXJlcy1pbi10/aGUtYmFja2dyb3Vu/ZC11bmRlci1hLWJy/aWdodC1za3ktZHVy/aW5nLWRheXRpbWUt/cGhvdG8uanBlZw",
            "https://imgs.search.brave.com/BsctLODlIp1X91xhcdsrurpccEaQhDxRMbb0edmnW_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9taW5l/LWlyb24tb3JlLTE3/MTk4NDQ2LmpwZw"
        ]
    },
    {
        id: 3,
        name: "Mica",
        tag: "Shiny Mineral",
        contrib: "45% of India's Production (Historically)",
        location: "Koderma, Giridih",
        desc: "Koderma is known as the 'Mica Capital of India'. Jharkhand produces superior quality Ruby Mica, which is highly valued globally for its insulating properties in electronics.",
        images: [
            "https://imgs.search.brave.com/m27ozByfqAsR5-S0xebQygCTCkKuMX6TGrQZuSsQFNs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzI1Lzc4Lzg0/LzM2MF9GXzMyNTc4/ODQxMF94dTRsZUFy/YVJVRmxEbFk2Nk5V/VHVheHMyaFhEMTZl/cC5qcGc",
            "https://imgs.search.brave.com/J5xkqe5NztYTP_I2AJ9ntkZX0PFM0ggQJ-qO5LpeuiY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzE1/ODcwNDMvcGhvdG8v/cXVhcnR6LW1pY2Et/YW5kLWNsYXktcG90/LXJlbW5hbnRzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0x/ZWY1QXJfRFlNcFJh/WDZIMkd2VWE4RVBT/dDBFYWU5WjBJTjZv/a0w0UEhNPQ",
            "https://imgs.search.brave.com/10FikPtEG_pnMgb0bebtPi6tF2673Hww1cwUKhToCtE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NzI2NDg4Ni9waG90/by9jbG9zZS11cC1v/Zi1hLW1pY2EtZ25l/aXNzLXdpdGgtbGFy/Z2UtY3J5c3RhbHMt/b2YtbXVzY292aXRl/LWEtbGlnaHQtbWlj/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9N0F4cFdrV3Jl/VVh4RTliSUF5bnJz/SWFwajNlcmFQellE/dFo4Q1VTdWZ3RT0"
        ]
    },
    {
        id: 4,
        name: "Copper",
        tag: "Red Gold",
        contrib: "18.5% of India's Reserves",
        location: "East Singhbhum (Ghatshila, Mosabani)",
        desc: "The Indian Copper Complex at Ghatshila was the first copper smelter in India. The region forms part of the famous Copper Belt, critical for India's electrical and telecommunication sectors.",
        images: [
            "https://imgs.search.brave.com/Djh_pzR_5HAL7XU2linAsVQErrhexQkfyFdqmV4xlVs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/NzA0NjU0L3Bob3Rv/L2NvcHBlci1jdS1j/aGVtaWNhbC1lbGVt/ZW50LTNkLXJlbmRl/cmluZy1pc29sYXRl/ZC1vbi1ibGFjay1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/ZkpvRDREajNZUFdx/NGR6aEpqdGFCdy1Y/Z2d4bmlEMUtWWDFJ/Y2p5OVJVPQ",
            "https://imgs.search.brave.com/HbO3DCJ-zKJ9a_9LW2wY0ld0D1Yiz_Za57XIoIAcVX8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MjMxOTI5MC9waG90/by9jbG9zZS11cC1v/Zi1lbGVjdHJpY2Fs/LWVuZ2luZWVyLWlu/c3BlY3RpbmctY29w/cGVyLXdpbmRpbmdz/LWluLWVsZWN0cmlj/YWwtZW5naW5lZXJp/bmctZmFjdG9yeS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c0pPc1dfOXJ2STU4/YVc0NXQyWGM5Z2NF/SGpZNk9tZlpFZjFl/MlltcXZxdz0",
            "https://imgs.search.brave.com/6AYj4Me7ndMIFIBQsO8x3LrMxLJ7hyIII1er5ebARkk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/ODI2LzQzMS9zbWFs/bC9jb3BwZXItY29p/bC1jb3BwZXItd2ly/ZS13b3VuZC1vbi1h/LWNvaWwtY29wcGVy/LXNjcmFwLXBob3Rv/LkpQRw"
        ]
    },
    {
        id: 5,
        name: "Bauxite",
        tag: "Aluminum Source",
        contrib: "High Grade Deposits",
        location: "Lohardaga, Gumla, Latehar",
        desc: "Jharkhand is a key producer of Bauxite, the primary ore for Aluminum. The Lohardaga district is the hub of bauxite mining, supplying ore to major aluminium refineries like HINDALCO.",
        images: [
            "https://imgs.search.brave.com/ZZrXuasTkh2XptIsFnXAu3dB0GB6b4InCyu5RLcIRjE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg5/NDE5Mzk0L2RlL2Zv/dG8vYS13b3JrZXIt/aG9sZHMtaGlnaC1n/cmFkZS1yYXctYmF1/eGl0ZS1hdC10aGUt/c2FuZ2FyZWRpLWJh/dXhpdGUtbWluZS1v/cGVyYXRlZC1ieS1j/b21wYWduaWUtZGVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1nRldlZVd4cUU1/NUt0cWlGcVpCY29q/MUtpa1AzR2duRnR3/aTVYRGUzbDlzPQ",
            "https://imgs.search.brave.com/TjveyxCgnsJi3JA2eTz46BquRvbAOIUs0nvF5dF7nEE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODM0/Mjk0NDEvcGhvdG8v/YS10cmFpbi1sb2Fk/ZWQtd2l0aC1iYXV4/aXRlLWFycml2ZXMt/YXQtdGhlLWJhdXhp/dGUtZmFjdG9yeS1v/Zi1ndWluZWFzLWxh/cmdlc3QtbWluaW5n/LWZpcm0uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTFzOUg5/UzlzekJrQkFTeVd0/aG1JUEt6TkJ2RkR3/bWE5b1lNTDJVLUVS/dUE9",
            "https://imgs.search.brave.com/kBpDfriDdp0CKIiKUjD6R1WpBzq5fytUWPJQCGRi05o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/MDg2LzIwOS9zbWFs/bC9tb3VudGFpbnMt/b2YtYmF1eGl0ZS1v/cmUtYmVpbmctY3J1/c2hlZC1hbmQtc29y/dGVkLWZvci1wcm9j/ZXNzaW5nLXBob3Rv/LmpwZw"
        ]
    },
    {
        id: 6,
        name: "Uranium",
        tag: "Nuclear Fuel",
        contrib: "100% of India's Production",
        location: "Jaduguda, Turamdih (East Singhbhum)",
        desc: "Jaduguda in Jharkhand holds the distinction of having India's first uranium mine. Managed by UCIL, these mines are strategic assets for India's nuclear energy program.",
        images: [
            "https://imgs.search.brave.com/6FGlCW7NAVOSp7ZA7B7Q6s-bVN3vw8HpEceulYMv-Xg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/NzA1MDcyL3Bob3Rv/L3VyYW5pdW0tdS1j/aGVtaWNhbC1lbGVt/ZW50LTNkLXJlbmRl/cmluZy1pc29sYXRl/ZC1vbi1ibGFjay1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz16/UDdLSGU5cXdsNS1W/VzNhZVRqSTl1MkxK/T25tUmkwYVlMTXUt/WmtZSzQ0PQ",
            "https://imgs.search.brave.com/PFvmfUjHrxho-1PYnl79P6VhI_hv3yIHv7AFg4JFik8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzU2LzMyLzk3/LzM2MF9GXzE1NTYz/Mjk3OTFfODBoclJt/NUZCQllCR3hXemxi/NlprUXg1bmp2NTQz/VUQuanBn",
            "https://imgs.search.brave.com/4Kw_zUtVt4NaHIwcUnUdF7pvk6lNzNsYCsanBLWRGYw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1p/bGx1c3RyYXRpb24v/dXJhbml1bS1lbGVt/ZW50LW9uLW1ldGFs/LXBlcmlvZGljLTI2/MG53LTIzMzUxNzc2/MTEuanBn"
        ]
    }
];

/* ================= Logic ================= */
const grid = document.getElementById("resourceGrid");
const modal = document.getElementById("resourceModal");
const closeBtn = document.querySelector(".close-btn");

// 1. Render Cards
function renderResources() {
    grid.innerHTML = resources.map(item => `
        <div class="card" onclick="openDetails(${item.id})">
            <img src="${item.images[0]}" alt="${item.name}">
            <div class="card-content">
                <span>${item.tag}</span>
                <h3>${item.name}</h3>
            </div>
        </div>
    `).join('');
}

// 2. Open Modal
function openDetails(id) {
    const data = resources.find(r => r.id === id);
    
    // Fill text data
    document.getElementById("modalTitle").innerText = data.name;
    document.getElementById("modalContrib").innerText = data.contrib;
    document.getElementById("modalLoc").innerText = data.location;
    document.getElementById("modalDesc").innerText = data.desc;
    
    // Fill Images
    const mainImg = document.getElementById("mainImg");
    const thumbGrid = document.getElementById("thumbGrid");
    
    mainImg.src = data.images[0];
    thumbGrid.innerHTML = ""; // clear previous

    data.images.forEach((imgSrc, index) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        if(index === 0) thumb.classList.add("active-thumb");
        
        thumb.onclick = () => {
            mainImg.src = imgSrc;
            // update active styling
            document.querySelectorAll(".thumbnails img").forEach(img => img.classList.remove("active-thumb"));
            thumb.classList.add("active-thumb");
        };
        thumbGrid.appendChild(thumb);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Stop background scroll
}

// 3. Close Modal
function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Close on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Initialize
renderResources();