// Tool data
const toolsData = {
  1: {
    name: "Idol Outfit Style Creator",
    description: "Analyze and create stunning K-pop idol outfits with AI-powered fashion recommendations.",
    icon: "👗",
    category: "Fashion",
    demoText: "Upload a photo or describe your style preferences to get personalized outfit recommendations inspired by your favorite idols!",
    demoResponses: [
      "✨ Perfect match! Try a pastel crop top with high-waisted pleated skirt - very TWICE vibes!",
      "🌟 For your style: oversized blazer with shorts and knee-high boots - giving major BLACKPINK energy!",
      "💫 Recommended: cute sailor-style top with A-line skirt - perfect NewJeans aesthetic!",
      "🎀 Try this: off-shoulder sweater with mini skirt and platform shoes - so IVE-coded!"
    ]
  },
  2: {
    name: "Bias Chat",
    description: "Interactive AI chatbot that talks like your favorite K-pop idols and answers questions about K-pop culture.",
    icon: "💬",
    category: "Chat",
    demoText: "Chat with an AI that knows everything about K-pop! Ask about your bias, get recommendations, or just have fun conversations.",
    demoResponses: [
      "Annyeong! 💜 I'm so excited to chat with you! What's your favorite K-pop song right now?",
      "OMG yes! That group is amazing! Have you seen their latest dance practice video? 🕺💃",
      "Aww you're so sweet! 🥰 I think you'd really love this new song I just discovered...",
      "Hehe, you have such great taste in music! Let's be friends! 친구하자! 💖"
    ]
  },
  3: {
    name: "K-pop Name Generator",
    description: "Generate creative stage names and group names perfect for the K-pop industry.",
    icon: "⭐",
    category: "Generator",
    demoText: "Enter your preferences and get unique, catchy names that would fit perfectly in the K-pop world!",
    demoResponses: [
      "🌟 Your K-pop name: Luna Star! Perfect for a dreamy concept group!",
      "✨ Generated name: Cosmic Joy - sounds like a main vocalist name!",
      "💫 Your stage name: Aurora Kim - perfect for a leader position!",
      "🎭 Suggested name: Neo Dream - great for a futuristic group concept!"
    ]
  },
  4: {
    name: "Idol Compatibility Quiz",
    description: "Discover which K-pop idol you're most compatible with based on personality analysis.",
    icon: "💖",
    category: "Quiz",
    demoText: "Answer fun personality questions and find out which idol shares your traits and would be your perfect match!",
    demoResponses: [
      "💕 You're 94% compatible with RM from BTS! You both love deep conversations and philosophy!",
      "🌸 Perfect match with Rosé from BLACKPINK! You share her artistic soul and love for music!",
      "⭐ 98% compatibility with Taeyeon from SNSD! You both have that calm, wise energy!",
      "💖 Amazing match with Jungkook from BTS! You share his playful yet dedicated personality!"
    ]
  },
  5: {
    name: "Aegyo Caption Maker",
    description: "Create adorable, aegyo-style captions for your social media posts with AI assistance.",
    icon: "🥰",
    category: "Social",
    demoText: "Transform your regular captions into cute, aegyo-style posts that capture that K-pop charm!",
    demoResponses: [
      "🥺💕 Uwu~ Today was so fun-fun! Ate yummy food and felt like a happy bunny! 🐰✨",
      "Kyaa~! 😽 My heart is going doki doki from all the cuteness today! 💖🌈",
      "Hehe~ 🥰 Feeling like a precious baby angel today! Send me lots of love! 👼💕",
      "Aww~ 🌸 Today I'm as happy as a little kitten in sunshine! Meow meow! 🐱☀️"
    ]
  },
  6: {
    name: "Idol Look-alike Finder",
    description: "Upload your photo and discover which K-pop idols you resemble most using facial recognition.",
    icon: "📸",
    category: "Photo",
    demoText: "Upload a selfie and find out which idols share your facial features. You might be surprised by the results!",
    demoResponses: [
      "📸 Wow! You look 87% like Jennie from BLACKPINK! Those cat-like eyes are stunning! 😍",
      "✨ Amazing resemblance to Jin from BTS at 92%! You have those perfect proportions! 🌟",
      "💫 You're giving major IU vibes with 89% similarity! That sweet smile is identical! 😊",
      "🔥 85% match with Hyunjin from Stray Kids! Those sharp features are so striking! ⚡"
    ]
  },
  7: {
    name: "K-pop Playlist Maker",
    description: "Get personalized K-pop playlists based on your mood, favorite groups, and music preferences.",
    icon: "🎵",
    category: "Music",
    demoText: "Tell us your mood and favorite groups, and we'll create the perfect playlist for any occasion!",
    demoResponses: [
      "🎵 Perfect playlist created! 'Energetic Vibes' with ITZY, BLACKPINK, and aespa bangers! 🔥",
      "✨ Your 'Chill Study' playlist: IU, BTS ballads, and SEVENTEEN soft tracks! 📚💙",
      "💖 'Feel Good Friday' mix ready: NewJeans, TWICE, and Red Velvet happiness! ☀️",
      "🌙 'Late Night Feels' playlist: DEAN, BTS rap line, and emotional ballads! 🌌"
    ]
  },
  8: {
    name: "Idol Nickname Creator",
    description: "Generate cute and unique nicknames in the style of K-pop idol stage names.",
    icon: "✨",
    category: "Generator",
    demoText: "Create your own idol-style nickname that captures your personality and K-pop spirit!",
    demoResponses: [
      "✨ Your idol nickname: 'Starry' - perfect for someone who lights up every room! 🌟",
      "💫 Generated nickname: 'Moon' - mysterious and elegant, just like you! 🌙",
      "🌸 Your K-pop nickname: 'Cherry' - sweet and energetic personality! 🍒",
      "⭐ Perfect nickname: 'Galaxy' - because you're out of this world! 🌌"
    ]
  }
};

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const modal = document.getElementById('tool-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalDemoText = document.getElementById('modal-demo-text');
const demoInterface = document.getElementById('demo-interface');
const demoResult = document.getElementById('demo-result');

// Navigation functionality
function initNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

// Tool modal functionality
function initToolModals() {
  // Get all tool cards after DOM is ready
  const toolCards = document.querySelectorAll('.tool-card');
  
  toolCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      // Use index + 1 since our tool IDs start from 1
      const toolId = index + 1;
      console.log('Clicked tool card:', toolId, 'Tool data:', toolsData[toolId]); // Debug log
      openToolModal(toolId);
    });
  });

  // Close modal events
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function openToolModal(toolId) {
  const tool = toolsData[toolId];
  console.log('Opening modal for tool:', toolId, tool); // Debug log
  
  if (!tool) {
    console.error('Tool not found for ID:', toolId);
    return;
  }

  // Update modal content
  modalIcon.textContent = tool.icon;
  modalTitle.textContent = tool.name;
  modalDescription.textContent = tool.description;
  modalDemoText.textContent = tool.demoText;

  // Reset demo interface
  const demoInput = demoInterface.querySelector('.demo-input');
  const demoBtn = demoInterface.querySelector('.demo-btn');
  
  demoInput.value = '';
  demoResult.textContent = 'Your result will appear here...';
  demoResult.style.fontStyle = 'italic';
  demoResult.style.opacity = '0.7';

  // Set up demo button functionality
  demoBtn.onclick = () => generateDemoResult(toolId);
  
  // Also trigger on Enter key in input
  demoInput.onkeypress = (e) => {
    if (e.key === 'Enter') {
      generateDemoResult(toolId);
    }
  };

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Focus on input for better UX
  setTimeout(() => {
    demoInput.focus();
  }, 100);
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function generateDemoResult(toolId) {
  const tool = toolsData[toolId];
  const demoInput = demoInterface.querySelector('.demo-input');
  const inputValue = demoInput.value.trim();
  
  if (!inputValue) {
    demoResult.textContent = 'Please enter something to get started! 😊';
    demoResult.style.fontStyle = 'normal';
    demoResult.style.opacity = '1';
    return;
  }

  // Show loading state
  demoResult.textContent = 'Generating your result... ✨';
  demoResult.classList.add('loading');
  demoResult.style.fontStyle = 'italic';
  demoResult.style.opacity = '0.7';

  // Simulate AI processing time
  setTimeout(() => {
    const responses = tool.demoResponses;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    demoResult.textContent = randomResponse;
    demoResult.classList.remove('loading');
    demoResult.style.fontStyle = 'normal';
    demoResult.style.opacity = '1';
    demoResult.style.color = 'var(--color-text)';
    demoResult.style.fontWeight = '500';
  }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
}

// Newsletter functionality
function initNewsletter() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const submitBtn = newsletterForm.querySelector('button');
    const email = emailInput.value.trim();
    
    if (!email) {
      showNotification('Please enter a valid email address! 📧', 'error');
      return;
    }
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    // Simulate subscription process
    setTimeout(() => {
      showNotification('Welcome to the K-Pop AI family! 🎉💜', 'success');
      emailInput.value = '';
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Blog functionality
function initBlog() {
  const blogReadMoreBtns = document.querySelectorAll('.blog-read-more');
  
  blogReadMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showNotification('Blog post opening soon! Stay tuned! 📖✨', 'info');
    });
  });
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 3000;
    background: var(--color-surface);
    color: var(--color-text);
    padding: 16px 20px;
    border-radius: var(--radius-base);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-lg);
    max-width: 400px;
    animation: slideInRight 0.3s ease-out;
    transition: transform 0.3s ease-out;
  `;

  // Add type-specific styles
  if (type === 'success') {
    notification.style.borderColor = 'var(--color-success)';
    notification.style.borderLeftWidth = '4px';
    notification.style.borderLeftColor = 'var(--color-success)';
  } else if (type === 'error') {
    notification.style.borderColor = 'var(--color-error)';
    notification.style.borderLeftWidth = '4px';
    notification.style.borderLeftColor = 'var(--color-error)';
  } else if (type === 'info') {
    notification.style.borderColor = 'var(--kpop-purple)';
    notification.style.borderLeftWidth = '4px';
    notification.style.borderLeftColor = 'var(--kpop-purple)';
  }

  // Add notification to page
  document.body.appendChild(notification);

  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Add notification animation styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  
  .notification-message {
    flex: 1;
    font-weight: 500;
  }
  
  .notification-close {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: var(--color-text-secondary);
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s ease;
  }
  
  .notification-close:hover {
    background-color: var(--color-secondary);
  }
`;
document.head.appendChild(notificationStyles);

