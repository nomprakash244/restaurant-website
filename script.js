//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll  = function ()
{
    if (document.documentElement.scrollTop > 20)
    {
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide

let navbar= document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click" ,function(){
        navcollapse.classList.remove("show");
    })
})



// counter design

document.addEventListener("DOMContentLoaded",() =>{
    function counter (id, start, end, duration)
    {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end)
            {
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1263, 3000);
    counter("count2", 50, 1000, 3000);
    counter("count3", 40, 1754, 3000);
    counter("count4", 0, 953, 3000);

})
const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  function updateThemeButton(isDark) {
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  }

  // Load saved theme on page load
  window.onload = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      body.classList.remove("light");
      body.classList.add("dark");
      updateThemeButton(true);
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      updateThemeButton(false);
    }
  };

  toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.contains('light');
    if (isLight) {
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem("theme", "dark");
      updateThemeButton(true);
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem("theme", "light");
      updateThemeButton(false);
    }
  });