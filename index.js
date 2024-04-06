document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('imageContainer')

  imageContainer.addEventListener('wheel', function (event) {
    event.preventDefault()

    const scrollDirection = event.deltaY > 0 ? 1 : -1
    const scrollAmount = 200 * scrollDirection

    imageContainer.scrollLeft += scrollAmount
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const wrappedImageContainer = document.querySelector('.wrapped')

  wrappedImageContainer.addEventListener('wheel', function (event) {
    event.preventDefault()

    const scrollDirection = event.deltaY > 0 ? 1 : -1
    const scrollAmount = 200 * scrollDirection

    wrappedImageContainer.scrollLeft += scrollAmount
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const wrappedImageContainer2 = document.querySelector('.wrapped2')

  wrappedImageContainer2.addEventListener('wheel', function (event) {
    event.preventDefault()

    const scrollDirection = event.deltaY > 0 ? 1 : -1
    const scrollAmount = 200 * scrollDirection

    wrappedImageContainer2.scrollLeft += scrollAmount
  })
})

document.addEventListener('DOMContentLoaded', function () {
  let editProfileLink = document.getElementById('editProfileLink')

  editProfileLink.addEventListener('click', function (event) {
    event.preventDefault()
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var editProfileLink = document.querySelector('#edit-profile-link')

  editProfileLink.addEventListener('click', function (event) {
    event.preventDefault()

    window.location.href = 'profile.html'
  })
})
