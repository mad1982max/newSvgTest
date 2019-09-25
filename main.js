window.onload = () => {
let tooltip1 = document.querySelector('.tooltip1');
let tooltip2 = document.querySelector('.tooltip2');

    let objects = [...document.querySelectorAll('object')];
    objects.forEach(item => {
        item.onmouseover = function() {
            let position = item.getBoundingClientRect();
            console.log(position);
            tooltip1.style.top = `${position.y + window.pageYOffset}px`;
            tooltip2.style.top = `${position.y + window.pageYOffset + position.height - tooltip2.offsetHeight}px`;
        }


        let svgDoc = item.contentDocument;
        let cells = [...svgDoc.querySelectorAll('g[id^=storey]')];

        cells.forEach(val => {
            val.onmouseover = function(e) {
                let insideCell = e.target;
                insideCell.style.fill = 'green';
                let cellId =  insideCell.parentElement.id;                
                tooltip1.innerHTML = cellId;
                tooltip2.innerHTML = cellId;
            }
            val.onmouseout = function(e) {
                let insideCell = e.target;
                insideCell.style.fill = 'none';
                tooltip1.innerHTML = 'clicked room';
                tooltip2.innerHTML = 'clicked room';
            }
        })
    });




}