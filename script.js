document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const scenarioInput = document.getElementById('scenarioInput');
    const loader = document.getElementById('loader');
    const resultsSection = document.getElementById('resultsSection');
    const endingsGrid = document.getElementById('endingsGrid');

    generateBtn.addEventListener('click', () => {
        const scenarioText = scenarioInput.value.trim();

        if (!scenarioText) {
            alert('Please enter a scenario or decision first!');
            return;
        }

        // Show loading state and hide previous results
        loader.classList.remove('hidden');
        resultsSection.classList.add('hidden');
        endingsGrid.innerHTML = '';

        // Simulate procedural branching logic generation (replace or hook up to an API if needed)
        setTimeout(() => {
            const variations = generateMockEndings(scenarioText);
            
            // Render endings
            variations.forEach((ending, index) => {
                const card = document.createElement('div');
                card.className = 'ending-card';
                card.style.animationDelay = `${index * 0.15}s`;
                
                card.innerHTML = `
                    <h3>Timeline ${String.fromCharCode(65 + index)}: ${ending.title}</h3>
                    <p>${ending.description}</p>
                `;
                endingsGrid.appendChild(card);
            });

            // Hide loader and display results
            loader.classList.add('hidden');
            resultsSection.classList.remove('hidden');
        }, 1200);
    });

    // Function to generate dynamic variations based on user input
    function generateMockEndings(input) {
        const cleanInput = input.length > 25 ? input.substring(0, 25) + '...' : input;
        
        return [
            {
                title: "The Butterfly Effect",
                description: `In this timeline, altering "${cleanInput}" triggers a massive cascade effect. Society adapts in unexpected ways, leading to a radical paradigm shift within a decade.`
            },
            {
                title: "The Irony of Fate",
                description: `Things initially seem to go precisely as planned regarding "${cleanInput}", but an unforeseen irony twists the outcome into an ironic, completely opposite reality.`
            },
            {
                title: "The Hidden Path",
                description: `A quiet, subtle alternative unfolds. While the world barely notices the shift surrounding "${cleanInput}", a select group of individuals experience a profound, personal awakening.`
            }
        ];
    }
});