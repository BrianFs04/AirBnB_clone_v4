document.addEventListener('DOMContentLoaded', function () {
  const ameIds = [];
  const ameNames = [];
  $('input[type="checkbox"]').click(function () {
    const findId = ($(this).attr('data-id'));
    const findName = ($(this).attr('data-name'));
    if ($(this).prop('checked') === true) {
      ameIds.push(findId);
      ameNames.push(findName);
    } else {
      for (let i = 0; i < ameIds.length; i++) {
        if (ameIds[i] === findId) {
          ameIds.splice(i, 1);
          ameNames.splice(i, 1);
        }
      }
    }
    $('DIV.amenities H4').text(ameNames);
  });
  $.ajax({
    type: 'GET',
    url: 'http://localhost:5001/api/v1/status/',
    complete: function (e) {
      if (e.status === 200) {
        console.log('Entro en 200');
        $('DIV#api_status').addClass('available');
      } else {
        console.log('Error no entro');
        $('DIV#api_status').removeClass('available');
      }
    }
  });
});
