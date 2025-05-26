function loadPersonData() {
    $.ajax({
      url: 'form.json',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        const person = data[0]; // берём первого (и единственного)
        $('#person-name').text(person.name);
        $('#person-image').attr('src', person.image).attr('alt', person.name);
        $('#person-description').text(person.text);
      },
      error: function(error) {
        console.error('Ошибка при загрузке JSON:', error);
      }
    });
  }
  
  $(document).ready(loadPersonData);
  