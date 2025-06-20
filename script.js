document.addEventListener('DOMContentLoaded', () => {

    const adviceIdElement = document.getElementById('advice-id');
    const adviceTextElement = document.getElementById('advice-text');
    const newAdviceBtn = document.getElementById('new-advice-btn');
    const ADVICE_API_URL = 'https://api.adviceslip.com/advice';

    const getAdvice = () => {
        newAdviceBtn.disabled = true;
        newAdviceBtn.classList.add('loading');
        //asincrónica
        fetch(ADVICE_API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener el consejo.');
                }
                return response.json();
            })
            .then(data => {
                const englishAdvice = data.slip.advice;
                const adviceId = data.slip.id;
                //api de traducción
                adviceIdElement.textContent = `Consejo #${adviceId}`;
                const TRANSLATE_API_URL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishAdvice)}&langpair=en|es`;

                return fetch(TRANSLATE_API_URL);
            })
            .then(translateResponse => {
                if (!translateResponse.ok) {
                    throw new Error('No se pudo traducir el consejo.');
                }
                return translateResponse.json();
            })
            .then(translateData => {
                const spanishAdvice = translateData.responseData.translatedText;
                adviceTextElement.textContent = `"${spanishAdvice}"`;
            })
            .catch(error => {
                adviceTextElement.textContent = `"${error.message}"`;
                adviceIdElement.textContent = 'Error';
                console.error("Falló la operación: ", error);
            })
            .finally(() => {

                newAdviceBtn.disabled = false;
                newAdviceBtn.classList.remove('loading');
            });
    };
    newAdviceBtn.addEventListener('click', getAdvice);
    getAdvice();
});

