function nextQuestion(currentId) {
    const nextId = currentId + 1;
    const totalQuestions = 4;

    document.getElementById('question' + currentId).style.display = 'none';

    if (nextId <= totalQuestions) {
        document.getElementById('question' + nextId).style.display = 'block';
        updateProgress(nextId, totalQuestions);
    } else {
        makeRecommendation();
    }
}

function updateProgress(currentStep, totalSteps) {
    const progressElement = document.getElementById('progress');
    progressElement.innerText = `Question ${currentStep} of ${totalSteps}`;
}

function makeRecommendation() {
    const dailyDistance = parseInt(document.getElementById('dailyDistance').value);
    const budget = parseInt(document.getElementById('budget').value);
    const vehicleSize = document.getElementById('vehicleSize').value;
    const charging = document.getElementById('charging').value;

    let recommendation = 'Based on your preferences, we recommend: ';

    // Expanded recommendation logic
    if (dailyDistance <= 30) {
        if (budget < 25000) {
            recommendation += (vehicleSize === 'compact') ? 'the Renault Zoe or Fiat 500e.' : 'the Nissan Leaf or Kia Soul EV.';
        } else if (budget < 40000) {
            recommendation += (vehicleSize === 'suv') ? 'the Hyundai Kona Electric or Kia e-Niro.' : 'the Tesla Model 3 or Polestar 2.';
        } else {
            recommendation += (vehicleSize === 'suv') ? 'the Audi e-tron or Jaguar I-PACE.' : 'the Tesla Model S or Lucid Air.';
        }
    } else if (dailyDistance > 30 && dailyDistance <= 60) {
        if (budget < 35000) {
            recommendation += 'the Chevrolet Bolt EV or Hyundai Ioniq Electric.';
        } else if (budget < 50000) {
            recommendation += 'the BMW i3 or Volkswagen ID.4.';
        } else {
            recommendation += 'the Porsche Taycan or Mercedes EQC.';
        }
    } else {
        if (budget < 30000) {
            recommendation += 'the MG ZS EV or Mini Electric.';
        } else if (budget < 45000) {
            recommendation += 'the Ford Mustang Mach-E or Volvo XC40 Recharge.';
        } else {
            recommendation += 'the Rivian R1T or Tesla Cybertruck for long distance travel.';
        }
    }

    // Add a general message for users with unique requirements
    recommendation += "\n\nFor more specific needs, please consult our full catalog.";

    document.getElementById('recommendation').innerText = recommendation;
    document.getElementById('results').style.display = 'block';
}

function startOver() {
    document.getElementById('question1').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    updateProgress(1);
}

// Initialize the form with the first question
nextQuestion(0);
