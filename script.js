
 

  
  const exploreBtn = document.getElementById('exploreBtn');
  const hiddenContent = document.getElementById('hiddenContent');

  exploreBtn.addEventListener('click', () => {
    const isVisible = hiddenContent.style.display === 'block';
    hiddenContent.style.display = isVisible ? 'none' : 'block';
    exploreBtn.textContent = isVisible ? 'Explore Programs' : 'Hide Programs';
  });


  const demoBtn = document.getElementById('demoBtn');
  const demoSection = document.getElementById('demoSection');

  demoBtn.addEventListener('click', () => {
    demoSection.style.display = 'block';
    demoSection.scrollIntoView({ behavior: 'smooth' });
  });

  
  const seeAllBtn = document.getElementById('seeAllBtn');
  const extraCards = document.querySelectorAll('.extra-card');

  let expanded = false;

  seeAllBtn.addEventListener('click', () => {
    expanded = !expanded;

    extraCards.forEach(card => {
      card.style.display = expanded ? 'block' : 'none';
    });

    seeAllBtn.textContent = expanded ? 'Show Less' : 'See All';
  });
 
  
  const detailsBtn = document.getElementById('detailsBtn');
  const detailsContent = document.getElementById('detailsContent');

  let showingDetails = false;

  detailsBtn.addEventListener('click', () => {
    showingDetails = !showingDetails;
    detailsContent.style.display = showingDetails ? 'block' : 'none';
    detailsBtn.textContent = showingDetails ? 'Hide Details' : 'Explore the Details';
  });






