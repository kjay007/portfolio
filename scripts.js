particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ef4444'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 5,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ef4444',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});


// Footer Animations
document.addEventListener('DOMContentLoaded', () => {
    const footerSections = document.querySelectorAll('.footer-section');
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                footerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    footerSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        footerObserver.observe(section);
    });

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'translateY(-5px) rotate(360deg)';
            icon.style.transition = 'all 0.5s ease';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.newsletter-input');
            const button = newsletterForm.querySelector('.newsletter-btn');
            button.style.transform = 'scale(0.95)';
            setTimeout(() => { button.style.transform = 'scale(1)'; }, 200);
            input.style.transition = 'all 0.3s ease';
            input.style.transform = 'translateX(10px)';
            setTimeout(() => { input.value = ''; input.style.transform = 'translateX(0)'; }, 300);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.animation = `fadeInLeft 0.8s ease forwards ${index * 0.2}s`;
                } else if (entry.target.classList.contains('experience-card')) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                    const listItems = entry.target.querySelectorAll('li');
                    listItems.forEach((item, i) => {
                        item.style.animation = `fadeInLeft 0.5s ease forwards ${0.8 + (i * 0.2)}s`;
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item, .experience-card').forEach(item => observer.observe(item));

    document.querySelectorAll('.timeline-item').forEach(item => {
        const dot = item.querySelector('.timeline-dot');
        if (!dot) return;
        item.addEventListener('mouseenter', () => {
            dot.style.transform = 'scale(1.5)';
            dot.style.boxShadow = '0 0 0 6px rgba(220, 53, 69, 0.3)';
        });
        item.addEventListener('mouseleave', () => {
            dot.style.transform = 'scale(1)';
            dot.style.boxShadow = '0 0 0 4px rgba(220, 53, 69, 0.2)';
        });
    });
});

// Scroll animations
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const aboutContent = document.querySelector('.about-content');
    const skillItems = document.querySelectorAll('.skill-item');
    if (aboutContent) observer.observe(aboutContent);
    skillItems.forEach(item => observer.observe(item));
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => { const i = item.querySelector('i'); if(i) i.style.transform = 'translateX(5px)'; });
        item.addEventListener('mouseleave', () => { const i = item.querySelector('i'); if(i) i.style.transform = 'translateX(0)'; });
    });
});

// Gradient effect
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--x', `${x}%`);
    document.documentElement.style.setProperty('--y', `${y}%`);
    const cloud = document.querySelector('.cloud');
    if (cloud) cloud.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.onmousemove = (e) => { if (typeof animatedCircles === 'function') animatedCircles(e); };

AOS.init({ duration: 1000, once: true });

window.addEventListener('load', () => {
    setTimeout(() => { const loader = document.querySelector('.loader'); if (loader) loader.style.display = 'none'; }, 2000);
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const updateCounter = () => {
        current += step;
        if (current < target) { counter.textContent = Math.round(current); requestAnimationFrame(updateCounter); }
        else { counter.textContent = target; }
    };
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { updateCounter(); counterObserver.unobserve(entry.target); } });
    });
    counterObserver.observe(counter);
});

// Active Nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - section.clientHeight / 3) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) link.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bassDropSound = document.getElementById('bassDropSound');
    const portfolioButton = document.querySelector('a[href="#work"].btn-danger');
    const contactButton = document.querySelector('a[href="#contact"].btn-outline-light');
    function playBassDropSound() { if (bassDropSound) { bassDropSound.currentTime = 0; bassDropSound.play(); } }
    if (portfolioButton) portfolioButton.addEventListener('click', playBassDropSound);
    if (contactButton) contactButton.addEventListener('click', playBassDropSound);
});

