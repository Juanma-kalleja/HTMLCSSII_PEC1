export function toggleRows() {
    document.querySelectorAll('.row__button').forEach(i => {
        i.addEventListener('click', e => {
          const isExpanded = e.target.dataset['expand'] === '1';
          const content = e.target.nextElementSibling;
          const iconElem = e.target.children[1];
      
          //collapse previously expanded items
          document.querySelectorAll('.row').forEach(a => {
            const toggleBtn = a.querySelector('.row__button');
            toggleBtn.classList.remove('row__button--expanded');
      
            const hideItems = a.querySelector('.row__body');
            hideItems.style.display = 'none';
      
            const icon = a.querySelector('.row__icon');
            icon.innerHTML = '<i class="fa-sharp fa-solid fa-plus"></i>';
          });
      
          //collapse
          if (isExpanded) {
            iconElem.innerHTML = '<i class="fa-sharp fa-solid fa-plus"></i>';
            content.style.display = 'none';
          } else {
            //expand
            iconElem.innerHTML = '<i class="fa-sharp fa-solid fa-minus"></i>';
            content.style.display = 'block';
            e.target.classList.add('row__button--expanded');
          }
          // e.target.classList.toggle('expanded');
          e.target.dataset['expand'] = isExpanded ? '0' : '1';
      
        });
      });
}

