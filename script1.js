
    
    let items = [];

    function renderItems() {
      const totalItems = document.getElementById('total-items');
      totalItems.textContent = items.length;

      const markedItems = document.getElementById('marked-items');
      const markedCount = items.filter(item => item.marked).length;
      markedItems.textContent = markedCount;

      const unmarkedItems = document.getElementById('unmarked-items');
      const unmarkedCount = items.filter(item => !item.marked).length;
      unmarkedItems.textContent = unmarkedCount;

      const itemList = document.getElementById('items');
      itemList.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.marked) {
          li.classList.add('marked');
        }
        li.addEventListener('click', () => {
          item.marked = !item.marked;
          renderItems();
        });
        itemList.appendChild(li);
      });
      const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.addEventListener('click', () => {
          items.splice(index, 1);
          renderItems();
        });
        li.appendChild(closeButton);
        itemList.appendChild(li);
      };

    function addItem() {
      const itemNameInput = document.getElementById('item');
      const itemName = itemNameInput.value.trim();
      if (itemName !== '') {
        items.push({ name: itemName, marked: false });
        itemNameInput.value = '';
        renderItems();
      }
    }

    renderItems();