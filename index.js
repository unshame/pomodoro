const notifier = require('node-notifier');

module.exports = async function pomodoro(
    totalSteps = 25,
    stepDuration = 1000 * 60,
    stepName = 'minute'
) {
    const currentTime = new Date().toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit'
    });
    console.log(`Started working at ${currentTime}.`);

    notifier.notify({
        title: `Do thing for ${pluralize(stepName, totalSteps)}.`,
        message: 'Or else!',
        icon: './icons/icon_work.png'
    });

    await runInterval(totalSteps, stepDuration, (stepCount) => {
        console.log(`Still ${pluralize(stepName, totalSteps - stepCount)} to go.`);
    });

    console.log(`Time's up.`);

    notifier.notify({
        title: `Okay, you can rest now.`,
        message: `But I'm still watching you.`,
        icon: './icons/icon_rest.png'
    });
};

function runInterval(totalSteps, stepDuration, stepCallback) {

    let stepCount = 0;
    stepCallback(stepCount);

    return new Promise((resolve) => {
        let interval = setInterval(() => {

            stepCount++;

            if (stepCount == totalSteps) {
                clearInterval(interval);
                return void resolve();
            }
            else {
                stepCallback(stepCount);
            }

        }, stepDuration);
    });
}

function pluralize(word, number) {
    return `${number} ${word}${number === 1 ? '' : 's'}`;
}
