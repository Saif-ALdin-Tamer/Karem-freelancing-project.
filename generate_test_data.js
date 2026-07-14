// Test Data Generator for KA Portfolio
// Copy and paste this code into the browser console (F12) while on your Admin page (admin.html or index.html).

function generateTestData(numberOfItems) {
    console.log(`Generating ${numberOfItems} test works...`);
    
    // Load existing works or create empty structure
    let works = JSON.parse(localStorage.getItem('ka_admin_works')) || {};
    
    if (!works['software']) {
        works['software'] = { title: 'Software', works: [] };
    }

    for (let i = 0; i < numberOfItems; i++) {
        works['software'].works.unshift({
            name: `Test Work ${i}`,
            cat: `Test Category ${i}`,
            desc: `This is a test description for work item ${i}. It is used to test how much data the website can handle without lagging.`,
            // Using a tiny base64 image (1x1 pixel) to simulate an image without instantly blowing up the 5MB limit.
            // If you want to test the REAL limit with heavy images, replace this with a large base64 string.
            url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
        });
    }

    try {
        localStorage.setItem('ka_admin_works', JSON.stringify(works));
        console.log(`✅ Successfully added ${numberOfItems} items!`);
        console.log(`📊 LocalStorage size for works is now roughly: ${(JSON.stringify(works).length / 1024).toFixed(2)} KB`);
        console.log("Refresh the page to see the performance.");
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.error("❌ ERROR: LocalStorage limit reached! The website cannot handle this much data because it saves everything in LocalStorage (which has a ~5MB limit).");
        } else {
            console.error("❌ ERROR:", e);
        }
    }
}

// To run the test, type this in your console:
// generateTestData(100); 
