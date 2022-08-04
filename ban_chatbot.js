var activado = "false";
window.onload = cargainicialbot;

function cargainicialbot() {
    document.getElementById('webChatIcon').classList.add('latido')
    document.getElementById('botiframe').style.display = 'none'
}

function showChatWindow() {
    document.getElementById('webChatIcon').classList.remove('latido');
    document.getElementById('webchat').style.visibility = 'visible'
    document.getElementById('avatar-container').style.visibility = 'collapse'
    if (activado == "true") {
        document.getElementById('botiframe').style.display = ''
    }
}


function hideChatWindow() {
    document.getElementById('webChatIcon').classList.add('latido');
    document.getElementById('webchat').style.visibility = 'collapse'
    document.getElementById('avatar-container').style.visibility = 'visible'
    document.getElementById('botiframe').style.display = 'none'
}

function loadchat() {
    document.getElementById('mensaje_bienvenida').style.display = 'none'
    document.getElementById('botiframe').style.display = ''
    cargabot()
    activado = "true"
    document.getElementById('logo-cabecera').src = "https://www.banecuador.fin.ec/wp-content/uploads/2020/09/logo.png"
}

function abrirNuevoTab() {
    var win = window.open('urlterminosycondiciones', '_blank');
    win.focus();
}

function cargabot() {

    const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
            dispatch({
                type: 'WEB_CHAT/SEND_EVENT',
                payload: {
                    name: 'webchat/join',
                    value: { language: window.navigator.language }
                }
            });
        }
    
        return next(action);
    });



    window.WebChat.renderWebChat(
        {
            directLine: window.WebChat.createDirectLine({
                token: 'QX5meB4lW2s.V7o9ufQ6fE0VWvAyR5ZRV4VEzcmWnMWQHJ_yCcpen4k',                
                locale: 'es-ES'
            }),
            store,
            sendTypingIndicator: true,
            styleOptions: {
                hideUploadButton: true,
                sendBoxButtonColor: '#F6F6F6',
                sendBoxBackground: '#43BEAC',
                sendBoxTextColor: 'white',
                sendBoxButtonColorOnHover: '#fff',
                sendBoxHeight: 30,
                bubbleFromUserBackground: '##DFDFE4',
                bubbleFromUserTextColor: 'black',
                bubbleBackground: '#939598',                
                bubbleTextColor: 'white',
                botAvatarImage: 'https://www.banecuador.fin.ec/wp-content/uploads/2020/09/logo.png',
                botAvatarInitials: 'Beto',
                sendBoxPlaceholderColor: '#F6F6F6',
                emojiSet: true,
		        suggestedActionLayout: 'stacked', 
		        bubbleBorderRadius: 15,
                bubbleFromUserBorderRadius: 15
            }
        },
        document.getElementById('botiframe'));
        document.querySelector('#botiframe > *').focus();


}
