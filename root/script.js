// Tech Glossary Terms Data
const glossaryTerms = [
    {
        term: "API",
        fullName: "Application Programming Interface",
        definition: "A set of protocols, tools, and definitions that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information.",
        example: "REST APIs allow a mobile app to fetch user data from a server using HTTP requests.",
        tags: ["Backend", "Integration", "Web"]
    },
    {
        term: "CI/CD",
        fullName: "Continuous Integration / Continuous Deployment",
        definition: "A software development practice where code changes are automatically built, tested, and deployed. CI focuses on merging code changes frequently, while CD automates the release process to production.",
        example: "GitHub Actions automatically runs tests and deploys to production when code is merged to main branch.",
        tags: ["DevOps", "Automation", "Testing"]
    },
    {
        term: "Microservices",
        fullName: "",
        definition: "An architectural pattern where an application is composed of small, independent services that communicate over a network. Each service handles a specific business capability and can be developed, deployed, and scaled independently.",
        example: "Netflix uses microservices where separate services handle user authentication, video streaming, recommendations, and billing.",
        tags: ["Architecture", "Backend", "Scalability"]
    },
    {
        term: "JWT",
        fullName: "JSON Web Token",
        definition: "A compact, URL-safe token format used for securely transmitting information between parties. JWTs are commonly used for authentication and authorization in web applications.",
        example: "After login, the server issues a JWT that the client includes in subsequent requests to prove authentication.",
        tags: ["Security", "Authentication", "Web"]
    },
    {
        term: "Docker",
        fullName: "",
        definition: "A platform that uses containerization to package applications and their dependencies into portable containers. Containers ensure that software runs consistently across different computing environments.",
        example: "A Node.js application with all its dependencies can be packaged into a Docker container and run identically on any machine.",
        tags: ["DevOps", "Infrastructure", "Deployment"]
    },
    {
        term: "GraphQL",
        fullName: "",
        definition: "A query language and runtime for APIs that allows clients to request exactly the data they need. Unlike REST, GraphQL provides a complete and understandable description of the data in your API.",
        example: "A mobile app can request only the user's name and email in a single query, reducing over-fetching of data.",
        tags: ["API", "Backend", "Web"]
    },
    {
        term: "Kubernetes",
        fullName: "",
        definition: "An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It handles tasks like load balancing, self-healing, and rolling updates.",
        example: "Kubernetes automatically scales your application pods based on CPU usage and restarts failed containers.",
        tags: ["DevOps", "Infrastructure", "Orchestration"]
    },
    {
        term: "WebSocket",
        fullName: "",
        definition: "A communication protocol that provides full-duplex communication channels over a single TCP connection. Unlike HTTP, WebSockets allow for real-time, bidirectional data exchange between client and server.",
        example: "Chat applications use WebSockets to instantly deliver messages between users without polling the server.",
        tags: ["Web", "Real-time", "Protocol"]
    }
];

// DOM Elements
const glossaryGrid = document.getElementById('glossaryGrid');
const searchInput = document.getElementById('searchInput');

// Render glossary terms
function renderGlossary(terms) {
    glossaryGrid.innerHTML = '';
    
    if (terms.length === 0) {
        glossaryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No terms found. Try a different search.</p>';
        return;
    }
    
    terms.forEach(item => {
        const card = document.createElement('div');
        card.className = 'term-card';
        
        const fullNameSpan = item.fullName ? 
            `<span class="term-acronym">(${item.fullName})</span>` : '';
        
        card.innerHTML = `
            <h2>${item.term} ${fullNameSpan}</h2>
            <p class="term-definition">${item.definition}</p>
            <div class="term-example">
                <strong>Example:</strong>
                <p>${item.example}</p>
            </div>
            <div class="term-tags">
                ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        glossaryGrid.appendChild(card);
    });
}

// Search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderGlossary(glossaryTerms);
        return;
    }
    
    const filteredTerms = glossaryTerms.filter(item => {
        const matchesTerm = item.term.toLowerCase().includes(searchTerm);
        const matchesDefinition = item.definition.toLowerCase().includes(searchTerm);
        const matchesFullName = item.fullName.toLowerCase().includes(searchTerm);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesTerm || matchesDefinition || matchesFullName || matchesTags;
    });
    
    renderGlossary(filteredTerms);
}

// Event Listeners
searchInput.addEventListener('input', handleSearch);

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderGlossary(glossaryTerms);
});



