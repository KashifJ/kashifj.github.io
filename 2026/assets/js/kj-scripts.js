// Register the ScrollTrigger plugin
gsap.registerPlugin(Flip, ScrollTrigger);

const body = document.querySelector('#body');

function startLoad() {
    const countElement = document.querySelector('.counter');
    let currentVal = 0;

    function updateCount() {
        if (currentVal === 100) {
            return;
        }

        currentVal += Math.floor(Math.random() * 10) + 1;

        if (currentVal > 100) {
            currentVal = 100;
        }

        countElement.textContent = "Loading " + currentVal + "%";

        let delay = Math.floor(Math.random() * 200) + 250;
        setTimeout(updateCount, delay);
    }

    updateCount();
}

startLoad(); 

// 1. Manually split text into words using Vanilla JavaScript
document.querySelectorAll('h2').forEach(h2 => {
    const words = h2.innerText.split(' ');
    h2.innerHTML = words.map(word => {
        // Wrap each word in an inner span (for moving) and an outer span (for masking overflow)
        return `<span style="display: inline-block; overflow: hidden; vertical-align: bottom;">`+`<span class="animate-word" style="display: inline-block; transform: translateY(50px); opacity: 0;">${word}</span>`+`</span>`;
    }).join(' '); // Keeps natural spacing between words
});

function updateLiveClocks() {
    const timeContainer = document.querySelector('.time');
    if (!timeContainer) return;

    const now = new Date();    

    // 2. Dubai Time (Native GMT+4 / Gulf Standard Time)
    const dubaiTime = now.toLocaleTimeString([], { 
        timeZone: 'Asia/Dubai', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    }); 

    // 4. Inject into layout track container
    timeContainer.innerHTML = `        
        <span class="dubai-clock">(GMT+4) ${dubaiTime} GST</span>        
    `;
}

// Run immediately on page load
updateLiveClocks();

// Keep the clock ticking accurately every single second
setInterval(updateLiveClocks, 1000);

gsap.fromTo('.logo', 2, {
    position: 'absolute',
    top: '40vh',
    left: '50%',
    transform: "translate(-50%, -50%)",                    
    ease: 'power4.inOut',    
    duration: 2,  
    scale: 0  
},
{   
    ease: 'power4.inOut',
    duration: 2,
    scale: 1    
});

