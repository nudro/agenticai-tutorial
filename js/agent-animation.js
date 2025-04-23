// AI Agent Tool Use Animation
document.addEventListener('DOMContentLoaded', function() {
    // Get the animation container
    const animationContainer = document.getElementById('agent-animation');
    if (!animationContainer) {
        console.error('Animation container not found');
        return;
    }

    // Create a simple SVG diagram
    const svg = `
    <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
        <!-- Nodes -->
        <circle id="user" cx="100" cy="100" r="30" fill="#f9f" stroke="#333" stroke-width="2" />
        <rect id="llm" x="250" y="70" width="120" height="60" rx="5" fill="#bbf" stroke="#333" stroke-width="2" />
        <rect id="tools" x="450" y="70" width="120" height="60" rx="5" fill="#bfb" stroke="#333" stroke-width="2" />
        
        <!-- Labels -->
        <text x="100" y="105" text-anchor="middle" font-family="Arial" font-size="14">User</text>
        <text x="310" y="105" text-anchor="middle" font-family="Arial" font-size="14">Language Model</text>
        <text x="510" y="105" text-anchor="middle" font-family="Arial" font-size="14">Tools</text>
        
        <!-- Arrows -->
        <path id="arrow1" d="M130,100 L250,100" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
        <path id="arrow2" d="M370,100 L450,100" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
        <path id="arrow3" d="M450,130 L370,130" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
        <path id="arrow4" d="M250,130 L130,130" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)" />
        
        <!-- Arrow labels -->
        <text x="190" y="95" text-anchor="middle" font-family="Arial" font-size="12">1. Request</text>
        <text x="410" y="95" text-anchor="middle" font-family="Arial" font-size="12">3. Call tools</text>
        <text x="410" y="125" text-anchor="middle" font-family="Arial" font-size="12">5. Results</text>
        <text x="190" y="125" text-anchor="middle" font-family="Arial" font-size="12">7. Response</text>
        
        <!-- Arrow marker definition -->
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
            </marker>
        </defs>
    </svg>
    `;
    
    // Add the SVG to the container
    animationContainer.innerHTML = svg;
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes highlight {
            0% { stroke: #333; stroke-width: 2px; }
            50% { stroke: #ff6600; stroke-width: 4px; }
            100% { stroke: #333; stroke-width: 2px; }
        }
        
        .active {
            animation: highlight 1.5s ease-in-out;
        }
    `;
    document.head.appendChild(style);
    
    // Animation steps
    const steps = [
        // Step 1: User sends request to LLM
        ['arrow1'],
        
        // Step 2: LLM processes request (no arrow, just pause)
        [],
        
        // Step 3: LLM calls tools
        ['arrow2'],
        
        // Step 4: Tools process request (no arrow, just pause)
        [],
        
        // Step 5: Tools return results to LLM
        ['arrow3'],
        
        // Step 6: LLM processes results (no arrow, just pause)
        [],
        
        // Step 7: LLM returns response to user
        ['arrow4']
    ];
    
    // Function to update the animation
    let currentStep = 0;
    function updateAnimation() {
        // Remove active class from all arrows
        document.querySelectorAll('path[id^="arrow"]').forEach(arrow => {
            arrow.classList.remove('active');
        });
        
        // Add active class to current step's arrows
        const currentArrows = steps[currentStep];
        currentArrows.forEach(arrowId => {
            const arrow = document.getElementById(arrowId);
            if (arrow) {
                arrow.classList.add('active');
            }
        });
        
        // Move to the next step
        currentStep = (currentStep + 1) % steps.length;
    }
    
    // Initialize the animation
    updateAnimation();
    
    // Update the animation every 1.5 seconds
    setInterval(updateAnimation, 1500);
}); 