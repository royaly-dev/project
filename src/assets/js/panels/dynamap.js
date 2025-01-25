window.addEventListener('load', () => {
    console.log('Window Loaded');
    const iframe = document.querySelector('iframe').contentWindow.document.querySelector('body');
    if (iframe) {
        console.log(iframe);
        iframe.addEventListener('load', () => {
        const iframeDocument = iframe.contentWindow.document.querySelector('body')
        console.log(iframeDocument)
        });
    } else {
        console.error('Iframe not found');
    }
    });