gsap.to('.loader', 2.5, {
    opacity: 0,
    ease: 'power4.inOut',
    delay: 7,
    onComplete: () => {
        document.querySelector('.loader')?.remove();
        gsap.fromTo('.logo', 2, {
            position: 'absolute',
            top: '40vh',
            left: '50%',
            transform: "translate(-50%, -50%)",                    
            ease: 'power4.inOut',    
            duration: 1.5,            
        },
        {   
            position: 'absolute',
            top: '7px',
            left: '32px',
            transform: "translate(0%, 0%)",    
            ease: 'power4.inOut',
            duration: 1.5,           
            onComplete: () => {

                body.classList.add('loaded');   

                gsap.fromTo(".right-nav > *", 
                    { 
                        opacity: 0, 
                        y: 30, 
                    }, 
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        ease: "power3.out", 
                        stagger: 0.05 
                    }
                );

                gsap.fromTo(".data-frame-left-border", 
                    { 
                        height: 0 
                    }, 
                    { 
                        height: '100%', 
                        duration: 0.1, 
                        ease: "power3.out",
                        onComplete: () => {                            
                            gsap.fromTo(".name > *", 
                                { 
                                    opacity: 0, 
                                    y: 100,
                                }, 
                                { 
                                    opacity: 1, 
                                    y: 0, 
                                    delay: 1,
                                    duration: 1.5, 
                                    ease: "power3.out", 
                                    stagger: 0.05 
                                }
                            );
                            gsap.fromTo(".location > *", 
                                { 
                                    opacity: 0, 
                                    y: 100,
                                }, 
                                { 
                                    opacity: 1, 
                                    y: 0, 
                                    delay: 1,
                                    duration: 1.5, 
                                    ease: "power3.out", 
                                    stagger: 0.05 
                                }
                            );
                            gsap.fromTo(".tags > *", 
                                { 
                                    opacity: 0, 
                                    y: 100,
                                }, 
                                { 
                                    opacity: 1, 
                                    y: 0, 
                                    delay: 1,
                                    duration: 1.5, 
                                    ease: "power3.out", 
                                    stagger: 0.08,
                                    onComplete: () => {
                                        // Target each tag individually to assign random pacing
                                        document.querySelectorAll(".tags > *").forEach(tag => {
                                            gsap.to(tag, {
                                                opacity: gsap.utils.random(0.2, 0.4),      // Random target fade depth
                                                duration: gsap.utils.random(1.2, 2.5),     // Random speed per tag
                                                delay: gsap.utils.random(0, 1.5),          // Breaks synchronization
                                                ease: "sine.inOut",                        // Gentle, breathing curve
                                                yoyo: true,                                
                                                repeat: -1                                 
                                            });
                                        });
                                    }
                                }
                            );
                            gsap.fromTo(".animate-word", 
                                { 
                                    opacity: 0, 
                                    y: 50, // Slides up from 50px below
                                }, 
                                { 
                                    opacity: 1, 
                                    y: 0, 
                                    delay: 1,
                                    duration: 1, 
                                    ease: "power3.out", 
                                    stagger: 0.08, // The delay time between each word appearing
                                    onComplete: () => {
                                        // Target each tag individually to assign random pacing
                                        document.querySelectorAll("h2 > span").forEach(tag => {
                                            gsap.to(tag, {
                                                opacity: gsap.utils.random(0.5, 0.7),      // Random target fade depth                                                
                                                duration: gsap.utils.random(1.2, 2.5),     // Random speed per tag
                                                delay: gsap.utils.random(0, 1.5),          // Breaks synchronization
                                                ease: "sine.inOut",                        // Gentle, breathing curve
                                                yoyo: true,                                
                                                repeat: -1                                                
                                            });
                                        });
                                        gsap.fromTo(".more-link", 
                                            { 
                                                opacity: 0, 
                                                y: 30,
                                            }, 
                                            { 
                                                opacity: 1, 
                                                y: 0,                                                
                                                duration: 1.5, 
                                                ease: "power3.out", 
                                                stagger: 0.05 
                                            }
                                        );


                                        // Target all your project cards
                                        const cards = document.querySelectorAll(".case-study-card");

                                        cards.forEach((card, index) => {

                                            // 📏 HEIGHT ADJUSTMENT: Temporarily ensure layout properties allow a true structural measurement
                                            gsap.set(card, { height: "auto" }); 
                                            const contentHeight = card.scrollHeight; // Reads precise internal height of inner elements
                                            
                                            // Lock the height to this exact pixel value explicitly
                                            gsap.set(card, { height: contentHeight });


                                            // 🖼️ IMAGE CONTAINER WIDTH LOCK:
                                            // Find the specific container inside this individual card
                                            // const imgContainer = card.querySelector('.image-container');
                                            // if (imgContainer) {
                                            //     const currentWidth = imgContainer.offsetWidth; // Measures the rendered pixel width
                                            //     gsap.set(imgContainer, { width: currentWidth }); // Locks the width in px
                                            // }

                                            if (index === 0) {
                                                // ✨ FIRST CARD: Show instantly or animate once immediately without waiting for scroll
                                                gsap.fromTo(card, 
                                                    { 
                                                        opacity: 0, 
                                                        y: 200, // Set to 0 so it doesn't jump awkwardly if it sits at the top of the viewport
                                                        visibility: "hidden",                                                        
                                                    }, 
                                                    { 
                                                        opacity: 1,
                                                        y: 0,                                                        
                                                        visibility: "visible",
                                                        duration: 0.8, 
                                                        ease: "power2.out"
                                                        // No ScrollTrigger config here means it runs once on page load
                                                    }
                                                );
                                            } else {
                                                // 📜 OTHER CARDS: Keep your directional scroll layout effects intact
                                                gsap.fromTo(card, 
                                                    { 
                                                        opacity: 0, 
                                                        visibility: "hidden",
                                                        "--card-blur": "100px" // Start blurred out
                                                    }, 
                                                    { 
                                                        opacity: 1, 
                                                        visibility: "visible",
                                                        "--card-blur": "0px", // Transition clean and focused
                                                        duration: 0.8, 
                                                        ease: "power2.out",
                                                        
                                                        scrollTrigger: {
                                                            trigger: card,          
                                                            start: "top 85%",       
                                                            end: "bottom 15%",      
                                                            toggleActions: "play reverse resume reverse", 
                                                            invalidateOnRefresh: true 
                                                        }
                                                    }
                                                );
                                            }
                                        });


                                    }
                                }
                            );
                            gsap.fromTo(".philosophy > *", 
                                { 
                                    opacity: 0, 
                                    y: 70, 
                                }, 
                                { 
                                    opacity: 1, 
                                    y: 0, 
                                    delay: 1,
                                    duration: 0.8, 
                                    ease: "power3.out", 
                                    stagger: 0.05,
                                    onComplete: () => {
                                        // Target each tag individually to assign random pacing
                                        document.querySelectorAll(".philosophy > *").forEach(tag => {
                                            gsap.to(tag, {
                                                opacity: gsap.utils.random(0.5, 0.7),      // Random target fade depth
                                                duration: gsap.utils.random(1.2, 2.5),     // Random speed per tag
                                                delay: gsap.utils.random(0, 1.5),          // Breaks synchronization
                                                ease: "sine.inOut",                        // Gentle, breathing curve
                                                yoyo: true,                                
                                                repeat: -1                                 
                                            });
                                        });

                                        gsap.fromTo(".contact > *", 
                                            { 
                                                opacity: 0, 
                                                y: 30,
                                            }, 
                                            { 
                                                opacity: 1, 
                                                y: 0,                                                
                                                duration: 1.5, 
                                                ease: "power3.out", 
                                                stagger: 0.05 
                                            }
                                        );

                                    }
                                }
                            );
                            
                            
                            


                        }
                    }
                );

                gsap.fromTo(".data-frame-right-border", 
                    { 
                        height: 0 
                    }, 
                    { 
                        height: '100%', 
                        duration: 0.1, 
                        ease: "power3.out"                        
                    }
                );

                document.querySelectorAll('.hidden').forEach(el => el.classList.remove('d-none'));

                const introH = document.querySelector('.intro');
                const height = introH.offsetHeight;

                const caseStudy = document.querySelector('.case-studies');
                caseStudy.style.marginTop = `${height}px`;

            }

        });        
    }
});


