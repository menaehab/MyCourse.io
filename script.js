function toggleSection(id, element) {
    let section = document.getElementById(id);

    if (section.style.maxHeight) {
        section.style.maxHeight = null; // Collapse
        element.innerHTML = element.innerHTML.replace("▼", "▶");
    } else {
        section.style.maxHeight = section.scrollHeight + "px"; // Expand
        element.innerHTML = element.innerHTML.replace("▶", "▼");
    }
}