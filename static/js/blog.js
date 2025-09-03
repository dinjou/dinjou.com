// Blog-specific JavaScript for enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Only run on blog pages
    if (!document.querySelector('.blog-container')) return;
    
    initReadingProgress();
    initScrollAnimations();
    initScrollToTop();
    initTableOfContents();
    initImageLightbox();
});

// Reading Progress Bar
function initReadingProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    const progressBarFill = progressBar.querySelector('.reading-progress-bar');
    
    // Update progress on scroll
    function updateReadingProgress() {
        const article = document.querySelector('.blog-article');
        if (!article) return;
        
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Calculate reading progress
        const articleStart = articleTop - windowHeight * 0.3;
        const articleEnd = articleTop + articleHeight - windowHeight * 0.7;
        const progress = Math.max(0, Math.min(100, ((scrollTop - articleStart) / (articleEnd - articleStart)) * 100));
        
        progressBarFill.style.width = progress + '%';
    }
    
    window.addEventListener('scroll', updateReadingProgress);
    updateReadingProgress(); // Initial call
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Add scroll-reveal class to elements
    const elementsToAnimate = document.querySelectorAll('.blog-post-card, .blog-content, .blog-footer');
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
}

// Scroll to Top Button
function initScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    `;
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    function toggleScrollToTop() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    
    // Smooth scroll to top
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', toggleScrollToTop);
    toggleScrollToTop(); // Initial call
}

// Table of Contents Generation
function initTableOfContents() {
    const article = document.querySelector('.blog-article');
    if (!article) return;
    
    const headings = article.querySelectorAll('h2, h3');
    if (headings.length < 3) return; // Only show TOC for longer articles
    
    // Create TOC container
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h4>Table of Contents</h4><ul></ul>';
    
    const tocList = toc.querySelector('ul');
    
    // Generate TOC items
    headings.forEach((heading, index) => {
        // Create ID for heading if it doesn't have one
        if (!heading.id) {
            heading.id = 'heading-' + index;
        }
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.className = heading.tagName.toLowerCase();
        
        // Smooth scroll to heading
        a.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active state
            tocList.querySelectorAll('a').forEach(link => link.classList.remove('active'));
            a.classList.add('active');
        });
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    // Insert TOC after the first paragraph
    const firstParagraph = article.querySelector('p');
    if (firstParagraph) {
        firstParagraph.parentNode.insertBefore(toc, firstParagraph.nextSibling);
    }
    
    // Update active TOC item on scroll
    const tocLinks = tocList.querySelectorAll('a');
    
    function updateActiveTocItem() {
        let activeHeading = null;
        
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) {
                activeHeading = heading;
            }
        });
        
        tocLinks.forEach(link => link.classList.remove('active'));
        
        if (activeHeading) {
            const activeLink = tocList.querySelector(`a[href="#${activeHeading.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    }
    
    window.addEventListener('scroll', updateActiveTocItem);
    updateActiveTocItem(); // Initial call
}

// Image Lightbox
function initImageLightbox() {
    const images = document.querySelectorAll('.blog-article img');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'image-lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-backdrop"></div>
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}" />
                    <button class="lightbox-close" aria-label="Close lightbox">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `;
            
            // Add lightbox styles
            const style = document.createElement('style');
            style.textContent = `
                .image-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease;
                }
                
                .lightbox-backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }
                
                .lightbox-content {
                    position: relative;
                    max-width: 90vw;
                    max-height: 90vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .lightbox-content img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 0.5rem;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                }
                
                .lightbox-close {
                    position: absolute;
                    top: -3rem;
                    right: 0;
                    background: rgba(31, 41, 55, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    width: 2.5rem;
                    height: 2.5rem;
                    color: var(--foreground);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .lightbox-close:hover {
                    background: rgba(220, 38, 38, 0.8);
                    border-color: rgba(220, 38, 38, 0.8);
                }
                
                .lightbox-close svg {
                    width: 1.25rem;
                    height: 1.25rem;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(lightbox);
            
            // Close lightbox
            const closeLightbox = () => {
                lightbox.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                    document.head.removeChild(style);
                }, 300);
            };
            
            lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
            lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
            
            // Close on escape key
            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', handleEscape);
                }
            };
            document.addEventListener('keydown', handleEscape);
        });
    });
}

// Utility function for smooth scrolling
function smoothScrollTo(target, duration = 800) {
    const targetPosition = target.offsetTop - 100;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}