// 1. Target all project cards using querySelectorAll
const projectCards = document.querySelectorAll('.case-study-card');

const imgTarget = document.querySelector('#imgTarget');
const gridView = document.querySelector('#gridView');
const detailView = document.querySelector('#detailView');
const backBtn = document.querySelector('#backBtn');

const projectDetailMocks = document.querySelector('#detailRightMocks');

let loopTrigger;
let currentActiveCard = null; // Dynamically tracks which card was clicked

let savedScrollPosition = 0;

// 2. Loop through each card container using .forEach()
projectCards.forEach((card) => {
    const imageContainer = card.querySelector('.image-container');

    card.addEventListener('click', () => {       
        // Track this specific card so the back button can reference it later        

        body.classList.add('overflow-hidden');

        savedScrollPosition = window.scrollY || document.documentElement.scrollTop;
        currentActiveCard = card;

        currentActiveCard.classList.add('active');        
        
        // ✨ GET ATTRIBUTE & FETCH HTML:
        const projectSlug = card.getAttribute('data-project'); // e.g., "project-1"
        const detailContainer = document.querySelector(".dynamic-content");

        if (projectSlug && detailContainer) {
            // Fetch the dedicated HTML fragment matching the data attribute
            fetch(`${projectSlug}.html`)
                .then(response => {
                    if (!response.ok) throw new Error(`Network error: ${response.statusText}`);
                    return response.text();
                })
                .then(htmlContent => {
                    // 🗺️ DOM PARSING LAYER:
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlContent, 'text/html');
                    
                    // 1. Separate out the Right Mocks
                    const incomingMocksInner = doc.querySelector('.detail-right-mocks-inner');
                    if (detailRightMocks) {
                        detailRightMocks.innerHTML = ''; 
                        if (incomingMocksInner) {
                            detailRightMocks.appendChild(incomingMocksInner);
                        }
                    }
        
                    // 2. Separate out only the Left Text Content 
                    // If your external files have a specific text wrapper class (e.g., .detail-left-inner)
                    const incomingLeftText = doc.querySelector('.detail-left-inner') || doc.body;
                    
                    // Clean out the old text and inject ONLY the text structure
                    detailContainer.innerHTML = incomingLeftText.innerHTML;
        
                    // 🎬 Elements now exist perfectly in the DOM tree, trigger animations safely
                    gsap.fromTo(".detail-left *", 
                        { opacity: 0, y: 30 }, 
                        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out", stagger: 0.05 }
                    );
                    
                })
                .catch(error => {
                    console.error('Error loading project HTML:', error);
                    detailContainer.innerHTML = `<p style="color: red;">Error loading project details. Make sure you are running a local live server.</p>`;
                });
        }

        // Capture layout position of this specific image container
        const state = Flip.getState(imageContainer);

        // ✨ HEIGHT TRACKING: Measure the current rendered pixel height of the image container
        const containerHeight = imageContainer.offsetHeight;
        // Lock that exact pixel height onto the imgTarget right away
        gsap.set(imgTarget, { height: containerHeight });

        // Append this specific container into the right column target
        imgTarget.appendChild(imageContainer);
        
        detailView.classList.remove('hide');
        //gridView.style.display = 'none';  
        
       // gsap.set(gridView, { visibility: 'hidden', opacity: 0 });

        gsap.fromTo("#gridView, header, .data-frame-left, .intro, .data-frame-right", 
            { opacity: 1, visibility: 'visible'}, 
            { opacity: 0, visibility: 'hidden', duration: 0.5, ease: "power3.out", stagger: 0.05 }
        );

        // Animate detail page text items
        // gsap.fromTo(".detail-left *", 
        //     { opacity: 0, y: 30 }, 
        //     { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: "power3.out", stagger: 0.05 }
        // );

        // Execute the Flip growth animation
        Flip.from(state, {
            duration: 1.1,
            ease: "power4.inOut",
            absolute: true,
            onComplete: () => {
                //initInfiniteScroll();
                //initScrollSkew();

                gsap.fromTo(projectDetailMocks, 
                    { opacity: 0, visibility: 'hidden'}, 
                    { opacity: 1, visibility: 'visible', duration: 1, ease: "power3.out", stagger: 0.05 }
                );

                //projectDetailMocks.style.display = 'block';                

                //initSectionVisibility();

                projectCards.forEach((otherCard) => {
                    if (otherCard !== currentActiveCard) {
                        otherCard.classList.add('inactive');
                        gsap.set(otherCard, { opacity: 0 });
                        //otherCard.style.display = 'none';
                    }
                });
            }
        });
    });
});

