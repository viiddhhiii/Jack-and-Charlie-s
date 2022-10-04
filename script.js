const toggleswitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === ':root'){
    toggleswitch.checked = true;
    }
}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('dark-theme', ':root');
        localStorage.setItem('theme', ':root');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    
}

toggleswitch.addEventListener('change', switchTheme, false);
