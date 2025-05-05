window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.user-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function toggleUserDropdown() {
    document.getElementById("userDropdown").classList.toggle("show");
  }
  // Run updateNavbar on page load
  document.addEventListener('DOMContentLoaded', updateNavbar);
  
  
  const toggle = document.getElementById("holo-toggle");
  
  toggle.addEventListener("change", function () {
    if (this.checked) {
      // Wait 2 seconds before redirecting
      setTimeout(() => {
        window.location.href = "/gamersden/";
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    const gens = document.querySelectorAll('.gldgen.slide-in-left');
    const others = document.querySelectorAll('.gldgen.slide-in-right');
  
    gens.forEach((el, i) => {
      el.style.animationDelay = `${0.0+ i*0.4}s`;
    });
  
    others.forEach((el, i) => {
      el.style.animationDelay = `${0.0 + 0.1}s`;
    });
  });
  
  
//   const topHero = document.getElementById('topHero');
  
//   window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const fadeStart = 200;  // start fading after 50px
//     const fadeUntil = 300; // completely gone at 300px
  
//     let opacity = 1;
//     let blur = 0;
  
//     if (scrollY > fadeStart) {
//       const ratio = Math.min((scrollY - fadeStart) / (fadeUntil - fadeStart), 1);
//       opacity = 1 - ratio;
//       blur = ratio * 10;
//     }
  
//     topHero.style.opacity = opacity;
//     topHero.style.filter = `blur(${blur}px)`;
//   });
  
  document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.form-group input');
  
    inputs.forEach(input => {
        // Autofill detection on load
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        }
  
        // Recheck when input changes
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
        });
    });
  });
//   document.addEventListener('DOMContentLoaded', function() {
//     let messages = document.querySelectorAll('.alert');
//     if (messages.length > 0) {
//       setTimeout(function() {
//         messages.forEach(function(message) {
//           message.style.opacity = '0';
//           setTimeout(function() {
//             message.style.display = 'none';
//           }, 500);
//         });
//       }, 1500); // Changed from 1000 to 1500ms
//     }
//   });