backBtn.addEventListener('click', () => {    

    if (!currentActiveCard) return;

    // ✨ IMMEDIATE RESET: Snap back to top instantly right on click
    gsap.to('.view-detail', { 
        scrollTop: 0, 
        duration: 0.5, 
        ease: "power2.out" 
    });

    // 1. FIRST STAGE: Run the fade out on the detail text elements
    gsap.fromTo(".detail-left *", 
        { opacity: 1, y: 0 }, 
        { 
            opacity: 0, 
            y: 30, 
            duration: 0.5, 
            ease: "power3.in", 
            stagger: 0.03,
            
            // 2. SECOND STAGE: Trigger layout switches and Flip ONLY after text is completely invisible
            onComplete: () => {
                
                const imageContainer = imgTarget.querySelector('.image-container');
                const state = Flip.getState(imageContainer);
                
                // Target the link tag inside your current active card container
                const cardLink = currentActiveCard.querySelector('a');
                if (cardLink) {
                    cardLink.insertBefore(imageContainer, cardLink.firstChild);
                } else {
                    currentActiveCard.insertBefore(imageContainer, currentActiveCard.firstChild);
                }
                
                // Now it's safe to toggle layout visibilities so elements occupy grid space
                detailView.classList.add('hide');
                
                //gridView.style.display = 'block';
                gsap.set(gridView, { visibility: 'visible', opacity: 1 });
                
                // Prepare unactive cards for their upcoming entry animation
                const unactiveCards = Array.from(projectCards).filter(card => card !== currentActiveCard);
                // unactiveCards.forEach(card => {
                //     card.style.display = 'block';
                //     card.style.opacity = '0';
                // });
                
                // ✨ REPLACEMENT: Instantly jump back to the exact saved scroll snapshot position
                window.scrollTo({
                    top: savedScrollPosition,
                    behavior: 'auto' // Must be auto/instant so Flip can measure layout correctly
                });

                //projectDetailMocks.style.display = 'none'; 

                gsap.fromTo(projectDetailMocks, 
                    { opacity: 1, visibility: 'visible'}, 
                    { opacity: 0, visibility: 'hidden', duration: 1, ease: "power3.out", stagger: 0.05 }
                );
                
                // 3. THIRD STAGE: Execute the core image shrink animation loop
                Flip.from(state, {
                    duration: 0.9,
                    ease: "power4.inOut",
                    absolute: true,
                    onComplete: () => {           
                        //gsap.set(gridView, { visibility: 'visible', opacity: 1 });

                        gsap.fromTo("header, .data-frame-left, .intro, .data-frame-right", 
                            { opacity: 0, visibility: 'hidden'}, 
                            { opacity: 1, visibility: 'visible', duration: 1, ease: "power3.out", stagger: 0.2 }
                        );

                        // Cascade reveal the neighboring hidden cards
                        gsap.fromTo(unactiveCards, 
                            { display: 'block', opacity: 0 }, 
                            { 
                                opacity: 1, 
                                stagger: 0.1,
                                duration: 0.1,                 
                                ease: "power2.out",
                                onComplete: () => {
                                    unactiveCards.forEach(card => card.classList.remove('inactive'));
                                }
                            }
                        );

                        currentActiveCard.classList.remove('active');
                        currentActiveCard = null;

                        body.classList.remove('overflow-hidden');

                    }
                });
            }
        }
    );
});

