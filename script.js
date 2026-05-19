{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh15100\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Basic form interaction (you can upgrade this later)\
\
document.querySelector('.contact-form')?.addEventListener('submit', (e) => \{\
  e.preventDefault();\
  alert('Request sent! We will contact you soon.');\
\});}

// Add this to your script.js
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // These IDs come from your EmailJS dashboard
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Sent to mzamocarti successfully!');
        }, function(error) {
            alert('Failed to send: ' + JSON.stringify(error));
        });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  // Loop through every navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Uncheck the hidden input box to automatically slide the menu shut
      if (menuToggle) {
        menuToggle.checked = false;
      }
    });
  });
});
