

const ALERT_SUCCESS = () => {
    const html = `
    <div id="alert" class="fixed z-50 top-2 right-4">
        <div class="w-full sm:w-96">
            <div class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg
            overflow-hidden mt-4">
                <div class="flex justify-center items-center w-16 border rounded-l-lg bg-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000
                    16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1
                    1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="flex justify-between p-2 pl-4 w-full border border-gray-100">
                    <div class="flex flex-col justify-center mr-4">
                        <div class="font-semibold">Success!</div>
                        <div class="text-sm">Your data was successfully saved</div>
                    </div>
                    <div>
                        <button class="close-er p-0.5 rounded-md bg-opacity-10 over:bg-opacity-25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="close-er h-4 w-4" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path class="close-er" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414
                            0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414
                            10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293
                            4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1
                            1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    return html
}
const ALERT_ERROR = () => {
    const html = 
    `<div id="alert" class="fixed z-50 top-20 right-4">
        <div class="w-full sm:w-96">
            <div class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg
            overflow-hidden mt-4">
                <div class="flex justify-center items-center w-16 border rounded-l-lg bg-red-500">
                    <svg class="h-6 w-6 text-white" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"/></svg>
                </div>
                <div class="flex justify-between p-2 pl-4 w-full border border-gray-100">
                    <div class="flex flex-col justify-center mr-4">
                        <div class="font-semibold">Error!</div>
                        <div class="text-sm">An error occurred while processing your request.</div>
                    </div>
                    <div>
                        <button class="close-er p-0.5 rounded-md bg-opacity-10 over:bg-opacity-25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="close-er h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path class="close-er" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    return html
}

const PRINT_DATA = ( data = false ) => {
    if(data) {
        
    }
}

document.addEventListener('click', function(e){
    
    const BUTTON_SCRAPPER = document.querySelector('#scrapper-moobion');
    
    if(e.target.id == 'scrapper-moobion')
    {
        const url_moobion = document.querySelector('#url-moobion').value;

        if(!url_moobion || url_moobion == '') return;

        BUTTON_SCRAPPER.innerHTML += `<svg class="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
       
        const API = `https://ficevi.com/demo/scrapper/scramoobion/inc/scrapper.php`;

        const fetchData = (url_api) => {

            return new Promise( (resolve, reject) => {

                let formData = new FormData();
                formData.append("url_moobion", url_moobion);

                const xhttp = new XMLHttpRequest();
                xhttp.open('POST', url_api, true);
                xhttp.onreadystatechange = (e) =>
                {
                    if(xhttp.readyState === 4)
                    {
                        (xhttp.status === 200) ? resolve( JSON.parse(xhttp.responseText) ) : reject( new Error('Error ' + url_api) );
                    }
                };
                xhttp.send(formData);
            } )
        }

        const anotherFunction = async (url_api) => {
            try {
                const data = await fetchData(url_api);
                const info = data.res;

                document.querySelector('#block-scrapper').innerHTML += `
                <div class="p-3">
                    <div class="w-full">
                        <h3 class="text-xl mb-4">Result:</h3>
                        <div class="mb-2">
                            <span class="bg-amber-400">Title</span> ${info.title}
                        </div>
                        <div class="mb-2">
                            <span class="bg-amber-400">Content</span> ${info.content}
                        </div>
                        <div class="mb-2">
                            <span class="bg-amber-400">Image</span> ${info.image}
                        </div>
                        <div class="mb-2">
                            <span class="bg-amber-400">Category</span> ${info.category}
                        </div>
                        <div class="mb-2">
                            <span class="bg-amber-400">Developer</span> ${info.developer}
                        </div>
                    </div>
                </div>
                `;

                if(document.querySelector('.animate-spin')){
                    document.querySelector('.animate-spin').remove();
                }
                
                document.querySelector('body').innerHTML += ALERT_SUCCESS();

                if(document.querySelector('#alert')){
                    setTimeout( ()=> {
                        if(document.querySelector('#alert')){
                            document.querySelector('#alert').remove();
                        }
                    },4000);
                }

            } catch (error) {
                if(document.querySelector('.animate-spin')){
                    document.querySelector('.animate-spin').remove();
                }
                document.querySelector('body').innerHTML += ALERT_ERROR();
                if(document.querySelector('#alert')){
                    setTimeout( ()=> {
                        if(document.querySelector('#alert')){
                            document.querySelector('#alert').remove();
                        }
                    },4000);
                }
            }
            
        }
        anotherFunction(API);

    }

    if(e.target.classList.contains('close-er')){
        if(document.querySelector('#alert')){
            document.querySelector('#alert').remove();
        }
    }
    
});
