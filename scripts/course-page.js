function toggleSection(sectionId, element) {
    const section = document.getElementById(sectionId);
    const arrow = element.querySelector('.arrow');
    const allSections = document.querySelectorAll('.curriculum-list');
    const allArrows = document.querySelectorAll('.arrow');

    // Collapse all sections except the one being toggled
    allSections.forEach((sec, index) => {
        if (sec !== section) {
            sec.style.maxHeight = null;
            allArrows[index].textContent = '▶';
        }
    });

    // Toggle the selected section
    if (section.style.maxHeight) {
        section.style.maxHeight = null;
        arrow.textContent = '▶';
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
        arrow.textContent = '▼';
    }
}

// Initialize all sections to be collapsed
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.curriculum-list').forEach(section => {
        section.style.maxHeight = null;
    });
});