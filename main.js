window.onload = () => {
let tooltip = document.querySelector('.tooltip');

    let objects = [...document.querySelectorAll('object')];
    objects.forEach(item => {
        let svgDoc = item.contentDocument;
        let cells = [...svgDoc.querySelectorAll('g[id^=storey]')];

        cells.forEach(val => {
            val.onmouseover = function(e) {
                let insideCell = e.target;
                insideCell.style.fill = 'green';
                let cellId =  insideCell.parentElement.id;                
                tooltip.innerHTML = cellId;
            }
            val.onmouseout = function(e) {
                let insideCell = e.target;
                insideCell.style.fill = 'none';
                tooltip.innerHTML = 'clicked room';
            }
        })
    })
}