document.addEventListener('DOMContentLoaded', () => {
    const bassDropSound = document.getElementById('bassDropSound');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    function playBassDropSound() { if (bassDropSound) { bassDropSound.currentTime = 0; bassDropSound.play(); } }
    navLinks.forEach(link => link.addEventListener('click', playBassDropSound));
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundAudio');
    const checkbox = document.getElementById('checkboxInput');
    if (!audio) return;
    audio.loop = true;
    function playAudio() {
        audio.play().catch(() => {
            document.addEventListener('click', function startAudio() { audio.play(); document.removeEventListener('click', startAudio); });
        });
    }
    playAudio();
    if (checkbox) checkbox.addEventListener('change', function() { audio.muted = this.checked; });
    audio.addEventListener('ended', playAudio);
});

document.addEventListener('DOMContentLoaded', function() {
    const hoverSound = document.getElementById('hoverSound');
    if (!hoverSound) return;
    const hoverElements = document.querySelectorAll('section, .stats-card, .skill-card, .portfolio-item, .software-container, .timeline-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() { hoverSound.currentTime = 0; hoverSound.play().catch(() => {}); });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.review-track');
    const cards = document.querySelectorAll('.review-card');
    if (!track || !cards.length) return;
    let currentIndex = 0;
    function slideReviews() {
        const cardWidth = cards[0].offsetWidth;
        currentIndex = (currentIndex + 1) % cards.length;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    setInterval(slideReviews, 5000);
});

// Audio Mute Button
document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('muteButton')) {
        const audioControlWrapper = document.createElement('div');
        audioControlWrapper.className = 'audio-control-wrapper';
        audioControlWrapper.innerHTML = `
            <button id="muteButton" class="audio-mute-btn">
                <i class="bi bi-volume-up-fill"></i>
                <i class="bi bi-volume-mute-fill"></i>
            </button>
            <div class="audio-tooltip">Toggle Audio</div>
        `;
        document.body.appendChild(audioControlWrapper);
    }

    const muteButton = document.getElementById('muteButton');
    const backgroundAudio = document.getElementById('backgroundAudio');
    const bassDropSound = document.getElementById('bassDropSound');
    const hoverSound = document.getElementById('hoverSound');
    let originalVolumes = { background: 1, bass: 1, hover: 1 };
    if (backgroundAudio) originalVolumes.background = backgroundAudio.volume;
    if (bassDropSound) originalVolumes.bass = bassDropSound.volume;
    if (hoverSound) originalVolumes.hover = hoverSound.volume;

    const isMuted = localStorage.getItem('audioMuted') === 'true';
    if (isMuted) { muteAllAudio(); muteButton.classList.add('muted'); }

    muteButton.addEventListener('click', function() {
        const isCurrentlyMuted = muteButton.classList.contains('muted');
        if (isCurrentlyMuted) { unmuteAllAudio(); muteButton.classList.remove('muted'); localStorage.setItem('audioMuted', 'false'); playFeedbackSound(); }
        else { muteAllAudio(); muteButton.classList.add('muted'); localStorage.setItem('audioMuted', 'true'); }
        this.style.transform = 'scale(0.9)';
        setTimeout(() => { this.style.transform = ''; }, 150);
    });

    function muteAllAudio() {
        if (backgroundAudio) { backgroundAudio.volume = 0; backgroundAudio.muted = true; }
        if (bassDropSound) { bassDropSound.volume = 0; bassDropSound.muted = true; }
        if (hoverSound) { hoverSound.volume = 0; hoverSound.muted = true; }
    }
    function unmuteAllAudio() {
        if (backgroundAudio) { backgroundAudio.volume = originalVolumes.background; backgroundAudio.muted = false; }
        if (bassDropSound) { bassDropSound.volume = originalVolumes.bass; bassDropSound.muted = false; }
        if (hoverSound) { hoverSound.volume = originalVolumes.hover; hoverSound.muted = false; }
    }
    function playFeedbackSound() {
        if (hoverSound) { const f = hoverSound.cloneNode(); f.volume = 0.3; f.play().catch(() => {}); }
    }

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) { if (backgroundAudio && !backgroundAudio.paused) backgroundAudio.pause(); }
        else { if (backgroundAudio && backgroundAudio.paused && !muteButton.classList.contains('muted')) backgroundAudio.play().catch(() => {}); }
    });

    function ensureAudioPlayback() {
        if (backgroundAudio && backgroundAudio.paused && !muteButton.classList.contains('muted')) {
            backgroundAudio.play().catch(() => {
                const startAudio = function() { backgroundAudio.play(); document.removeEventListener('click', startAudio); document.removeEventListener('touchstart', startAudio); };
                document.addEventListener('click', startAudio);
                document.addEventListener('touchstart', startAudio);
            });
        }
    }
    setTimeout(ensureAudioPlayback, 1000);
    document.addEventListener('keydown', function(e) { if (e.altKey && e.key === 'm') { e.preventDefault(); muteButton.click(); } });
});

