/**
 * ==========================================================================
 * DEVELOPER PORTFOLIO DASHBOARD - SCRIPT.JS (DAY 1)
 * Purpose:
 * 1. Mobile sidebar drawer toggling (open/close).
 * 2. Active section link highlighting during scroll.
 * 3. Smooth, accessible navigation handling.
 * ==========================================================================
 */

// Wait for the DOM to finish parsing before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Select DOM Elements
  // ------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // ------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation Functions
  // ------------------------------------------------------------------------
  /**
   * Opens the sidebar menu on mobile devices
   */
  function openMobileMenu() {
    if (sidebar && sidebarBackdrop) {
      sidebar.classList.add('open');
      sidebarBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  /**
   * Closes the sidebar menu on mobile devices
   */
  function closeMobileMenu() {
    if (sidebar && sidebarBackdrop) {
      sidebar.classList.remove('open');
      sidebarBackdrop.classList.remove('active');
      document.body.style.overflow = ''; // Restore background scrolling
    }
  }

  // Attach event listeners for opening and closing the mobile drawer
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeMobileMenu);
  }

  // ------------------------------------------------------------------------
  // 3. Close mobile drawer when any navigation link is clicked
  // ------------------------------------------------------------------------
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // If on mobile screen width, close the sidebar when user clicks a link
      if (window.innerWidth <= 868) {
        closeMobileMenu();
      }
    });
  });

  // ------------------------------------------------------------------------
  // 4. Highlight Active Navigation Link on Scroll
  // ------------------------------------------------------------------------
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 140; // Offset for header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Update active link on scroll with throttling
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        updateActiveNavLink();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Initial check on page load
  updateActiveNavLink();
});
