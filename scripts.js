function expandPlaylist(selectedCard) {
    // Скрываем все карточки, кроме выбранной
    const cards = document.querySelectorAll(".playlist-card");
    cards.forEach((card) => {
        if (card !== selectedCard) {
            card.classList.add("hidden");
        }
    });

    // Разворачиваем выбранную карточку на весь экран
    selectedCard.classList.add("expanded");

    // Показываем кнопку "Закрыть"
    document.querySelector(".close-button").style.display = "block";
}

function collapsePlaylist() {
    // Возвращаем все карточки
    const cards = document.querySelectorAll(".playlist-card");
    cards.forEach((card) => {
        card.classList.remove("hidden", "expanded");
    });

    // Скрываем кнопку "Закрыть"
    document.querySelector(".close-button").style.display = "none";
}
