function paint(color) {
    const circle = document.getElementById('circleID');
    let rgb_color = null;
    if (typeof color === 'undefined') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        rgb_color = `rgb(${r}, ${g}, ${b})`;
    }
    circle.style = `background-color: ${color || rgb_color}`;
}