let activeScrollTriggers = []; // Holds references to cleanly wipe instances later

function initSectionVisibility() {
    // 1. Target all scrollable content tracks in the right column
    const sections = document.querySelectorAll('.loop-item');
    if (!sections.length) return;

    sections.forEach((section) => {
        // 2. Create an isolated trigger timeline for each card section node
        const triggerInstance = ScrollTrigger.create({
            trigger: section,
            start: "top bottom-=50",  // Triggers fade-in slightly before hitting the bottom viewport line
            end: "bottom top+=50",    // Triggers fade-out slightly after crossing the top viewport line
            
            // Core visibility toggles based on directional intersections
            onEnter: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }),
            onLeave: () => gsap.to(section, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in" }),
            onEnterBack: () => gsap.to(section, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }),
            onLeaveBack: () => gsap.to(section, { opacity: 0, y: 30, duration: 0.4, ease: "power2.in" })
        });

        activeScrollTriggers.push(triggerInstance);
    });
}


const triggerBtn = document.querySelector('.more-link');

triggerBtn.addEventListener('click', () => {
    gsap.to('.about', {
        // Adds the class to the element (use "+=" prefix to append it without erasing existing classes)
        className: "about open", 
        duration: 1,
        ease: "power3.out"
    });
    gsap.fromTo(".data-frame-center", 
        { opacity: 1, visibility: 'visible'}, 
        { opacity: 0, visibility: 'hidden', duration: 0.5, ease: "power3.out", stagger: 0.5 }
    );
    gsap.fromTo(".about-wrapper > *", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.5 }
    );    
    gsap.fromTo(".about-pic", 
        { opacity: 0, "--pic-blur": "20px" }, 
        { 
            opacity: 1, 
            "--pic-blur": "0px", 
            duration: 1, 
            ease: "power3.out", 
            stagger: 0.5,
            onComplete: () => {
                gsap.to(".about-pic", {
                    scale: 1.05,                // Microscopic pulse scale depth
                    opacity: 0.9,               // Subtle breathing opacity variance
                    duration: 3,                // Deep breathing intervals
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1
                });
            }
        }
    );
    body.classList.add('overflow-hidden');
});


const aboutCloseBtn = document.querySelector('#closeBtn');

aboutCloseBtn.addEventListener('click', () => {
    gsap.to('.about', {
        // Adds the class to the element (use "+=" prefix to append it without erasing existing classes)
        className: "about", 
        duration: 1,        
        ease: "power3.out"
    });
    gsap.fromTo(".data-frame-center", 
        { opacity: 0, visibility: 'hidden'}, 
        { opacity: 1, delay: 0.5, visibility: 'visible', duration: 0.5, ease: "power3.out", stagger: 0.5 }
    );
    gsap.fromTo(".about-wrapper > *", 
        { opacity: 1, y: 0 }, 
        { opacity: 0, y: 50, duration: 0.5, ease: "power3.out", stagger: 0.5 }
    );
    body.classList.remove('overflow-hidden');
});