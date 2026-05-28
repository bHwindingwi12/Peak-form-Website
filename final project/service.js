// Tutorial 10: Managing content with an Array of Objects
const servicesData = [
    {
        title: "Nutritional Guidance",
        description: "Why proper diet is vital for muscle growth and recovery.",
        category: "Nutrition",
        icon: "🍏"
    },
    {
        title: "Injury Prevention",
        description: "Identifying common training mistakes to avoid stiffness.",
        category: "Safety",
        icon: "🛡️"
    },
    {
        title: "Ask a PT",
        description: "Direct links to professional physical therapists for personalized pain assessment.",
        category: "Professional",
        icon: "🩺"
    }
];

function loadServices() {
    const container = document.getElementById('services-grid');
    container.innerHTML = servicesData.map(service => `
        <div class="feature-card">
            <span>${service.icon}</span>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <button onclick="alert('Loading ${service.title} Blueprints...')">View Details</button>
        </div>
    `).join('');
}
window.onload = loadServices;