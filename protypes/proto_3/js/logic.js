
//APP NAVIGATION

function showPage(page) {
    $(page).css('display', 'inline')
}
function hidePage(page) {
    $(page).css('display', 'none')
}

function startGame() {
    hidePage(lobby_page)
    showPage(game_page)

}