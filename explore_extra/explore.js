/* =========================
   GSAP CANVAS SCROLL SETUP
========================= */

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("frame");

if (canvas) {
    const ctx = canvas.getContext("2d");

    const FRAME_COUNT = 237;
    const images = [];
    let imagesLoaded = 0;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawFrame(index) {
        const img = images[index - 1];
        if (!img) return;

        resizeCanvas();

        const scale = Math.max(
            canvas.width / img.width,
            canvas.height / img.height
        );

        const width = img.width * scale;
        const height = img.height * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            (canvas.width - width) / 2,
            (canvas.height - height) / 2,
            width,
            height
        );
    }

    function preloadFrames() {
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `pics_of_clip/frame_${String(i).padStart(4, "0")}.jpeg`;

            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === FRAME_COUNT) {
                    drawFrame(1);
                }
            };

            images.push(img);
        }
    }

    gsap.to({ frame: 1 }, {
        frame: FRAME_COUNT,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: ".parent",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5
        },
        onUpdate() {
            drawFrame(Math.round(this.targets()[0].frame));
        }
    });

    window.addEventListener("resize", () => drawFrame(1));

    preloadFrames();
}

/* =========================
   PLACE MODAL FUNCTIONALITY
========================= */

const modal = document.getElementById("placeModal");
const modalMainImg = document.getElementById("modalMainImg");
const modalTitle = document.getElementById("modalTitle");
const thumbnails = document.getElementById("thumbnails");
const mapLink = document.getElementById("mapLink");
const backBtn = document.getElementById("backBtn");

/* ---------- OPEN MODAL ---------- */
function openModal(card) {
    let images;
    let mapURL;

    try {
        images = JSON.parse(card.dataset.images);
        mapURL = card.dataset.map;
    } catch (err) {
        console.error("Invalid data-images format", err);
        return;
    }

    const placeName = card.querySelector("h3")?.innerText || "";

    modalTitle.innerText = placeName;

    // Main image
    modalMainImg.src = images[0];

    // Thumbnails
    thumbnails.innerHTML = "";
    images.forEach(src => {
        const thumb = document.createElement("img");
        thumb.src = src;
        thumb.addEventListener("click", () => {
            modalMainImg.src = src;
        });
        thumbnails.appendChild(thumb);
    });

    // Map link
    mapLink.href = mapURL;

    // Show modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

/* ---------- CLOSE MODAL ---------- */
function closeModal() {
    modal.classList.remove("active");
    modalMainImg.src = "";
    thumbnails.innerHTML = "";
    modalTitle.innerText = "";
    document.body.style.overflow = "";
}

/* ---------- ATTACH EVENTS ---------- */
document.querySelectorAll(".place-card").forEach(card => {
    card.addEventListener("click", () => openModal(card));
});

backBtn.addEventListener("click", closeModal);

/* ---------- ESC KEY SUPPORT ---------- */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});
