// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.product-card, .advantage-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// WhatsApp button click tracking (optional analytics)
document.addEventListener('click', function(e) {
    if (e.target.closest('a[href*="wa.me"]')) {
        console.log('WhatsApp link clicked');
        // You can add analytics tracking here if needed
    }
});

// Product Carousel with Infinite Loop
class ProductCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.dotsContainer = document.querySelector('.carousel-dots');
        
        if (!this.track) return;
        
        this.originalCards = Array.from(this.track.querySelectorAll('.product-card'));
        if (!this.originalCards.length) return;
        
        this.totalCards = this.originalCards.length;
        this.cardsToShow = this.getCardsToShow();
        // We need enough clones to fill the view when wrapping
        // For 4 cards showing 3, we need at least 3 clones on each side
        // To be safe, we clone all cards
        this.cloneCount = this.totalCards;
        this.currentIndex = this.cloneCount; // Start after cloned cards
        this.isTransitioning = false;
        
        this.init();
    }
    
    getCardsToShow() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        return 3;
    }
    
    init() {
        this.cloneCards();
        this.createDots();
        
        // Wait for layout and images to be ready
        // Use multiple frames to ensure everything is calculated
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.updateCarousel(false); // Set initial position without animation
            });
        });
        
        this.attachEventListeners();
        
        // Start auto-play after a short delay to ensure carousel is positioned
        setTimeout(() => {
            this.startAutoPlay();
        }, 500);
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newCardsToShow = this.getCardsToShow();
                if (newCardsToShow !== this.cardsToShow) {
                    this.cardsToShow = newCardsToShow;
                    // Keep cloneCount consistent - always clone all cards
                    this.removeClonedCards();
                    this.cloneCards();
                    this.currentIndex = this.cloneCount;
                    
                    // Wait for layout to update
                    requestAnimationFrame(() => {
                        this.updateCarousel(false);
                        this.createDots();
                    });
                } else {
                    // Just recalculate position with new widths
                    this.updateCarousel(false);
                }
            }, 250);
        });
    }
    
    cloneCards() {
        // Clone all cards for seamless infinite loop
        // Structure: [Clones of all cards] + [Original cards] + [Clones of all cards]
        // This ensures smooth wrapping regardless of how many cards are visible
        
        // Clone cards and append to end
        for (let i = 0; i < this.totalCards; i++) {
            const clone = this.originalCards[i].cloneNode(true);
            clone.classList.add('cloned');
            this.track.appendChild(clone);
        }
        
        // Clone cards and prepend to beginning  
        for (let i = this.totalCards - 1; i >= 0; i--) {
            const clone = this.originalCards[i].cloneNode(true);
            clone.classList.add('cloned');
            this.track.insertBefore(clone, this.track.firstChild);
        }
        
        // Update cards array to include clones
        this.cards = Array.from(this.track.querySelectorAll('.product-card'));
    }
    
    removeClonedCards() {
        const clonedCards = this.track.querySelectorAll('.product-card.cloned');
        clonedCards.forEach(card => card.remove());
    }
    
    createDots() {
        this.dotsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalCards; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
        
        this.updateDots();
    }
    
    updateCarousel(animate = true) {
        if (!this.cards || !this.cards.length || !this.cards[0]) {
            console.error('Cards not ready');
            return;
        }
        
        const cardWidth = this.cards[0].offsetWidth;
        
        // If card width is 0, layout isn't ready yet - retry
        if (cardWidth === 0) {
            console.warn('Card width is 0, retrying...');
            requestAnimationFrame(() => {
                this.updateCarousel(animate);
            });
            return;
        }
        
        const gap = 30;
        const offset = -(this.currentIndex * (cardWidth + gap));
        
        // Disable transition for instant jumps
        if (!animate) {
            this.track.style.transition = 'none';
        } else {
            this.track.style.transition = 'transform 0.5s ease-in-out';
        }
        
        this.track.style.transform = `translateX(${offset}px)`;
        this.updateDots();
        
        // Re-enable transition after instant jump
        if (!animate) {
            setTimeout(() => {
                this.track.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }
    }
    
    updateDots() {
        const dots = Array.from(this.dotsContainer.querySelectorAll('.carousel-dot'));
        // Calculate which original card we're showing (first visible card)
        let realIndex = this.currentIndex - this.cloneCount;
        if (realIndex < 0) realIndex = this.totalCards + realIndex;
        if (realIndex >= this.totalCards) realIndex = realIndex - this.totalCards;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }
    
    nextSlide() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentIndex++;
        this.updateCarousel(true);
        
        setTimeout(() => {
            // Check if we've scrolled past the real cards into the cloned section at the end
            if (this.currentIndex >= this.cloneCount + this.totalCards) {
                // Jump back to the start of the real cards
                this.currentIndex = this.cloneCount;
                this.updateCarousel(false);
            }
            this.isTransitioning = false;
        }, 500);
    }
    
    prevSlide() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentIndex--;
        this.updateCarousel(true);
        
        setTimeout(() => {
            // Check if we're at a cloned card at the beginning
            if (this.currentIndex < this.cloneCount) {
                this.currentIndex = this.cloneCount + this.totalCards - 1;
                this.updateCarousel(false);
            }
            this.isTransitioning = false;
        }, 500);
    }
    
    goToSlide(index) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentIndex = index + this.cloneCount;
        this.updateCarousel(true);
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
    
    attachEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        
        // Touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                this.nextSlide();
            }
            if (touchEndX > touchStartX + 50) {
                this.prevSlide();
            }
        };
        
        this.handleSwipe = handleSwipe;
        
        // Pause auto-play on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Auto-advance every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize carousel when everything is fully loaded (including images)
function initCarousel() {
    // Wait a bit for layout to stabilize
    setTimeout(() => {
        new ProductCarousel();
    }, 100);
}

// Use window load event to ensure images are loaded
if (document.readyState === 'complete') {
    initCarousel();
} else {
    window.addEventListener('load', initCarousel);
}
