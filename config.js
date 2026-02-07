// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Sonaani",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: " HI CHANTHIIII 🍑 ",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '🥹', '😚', '💗', '💓'],  // Heart emojis
        bears: ['💌', '🍋']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Enne ishtaano Sonumanikk ?",                                    // First interaction
            yesBtn: "Athelooo",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "Athremmmmmm, I love you mostest ❤️"           // Secret hover message
        },
        second: {
            text: "Ethra ishtam aan enne ?",                          // For the love meter
            startText: "Athrem",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: " ENNE ATHREMMMMM ISHTANOOOOO ??? ... UMMAAA CHANTHIIIII 😘🍋  ",  // Shows when they go past 5000%
        high: "Logath etttoommm ishtammmmmmm 😘💝",              // Shows when they go past 1000%
        normal: "Mostesttt 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Thank you for loving me like with all your heart",
        message: "And let's have a beautiful life together forever..pinne nammakk oru supriseum",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
            backgroundStart: "#ffafbd",      // Background gradient start
            backgroundEnd: "#ffc3a0",        // Background gradient end
            buttonBackground: "#ff6b6b",     // Button color
            buttonHover: "#ff8787",          // Button hover color
            textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: false,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dpi8lr773/video/upload/v1770480771/Ente_Ellam_Ellam_Alle_Video_Song_Meesamadhavan_Dileep_Kavya_Madhavan_zsb5ln.mp3", // Music streaming URL
        stText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
