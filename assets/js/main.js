let h3 = document.querySelectorAll('.active h3');
let panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',(e)=>{
        panels.forEach((pa)=>{
            pa.classList.remove('active');
            pa.children[0].style.opacity = "0"
        })
        panel.classList.add('active');
        panel.children[0].style.opacity = "1"
    })
})