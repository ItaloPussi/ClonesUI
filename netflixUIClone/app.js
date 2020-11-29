const tabsItems = document.querySelectorAll(".tab-item")
const tabsContent = document.querySelectorAll(".tab-content-item")

tabsItems.forEach(tab=> tab.addEventListener("click", handleTabChange))

function handleTabChange(){
    let selectedTab = this
    tabsItems.forEach(tab=>{
        tab.classList.remove("tab-border")
        tab === selectedTab && tab.classList.add("tab-border")
        
    })

    let contentTab = `${selectedTab.id}-content`
    tabsContent.forEach(tab =>{
        console.log(tab)
        tab.classList.remove("show")
        tab.id === contentTab && tab.classList.add("show")

    })
}