// Social links functionality
function initSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-links a');
  
  socialLinks.forEach(link => {
    if (link.getAttribute('href') === '#') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.textContent.trim();
        showNotification(`${platform} page coming soon! Follow us for updates! 🔗`, 'info');
      });
    }
  });
}

// Intersection Observer for animations
function initScrollAnimations() {
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
  const animatedElements = document.querySelectorAll('.tool-card, .blog-card, .stat');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initToolModals();
  initNewsletter();
  initBlog();
  initSocialLinks();
  initScrollAnimations();
  
  // Welcome message
  setTimeout(() => {
    showNotification('Welcome to K-Pop AI Suite! Explore our amazing tools! 🎵✨', 'success');
  }, 1000);
});

// Global function for button clicks (used in HTML)
window.scrollToSection = scrollToSection;

// Add some fun Easter eggs
let clickCount = 0;
document.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 50) {
    showNotification('Wow! You\'re really exploring everything! You\'re a true K-pop fan! 🌟', 'success');
  } else if (clickCount === 100) {
    showNotification('Achievement unlocked: Ultimate K-pop Explorer! 🏆💜', 'success');
  }
});

// Konami code Easter egg (Up, Up, Down, Down, Left, Right, Left, Right, B, A)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  
  if (konamiCode.length === konamiSequence.length && 
      konamiCode.every((code, index) => code === konamiSequence[index])) {
    showNotification('🎉 SECRET UNLOCKED! You found the hidden K-pop code! Stan talent, stan legends! 👑', 'success');
    
    // Add some fun visual effects
    document.body.style.animation = 'rainbow 2s ease infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 4000);
  }
});

// Add rainbow animation for Easter egg
const rainbowStyles = document.createElement('style');
rainbowStyles.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    25% { filter: hue-rotate(90deg); }
    50% { filter: hue-rotate(180deg); }
    75% { filter: hue-rotate(270deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(rainbowStyles);