document.addEventListener('DOMContentLoaded', () => {

    const adviceIdElement = document.getElementById('advice-id');
    const adviceTextElement = document.getElementById('advice-text');
    const newAdviceBtn = document.getElementById('new-advice-btn');
    const ADVICE_API_URL = 'https://api.adviceslip.com/advice';

    const getAdvice = () => {
        newAdviceBtn.disabled = true;
        newAdviceBtn.classList.add('loading');

        fetch(ADVICE_API_URL, { cache: 'no-cache' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not fetch advice from the API.');
                }
                return response.json();
            })
            .then(data => {
                const { id, advice } = data.slip;
                adviceIdElement.textContent = `Advice #${id}`;
                adviceTextElement.textContent = `"${advice}"`;
            })
            .catch(error => {
                adviceTextElement.textContent = `"It seems something went wrong. Please try again."`;
                adviceIdElement.textContent = 'Error';
                console.error("Operation failed: ", error);
            })
            .finally(() => {
                newAdviceBtn.disabled = false;
                newAdviceBtn.classList.remove('loading');
            });
    };

    newAdviceBtn.addEventListener('click', getAdvice);
    getAdvice();
});
