function generateSequentialId() {
    const datePart = new Date().toISOString().replace(/[-:.TZ]/g, '');
    const randomPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${datePart}-${randomPart}`;
}
module.exports = {
    generateSequentialId
}