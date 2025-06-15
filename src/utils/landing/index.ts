export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.replace('#', ''));
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleSmoothScroll = (href: string) => {
  if (href.startsWith('#')) {
    scrollToSection(href);
  }
};
