// ======================================
// PRODUCTIVITY SELF EVALUATION
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const evaluateBtn = document.getElementById("evaluateBtn");
    const scoreResult = document.getElementById("scoreResult");
    const adviceResult = document.getElementById("adviceResult");

    if (!evaluateBtn) {
        console.error("❌ Evaluate button not found.");
        return;
    }

    evaluateBtn.addEventListener("click", () => {

        const answers = document.querySelectorAll(".answer");

        let score = 0;

        answers.forEach(answer => {

            score += parseInt(answer.value) || 0;

        });

        scoreResult.textContent = `Your Score: ${score} / 35`;

        let advice = "";

        if (score >= 30) {

            advice = "🌟 Excellent! You have excellent productivity habits. Keep being consistent and continue improving every day.";

        } else if (score >= 24) {

            advice = "💪 Very Good! You are productive, but reducing distractions and improving time management will make you even better.";

        } else if (score >= 17) {

            advice = "🙂 Good Start! You have potential, but your routine needs more consistency. Focus on planning and completing your priorities.";

        } else if (score >= 10) {

            advice = "⚠️ You need improvement. Reduce unnecessary screen time, create a daily schedule, and build one habit at a time.";

        } else {

            advice = "🚀 This is a new beginning. Start with one important task every day, avoid distractions, and build momentum through small daily wins.";

        }

        adviceResult.textContent = advice;

    });

});