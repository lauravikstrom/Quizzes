/// <reference path="jquery-3.6.0.min.js" />


$(function () {
  let right_answer = 0
  let author_1 = ''
  let author_2 = ''
  let author_3 = ''
  let author_4 = ''
  let author_5 = ''

  $('#1_answerbutton').on('click', function () {
    author_1 = $('#1_answer').val()

    if (author_1 === '') {
      alert('Vastauksesi ei voi olla tyhjä.')
    } else {
      $('#1_answer').prop('disabled', true)
      $('#1_answerbutton').prop('disabled', true)
      $('#1_ok_button').show(0)

      if (
        author_1 == 'J. R. R. Tolkien' || 
        author_1 == 'J.R.R. Tolkien' ||
        author_1 == 'j. r. r. tolkien' ||
        author_1 == 'j.r.r. tolkien') {
        right_answer = 1
        $('#tolkien_answer2').html('oikein! Olet vastannut ' + right_answer +' kysymykseen oikein. Sinulla on neljä kysymystä jäljellä.')
        $('#tolkien_info1').show(0)
        $('#tolkien_info2').show(0)
      } else {
        $('#tolkien_answer2').html('väärin. Sinulla on neljä kysymystä jäljellä.')
      }
    }
  })

  $('#1_ok_button').on('click', function () {
    $('#doyleid').show(0)
    $('#tolkienid').hide(0)
    $('#general').hide(0)
    $('#2_answer').trigger('focus')
  })

  $('#2_answerbutton').on('click', function () {
    author_2 = $('#2_answer').val()

    if (author_2 === '') {
      alert('Vastauksesi ei voi olla tyhjä.')
    } else {
      $('#2_answer').prop('disabled', true)
      $('#2_answerbutton').prop('disabled', true)
      $('#2_ok_button').show(0)

      if (author_2 == 'Arthur Conan Doyle' ||  
          author_2 == 'arthur conan doyle') {
        right_answer += 1
        $('#doyle_answer2').html('oikein! Olet vastannut ' + right_answer + ' kysymykseen oikein. Sinulla on kolme kysymystä jäljellä.')
        $('#doyle_info1').show(0)
        $('#doyle_info2').show(0)
      } else {
        $('#doyle_answer2').html('väärin. Sinulla on kolme kysymystä jäljellä.')
      }
    }
  })

  $('#2_ok_button').on('click', function () {
    $('#rowlingid').show(0)
    $('#doyleid').hide(0)
    $('#3_answer').trigger('focus')
  })

  $('#3_answerbutton').on('click', function () {
    author_3 = $('#3_answer').val()

    if (author_3 === '') {
      alert('Vastauksesi ei voi olla tyhjä.')
    } else {
      $('#3_answer').prop('disabled', true)
      $('#3_answerbutton').prop('disabled', true)
      $('#3_ok_button').show(0)

      if (author_3 == 'J. K. Rowling' || 
          author_3 == 'J.K. Rowling' || 
          author_3 == 'j. k. rowling' || 
          author_3 == 'j.k. rowling') {
        right_answer += 1
        $('#rowling_answer2').html('oikein! Olet vastannut ' + right_answer + ' kysymykseen oikein. Sinulla on kaksi kysymystä jäljellä.')
        $('#rowling_info1').show(0)
        $('#rowling_info2').show(0)
      } else {
        $('#rowling_answer2').html('väärin. Sinulla on kaksi kysymystä jäljellä.')
      }
    }
  })

  $('#3_ok_button').on('click', function () {
    $('#martinid').show(0)
    $('#rowlingid').hide(0)
    $('#4_answer').trigger('focus')
  })

  $('#4_answerbutton').on('click', function () {
    author_4 = $('#4_answer').val()

    if (author_4 === '') {
      alert('Vastauksesi ei voi olla tyhjä.')
    } else {
      $('#4_answer').prop('disabled', true)
      $('#4_answerbutton').prop('disabled', true)
      $('#4_ok_button').show(0)

      if (author_4 == 'George R. R. Martin' || 
          author_4 == 'George R.R. Martin' ||
          author_4 == 'george r. r. martin' ||
          author_4 == 'george r.r. martin') {
        right_answer += 1
        $('#martin_answer2').html('oikein! Olet vastannut ' + right_answer + ' kysymykseen oikein. Sinulla on yksi kysymys jäljellä.')
        $('#martin_info1').show(0)
        $('#martin_info2').show(0)
      } else {
        $('#martin_answer2').html('väärin. Sinulla on yksi kysymys jäljellä.')
      }
    }
  })

  $('#4_ok_button').on('click', function () {
    $('#lewisid').show(0)
    $('#martinid').hide(0)
    $('#5_answer').trigger('focus')
  })

  $('#5_answerbutton').on('click', function () {
    author_5 = $('#5_answer').val()

    if (author_5 === '') {
      alert('Vastauksesi ei voi olla tyhjä.')
    } else {
      $('#5_answer').prop('disabled', true)
      $('#5_answerbutton').prop('disabled', true)
      $('#5_ok_button').show(0)

      if (author_5 == 'C. S. Lewis' || 
          author_5 == 'C.S. Lewis' || 
          author_5 == 'c. s. lewis' || 
          author_5 == 'c.s. lewis') {
        right_answer += 1
        $('#lewis_answer2').html('oikein! Olet vastannut ' + right_answer + ' kysymykseen oikein. Tämä oli viimeinen kysymys.')
        $('#lewis_info1').show(0)
        $('#lewis_info2').show(0)
      } else {
        $('#lewis_answer2').html('väärin. Tämä oli viimeinen kysymys.')
      }
    }
  })

  $('#5_ok_button').on('click', function () {
    $('#answers').show(0)
    $('#lewisid').hide(0)
    $('.try_again').show(0)

    $('#amount_answers').show(0)

    if (right_answer < 5) {
      $('#wrong_answers').show(0)
    }
    let books = [
      '',
      '<span><img src="img/book.png" class="img-fluid" alt=""/></span>',
      '<span><img src="img/book.png" class="img-fluid" alt=""/></span>',
      '<span><img src="img/book.png" class="img-fluid" alt=""/></span>',
      '<span><img src="img/book.png" class="img-fluid" alt=""/></span>',
      '<span><img src="img/book.png" class="img-fluid" alt=""/></span>'
    ]

    for (let kierros = 1; kierros <= right_answer; kierros++) {
      $('#amount_answers').append(books[1])
    }

    if (right_answer === 5) {
      $('.pixabay').show(0)
      $('#answers').html('Mahtavaa! Keräsit kaikki viisi kirjaa! Onneksi olkoon!'
      )
    } else if (right_answer === 4) {
      $('.pixabay').show(0)
      $('#answers').html('Hienoa! Sait 4/5 kirjaa oikein!')
    } else if (right_answer === 3) {
      $('.pixabay').show(0)
      $('#answers').html('Sait kolme oikein. Se on yli puolet vastauksista! Hyvin tehty!'
      )
    } else if (right_answer === 2 || right_answer === 1) {
      $('.pixabay').show(0)
      $('#answers').html('Sait ' + right_answer + '/5. Sekin on nollaa enemmän! Kannattaa kuitenkin hieman petrata kirjallisuustietämystäsi.')
    } else {
      $('#answers').html('Ohhoh. Et saanut yhtään oikein. Alla olevista linkeistä kannattaa mennä tutustumaan kyseisiin kirjailijoihin.'
      )
    }

    if (author_1 != 'J. R. R. Tolkien' && 
        author_1 != 'J.R.R. Tolkien' &&
        author_1 != 'j. r. r. tolkien' &&
        author_1 != 'j.r.r. tolkien') {
      $('#wrong').append('1. Kuka on kirjoittanut kirjan Taru Sormusten Herrasta? ')
      $('#wrong').append('Vastasit: ' + author_1 + '. Oikea vastaus on J. R. R. Tolkien.')
      $('#tolkien_result').show(0)
    }
    if ( author_2 != 'Arthur Conan Doyle' && author_2 != 'arthur conan doyle') {
      $('#wrong').append('<br>' + '2. Kuka on kirjoittanut Sherlock Holmes -kirjat? ')
      $('#wrong').append('Vastasit: ' + author_2 + '. Oikea vastaus on Arthur Conan Doyle.')
      $('#doyle_result').show(0)
    }
    if (author_3 != 'J. K. Rowling' && 
        author_3 != 'J.K. Rowling' &&
        author_3 != 'j. k. rowling' && 
        author_3 != 'j.k. rowling') {
      $('#wrong').append('<br>' + '3. Kuka on kirjoittanut Harry Potter -kirjasarjan? ')
      $('#wrong').append('Vastasit: ' + author_3 + '. Oikea vastaus on J. K. Rowling.')
      $('#rowling_result').show(0)
    }
    if (author_4 != 'George R. R. Martin' && 
        author_4 != 'George R.R. Martin' &&
        author_4 != 'george r. r. martin' &&
        author_4 != 'george r.r. martin') {
      $('#wrong').append('<br>' + '4. Kuka on kirjoittanut Tulen ja jään laulu -kirjasarjan? ')
      $('#wrong').append('Vastasit: ' + author_4 + '. Oikea vastaus on George R. R. Martin.')
      $('#martin_result').show(0)
    }
    if (author_5 != 'C. S. Lewis' && 
        author_5 != 'C.S. Lewis' &&
        author_5 != 'c. s. lewis' && 
        author_5 != 'c.s. lewis') {
      $('#wrong').append('<br>' + '5. Kuka on kirjoittanut Narnian Tarinat -kirjasarjan? ')
      $('#wrong').append('Vastasit: ' + author_5 + '. Oikea vastaus on C. S. Lewis.')
      $('#lewis_result').show(0)
    }
  })
})
