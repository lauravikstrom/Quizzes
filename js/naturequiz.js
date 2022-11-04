/// <reference path="jquery-3.6.0.min.js" />

$(function () {
  let amount = 0
  let answers = 0

  $('.nature').on('click', function () {
    $('#brownbear_info1').show(4000)
    $('#brownbear_info2').show(1200)
    $('#brownbear_info3').show(1200)

    let selection = $('[name=nature]:checked').val()

    if (selection === '1') {
      amount = amount + 1
      answers = answers + 1
      $('.final_result').html(amount)
      $('#1_brownbear + label').addClass('selected_c')
      $('#right1').show(1200)
    } else if (selection === '2') {
      answers = answers + 1
      $('#1_fox + label').addClass('selected')
      $('#1_brownbear + label').addClass('selected_c')
      $('#wrong1').show(1200)
    } else if (selection === '3') {
      answers = answers + 1
      $('#1_turtle + label').addClass('selected')
      $('#1_brownbear + label').addClass('selected_c')
      $('#wrong1').show(1200)
    } else {
      answers = answers + 1
      $('#1_squirrel + label').addClass('selected')
      $('#1_brownbear + label').addClass('selected_c')
      $('#wrong1').show(1200)
    }

    $('#1_fox').prop('disabled', true)
    $('#1_brownbear').prop('disabled', true)
    $('#1_turtle').prop('disabled', true)
    $('#1_squirrel').prop('disabled', true)

    if (answers === 5) {
      $('.pixabay').show(0)
      if (amount === 5) {
        $('#result5').show(500)
        $('#result5_1').show(500)
        $('#result5_2').show(500)
      } else if (amount === 4) {
        $('#result4').show(500)
        $('#result4_1').show(500)
        $('#result4_2').show(500)
      } else if (amount === 3) {
        $('#result3').show(500)
        $('#result3_1').show(500)
        $('#result3_2').show(500)
      } else if (amount === 2) {
        $('#result2').show(500)
        $('#result2_1').show(500)
      } else if (amount === 1) {
        $('#result1').show(500)
        $('#result1_1').show(500)
      } else if (amount === 0) {
        $('#result0').show(500)
        $('#result0_1').show(500)
      }
    }
  })

  $('.tree').on('click', function () {
    $('#redwood_info1').show(3500)
    $('#redwood_info2').show(1200)
    $('#redwood_info3').show(1300)

    let selection = $('[name=tree]:checked').val()

    if (selection === '1') {
      amount = amount + 1
      answers = answers + 1
      $('.final_result').html(amount)
      $('#2_redwood + label').addClass('selected_c')
      $('#right2').show(1200)
    } else if (selection === '2') {
      answers = answers + 1
      $('#2_birch + label').addClass('selected')
      $('#2_redwood + label').addClass('selected_c')
      $('#wrong2').show(1200)
    } else if (selection === '3') {
      answers = answers + 1
      $('#2_wychelm + label').addClass('selected')
      $('#2_redwood + label').addClass('selected_c')
      $('#wrong2').show(1200)
    } else if (selection === '4') {
      answers = answers + 1
      $('#2_maple + label').addClass('selected')
      $('#2_redwood + label').addClass('selected_c')
      $('#wrong2').show(1200)
    } else {
      answers = answers + 1
      $('#2_spruce + label').addClass('selected')
      $('#2_redwood + label').addClass('selected_c')
      $('#wrong2').show(1200)
    }

    $('#2_birch').prop('disabled', true)
    $('#2_wychelm').prop('disabled', true)
    $('#2_maple').prop('disabled', true)
    $('#2_redwood').prop('disabled', true)
    $('#2_spruce').prop('disabled', true)

    if (answers === 5) {
      $('.pixabay').show(0)
      if (amount === 5) {
        $('#result5').show(500)
        $('#result5_1').show(500)
        $('#result5_2').show(500)
      } else if (amount === 4) {
        $('#result4').show(500)
        $('#result4_1').show(500)
        $('#result4_2').show(500)
      } else if (amount === 3) {
        $('#result3').show(500)
        $('#result3_1').show(500)
        $('#result3_2').show(500)
      } else if (amount === 2) {
        $('#result2').show(500)
        $('#result2_1').show(500)
      } else if (amount === 1) {
        $('#result1').show(500)
        $('#result1_1').show(500)
      } else if (amount === 0) {
        $('#result0').show(500)
        $('#result0_1').show(500)
      }
    }
  })

  $('.berry').on('click', function () {
    $('#solanum_info1').show(4000)
    $('#solanum_info2').show(1200)
    $('#solanum_info3').show(1300)

    let selection = $('[name=berry]:checked').val()

    if (selection === '1') {
      amount = amount + 1
      answers = answers + 1
      $('.final_result').html(amount)
      $('#3_bittersweet + label').addClass('selected_c')
      $('#right3').show(1200)
    } else if (selection === '2') {
      answers = answers + 1
      $('#pikkukarpalo1 + label').addClass('selected')
      $('#3_bittersweet + label').addClass('selected_c')
      $('#wrong3').show(1200)
    } else if (selection === '3') {
      answers = answers + 1
      $('#3_seabuckthorn + label').addClass('selected')
      $('#3_bittersweet + label').addClass('selected_c')
      $('#wrong3').show(1200)
    } else if (selection === '4') {
      answers = answers + 1
      $('#3_blueberry + label').addClass('selected')
      $('#3_bittersweet + label').addClass('selected_c')
      $('#wrong3').show(1200)
    } else {
      answers = answers + 1
      $('#3_northernbilberry + label').addClass('selected')
      $('#3_bittersweet + label').addClass('selected_c')
      $('#wrong3').show(1200)
    }

    $('#pikkukarpalo1').prop('disabled', true)
    $('#3_seabuckthorn').prop('disabled', true)
    $('#3_blueberry').prop('disabled', true)
    $('#3_northernbilberry').prop('disabled', true)
    $('#3_bittersweet').prop('disabled', true)

    if (answers === 5) {
      $('.pixabay').show(0)
      if (amount === 5) {
        $('#result5').show(500)
        $('#result5_1').show(500)
        $('#result5_2').show(500)
      } else if (amount === 4) {
        $('#result4').show(500)
        $('#result4_1').show(500)
        $('#result4_2').show(500)
      } else if (amount === 3) {
        $('#result3').show(500)
        $('#result3_1').show(500)
        $('#result3_2').show(500)
      } else if (amount === 2) {
        $('#result2').show(500)
        $('#result2_1').show(500)
      } else if (amount === 1) {
        $('#result1').show(500)
        $('#result1_1').show(500)
      } else if (amount === 0) {
        $('#result0').show(500)
        $('#result0_1').show(500)
      }
    }
  })

  $('.lake').on('click', function () {
    $('#lakes_info1').show(4000)
    $('#lakes_info2').show(1200)
    $('#lakes_info3').show(1300)

    let selection = $('[name=lake]:checked').val()

    if (selection === '1') {
      amount = amount + 1
      answers = answers + 1
      $('.final_result').html(amount)
      $('#4_hundsixeight + label').addClass('selected_c')
      $('#right4').show(1200)
    } else if (selection === '2') {
      answers = answers + 1
      $('#4_thousand + label').addClass('selected')
      $('#4_hundsixeight + label').addClass('selected_c')
      $('#wrong4').show(1200)
    } else if (selection === '3') {
      answers = answers + 1
      $('#4_fivethousand + label').addClass('selected')
      $('#4_hundsixeight + label').addClass('selected_c')
      $('#wrong4').show(1200)
    } else {
      answers = answers + 1
      $('#4_fiftythousand + label').addClass('selected')
      $('#4_hundsixeight + label').addClass('selected_c')
      $('#wrong4').show(1200)
    }

    $('#4_thousand').prop('disabled', true)
    $('#4_fivethousand').prop('disabled', true)
    $('#4_fiftythousand').prop('disabled', true)
    $('#4_hundsixeight').prop('disabled', true)

    if (answers === 5) {
      $('.pixabay').show(0)
      if (amount === 5) {
        $('#result5').show(500)
        $('#result5_1').show(500)
        $('#result5_2').show(500)
      } else if (amount === 4) {
        $('#result4').show(500)
        $('#result4_1').show(500)
        $('#result4_2').show(500)
      } else if (amount === 3) {
        $('#result3').show(500)
        $('#result3_1').show(500)
        $('#result3_2').show(500)
      } else if (amount === 2) {
        $('#result2').show(500)
        $('#result2_1').show(500)
      } else if (amount === 1) {
        $('#result1').show(500)
        $('#result1_1').show(500)
      } else if (amount === 0) {
        $('#result0').show(500)
        $('#result0_1').show(500)
      }
    }
  })

  $('.animal').on('click', function () {
    $('#mink_info1').show(4000)
    $('#mink_info2').show(1200)
    $('#mink_info3').show(1300)

    let selection = $('[name=animal]:checked').val()

    if (selection === '1') {
      amount = amount + 1
      answers = answers + 1
      $('.final_result').html(amount)
      $('#5_mink + label').addClass('selected_c')
      $('#right5').show(1200)
    } else if (selection === '2') {
      answers = answers + 1
      $('#5_raccoondog + label').addClass('selected')
      $('#5_mink + label').addClass('selected_c')
      $('#wrong5').show(1200)
    } else if (selection === '3') {
      answers = answers + 1
      $('#5_badger + label').addClass('selected')
      $('#5_mink + label').addClass('selected_c')
      $('#wrong5').show(1200)
    } else {
      answers = answers + 1
      $('#ruskeakarhu2 + label').addClass('selected')
      $('#5_mink + label').addClass('selected_c')
      $('#wrong5').show(1200)
    }

    $('#5_mink').prop('disabled', true)
    $('#5_raccoondog').prop('disabled', true)
    $('#5_badger').prop('disabled', true)
    $('#ruskeakarhu2').prop('disabled', true)

    if (answers === 5) {
      $('.pixabay').show(0)
      if (amount === 5) {
        $('#result5').show(500)
        $('#result5_1').show(500)
        $('#result5_2').show(500)
      } else if (amount === 4) {
        $('#result4').show(500)
        $('#result4_1').show(500)
        $('#result4_2').show(500)
      } else if (amount === 3) {
        $('#result3').show(500)
        $('#result3_1').show(500)
        $('#result3_2').show(500)
      } else if (amount === 2) {
        $('#result2').show(500)
        $('#result2_1').show(500)
      } else if (amount === 1) {
        $('#result1').show(500)
        $('#result1_1').show(500)
      } else if (amount === 0) {
        $('#result0').show(500)
        $('#result0_1').show(500)
      }
    }
  })

  $('.final_result').html(0)
})
