define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.4/SCIAT/sciat6.js'], function(API, sciatExtension) {
    
    return sciatExtension({
        // ---------------------------------------------------------------------
        // 1. CATEGORY & STIMULI DEFINITIONS
        // ---------------------------------------------------------------------
        category: {
            name: 'Stress',
            title: {
                media: { word: 'Stress' },
                css: { color: '#31b0d5', 'font-size': '1.8em' }
            },
            media: [
                { word: 'Stressful' },
                { word: 'Stressed' },
                { word: 'Stressor' },
                { word: 'Pressure' },
                { word: 'Burden' },
                { word: 'Tension' },
                { word: 'Tense' }
            ]
        },
        attribute1: {
            name: 'Enhancing',
            title: {
                media: { word: 'Enhancing' },
                css: { color: '#008000', 'font-size': '1.8em' }
            },
            media: [
                { word: 'Positive' }, { word: 'Strengthening' }, { word: 'Developing' },
                { word: 'Enriching' }, { word: 'Expanding' }, { word: 'Elevating' },
                { word: 'Energizing' }, { word: 'Boosting' }, { word: 'Healthy' },
                { word: 'Improving' }, { word: 'Growing' }, { word: 'Inspiring' },
                { word: 'Stimulating' }, { word: 'Heightening' }, { word: 'Thriving' },
                { word: 'Vitalizing' }, { word: 'Flourishing' }, { word: 'Beneficial' },
                { word: 'Advancing' }, { word: 'Productive' }, { word: 'Helpful' }
            ]
        },
        attribute2: {
            name: 'Debilitating',
            title: {
                media: { word: 'Debilitating' },
                css: { color: '#FF0000', 'font-size': '1.8em' }
            },
            media: [
                { word: 'Crippling' }, { word: 'Incapacitating' }, { word: 'Devastating' },
                { word: 'Disabling' }, { word: 'Immobilizing' }, { word: 'Depleting' },
                { word: 'Harmful' }, { word: 'Negative' }, { word: 'Useless' },
                { word: 'Failing' }, { word: 'Exhausting' }, { word: 'Inhibiting' },
                { word: 'Draining' }, { word: 'Unhealthy' }, { word: 'Fatiguing' },
                { word: 'Diminishing' }, { word: 'Devitalizing' }, { word: 'Dysfunctional' },
                { word: 'Limiting' }, { word: 'Unhelpful' }, { word: 'Restricting' }
            ]
        },

        // ---------------------------------------------------------------------
        // 2. TRIAL STRUCTURE (Table 2: 24 practice, 72 test)
        // ---------------------------------------------------------------------
        nTrialsInBlock: [24, 72, 24, 72],

        // ---------------------------------------------------------------------
        // 3. KEYBOARD & DISPLAY SETTINGS
        // ---------------------------------------------------------------------
        leftKeyText: 'Press "E" for',
        rightKeyText: 'Press "I" for',
        keys: { leftKey: 'e', rightKey: 'i' }
    });
});
