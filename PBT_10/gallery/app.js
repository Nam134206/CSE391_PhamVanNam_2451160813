const gallery =
document.querySelector("#gallery");

const loading =
document.querySelector("#loading");

const trigger =
document.querySelector("#load-trigger");

const lightbox =
document.querySelector("#lightbox");

const lightboxImg =
document.querySelector("#lightbox-img");

const lightboxTitle =
document.querySelector("#lightbox-title");

const closeBtn =
document.querySelector("#close-btn");

let page = 1;
let isLoading = false;

async function loadPhotos() {

    if(isLoading) return;

    isLoading = true;

    loading.style.display = "block";

    try {

        const response =
        await fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`
        );

        if(!response.ok){
            throw new Error(
                `HTTP ${response.status}`
            );
        }

        const photos =
        await response.json();

        renderPhotos(photos);

        page++;

    } catch(error){

        loading.innerHTML =
        `❌ ${error.message}`;

    } finally {

        isLoading = false;

        loading.style.display = "none";
    }
}

function renderPhotos(photos){

    photos.forEach(photo => {

        const card =
        document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img
                data-src="${photo.url}"
                alt="${photo.title}"
            >

            <p>${photo.title}</p>
        `;

        const img =
        card.querySelector("img");

        lazyObserver.observe(img);

        card.addEventListener(
            "click",
            () => openLightbox(photo)
        );

        gallery.appendChild(card);
    });
}

/* LAZY LOAD */

const lazyObserver =
new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                const img =
                entry.target;

                img.src =
                img.dataset.src;

                lazyObserver.unobserve(img);
            }
        });
    },
    {
        rootMargin:"100px"
    }
);

/* INFINITE SCROLL */

const infiniteObserver =
new IntersectionObserver(
    entries => {

        if(entries[0].isIntersecting){

            loadPhotos();
        }
    }
);

infiniteObserver.observe(trigger);

/* LIGHTBOX */

function openLightbox(photo){

    lightboxImg.src =
    photo.url;

    lightboxTitle.textContent =
    photo.title;

    lightbox.classList.remove(
        "hidden"
    );
}

closeBtn.addEventListener(
    "click",
    () => {

        lightbox.classList.add(
            "hidden"
        );
    }
);

lightbox.addEventListener(
    "click",
    e => {

        if(e.target === lightbox){

            lightbox.classList.add(
                "hidden"
            );
        }
    }
);

/* INIT */

loadPhotos();