// MAP
document.addEventListener('DOMContentLoaded', function() {
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach(marker => {
        marker.addEventListener('mouseover', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title');
            this.appendChild(tooltip);
        });
        marker.addEventListener('mouseout', function() {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
});


// ===================================================
// VIDEO MODAL — Fixes Error 153 (embed restriction)
// Shows thumbnail preview + opens YouTube directly
// ===================================================
const SHORTS_IDS = ['24umNYDffFc','n4hRQMwqs78','CfljNgcKpkQ','qk8npL6Yiy4','1nrrq-54Emg','s2KYGViHRLo'];

function openVideoModal(videoId, title) {
    const existingModal = document.getElementById('videoModal');
    if (existingModal) existingModal.remove();

    const isShort = SHORTS_IDS.includes(videoId);
    const youtubeURL = isShort
        ? `https://youtube.com/shorts/${videoId}`
        : `https://www.youtube.com/watch?v=${videoId}`;

    const modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.92);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const imgWidth = isShort ? '300px' : 'min(820px, 90vw)';

    modal.innerHTML = `
        <div style="position: relative; text-align: center; max-width: 92vw;">

            <button onclick="closeVideoModal()" style="
                position: absolute; top: -50px; right: 0;
                background: #ef4444; border: none; color: white;
                font-size: 22px; cursor: pointer;
                width: 38px; height: 38px; border-radius: 50%;
                display: flex; align-items: center; justify-content: center; z-index: 10;
            ">&times;</button>

            <div onclick="window.open('${youtubeURL}', '_blank')" style="
                position: relative; display: inline-block;
                border-radius: 14px; overflow: hidden; cursor: pointer;
                box-shadow: 0 8px 40px rgba(0,0,0,0.6);
                width: ${imgWidth};
            ">
                <img
                    src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg"
                    onerror="this.src='https://img.youtube.com/vi/${videoId}/hqdefault.jpg'"
                    style="width: 100%; display: block;"
                    alt="${title}">

                <div style="
                    position: absolute; inset: 0;
                    background: rgba(0,0,0,0.3);
                    display: flex; align-items: center; justify-content: center;
                ">
                    <div style="
                        width: 72px; height: 72px; background: #ef4444;
                        border-radius: 50%; display: flex; align-items: center; justify-content: center;
                        box-shadow: 0 4px 24px rgba(239,68,68,0.7);
                    ">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <p style="color:#fff; margin-top:16px; font-size:17px; font-weight:600;">${title}</p>

            <a href="${youtubeURL}" target="_blank" rel="noopener noreferrer" style="
                display: inline-block; margin-top: 10px;
                padding: 11px 30px; background: #ef4444;
                color: white; border-radius: 30px; text-decoration: none;
                font-size: 15px; font-weight: 600; letter-spacing: 0.4px;
            ">▶ Watch on YouTube</a>
        </div>
    `;

    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeVideoModal();
    });

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    if (modal) { modal.remove(); document.body.style.overflow = ''; }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeVideoModal();
});