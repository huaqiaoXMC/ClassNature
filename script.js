// ClassNature Project Website JavaScript

// Startup Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const startupLoader = document.getElementById('startup-loader');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (!startupLoader || !progressFill || !progressText) return;

    let progress = 0;
    const progressMessages = [
        '正在初始化...',
        '加载配置...',
        '验证版本...',
        '检查功能...',
        '优化性能...',
        '准备就绪...'
    ];

    // Animate progress
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random increment between 5-20%
        
        if (progress > 100) progress = 100;
        
        // Update progress bar
        progressFill.style.width = progress + '%';
        
        // Update progress text
        const messageIndex = Math.floor((progress / 100) * progressMessages.length);
        progressText.textContent = progressMessages[Math.min(messageIndex, progressMessages.length - 1)];
        
        // Complete loading
        if (progress >= 100) {
            clearInterval(progressInterval);
            progressText.textContent = '加载完成！';
            
            // Add loaded class for animation
            setTimeout(() => {
                startupLoader.classList.add('loaded');
                
                // Remove loader from DOM after animation
                setTimeout(() => {
                    startupLoader.style.display = 'none';
                }, 800);
            }, 500);
        }
    }, 200); // Update every 200ms

    // Counter animation for statistics
    animateCounters();
    
    function animateCounters() {
        const counters = [
            { element: document.getElementById('version-count'), target: 5, suffix: '' },
            { element: document.getElementById('feature-count'), target: 50, suffix: '+' },
            { element: document.getElementById('code-lines'), target: 100, suffix: 'K+' }
        ];

        counters.forEach((counter, index) => {
            if (!counter.element) return;
            
            setTimeout(() => {
                animateCounter(counter.element, 0, counter.target, 2000, counter.suffix);
            }, index * 200);
        });
    }

    function animateCounter(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (end - start) * easeOutQuart);
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Advanced Scroll Reveal Animation
    // Enhanced scroll reveal animation with multiple trigger points
    const revealElements = document.querySelectorAll('.reveal, .version-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Add special handling for version cards
                if (entry.target.classList.contains('version-card')) {
                    const changelogItems = entry.target.querySelectorAll('.changelog-item');
                    changelogItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Advanced Version Card Entrance Animations
    function initVersionCardAnimations() {
        const versionCards = document.querySelectorAll('.version-card');
        
        // Animation types for different cards
        const animationTypes = [
            'entrance-flip',
            'entrance-bounce', 
            'entrance-slide-left',
            'entrance-slide-right',
            'entrance-zoom',
            'entrance-rotate',
            'entrance-swing',
            'entrance-roll'
        ];
        
        versionCards.forEach((card, index) => {
            // Assign animation type based on card index
            const animationType = animationTypes[index % animationTypes.length];
            card.classList.add(animationType);
            
            // Add staggered entrance delay
            const delay = index * 200;
            card.style.transitionDelay = `${delay}ms`;
        });
        
        // Create intersection observer for version cards
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add active class with stagger delay
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 200);
                    
                    // Animate card content sections
                    animateCardContent(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });
        
        versionCards.forEach(card => {
            cardObserver.observe(card);
        });
    }
    
    // Animate card content sections
    function animateCardContent(card) {
        const header = card.querySelector('.version-header');
        const content = card.querySelector('.version-content');
        const sections = card.querySelectorAll('.changelog-section');
        const items = card.querySelectorAll('.changelog-item');
        
        if (header) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }
        
        if (content) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }
        
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateX(0)';
            }, (index + 1) * 200);
        });
        
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, (index + 1) * 100);
        });
    }
    
    // Initialize version card animations
    initVersionCardAnimations();
    
    // Enhanced version card hover effects
    function initVersionCardHoverEffects() {
        const versionCards = document.querySelectorAll('.version-card');
        
        versionCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Add glow effect
                this.style.boxShadow = '0 25px 50px rgba(79, 70, 229, 0.3), 0 0 30px rgba(79, 70, 229, 0.1)';
                this.style.transform = 'translateY(-8px) scale(1.02)';
                
                // Animate gradient
                this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                
                // Add magnetic effect to header
                const header = this.querySelector('.version-header');
                if (header) {
                    header.style.transform = 'scale(1.05)';
                    header.style.color = '#ffffff';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                // Reset styles
                this.style.boxShadow = '';
                this.style.transform = '';
                this.style.background = '';
                
                const header = this.querySelector('.version-header');
                if (header) {
                    header.style.transform = '';
                    header.style.color = '';
                }
            });
            
            // Add click animation
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
    
    // Initialize hover effects
    initVersionCardHoverEffects();

    // Parallax Scrolling Effect
    const parallaxElements = document.querySelectorAll('.parallax');
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }
    window.addEventListener('scroll', updateParallax);

    // Scroll Progress Indicator
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-fill"></div>';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(0,0,0,0.1);
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const fill = progressBar.querySelector('.scroll-progress-fill');
        fill.style.cssText = `
            height: 100%;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            width: 0%;
            transition: width 0.1s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxHeight) * 100;
            
            fill.style.width = progress + '%';
            
            // Show/hide progress bar
            if (scrolled > 100) {
                progressBar.style.opacity = '1';
            } else {
                progressBar.style.opacity = '0';
            }
        });
    }
    createScrollProgress();

    // Scroll-triggered counter animation with enhanced effects
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number, [data-counter]');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.dataset.target || element.textContent);
                    const duration = parseInt(element.dataset.duration) || 2000;
                    
                    animateCounter(element, 0, target, duration);
                    counterObserver.unobserve(element);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    function animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        const isPercentage = element.textContent.includes('%');
        const hasPlus = element.textContent.includes('+');
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Enhanced easing function
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(start + (end - start) * easeOutExpo);
            
            let displayValue = current.toString();
            if (hasPlus) displayValue += '+';
            if (isPercentage) displayValue += '%';
            
            element.textContent = displayValue;
            
            // Add pulse effect at completion
            if (progress >= 1) {
                element.classList.add('pulse');
                setTimeout(() => element.classList.remove('pulse'), 600);
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Enhanced scroll-triggered animations
    function initScrollAnimations() {
        // Animated background gradients
        const animatedSections = document.querySelectorAll('.section:nth-child(even)');
        animatedSections.forEach((section, index) => {
            section.style.background = index % 2 === 0 
                ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(6, 182, 212, 0.05))'
                : 'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(79, 70, 229, 0.05))';
        });

        // Floating animation for hero elements
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });

        // Magnetic hover effect for buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Scroll-triggered reveal for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-revealed');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Initialize all scroll animations
    animateCounters();
    initScrollAnimations();

    // Stats Counter Animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 100;
            let current = 0;
            
            const updateStat = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateStat();
        });
    }

    // Animate stats when in viewport
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // Navbar Background Change on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Version Card Accordion Functionality
    const versionCards = document.querySelectorAll('.version-card');
    versionCards.forEach(card => {
        const header = card.querySelector('.version-header');
        if (header) {
            header.addEventListener('click', function() {
                const content = card.querySelector('.version-content');
                const isExpanded = card.classList.contains('expanded');
                
                // Toggle current card
                if (isExpanded) {
                    card.classList.remove('expanded');
                    content.style.display = 'none';
                } else {
                    card.classList.add('expanded');
                    content.style.display = 'block';
                }
            });
        }
    });

    // Search Functionality
    const searchInput = document.querySelector('#changelog-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const versionCards = document.querySelectorAll('.version-card');
            
            versionCards.forEach(card => {
                const title = card.querySelector('.version-title').textContent.toLowerCase();
                const content = card.querySelector('.version-content').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter changelog items
                const items = document.querySelectorAll('.changelog-item');
                items.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Download Button Loading State
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="loading"></span> Downloading...';
            this.disabled = true;
            
            // Simulate download (replace with actual download logic)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Copy Link Functionality
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Show success message
            showNotification('Link copied to clipboard!', 'success');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            showNotification('Failed to copy link', 'error');
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add notification styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        // Set background color based on type
        switch(type) {
            case 'success':
                notification.style.backgroundColor = '#10b981';
                break;
            case 'error':
                notification.style.backgroundColor = '#ef4444';
                break;
            default:
                notification.style.backgroundColor = '#3b82f6';
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Theme Toggle (for future implementation)
    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // Save preference
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    // Lazy Loading for Images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });

    // Form Validation (if contact form exists)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            this.reset();
        });
    }

    // Email Validation Helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Initialize tooltips
    initTooltips();

    // Initialize modals
    initModals();
});

// Tooltip System
function initTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', showTooltip);
        trigger.addEventListener('mouseleave', hideTooltip);
        trigger.addEventListener('focus', showTooltip);
        trigger.addEventListener('blur', hideTooltip);
    });
}

function showTooltip(e) {
    const trigger = e.target;
    const tooltipText = trigger.dataset.tooltip;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    
    Object.assign(tooltip.style, {
        position: 'absolute',
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '0.5rem',
        borderRadius: '4px',
        fontSize: '0.875rem',
        zIndex: '10000',
        whiteSpace: 'nowrap',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });
    
    document.body.appendChild(tooltip);
    
    const rect = trigger.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
    
    setTimeout(() => tooltip.style.opacity = '1', 10);
    
    trigger.tooltipElement = tooltip;
}

function hideTooltip(e) {
    const trigger = e.target;
    if (trigger.tooltipElement) {
        trigger.tooltipElement.style.opacity = '0';
        setTimeout(() => {
            if (trigger.tooltipElement.parentNode) {
                trigger.tooltipElement.parentNode.removeChild(trigger.tooltipElement);
            }
            trigger.tooltipElement = null;
        }, 300);
    }
}

// Modal System
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(e.target);
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal-overlay');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });
}

function openModal(e) {
    e.preventDefault();
    const modalId = this.dataset.modal;
    const modal = document.getElementById(modalId);
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Utility Functions
const Utils = {
    // Debounce function for search and other input events
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    },
    
    // Format dates
    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },
    
    // Generate unique IDs
    generateId: function() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils };
}