$('#jquery-ajax-trigger').click(() => {
  $.ajax({
    url: 'http://httpbin.org/post',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      username: 'freewind'
    }),
    success: (data) => {
      $('#data').text(JSON.stringify(data, null, 2))
    }
  })
})
