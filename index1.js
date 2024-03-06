const tab =document.getElementById('tab-form');
tab.addEventListener('click', () => clickHandler('form'))
tab.addEventListener('mouseenter', () => showTab('form'))

const section =document.getElementById('tab-section');
section.addEventListener('click', () => clickHandler('section'))
section.addEventListener('mouseenter', () => showTab('section'))

const dummy =document.getElementById('tab-form');
dummy.addEventListener('click', () => clickHandler('dummy'))
dummy.addEventListener('mousenter', () => showTab('dummy'))

function showTab(activeId){
    const tab = document.getElementsByClassName("tab-content")
    for (const tab of tabs){
        tab.style.display = "none";
    }
    document.getElementById(activeTabId).style.display = "flex";
}

function clickHandler(event, elementName) {
    console.log("elementName", elementName, event.target, event.currentTarget);
}