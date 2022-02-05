const modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Закрыть"
  })

  const popupOpen = (link) => {
      modal.open()
      modal.setContent(document.querySelector(`#${link}`))
  }